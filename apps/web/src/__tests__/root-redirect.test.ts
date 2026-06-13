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
