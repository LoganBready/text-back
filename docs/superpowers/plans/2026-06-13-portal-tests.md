# Portal Tests Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 5 explicit rejection unit tests to portal-layouts.test.ts and a full Playwright e2e suite (9 tests) covering root redirect routing and cross-role/cross-tenant access control.

**Architecture:** Unit tests extend the existing Vitest mock strategy — no new infrastructure. E2e tests use Playwright + `@clerk/testing` in `apps/web/e2e/`: a `global-setup.ts` initialises Clerk, an `auth.ts` helper signs in as any test user via `setupClerkTestingToken`, and two spec files cover routing and access control scenarios.

**Tech Stack:** Vitest (existing), Playwright (`@playwright/test`), `@clerk/testing`, Next.js 15 dev server

---

## File Map

**Modified:**
- `apps/web/src/__tests__/portal-layouts.test.ts` — add 5 rejection test cases
- `apps/web/package.json` — add devDependencies + `test:e2e` / `test:e2e:ui` scripts

**Created:**
- `apps/web/playwright.config.ts` — Playwright configuration with Next.js webServer
- `apps/web/e2e/global-setup.ts` — calls `clerkSetup()`
- `apps/web/e2e/helpers/auth.ts` — `signInAs(page, role)` helper
- `apps/web/e2e/portal-routing.spec.ts` — 4 root-redirect scenarios
- `apps/web/e2e/portal-access.spec.ts` — 5 cross-role/cross-tenant scenarios

---

## Task 1: Add rejection unit tests

**Files:**
- Modify: `apps/web/src/__tests__/portal-layouts.test.ts`

- [ ] **Step 1: Add 5 new test cases to the existing test file**

Open `apps/web/src/__tests__/portal-layouts.test.ts` and append these cases inside their respective `describe` blocks:

```ts
// Inside describe('AdminLayout (/admin)', ...) — after existing 2 tests:
  it('blocks non-platform_admin: agency_admin role', async () => {
    mockRequireRole.mockRejectedValueOnce(new Error('REDIRECT:/unauthorized'))
    await expect(AdminLayout({ children: null })).rejects.toThrow('REDIRECT:/unauthorized')
    expect(mockRequireRole).toHaveBeenCalledWith('platform_admin')
  })

  it('blocks non-platform_admin: tenant_user role', async () => {
    mockRequireRole.mockRejectedValueOnce(new Error('REDIRECT:/unauthorized'))
    await expect(AdminLayout({ children: null })).rejects.toThrow('REDIRECT:/unauthorized')
    expect(mockRequireRole).toHaveBeenCalledWith('platform_admin')
  })
```

```ts
// Inside describe('DashboardLayout (/dashboard/[id])', ...) — after existing 2 tests:
  it('blocks agency_admin from a different tenant', async () => {
    mockRequireTenantAccess.mockRejectedValueOnce(new Error('REDIRECT:/unauthorized'))
    await expect(
      DashboardLayout({ children: null, params: Promise.resolve({ id: 'e2e-other-tenant-id' }) })
    ).rejects.toThrow('REDIRECT:/unauthorized')
    expect(mockRequireTenantAccess).toHaveBeenCalledWith('e2e-other-tenant-id')
  })

  it('allows platform_admin to access any tenant (requireTenantAccess resolves)', async () => {
    mockRequireTenantAccess.mockResolvedValueOnce({
      userId: 'u1',
      role: 'platform_admin' as const,
      tenantId: null,
      agencyId: null,
    })
    await DashboardLayout({ children: null, params: Promise.resolve({ id: 'any-tenant-id' }) })
    expect(mockRequireTenantAccess).toHaveBeenCalledWith('any-tenant-id')
  })
```

```ts
// Inside describe('AdminDashboardLayout (/dashboard/[id]/admin)', ...) — after existing 2 tests:
  it('blocks non-agency_admin: tenant_user role', async () => {
    mockRequireRole.mockRejectedValueOnce(new Error('REDIRECT:/unauthorized'))
    await expect(AdminDashboardLayout({ children: null })).rejects.toThrow('REDIRECT:/unauthorized')
    expect(mockRequireRole).toHaveBeenCalledWith('agency_admin')
  })
```

- [ ] **Step 2: Run the full unit test suite**

```bash
cd apps/web && pnpm test
```

