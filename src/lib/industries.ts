// W1-T03: Single source of truth for the 10 canonical industries used by the
// platform's industry-personalisation system. The labels here are what the
// onboarding form shows AND what the JSON config blocks in each lesson's
// ## Worked examples section key against — they MUST match exactly, character
// for character, or pickExamplesForIndustry will fall through to default.
//
// "Trades & Services" is a legacy alias the old account-settings UI used. Some
// existing profiles already store that value, so the JSON configs in lessons
// also key it (it maps to the same example index as "Trades & Construction").

export const INDUSTRIES = [
  "Creative & Marketing",
  "SaaS / Software",
  "Professional Services",
  "Trades & Construction",
  "Property & Real Estate",
  "Finance & Accounting",
  "E-commerce & Retail",
  "Health & Wellness",
  "Education & Coaching",
  "Other"
] as const;

export type Industry = (typeof INDUSTRIES)[number];

export const ALLOWED_INDUSTRIES = new Set<string>(INDUSTRIES);

// "Trades & Services" → "Trades & Construction" alias collapse for any code path
// that wants to deduplicate. The lookup map in lessons keeps both keys, so
// pickExamplesForIndustry doesn't need this — it's available for UI/admin use.
export function normaliseIndustry(value: string | null | undefined): Industry | null {
  if (!value) return null;
  if (ALLOWED_INDUSTRIES.has(value)) return value as Industry;
  if (value === "Trades & Services") return "Trades & Construction";
  return null;
}
