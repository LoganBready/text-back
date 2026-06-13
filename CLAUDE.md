# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

```bash
# Dev (all apps in parallel via Turborepo)
pnpm dev

# Dev individual apps
pnpm --filter @text-back/web dev      # Next.js on :3000
pnpm --filter @text-back/api dev      # Hono API on :3002

# Typecheck all
pnpm typecheck

# Database
pnpm db:generate      # regenerate Prisma client after schema changes
pnpm db:migrate       # create + apply migration (prompts for name)
pnpm db:push          # push schema without migration (dev only)
pnpm db:studio        # open Prisma Studio at localhost:5555
```

## Architecture

pnpm monorepo with Turborepo. Two apps, two shared packages:

```
apps/api       — Hono webhook + REST server (Node.js, port 3002)
apps/web       — Next.js 15 App Router dashboard (port 3000)
packages/db    — Prisma schema + singleton client (shared by both apps)
packages/types — Shared TypeScript types
```

### Data flow

Twilio hits `apps/api` webhooks → API writes to Postgres via `@text-back/db` → Next.js dashboard reads from the same DB (server components) or via API calls.

### Multi-tenant design

Every entity is scoped to a `tenantId`. Webhook routing works by looking up the Twilio `To` number in `phone_numbers` to resolve the tenant. The `agencies` table is deliberately deferred — the current schema is designed to add it as an additive layer later without rework.

### Database

Neon (serverless Postgres). Prisma schema lives at `packages/db/prisma/schema.prisma`. The singleton client is at `packages/db/src/client.ts` — always import `prisma` from `@text-back/db`, never instantiate `PrismaClient` directly.

Prisma scripts use `dotenv-cli` to load `../../.env` (root) because pnpm runs them from the package directory.

### Auth

Clerk (`@clerk/nextjs`). Middleware at `apps/web/src/middleware.ts` protects `/dashboard/*`. Public routes: `/`, `/sign-in`, `/sign-up`. Server-side: `await auth()`. Client-side: `useUser()` hook.

### Environment

Two env files at repo root:
- `.env` — loaded by Prisma (via dotenv-cli) and the Hono API (via process.env)
- `.env.local` — loaded by Next.js (auto) and pulled from Vercel via `vercel env pull .env.local`

Key vars: `DATABASE_URL`, `CLERK_SECRET_KEY`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `ANTHROPIC_API_KEY`, `PORT` (default 3002 for API).

### Adding shadcn components

Run from `apps/web`:
```bash
npx shadcn@latest add <component>
```
