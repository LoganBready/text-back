import type { ReactNode } from 'react'
import { requireRole } from '@/lib/auth'

// Tenant ownership is enforced by the parent /dashboard/[id]/layout.tsx
// (requireTenantAccess). This layout only needs the role check.
// platform_admin is intentionally blocked here — they manage from /admin,
// not from per-tenant portals.
export default async function AdminDashboardLayout({ children }: { children: ReactNode }) {
  await requireRole('agency_admin')
  return <>{children}</>
}
