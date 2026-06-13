import type { ReactNode } from 'react'
import { requireTenantAccess } from '@/lib/auth'

export default async function DashboardLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  await requireTenantAccess(id)
  return <>{children}</>
}
