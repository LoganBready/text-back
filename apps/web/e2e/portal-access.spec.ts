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
