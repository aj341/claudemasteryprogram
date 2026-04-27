# Personalised lessons

Each lesson directory contains:
- `_source.md` — the post-cohort-strip default (used as fallback when no industry variant exists)
- `{industry}.md` — one variant per canonical industry (10 industries)

Industries (canonical, from `src/lib/industries.ts`):
- creative_marketing — Creative & Marketing
- saas_software — SaaS / Software
- professional_services — Professional Services (also the fallback for unknown industries)
- trades_construction — Trades & Construction
- property_real_estate — Property & Real Estate
- finance_accounting — Finance & Accounting
- ecommerce_retail — E-commerce & Retail
- health_wellness — Health & Wellness
- education_coaching — Education & Coaching
- other — Other (treated as professional_services tone)

Token substitution is applied at render time by `loadPersonalisedLesson()` in `src/lib/lessons.ts`.
Tokens: `{{firstName}}`, `{{businessName}}`, `{{weeklyTasks}}`, `{{goals}}`, `{{brandVoice}}`, `{{productsServices}}`, `{{customerSnapshot}}`.
