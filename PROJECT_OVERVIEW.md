# AI Missed-Call Text-Back Service — Project Overview

## What this is

A SaaS product that automatically texts back callers who don't get through to a
business (missed/unanswered call), using AI to carry on a conversation, answer
questions, and drive the lead toward booking — instead of just sending a static
"sorry we missed you" message.

## Business model — two offers

### Offer 1: Direct to local businesses
Sell the service directly to local service businesses (contractors, clinics,
salons, etc.). Recurring monthly fee (~$197–$397/mo), fully managed by us.

### Offer 2: White-label platform for agencies
Other "AI agency" owners pay to run this system under their own brand and resell
it to their own local-business clients. They get:
- A branded dashboard (their logo, name, possibly custom domain)
- Ability to onboard and manage their own end-clients
- Set their own pricing to their clients

We charge agencies a platform fee + usage-based overages (with markup baked in).

## Infrastructure model (decided)

- **Twilio**: Pattern A — we (platform owner) hold the master Twilio account.
  Each agency gets a Twilio **subaccount** (created via API) for billing/usage
  segregation. Agencies do NOT need to bring their own Twilio account.
- **AI (Anthropic)**: Same pattern — we hold the master API key/account. Agency
  and end-client usage is metered internally, not via separate BYOK keys.
- **Markup**: Both Twilio and AI usage are marked up (Twilio ~2-4x, AI ~3-10x)
  and bundled into plan allowances, with overage billing for usage beyond the
  included amount. Raw per-unit costs are never shown to agencies/end-clients —
  usage is abstracted into plan tiers + overage rates.

## Tech stack (decided)

- **Language**: TypeScript end-to-end (backend + frontend)
- **Backend**: Node.js — Express/Fastify/Hono for webhook + API server
- **Frontend**: Next.js (React) for dashboard + marketing site
- **Database**: PostgreSQL with Prisma or Drizzle ORM
- **Telephony/SMS**: Twilio (Voice + Messaging APIs, subaccounts for tenants)
- **AI**: Anthropic API (Claude) via `@anthropic-ai/sdk`
- **Auth**: Clerk/Auth0/NextAuth (TBD)
- **Billing**: Stripe
- **Hosting**: Vercel (Next.js) + Railway/Render for backend if separate

Rationale: TS gives shared types between frontend/backend (critical for a
multi-tenant data model with lots of nested config objects), best SDK support
for Twilio/Anthropic/Stripe, and full-stack hiring flexibility. Python remains
an option for future ML/analytics work but isn't needed for the core product.

## Architecture principle: multi-tenant from day one

Even though we're starting with a single real client, the **data model and
webhook routing are multi-tenant from the very first line of code**. This is
the one thing that's expensive to retrofit later — everything else
(agency layer, subaccount provisioning, white-label branding, billing tiers)
is additive and can be built on top later without reworking the core pipeline.

Core tenant-scoped entities from day one:
- `tenants` (the end-client business — e.g., a plumbing company)
- `tenant_configs` (business info, AI persona/tone, services, hours, booking
  link, escalation contact)
- `phone_numbers` (Twilio number → tenant_id mapping, used for webhook routing)
- `conversations` / `messages` / `calls` (all scoped by tenant_id)

Deferred until validated (additive layer on top of the above):
- `agencies` table (agency owns multiple tenants)
- Twilio subaccount auto-provisioning per agency
- White-label branding / custom domains
- Agency-level billing tiers + usage overage calculation

## Build roadmap (phased)

1. **Foundations** — monorepo setup, Next.js + Node API, Postgres + ORM, Twilio
   + Anthropic dev accounts
2. **Core MVP (single real tenant, multi-tenant schema)** — webhook for missed
   calls, static text-back, logging — proves the pipeline end-to-end
3. **AI conversation layer** — replace static template with Claude-generated
   responses using tenant config as context; handle multi-turn SMS
   conversations; basic escalation/booking-link logic
4. **Agency layer** — `agencies` table, Twilio subaccount provisioning,
   agency-managed tenant onboarding
5. **Dashboard — auth & management** — agency/end-client login, config editor,
   conversation logs, basic analytics
6. **White-label branding** — per-agency branding, custom domains, branded
   outbound messaging
7. **Billing** — Stripe integration, plan tiers, usage metering, overage billing
8. **Polish & launch** — error handling/fallbacks, monitoring, docs, pilot
   agencies

## Current status

Starting Phase 1/2 build — single tenant, multi-tenant-ready schema, webhook
pipeline for missed-call detection → AI text-back → conversation handling.
