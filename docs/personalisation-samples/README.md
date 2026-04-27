# Personalisation samples

Snapshots of how Lesson 1.1 renders for three different learners under the W1-T03 industry personalisation system.

## Architecture

Personalisation is a **pure static lookup**. No LLM call, no caching, no per-render cost.

Each lesson's `## Worked examples` section starts with an HTML comment block:

```
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 0,
  "mapping": {
    "SaaS / Software": 5,
    "Health & Wellness": 2,
    ...
  }
}
-->
```

`pickExamplesForIndustry(examples, personalisation, industry)` looks up the learner's industry in `mapping`, falls back to `default_index` if absent, clamps to the valid range, and returns a single-element array of the matching example.

## The 10 canonical industries

The onboarding form and JSON config blocks key against these labels exactly:

1. Creative & Marketing
2. SaaS / Software
3. Professional Services
4. Trades & Construction
5. Property & Real Estate
6. Finance & Accounting
7. E-commerce & Retail
8. Health & Wellness
9. Education & Coaching
10. Other

`Trades & Services` is a legacy alias still used by some existing profiles — `normaliseIndustry()` in `src/lib/industries.ts` collapses it to `Trades & Construction`.

## Special cases

- **22 trim-to-1 lessons** carry the JSON config and render exactly 1 example matching the learner's industry.
- **5 keep-all lessons** (2.4, 2.5, 3.6, 4.1, 4.5) — no JSON config, render all 5 examples normally.
- **6 lessons with no `## Worked examples` section** (1.3, 1.4, 2.6, 4.6, 5.6, 6.4) — section omitted from the page.
- **Lesson 5.5** — `## Worked examples` present but the body is a four-tier markdown decision table, not Example N: blocks. The platform parses the table via `extractWorkedExamplesContent` and renders it verbatim under the worked-examples heading.

## What's in this folder

- `lesson-1.1-saas-software.md` — what a SaaS founder sees
- `lesson-1.1-health-wellness.md` — what a clinic manager sees
- `lesson-1.1-default-no-industry.md` — what a user without an industry set sees (default_index)

Headless screenshots can be added later by hitting the deployed `/lessons/1.1-...` route as test users with each industry.
