import { requireAuth } from '@/lib/auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default async function DashboardPage() {
  const { userId, role, tenantId, agencyId } = await requireAuth()

  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-semibold">Dashboard</h1>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-base">Auth context</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">User ID</span>
            <span className="font-mono text-xs">{userId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Role</span>
            {role ? (
              <Badge variant="outline">{role}</Badge>
            ) : (
              <span className="text-muted-foreground italic">unassigned</span>
            )}
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tenant ID</span>
            <span className="font-mono text-xs">{tenantId ?? '—'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Agency ID</span>
            <span className="font-mono text-xs">{agencyId ?? '—'}</span>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
