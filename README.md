# Claude Mastery Program

Personalised graded course platform for Claude — by **Commercial Growth Pty Ltd** (ABN 72 671 869 298).

Production: **app.commercialgrowth.com.au**
Pre-sale: **commercialgrowth.com.au/claudemastery**
Cohort 1 launches **1 June 2026** (Core tier — 34 lessons, AUD $297).

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript + React 19 |
| Styling | Tailwind CSS with the Claude Mastery design tokens |
| Auth | Auth.js (NextAuth v5) with Resend magic-link provider |
| Database | Neon Postgres (Sydney, ap-southeast-2) + Drizzle ORM |
| Email | Resend (sender: `noreply@commercialgrowth.com.au`) |
| Hosting | Vercel (team `commercial-growth`, project `claudemasteryprogram`) |
| AI | Anthropic Claude API (grading worker) |

## Local setup

```bash
git clone https://github.com/aj341/claudemasteryprogram.git
cd claudemasteryprogram
npm install
cp .env.example .env.local
# fill in DATABASE_URL, AUTH_SECRET, RESEND_API_KEY, ANTHROPIC_API_KEY
npm run db:generate    # generate SQL migrations from src/db/schema.ts
npm run db:migrate     # run them against Neon
npm run dev            # http://localhost:3000
```

## Repo layout

```
src/
  app/              Next.js App Router pages
    login/          Magic-link sign-in form
    verify-email/   "Check your inbox" screen
    dashboard/      Authenticated learner dashboard (shell)
    api/auth/       Auth.js route handlers
  components/       Client components (DashboardShell etc.)
  db/
    schema.ts       Drizzle schema (users, profiles, enrolments,
                    lesson_submissions, grades + Auth.js tables)
    index.ts        Drizzle client (Neon HTTP)
    migrate.ts      Migration runner (npm run db:migrate)
  lib/
    auth.ts         Auth.js config + branded magic-link email
content/
  lessons/          34 lesson markdown files (modules 1-6)
drizzle/            Generated SQL migrations (in .gitignore — created by db:generate)
```

## Deployment

The repo is linked to the Vercel project **commercial-growth/claudemasteryprogram**. Pushes to `main` trigger production deploys. Default URL: `claudemasteryprogram.vercel.app`. Custom domain: `app.commercialgrowth.com.au` (CNAME → `cname.vercel-dns.com`, set in Cloudflare DNS-only / grey cloud).

## Environment variables

See `.env.example`. The required-for-launch set is:

- `DATABASE_URL` — Neon pooled connection string
- `AUTH_SECRET` — `openssl rand -base64 32`
- `RESEND_API_KEY`
- `ANTHROPIC_API_KEY`

Stripe and PostHog are wired in later tasks (W4-T15, W4-T16).

## Build plan

The full task graph is in `cowork-build-plans.md` (private). Downstream tasks queued after this scaffold:

- **W1-T02b** Onboarding flow + business context capture
- **W1-T03** Lesson rendering engine (markdown → personalised React)
- **W2-T06** Submission + draft autosave
- **W2-T07** Grading worker (Claude API)
- **W4-T15** Stripe checkout + webhook
- **W4-T16** PostHog instrumentation + admin dashboard

## License

Proprietary. © Commercial Growth Pty Ltd.
