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

  it('blocks non-agency_admin: tenant_user role', async () => {
    mockRequireRole.mockRejectedValueOnce(new Error('REDIRECT:/unauthorized'))
    await expect(AdminDashboardLayout({ children: null })).rejects.toThrow('REDIRECT:/unauthorized')
    expect(mockRequireRole).toHaveBeenCalledWith('agency_admin')
  })
})
