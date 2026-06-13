import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@clerk/nextjs/server', () => ({
  auth: vi.fn(),
  currentUser: vi.fn(),
}))

vi.mock('next/navigation', () => ({
  redirect: vi.fn((url: string) => {
    throw new Error(`REDIRECT:${url}`)
  }),
}))

import { auth, currentUser } from '@clerk/nextjs/server'
import {
  getAuthContext,
  requireAuth,
  requireRole,
  requireTenantAccess,
  isPlatformAdmin,
} from '@/lib/auth'

const mockAuth = vi.mocked(auth)
const mockCurrentUser = vi.mocked(currentUser)

beforeEach(() => {
  vi.clearAllMocks()
})

// ---------------------------------------------------------------------------
// isPlatformAdmin
// ---------------------------------------------------------------------------

describe('isPlatformAdmin', () => {
  it('returns true for platform_admin', () => {
    expect(isPlatformAdmin('platform_admin')).toBe(true)
  })

  it('returns false for other roles', () => {
    expect(isPlatformAdmin('agency_admin')).toBe(false)
    expect(isPlatformAdmin('tenant_user')).toBe(false)
    expect(isPlatformAdmin(null)).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// getAuthContext
// ---------------------------------------------------------------------------

describe('getAuthContext', () => {
  it('returns null when unauthenticated', async () => {
    mockAuth.mockResolvedValue({ userId: null } as never)
    expect(await getAuthContext()).toBeNull()
  })

  it('returns full context when authenticated with metadata', async () => {
    mockAuth.mockResolvedValue({ userId: 'user_123' } as never)
    mockCurrentUser.mockResolvedValue({
      publicMetadata: { role: 'platform_admin', tenantId: 'tenant_abc' },
    } as never)

    const ctx = await getAuthContext()
    expect(ctx).toEqual({
      userId: 'user_123',
      role: 'platform_admin',
      tenantId: 'tenant_abc',
      agencyId: null,
    })
  })

  it('returns null role when user has no metadata', async () => {
    mockAuth.mockResolvedValue({ userId: 'user_123' } as never)
    mockCurrentUser.mockResolvedValue({ publicMetadata: {} } as never)

    const ctx = await getAuthContext()
    expect(ctx?.role).toBeNull()
    expect(ctx?.tenantId).toBeNull()
  })
})

// ---------------------------------------------------------------------------
// requireAuth
// ---------------------------------------------------------------------------

describe('requireAuth', () => {
  it('redirects to sign-in when unauthenticated', async () => {
    mockAuth.mockResolvedValue({ userId: null } as never)
    await expect(requireAuth()).rejects.toThrow('REDIRECT:/sign-in')
  })

  it('returns context when authenticated', async () => {
    mockAuth.mockResolvedValue({ userId: 'user_123' } as never)
    mockCurrentUser.mockResolvedValue({
      publicMetadata: { role: 'tenant_user', tenantId: 'tenant_abc' },
    } as never)

    const ctx = await requireAuth()
    expect(ctx.userId).toBe('user_123')
  })
})

// ---------------------------------------------------------------------------
// requireRole
// ---------------------------------------------------------------------------

describe('requireRole', () => {
  it('redirects to unauthorized when role does not match', async () => {
    mockAuth.mockResolvedValue({ userId: 'user_123' } as never)
    mockCurrentUser.mockResolvedValue({
      publicMetadata: { role: 'tenant_user' },
    } as never)

    await expect(requireRole('platform_admin')).rejects.toThrow('REDIRECT:/unauthorized')
  })

  it('redirects when user has no role', async () => {
    mockAuth.mockResolvedValue({ userId: 'user_123' } as never)
    mockCurrentUser.mockResolvedValue({ publicMetadata: {} } as never)

    await expect(requireRole('platform_admin')).rejects.toThrow('REDIRECT:/unauthorized')
  })

  it('passes when role matches', async () => {
    mockAuth.mockResolvedValue({ userId: 'user_123' } as never)
    mockCurrentUser.mockResolvedValue({
      publicMetadata: { role: 'platform_admin' },
    } as never)

    const ctx = await requireRole('platform_admin')
    expect(ctx.role).toBe('platform_admin')
  })

  it('passes when any of multiple allowed roles match', async () => {
    mockAuth.mockResolvedValue({ userId: 'user_123' } as never)
    mockCurrentUser.mockResolvedValue({
      publicMetadata: { role: 'agency_admin' },
    } as never)

    const ctx = await requireRole('platform_admin', 'agency_admin')
    expect(ctx.role).toBe('agency_admin')
  })
})

// ---------------------------------------------------------------------------
// requireTenantAccess
// ---------------------------------------------------------------------------

describe('requireTenantAccess', () => {
  it('allows platform_admin access to any tenant', async () => {
    mockAuth.mockResolvedValue({ userId: 'user_123' } as never)
    mockCurrentUser.mockResolvedValue({
      publicMetadata: { role: 'platform_admin' },
    } as never)

    const ctx = await requireTenantAccess('any_tenant_id')
    expect(ctx.role).toBe('platform_admin')
  })

  it('allows tenant_user access to their own tenant', async () => {
    mockAuth.mockResolvedValue({ userId: 'user_123' } as never)
    mockCurrentUser.mockResolvedValue({
      publicMetadata: { role: 'tenant_user', tenantId: 'tenant_abc' },
    } as never)

    const ctx = await requireTenantAccess('tenant_abc')
    expect(ctx.tenantId).toBe('tenant_abc')
  })

  it('blocks tenant_user from accessing another tenant', async () => {
    mockAuth.mockResolvedValue({ userId: 'user_123' } as never)
    mockCurrentUser.mockResolvedValue({
      publicMetadata: { role: 'tenant_user', tenantId: 'tenant_abc' },
    } as never)

    await expect(requireTenantAccess('tenant_xyz')).rejects.toThrow('REDIRECT:/unauthorized')
  })

  it('blocks user with no tenant assignment', async () => {
    mockAuth.mockResolvedValue({ userId: 'user_123' } as never)
    mockCurrentUser.mockResolvedValue({
      publicMetadata: { role: 'tenant_user' },
    } as never)

    await expect(requireTenantAccess('tenant_abc')).rejects.toThrow('REDIRECT:/unauthorized')
  })
})
