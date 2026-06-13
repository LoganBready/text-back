import { getAuthContext } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function RootPage() {
  const ctx = await getAuthContext()
  if (!ctx || !ctx.userId) redirect('/sign-in')

  if (ctx.role === 'platform_admin') redirect('/admin')

  if (ctx.role === 'agency_admin') {
    if (!ctx.tenantId) redirect('/unauthorized')
    redirect(`/dashboard/${ctx.tenantId}/admin`)
  }

  if (ctx.role === 'tenant_user') {
    if (!ctx.tenantId) redirect('/unauthorized')
    redirect(`/dashboard/${ctx.tenantId}`)
  }

  redirect('/unauthorized')
}
