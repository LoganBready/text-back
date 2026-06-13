# Multi-Portal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build three role-scoped portals (`/admin`, `/dashboard/[id]`, `/dashboard/[id]/admin`) with layout-level auth guards, a root redirect, and full test coverage.

**Architecture:** Each portal root layout calls an existing auth helper (`requireRole` or `requireTenantAccess`) once — all child pages inherit protection automatically. The root `/` page reads the user's role from Clerk metadata and redirects them to their portal. No new auth logic is needed; everything builds on existing helpers in `src/lib/auth.ts`.

**Tech Stack:** Next.js 15 App Router, Clerk (`@clerk/nextjs`), Vitest, TypeScript

---

## File Map

**Modified:**
- `apps/web/src/app/page.tsx` — replace static placeholder with role-based redirect
- `apps/web/src/middleware.ts` — swap `/platform(.*)` for `/admin(.*)`
- `apps/web/vitest.config.ts` — add esbuild JSX support so layout `.tsx` files can be imported in tests

**Deleted:**
- `apps/web/src/app/dashboard/page.tsx` — superseded by dynamic `[id]` route

**Created:**
- `apps/web/src/app/admin/layout.tsx` — `requireRole('platform_admin')`
- `apps/web/src/app/admin/page.tsx` — super admin placeholder
- `apps/web/src/app/dashboard/[id]/layout.tsx` — `requireTenantAccess(params.id)`
- `apps/web/src/app/dashboard/[id]/page.tsx` — tenant user placeholder
- `apps/web/src/app/dashboard/[id]/admin/layout.tsx` — `requireRole('agency_admin')`
- `apps/web/src/app/dashboard/[id]/admin/page.tsx` — agency admin placeholder
- `apps/web/src/__tests__/root-redirect.test.ts`
- `apps/web/src/__tests__/portal-layouts.test.ts`

---

## Task 1: Write root redirect tests

**Files:**
- Create: `apps/web/src/__tests__/root-redirect.test.ts`

- [ ] **Step 1: Create the test file**

```ts
// apps/web/src/__tests__/root-redirect.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/auth', () => ({
  getAuthContext: vi.fn(),
}))

vi.mock('next/navigation', () => ({
  redirect: vi.fn((url: string) => {
    throw new Error(`REDIRECT:${url}`)
  }),
}))

import { getAuthContext } from '@/lib/auth'
import RootPage from '@/app/page'

const mockGetAuthContext = vi.mocked(getAuthContext)

beforeEach(() => {
  vi.clearAllMocks()
})

describe('RootPage redirect', () => {
  it('redirects unauthenticated users to /sign-in', async () => {
    mockGetAuthContext.mockResolvedValue(null)
    await expect(RootPage()).rejects.toThrow('REDIRECT:/sign-in')
  })

  it('redirects platform_admin to /admin', async () => {
    mockGetAuthContext.mockResolvedValue({
      userId: 'u1',
      role: 'platform_admin',
      tenantId: null,
      agencyId: null,
    })
    await expect(RootPage()).rejects.toThrow('REDIRECT:/admin')
  })

  it('redirects agency_admin with tenantId to /dashboard/[tenantId]/admin', async () => {
    mockGetAuthContext.mockResolvedValue({
      userId: 'u1',
      role: 'agency_admin',
      tenantId: 'tenant_abc',
      agencyId: null,
    })
    await expect(RootPage()).rejects.toThrow('REDIRECT:/dashboard/tenant_abc/admin')
  })

  it('redirects tenant_user with tenantId to /dashboard/[tenantId]', async () => {
    mockGetAuthContext.mockResolvedValue({
      userId: 'u1',
      role: 'tenant_user',
      tenantId: 'tenant_abc',
      agencyId: null,
    })
    await expect(RootPage()).rejects.toThrow('REDIRECT:/dashboard/tenant_abc')
  })

  it('redirects agency_admin with no tenantId to /unauthorized', async () => {
    mockGetAuthContext.mockResolvedValue({
      userId: 'u1',
      role: 'agency_admin',
      tenantId: null,
      agencyId: null,
    })
    await expect(RootPage()).rejects.toThrow('REDIRECT:/unauthorized')
  })

  it('redirects tenant_user with no tenantId to /unauthorized', async () => {
    mockGetAuthContext.mockResolvedValue({
      userId: 'u1',
      role: 'tenant_user',
      tenantId: null,
      agencyId: null,
    })
    await expect(RootPage()).rejects.toThrow('REDIRECT:/unauthorized')
  })

  it('redirects authenticated user with no role to /unauthorized', async () => {
    mockGetAuthContext.mockResolvedValue({
      userId: 'u1',
      role: null,
      tenantId: null,
      agencyId: null,
    })
    await expect(RootPage()).rejects.toThrow('REDIRECT:/unauthorized')
  })
})
```

