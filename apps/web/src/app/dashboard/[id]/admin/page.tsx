export default async function AdminDashboardPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Agency Admin</h1>
      <p className="mt-2 text-muted-foreground">
        Managing tenant <code className="font-mono text-sm">{id}</code> — coming soon.
      </p>
    </main>
  )
}