Expected: **33 passed (33)** across 3 test files. No failures.

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/__tests__/portal-layouts.test.ts
git commit -m "test: add explicit rejection scenarios to portal layout tests"
```

---

## Task 2: Install Playwright + @clerk/testing

**Files:**
- Modify: `apps/web/package.json`

- [ ] **Step 1: Install dependencies**

```bash
pnpm --filter @text-back/web add -D @playwright/test @clerk/testing dotenv
```

- [ ] **Step 2: Install Chromium browser**

```bash
pnpm --filter @text-back/web exec playwright install chromium
```

Expected output ends with: `✓ Chromium ... (playwright build ...)`

- [ ] **Step 3: Add test:e2e scripts to apps/web/package.json**

In the `"scripts"` section, add:
```json
"test:e2e": "playwright test",
"test:e2e:ui": "playwright test --ui"
```

- [ ] **Step 4: Commit**

```bash
git add apps/web/package.json
git commit -m "chore: install playwright and @clerk/testing"
```

---

## Task 3: Create Playwright config + global setup

**Files:**
- Create: `apps/web/playwright.config.ts`
- Create: `apps/web/e2e/global-setup.ts`

- [ ] **Step 1: Create playwright.config.ts**

```ts
// apps/web/playwright.config.ts
import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../../.env.local') })

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  globalSetup: './e2e/global-setup.ts',
})
```

- [ ] **Step 2: Create e2e/global-setup.ts**

```ts
// apps/web/e2e/global-setup.ts
import { clerkSetup } from '@clerk/testing/playwright'

export default async function globalSetup() {
  await clerkSetup()
}
```

- [ ] **Step 3: Verify Playwright can discover test files (none exist yet)**

```bash
cd apps/web && pnpm test:e2e --list 2>&1 | head -5
```

Expected: "No tests found" or "0 tests" — Playwright starts up without errors. If you see a startup crash, check that `CLERK_SECRET_KEY` is present in `.env.local` and starts with `sk_test_`.

- [ ] **Step 4: Commit**

```bash
git add apps/web/playwright.config.ts apps/web/e2e/global-setup.ts
git commit -m "chore: add playwright config and clerk global setup"
```

---

## Task 4: Create auth helper + set up test users

**Files:**
- Create: `apps/web/e2e/helpers/auth.ts`

### Prerequisites (one-time Clerk setup)

Before this task can produce passing tests, you need four test users in **Clerk dashboard → test mode** with the following `publicMetadata`. Create them via Clerk Dashboard → Users → Create user, then set metadata via the Clerk API or Dashboard:

| Env var to add to `.env.local` | publicMetadata to set in Clerk |
|---|---|
| `E2E_PLATFORM_ADMIN_USER_ID=user_xxx` | `{ "role": "platform_admin" }` |
| `E2E_AGENCY_ADMIN_USER_ID=user_yyy` | `{ "role": "agency_admin", "tenantId": "e2e-tenant-id" }` |
| `E2E_AGENCY_ADMIN_OTHER_USER_ID=user_zzz` | `{ "role": "agency_admin", "tenantId": "e2e-other-tenant-id" }` |
| `E2E_TENANT_USER_ID=user_www` | `{ "role": "tenant_user", "tenantId": "e2e-tenant-id" }` |

`tenantId` values (`e2e-tenant-id`, `e2e-other-tenant-id`) are arbitrary strings — they don't need DB rows since `requireTenantAccess` only checks Clerk metadata.

- [ ] **Step 1: Create the auth helper**

```ts
// apps/web/e2e/helpers/auth.ts
import { setupClerkTestingToken } from '@clerk/testing/playwright'
import type { Page } from '@playwright/test'

type Role = 'platform_admin' | 'agency_admin' | 'agency_admin_other' | 'tenant_user'

const USER_IDS: Record<Role, string | undefined> = {
  platform_admin: process.env.E2E_PLATFORM_ADMIN_USER_ID,
  agency_admin: process.env.E2E_AGENCY_ADMIN_USER_ID,
  agency_admin_other: process.env.E2E_AGENCY_ADMIN_OTHER_USER_ID,
  tenant_user: process.env.E2E_TENANT_USER_ID,
}