- [ ] **Step 2: Run tests and confirm they fail**

```bash
cd apps/web && pnpm test -- root-redirect
```

Expected: All 7 tests FAIL. The current `page.tsx` is a static component with no redirects.

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/__tests__/root-redirect.test.ts
git commit -m "test: add failing root redirect tests"
```

---

## Task 2: Implement root redirect

**Files:**
- Modify: `apps/web/src/app/page.tsx`

- [ ] **Step 1: Replace page.tsx with redirect logic**

```tsx
// apps/web/src/app/page.tsx
import { getAuthContext } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function RootPage() {
  const ctx = await getAuthContext()
  if (!ctx || !ctx.userId) redirect('/sign-in')

  if (ctx.role === 'platform_admin') redirect('/admin')

  if (ctx.role === 'agency_admin') {
    if (!ctx.tenantId) redirect('/unauthorized')
    redirect(`/dashboard/${ctx.tenantId}/admin`)
  }

  if (ctx.role === 'tenant_user') {
    if (!ctx.tenantId) redirect('/unauthorized')
    redirect(`/dashboard/${ctx.tenantId}`)
  }

  redirect('/unauthorized')
}
```

- [ ] **Step 2: Run root redirect tests and confirm they pass**

```bash
cd apps/web && pnpm test -- root-redirect
```

Expected: All 7 tests PASS.

- [ ] **Step 3: Run full test suite to confirm nothing broke**

```bash
cd apps/web && pnpm test
```

Expected: All tests pass (the existing `auth.test.ts` still passes).

- [ ] **Step 4: Commit**

```bash
git add apps/web/src/app/page.tsx
git commit -m "feat: add role-based root redirect"
```

---

## Task 3: Update middleware

**Files:**
- Modify: `apps/web/src/middleware.ts`

- [ ] **Step 1: Replace the protected route matcher**

```ts
// apps/web/src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/admin(.*)', '/dashboard(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
```

- [ ] **Step 2: Run full test suite**

```bash
cd apps/web && pnpm test
```

Expected: All tests pass.

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/middleware.ts
git commit -m "feat: update middleware to protect /admin and /dashboard routes"
```

---

## Task 4: Configure Vitest JSX support + write portal layout tests

Layout files are `.tsx` files that render JSX. Vitest uses esbuild for transformation but defaults to the classic JSX runtime (`React.createElement`). We need the automatic runtime so `react/jsx-runtime` is used instead of requiring React in scope.

**Files:**
- Modify: `apps/web/vitest.config.ts`
- Create: `apps/web/src/__tests__/portal-layouts.test.ts`

- [ ] **Step 1: Update vitest.config.ts to add esbuild JSX support**

```ts
// apps/web/vitest.config.ts
import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'node',
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      exclude: ['src/app/**', 'src/components/ui/**'],
    },
  },
})
```

- [ ] **Step 2: Run existing tests to confirm the JSX config change doesn't break anything**

```bash
cd apps/web && pnpm test
```

Expected: All existing tests still pass.

- [ ] **Step 3: Create the portal layout test file**

