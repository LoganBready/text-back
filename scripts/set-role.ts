#!/usr/bin/env tsx
import * as dotenv from 'dotenv'
dotenv.config()

const [userId, role, tenantId] = process.argv.slice(2)

if (!userId || !role) {
  console.error('Usage: pnpm -w run set-role <userId> <role> [tenantId]')
  process.exit(1)
}

const validRoles = ['platform_admin', 'agency_admin', 'tenant_user']
if (!validRoles.includes(role)) {
  console.error(`Role must be one of: ${validRoles.join(', ')}`)
  process.exit(1)
}

async function main() {
  const metadata = { role, ...(tenantId ? { tenantId } : {}) }

  const res = await fetch(`https://api.clerk.com/v1/users/${userId}/metadata`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ public_metadata: metadata }),
  })

  if (!res.ok) {
    const err = await res.json()
    console.error('Failed:', err)
    process.exit(1)
  }

  console.log(`✓ Set ${userId} → role: ${role}${tenantId ? `, tenantId: ${tenantId}` : ''}`)
}

main()
