# Portal Tests Design

**Date:** 2026-06-13
**Status:** Approved

## Overview

Two additions to the existing test suite for the multi-portal system:

1. **Unit test additions** — explicit rejection scenarios in `portal-layouts.test.ts`
2. **Playwright e2e tests** — full browser tests using `@clerk/testing` for auth

The existing unit tests verify each layout calls the right auth helper. The additions make rejection scenarios explicit and add an end-to-end layer that exercises the full Next.js → Clerk → middleware → layout stack.

---

## Part 1: Unit Test Additions

**File:** `apps/web/src/__tests__/portal-layouts.test.ts` (add to existing file)

Five new test cases documenting rejection behavior:

| Test | Layout | Setup | Expected |
|---|---|---|---|
| agency_admin blocked from /admin | AdminLayout | requireRole throws REDIRECT:/unauthorized | rejects |
| tenant_user blocked from /admin | AdminLayout | requireRole throws REDIRECT:/unauthorized | rejects |
| tenant_user blocked from /dashboard/[id]/admin | AdminDashboardLayout | requireRole throws REDIRECT:/unauthorized | rejects |
| agency_admin blocked from wrong tenant's dashboard | DashboardLayout | requireTenantAccess throws REDIRECT:/unauthorized | rejects |
| platform_admin can access any tenant's dashboard | DashboardLayout | requireTenantAccess resolves successfully | passes |

These are explicit, named rejection tests. The underlying behavior is also tested in `auth.test.ts`; these tests make the intent clear at the layout level and guard against accidental guard removal.

---

## Part 2: Playwright E2E Tests

### Setup

**Framework:** Playwright (`@playwright/test`) + Clerk testing integration (`@clerk/testing`)

**Location:** `apps/web` — tests in `apps/web/e2e/`

**Auth strategy:** `@clerk/testing` issues short-lived testing tokens by calling Clerk's backend API directly. No UI login, no passwords. Requires `CLERK_SECRET_KEY` (already in `.env`) to be a test mode key.

### File Structure

```
apps/web/
  playwright.config.ts
  e2e/
    global-setup.ts          ← calls clerkSetup() from @clerk/testing/playwright
    helpers/
      auth.ts                ← signInAs(page, userId) helper using setupClerkTestingToken
    portal-routing.spec.ts   ← root redirect scenarios (4 tests)
    portal-access.spec.ts    ← cross-role/cross-tenant rejection scenarios (5 tests)
```

### Test Users

Three users created once in the **Clerk dashboard (test mode)** with the following `publicMetadata`. Their user IDs go in `.env.local`:

| Env var | Role | tenantId |
|---|---|---|
| `E2E_PLATFORM_ADMIN_USER_ID` | `platform_admin` | — |
| `E2E_AGENCY_ADMIN_USER_ID` | `agency_admin` | `e2e-tenant-id` |
| `E2E_AGENCY_ADMIN_OTHER_USER_ID` | `agency_admin` | `e2e-other-tenant-id` |
| `E2E_TENANT_USER_ID` | `tenant_user` | `e2e-tenant-id` |

`requireTenantAccess` checks only Clerk metadata, not the DB — these tenant IDs do not need a corresponding row in Postgres.

### Test Scenarios

**`portal-routing.spec.ts`** — root redirect behavior:

| Scenario | Starting URL | Expected destination |
|---|---|---|
| Unauthenticated | `/` | Clerk sign-in page (URL contains `/sign-in`) |
| platform_admin | `/` | `/admin` |
| agency_admin | `/` | `/dashboard/e2e-tenant-id/admin` |
| tenant_user | `/` | `/dashboard/e2e-tenant-id` |

**`portal-access.spec.ts`** — cross-role and cross-tenant rejection:

| Scenario | User | URL attempted | Expected destination |
|---|---|---|---|
| Wrong role → admin | agency_admin | `/admin` | `/unauthorized` |
| Wrong role → admin | tenant_user | `/admin` | `/unauthorized` |
| Wrong role → admin panel | tenant_user | `/dashboard/e2e-tenant-id/admin` | `/unauthorized` |
| Cross-tenant admin | agency_admin (other-tenant) | `/dashboard/e2e-tenant-id/admin` | `/unauthorized` |
| Super admin cross-tenant | platform_admin | `/dashboard/e2e-tenant-id` | page loads (heading visible) |

### Playwright Config

```ts
// apps/web/playwright.config.ts
import { defineConfig, devices } from '@playwright/test'

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
  },
  globalSetup: './e2e/global-setup.ts',
})
```

### Dependencies to Install

In `apps/web`:
```bash
pnpm add -D @playwright/test @clerk/testing
npx playwright install chromium
```

Add to `apps/web/package.json` scripts:
```json
"test:e2e": "playwright test",
"test:e2e:ui": "playwright test --ui"
```

### Environment Variables

Add to `.env.local` (not committed):
```
E2E_PLATFORM_ADMIN_USER_ID=user_xxx
E2E_AGENCY_ADMIN_USER_ID=user_yyy
E2E_AGENCY_ADMIN_OTHER_USER_ID=user_zzz
E2E_TENANT_USER_ID=user_www
```

---

## What Is Not in Scope

- Testing actual portal page content (pages are placeholders)
- CI integration (Playwright can be added to CI later)
- Multi-browser testing (Chromium only for now)
- Visual regression tests
