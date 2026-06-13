# Multi-Portal Design

**Date:** 2026-06-13
**Status:** Approved

## Overview

Three role-scoped portals for the text-back platform. Each portal is protected by layout-level auth guards using existing Clerk helpers. Pages inside each portal are placeholder content for now.

## Roles

| Role | Who | Portal |
|---|---|---|
| `platform_admin` | Logan (super admin) | `/admin/*` |
| `agency_admin` | Tenant owner (buys from Logan, resells to users) | `/dashboard/[id]/admin/*` |
| `tenant_user` | End user (customer of a tenant owner) | `/dashboard/[id]/*` |

The `[id]` in the URL is the `tenantId` from Clerk `publicMetadata`.

## Route Structure

```
apps/web/src/app/
  page.tsx                          ← auto-redirect based on role
  admin/
    layout.tsx                      ← requireRole('platform_admin')
    page.tsx                        ← super admin placeholder
  dashboard/
    [id]/
      layout.tsx                    ← requireTenantAccess(params.id)
      page.tsx                      ← tenant_user placeholder
      admin/
        layout.tsx                  ← requireRole('agency_admin')
        page.tsx                    ← agency_admin placeholder
```

The existing `app/dashboard/page.tsx` is removed (replaced by the dynamic `[id]` structure).

## Middleware

`/platform(.*)` is replaced with `/admin(.*)`. Final protected route matcher:

```ts
const isProtectedRoute = createRouteMatcher(['/admin(.*)', '/dashboard(.*)'])
```

## Root Redirect (app/page.tsx)

Authenticated users hitting `/` are redirected to their portal:

```
platform_admin               → /admin
agency_admin with tenantId   → /dashboard/[tenantId]/admin
tenant_user with tenantId    → /dashboard/[tenantId]
agency_admin, no tenantId    → /unauthorized
tenant_user, no tenantId     → /unauthorized
no role                      → /unauthorized
unauthenticated              → /sign-in
```

## Auth Guards (layout-level)

Protection is enforced by layouts, not pages. Each portal root layout calls an existing auth helper:

| Layout | Guard | Effect |
|---|---|---|
| `admin/layout.tsx` | `requireRole('platform_admin')` | Blocks everyone except super admin |
| `dashboard/[id]/layout.tsx` | `requireTenantAccess(params.id)` | Blocks users whose `tenantId` ≠ URL `[id]`, except `platform_admin` |
| `dashboard/[id]/admin/layout.tsx` | `requireRole('agency_admin')` | Blocks non-agency-admins; tenant scoping already enforced by parent layout |

`agency_admin` users can only access their own tenant's admin portal — the parent `requireTenantAccess` check blocks cross-tenant access before the role check runs.

## Testing

Two new test files, same mocking pattern as the existing `__tests__/auth.test.ts`:

### `__tests__/root-redirect.test.ts`

| Scenario | Expected |
|---|---|
| Unauthenticated | Redirect to `/sign-in` |
| `platform_admin` | Redirect to `/admin` |
| `agency_admin` with `tenantId` | Redirect to `/dashboard/[tenantId]/admin` |
| `tenant_user` with `tenantId` | Redirect to `/dashboard/[tenantId]` |
| Authenticated, no role | Redirect to `/unauthorized` |
| `agency_admin` with no `tenantId` | Redirect to `/unauthorized` |
| `tenant_user` with no `tenantId` | Redirect to `/unauthorized` |

### `__tests__/portal-layouts.test.ts`

| Scenario | Expected |
|---|---|
| `platform_admin` accesses `/admin` | Allowed |
| `agency_admin` accesses `/admin` | Redirect to `/unauthorized` |
| `tenant_user` accesses `/admin` | Redirect to `/unauthorized` |
| `agency_admin` accesses own `/dashboard/[id]` | Allowed |
| `agency_admin` accesses other tenant's `/dashboard/[id]` | Redirect to `/unauthorized` |
| `platform_admin` accesses any `/dashboard/[id]` | Allowed |
| `agency_admin` accesses own `/dashboard/[id]/admin` | Allowed |
| `tenant_user` accesses `/dashboard/[id]/admin` | Redirect to `/unauthorized` |
| Unauthenticated accesses any protected route | Redirect to `/sign-in` |

## What Is Not in Scope

- Actual portal content (all pages are placeholder)
- Agency DB model (deferred per CLAUDE.md)
- User invitation / onboarding flows
