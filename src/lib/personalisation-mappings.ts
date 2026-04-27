// W1-T03b: Profile-driven personalisation mappings.
//
// goalSlug → moduleNum → "lesson-number — short-title-hint" string used by
// applyTokenSubstitution() at the bottom of each module's last lesson:
//   "Since you're aiming for {goal}, the lesson in this module that pays this
//    back hardest is {recommended lesson}."
//
// AJ should review/tweak these mappings — v1 is a sensible default.

export const GOAL_TO_RECOMMENDED_LESSON: Record<string, Record<string, string>> = {
  save_time: {
    "01": "1.4 (Map your weekly tasks)",
    "02": "2.5 (Testing, evaluating, and iterating)",
    "03": "3.5 (Time management and workflow integration)",
    "04": "4.4 (Project-based workflows and systems)",
    "05": "5.3 (Claude API and automation)",
    "06": "6.2 (Capstone implementation phase)"
  },
  better_writing: {
    "01": "1.5 (Your business context)",
    "02": "2.2 (Context and clarity)",
    "03": "3.1 (Writing with Claude — ideas to drafts)",
    "04": "4.3 (Knowledge management for consistent voice)",
    "05": "5.2 (Working with files and complex documents)",
    "06": "6.1 (Capstone design phase)"
  },
  delegate_more: {
    "01": "1.4 (Map your weekly tasks)",
    "02": "2.3 (Prompt templates and reusable patterns)",
    "03": "3.5 (Time management and workflow integration)",
    "04": "4.2 (Building your first Project)",
    "05": "5.3 (Claude API and automation)",
    "06": "6.3 (Capstone evaluation and impact)"
  },
  scale_personally: {
    "01": "1.6 (Put your context to work)",
    "02": "2.6 (Prompt engineering for your business)",
    "03": "3.6 (Practical applications capstone)",
    "04": "4.6 (Projects capstone — your project system)",
    "05": "5.5 (Evaluating extended capabilities)",
    "06": "6.4 (Capstone presentation and next steps)"
  },
  learn_ai_safely: {
    "01": "1.1 (What Claude is and isn't)",
    "02": "2.4 (Advanced prompt techniques)",
    "03": "3.3 (Problem solving and decision making)",
    "04": "4.5 (Advanced Project features)",
    "05": "5.5 (Evaluating extended capabilities vs basic features)",
    "06": "6.3 (Capstone evaluation and impact)"
  },
  improve_decisions: {
    "01": "1.5 (Your business context)",
    "02": "2.4 (Advanced prompt techniques)",
    "03": "3.3 (Problem solving and decision making)",
    "04": "4.4 (Project-based workflows and systems)",
    "05": "5.1 (Vision capabilities)",
    "06": "6.1 (Capstone design phase)"
  }
};

// Helper: pick the recommended-lesson string for a learner's first listed goal,
// for a given module. Falls back to a neutral message if the goal isn't mapped.
export function recommendedLessonFor(
  goals: string[] | null | undefined,
  moduleNum: string
): string | null {
  if (!goals || goals.length === 0) return null;
  for (const g of goals) {
    const map = GOAL_TO_RECOMMENDED_LESSON[g];
    if (map && map[moduleNum]) return map[moduleNum];
  }
  return null;
}

// Slug-ifies an industry label to match filenames in content/lessons-personalised/{slug}/{industry}.md
// Mirrors the canonical 10 from src/lib/industries.ts.
const INDUSTRY_SLUG_MAP: Record<string, string> = {
  "Creative & Marketing": "creative_marketing",
  "SaaS / Software": "saas_software",
  "Professional Services": "professional_services",
  "Trades & Construction": "trades_construction",
  "Trades & Services": "trades_construction",
  "Property & Real Estate": "property_real_estate",
  "Finance & Accounting": "finance_accounting",
  "E-commerce & Retail": "ecommerce_retail",
  "Health & Wellness": "health_wellness",
  "Education & Coaching": "education_coaching",
  "Other": "other"
};

export function industrySlug(industry: string | null | undefined): string {
  if (!industry) return "professional_services";
  return INDUSTRY_SLUG_MAP[industry] ?? "professional_services";
}
