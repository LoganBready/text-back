import { setupClerkTestingToken } from '@clerk/testing/playwright'
import type { Page } from '@playwright/test'

type Role = 'platform_admin' | 'agency_admin' | 'agency_admin_other' | 'tenant_user'

// Required in .env.local (see docs/superpowers/specs/2026-06-13-portal-tests-design.md):
// E2E_PLATFORM_ADMIN_USER_ID  — Clerk user with publicMetadata: { role: 'platform_admin' }
// E2E_AGENCY_ADMIN_USER_ID    — Clerk user with publicMetadata: { role: 'agency_admin', tenantId: 'e2e-tenant-id' }
// E2E_AGENCY_ADMIN_OTHER_USER_ID — Clerk user with publicMetadata: { role: 'agency_admin', tenantId: 'e2e-other-tenant-id' }
// E2E_TENANT_USER_ID          — Clerk user with publicMetadata: { role: 'tenant_user', tenantId: 'e2e-tenant-id' }
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