```ts
// apps/web/src/__tests__/portal-layouts.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/auth', () => ({
  requireRole: vi.fn(),
  requireTenantAccess: vi.fn(),
}))

import { requireRole, requireTenantAccess } from '@/lib/auth'
import AdminLayout from '@/app/admin/layout'
import DashboardLayout from '@/app/dashboard/[id]/layout'
import AdminDashboardLayout from '@/app/dashboard/[id]/admin/layout'

const mockRequireRole = vi.mocked(requireRole)
const mockRequireTenantAccess = vi.mocked(requireTenantAccess)

const platformCtx = { userId: 'u1', role: 'platform_admin' as const, tenantId: null, agencyId: null }
const agencyCtx = { userId: 'u1', role: 'agency_admin' as const, tenantId: 'tenant_abc', agencyId: null }

beforeEach(() => {
  vi.clearAllMocks()
  mockRequireRole.mockResolvedValue(platformCtx)
  mockRequireTenantAccess.mockResolvedValue(agencyCtx)
})

// ---------------------------------------------------------------------------
// /admin layout
// ---------------------------------------------------------------------------

describe('AdminLayout (/admin)', () => {
  it('calls requireRole with platform_admin', async () => {
    await AdminLayout({ children: null })
    expect(mockRequireRole).toHaveBeenCalledWith('platform_admin')
  })

  it('propagates redirect when role check fails', async () => {
    mockRequireRole.mockRejectedValueOnce(new Error('REDIRECT:/unauthorized'))
    await expect(AdminLayout({ children: null })).rejects.toThrow('REDIRECT:/unauthorized')
  })
})

// ---------------------------------------------------------------------------
// /dashboard/[id] layout
// ---------------------------------------------------------------------------

describe('DashboardLayout (/dashboard/[id])', () => {
  it('calls requireTenantAccess with the id from params', async () => {
    await DashboardLayout({ children: null, params: Promise.resolve({ id: 'tenant_abc' }) })
    expect(mockRequireTenantAccess).toHaveBeenCalledWith('tenant_abc')
  })

  it('propagates redirect when tenant check fails', async () => {
    mockRequireTenantAccess.mockRejectedValueOnce(new Error('REDIRECT:/unauthorized'))
    await expect(
      DashboardLayout({ children: null, params: Promise.resolve({ id: 'tenant_xyz' }) })
    ).rejects.toThrow('REDIRECT:/unauthorized')
  })
})

// ---------------------------------------------------------------------------
// /dashboard/[id]/admin layout
// ---------------------------------------------------------------------------

describe('AdminDashboardLayout (/dashboard/[id]/admin)', () => {
  it('calls requireRole with agency_admin', async () => {
    await AdminDashboardLayout({ children: null })
    expect(mockRequireRole).toHaveBeenCalledWith('agency_admin')
  })

  it('propagates redirect when role check fails', async () => {
    mockRequireRole.mockRejectedValueOnce(new Error('REDIRECT:/unauthorized'))
    await expect(AdminDashboardLayout({ children: null })).rejects.toThrow('REDIRECT:/unauthorized')
  })
})
```

