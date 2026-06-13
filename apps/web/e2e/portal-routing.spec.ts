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
