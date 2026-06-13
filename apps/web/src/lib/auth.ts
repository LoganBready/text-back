import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import type { ClerkPublicMetadata, UserRole, TenantId } from '@text-back/types'

export async function getAuthContext() {
  const { userId } = await auth()
  if (!userId) return null

  const user = await currentUser()
  const meta = (user?.publicMetadata ?? {}) as Partial<ClerkPublicMetadata>

  return {
    userId,
    role: meta.role ?? null,
    tenantId: meta.tenantId ?? null,
    agencyId: meta.agencyId ?? null,
  }
}

export async function requireAuth() {
  const ctx = await getAuthContext()
  if (!ctx?.userId) redirect('/sign-in')
  return ctx
}

export async function requireRole(...roles: UserRole[]) {
  const ctx = await requireAuth()
  if (!ctx.role || !roles.includes(ctx.role)) redirect('/unauthorized')
  return ctx
}

export async function requireTenantAccess(tenantId: TenantId) {
  const ctx = await requireAuth()
  const isPlatformAdmin = ctx.role === 'platform_admin'
  const ownsTenant = ctx.tenantId === tenantId
  if (!isPlatformAdmin && !ownsTenant) redirect('/unauthorized')
  return ctx
}

export function isPlatformAdmin(role: UserRole | null) {
  return role === 'platform_admin'
}
