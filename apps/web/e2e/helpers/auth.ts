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
