export default async function DashboardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Tenant <code className="font-mono text-sm">{id}</code> — coming soon.
      </p>
    </main>
  )
}