- [ ] **Step 4: Run portal layout tests and confirm they fail (layout files don't exist yet)**

```bash
cd apps/web && pnpm test -- portal-layouts
```

Expected: FAIL — "Cannot find module '@/app/admin/layout'" (or similar import errors).

- [ ] **Step 5: Commit**

```bash
git add apps/web/vitest.config.ts apps/web/src/__tests__/portal-layouts.test.ts
git commit -m "test: add failing portal layout tests + vitest JSX config"
```

---

## Task 5: Create /admin portal

**Files:**
- Create: `apps/web/src/app/admin/layout.tsx`
- Create: `apps/web/src/app/admin/page.tsx`

- [ ] **Step 1: Create the admin layout**

```tsx
// apps/web/src/app/admin/layout.tsx
import type { ReactNode } from 'react'
import { requireRole } from '@/lib/auth'

export default async function AdminLayout({ children }: { children: ReactNode }) {
  await requireRole('platform_admin')
  return <>{children}</>
}
```

- [ ] **Step 2: Create the admin placeholder page**

```tsx
// apps/web/src/app/admin/page.tsx
export default function AdminPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Platform Admin</h1>
      <p className="mt-2 text-muted-foreground">Super admin portal — coming soon.</p>
    </main>
  )
}
```

- [ ] **Step 3: Run portal layout tests — AdminLayout tests should now pass**

```bash
cd apps/web && pnpm test -- portal-layouts
```

Expected: The 2 `AdminLayout` tests PASS. The `DashboardLayout` and `AdminDashboardLayout` tests still FAIL with import errors.

- [ ] **Step 4: Commit**

```bash
git add apps/web/src/app/admin/layout.tsx apps/web/src/app/admin/page.tsx
git commit -m "feat: add /admin portal with platform_admin guard"
```

---

## Task 6: Create /dashboard/[id] portal

**Files:**
- Delete: `apps/web/src/app/dashboard/page.tsx`
- Create: `apps/web/src/app/dashboard/[id]/layout.tsx`
- Create: `apps/web/src/app/dashboard/[id]/page.tsx`

- [ ] **Step 1: Delete the old generic dashboard page**

```bash
rm apps/web/src/app/dashboard/page.tsx
```

- [ ] **Step 2: Create the dashboard layout**

```tsx
// apps/web/src/app/dashboard/[id]/layout.tsx
import type { ReactNode } from 'react'
import { requireTenantAccess } from '@/lib/auth'

export default async function DashboardLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  await requireTenantAccess(id)
  return <>{children}</>
}
```

- [ ] **Step 3: Create the tenant user placeholder page**

```tsx
// apps/web/src/app/dashboard/[id]/page.tsx
export default async function DashboardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Tenant <code className="font-mono text-sm">{id}</code> — coming soon.
      </p>
    </main>
  )
}
```

- [ ] **Step 4: Run portal layout tests — DashboardLayout tests should now pass**

```bash
cd apps/web && pnpm test -- portal-layouts
```

Expected: All `AdminLayout` and `DashboardLayout` tests PASS. The 2 `AdminDashboardLayout` tests still FAIL.

- [ ] **Step 5: Commit**

```bash
git add apps/web/src/app/dashboard/
git commit -m "feat: add /dashboard/[id] portal with tenant access guard"
```

---

## Task 7: Create /dashboard/[id]/admin portal + run full suite

**Files:**
- Create: `apps/web/src/app/dashboard/[id]/admin/layout.tsx`
- Create: `apps/web/src/app/dashboard/[id]/admin/page.tsx`

- [ ] **Step 1: Create the agency admin layout**

```tsx
// apps/web/src/app/dashboard/[id]/admin/layout.tsx
import type { ReactNode } from 'react'
import { requireRole } from '@/lib/auth'

export default async function AdminDashboardLayout({ children }: { children: ReactNode }) {
  await requireRole('agency_admin')
  return <>{children}</>
}
```

- [ ] **Step 2: Create the agency admin placeholder page**

```tsx
// apps/web/src/app/dashboard/[id]/admin/page.tsx
export default async function AdminDashboardPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Agency Admin</h1>
      <p className="mt-2 text-muted-foreground">
        Managing tenant <code className="font-mono text-sm">{id}</code> — coming soon.
      </p>
    </main>
  )
}
```

- [ ] **Step 3: Run all portal layout tests — all should now pass**

```bash
cd apps/web && pnpm test -- portal-layouts
```

Expected: All 6 portal layout tests PASS.

- [ ] **Step 4: Run the full test suite**

```bash
cd apps/web && pnpm test
```

Expected: All tests pass — `auth.test.ts`, `root-redirect.test.ts`, `portal-layouts.test.ts`.

- [ ] **Step 5: Run typecheck**

```bash
cd apps/web && pnpm typecheck
```

Expected: No TypeScript errors.

- [ ] **Step 6: Commit**

```bash
git add apps/web/src/app/dashboard/[id]/admin/
git commit -m "feat: add /dashboard/[id]/admin portal with agency_admin guard"
```