export async function signInAs(page: Page, role: Role): Promise<void> {
  const userId = USER_IDS[role]
  if (!userId) throw new Error(`Missing env var for role "${role}" — see Task 4 prerequisites`)
  await setupClerkTestingToken({ page, options: { userId } })
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/e2e/helpers/auth.ts
git commit -m "test: add playwright auth helper for role-based sign-in"
```

---

## Task 5: Write portal-routing.spec.ts

**Files:**
- Create: `apps/web/e2e/portal-routing.spec.ts`

- [ ] **Step 1: Create the spec file**

```ts
// apps/web/e2e/portal-routing.spec.ts
import { expect, test } from '@playwright/test'
import { signInAs } from './helpers/auth'

test.describe('Root redirect routing', () => {
  test('unauthenticated user is redirected to sign-in', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL(/sign-in/)
  })

  test('platform_admin is redirected to /admin', async ({ page }) => {
    await signInAs(page, 'platform_admin')
    await page.goto('/')
    await expect(page).toHaveURL('/admin')
    await expect(page.getByRole('heading', { name: 'Platform Admin' })).toBeVisible()
  })

  test('agency_admin is redirected to their tenant admin dashboard', async ({ page }) => {
    await signInAs(page, 'agency_admin')
    await page.goto('/')
    await expect(page).toHaveURL('/dashboard/e2e-tenant-id/admin')
    await expect(page.getByRole('heading', { name: 'Agency Admin' })).toBeVisible()
  })

  test('tenant_user is redirected to their tenant dashboard', async ({ page }) => {
    await signInAs(page, 'tenant_user')
    await page.goto('/')
    await expect(page).toHaveURL('/dashboard/e2e-tenant-id')
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
  })
})
```

- [ ] **Step 2: Run the routing spec**

```bash
cd apps/web && pnpm test:e2e portal-routing
```

Expected: **4 passed** (requires test users configured in Clerk and `.env.local` vars set per Task 4 prerequisites). If env vars are missing, tests fail with "Missing env var for role" error. If Clerk users don't have the right metadata, tests fail with unexpected redirects.

- [ ] **Step 3: Commit**

```bash
git add apps/web/e2e/portal-routing.spec.ts
git commit -m "test: add e2e portal routing tests"
```

---

## Task 6: Write portal-access.spec.ts

**Files:**
- Create: `apps/web/e2e/portal-access.spec.ts`

- [ ] **Step 1: Create the spec file**

```ts
// apps/web/e2e/portal-access.spec.ts
import { expect, test } from '@playwright/test'
import { signInAs } from './helpers/auth'

test.describe('Portal access control', () => {
  test('agency_admin cannot access /admin', async ({ page }) => {
    await signInAs(page, 'agency_admin')
    await page.goto('/admin')
    await expect(page).toHaveURL('/unauthorized')
  })

  test('tenant_user cannot access /admin', async ({ page }) => {
    await signInAs(page, 'tenant_user')
    await page.goto('/admin')
    await expect(page).toHaveURL('/unauthorized')
  })

  test('tenant_user cannot access agency admin panel', async ({ page }) => {
    await signInAs(page, 'tenant_user')
    await page.goto('/dashboard/e2e-tenant-id/admin')
    await expect(page).toHaveURL('/unauthorized')
  })

  test('agency_admin cannot access a different tenant admin panel', async ({ page }) => {
    await signInAs(page, 'agency_admin_other')
    await page.goto('/dashboard/e2e-tenant-id/admin')
    await expect(page).toHaveURL('/unauthorized')
  })

  test('platform_admin can access any tenant dashboard', async ({ page }) => {
    await signInAs(page, 'platform_admin')
    await page.goto('/dashboard/e2e-tenant-id')
    await expect(page).toHaveURL('/dashboard/e2e-tenant-id')
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
  })
})
```

- [ ] **Step 2: Run the access spec**

```bash
cd apps/web && pnpm test:e2e portal-access
```

Expected: **5 passed** (same prerequisites as Task 5).

- [ ] **Step 3: Run full e2e suite**

```bash
cd apps/web && pnpm test:e2e
```

Expected: **9 passed** across 2 spec files.

- [ ] **Step 4: Run full unit suite to confirm nothing regressed**

```bash
cd apps/web && pnpm test
```

Expected: **33 passed (33)**.

- [ ] **Step 5: Commit**

```bash
git add apps/web/e2e/portal-access.spec.ts
git commit -m "test: add e2e portal access control tests"
```
