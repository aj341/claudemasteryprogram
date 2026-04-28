# Lesson 2.5 — Testing, evaluating and iterating

**Module:** 02 · Prompt Engineering Fundamentals
**Estimated time:** 25 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites
- Lesson 1.1 — What Claude is, and what it isn't
- Lesson 1.2 — Write your first real prompt
- Lesson 1.3 — Audit your current AI use
- Lesson 1.4 — Map your weekly tasks
- Lesson 1.5 — Your business context
- Lesson 1.6 — Put your context to work
- Lesson 2.1 — How Claude reads a prompt
- Lesson 2.2 — Context and specificity
- Lesson 2.3 — Format and structure instructions
- Lesson 2.4 — Constraints and scope

## Learning objectives
By the end of this lesson you'll be able to:
- Treat your first prompt as a hypothesis and evaluate results against a specific expected outcome
- Diagnose a Claude response using three distinct failure types — missing context, wrong format, wrong scope
- Apply the one-change-at-a-time rule to keep your iterations meaningful
- Decide when a result is good enough to use and stop — without chasing perfection on a low-stakes task
- Document a three-version iteration sequence so your prompting blind spots become visible

---

## Lesson script

### Your first prompt is a hypothesis

When you sit down and write a prompt, you're not issuing a final order. You're making a prediction. You're saying: *if I describe the task this way, Claude will produce something that looks like what I need.*

Sometimes that prediction is right on the first attempt. More often it's partially right. Occasionally it misses in ways that are genuinely instructive.

The founders and operators who get consistently good results from Claude are not the ones who write better first prompts. They're the ones who treat the first response as information. They read it, compare it to what they actually needed, identify specifically where it fell short, and make a targeted change. One change. Then they read again.

That cycle — write, evaluate, one targeted change, read again — is the skill this lesson teaches. It's not glamorous. But it's what separates the people who say Claude is useful from the people who say it's hit and miss.

Before you can iterate well, you need to be able to evaluate honestly. And evaluating honestly requires a specific question.

### The right evaluation question

Most people read a Claude response and ask: "Is this good?" That question is too broad to be useful. A response can be well-written, intelligent, and entirely wrong for your purpose. A response can be rough and exactly right. "Good" is too vague to act on.

The question to ask is: "Did Claude do exactly what I asked?"

That question has a binary answer — yes or no — and it forces you to compare the output against your actual specification, not your general impression. When the answer is no, the question that follows is: "What specifically is different between what I asked for and what I got?"

Work through these checkpoints when you read a response:

**Checkpoint 1: Did Claude address the right task?** Sometimes a vague task instruction produces a response to the task Claude inferred rather than the task you meant. If you asked Claude to "review this onboarding email," did it give editorial feedback, or did it summarise the email instead?

**Checkpoint 2: Is the format right?** Is this a list when you needed prose? Formal when you needed conversational? Two pages when you needed one? Format mismatches are the easiest failures to spot — and usually the easiest to fix.

**Checkpoint 3: Is the scope right?** Did Claude go narrower than you needed — covering half the problem? Or broader — adding sections and caveats and considerations you didn't ask for? Scope drift in both directions is common.

**Checkpoint 4: Is the content accurate and relevant?** Did Claude invent information you didn't provide? Did it make assumptions about your product, your customers, or your roadmap that aren't true? Accuracy problems are usually a missing-context failure in disguise.

Run through these four checkpoints in order. By the time you reach the end, you should be able to name what's wrong. Not in general terms — specifically. That specific diagnosis is what you put in your next prompt.

### Three failure types and how to fix each

Most prompt failures fall into one of three categories. Learning to identify which type you're dealing with tells you exactly where to look in your prompt for the fix.

**Failure type 1: Missing context**

The response is reasonable, but it doesn't know enough about your situation to be useful. The language doesn't match your voice. The suggestions are generic rather than specific to your category. The advice ignores something about {{businessName}} that would have changed the answer completely. Claude isn't wrong — it just didn't have enough information to be right for you.

The fix is always the same: go back to the prompt and add the specific information that was missing. Not more context in general — the precise detail that would have produced a different response. If Claude wrote a formal email when your relationship with this customer is on first-name terms, add: "We've had this account for two years, communication is informal, sign off with first names." That's the missing context. Add it.

**Failure type 2: Wrong format**

The content of the response is actually correct, but the shape is wrong. You needed bullet points, you got paragraphs. You needed a 100-word changelog, you got 400 words. You needed a table, you got a list. You needed a Slack-ready note, you got something that reads like a press release.

The fix is a format instruction. These don't need to be long:

```
Reformat this as a table with two columns: action item and owner.
Keep the same content — just change the shape.
```

One sentence. The format instruction tells Claude exactly what structure to impose on the content it already produced. You don't have to regenerate anything — you just reshape it.

**Failure type 3: Wrong scope**

The response either missed parts of the task you intended to cover, or it expanded well beyond what you asked for. Scope failures are often a symptom of an ambiguous task instruction — Claude made a reasonable judgment call about how much to include, but that judgment wasn't what you needed.

Under-scoped: Claude wrote three sentences about a topic you needed two paragraphs on. You need to go back and be explicit about the depth you want. "Cover this in detail, including at least three specific examples from the scenario I described." That tells Claude the scope you intended.

Over-scoped: Claude produced a ten-point analysis when you asked for a recommendation. You wanted a decision, not a deliberation. "Give me one recommendation. One. Not a list of options — a specific recommendation with one sentence of reasoning." Explicit scope constraints prevent Claude from defaulting to comprehensiveness when you need decisiveness.

### The one-change-at-a-time rule

Here's the situation that happens regularly, {{firstName}}. You get a response that isn't quite right. You rewrite the prompt — you change the task description, add a constraint, adjust the format instruction, and add more context, all at once. You send it. Claude produces something better. You move on.

The problem: you don't know which change made the difference.

This matters more than it seems. If you don't know what fixed it, you can't apply the same fix to the next similar prompt. You're back to starting from scratch each time, rather than building a library of patterns that work.

The one-change-at-a-time rule is simple: when you iterate, change one variable. One. If you're not sure the format is right, change the format instruction — and only the format instruction. If you think missing context is the problem, add the missing context — and nothing else. If the scope is wrong, tighten or expand the scope constraint — and leave everything else unchanged.

Then read the new response with the same four checkpoints. Did that one change improve the specific thing you targeted? If yes, you've identified a pattern. If no, you know that variable wasn't the problem, and you can look elsewhere.

This isn't about being pedantic. It's about being efficient. Three targeted one-change iterations will reliably produce a usable result. Three iterations where you change everything at once will produce a result you can't explain or reproduce.

There's a practical exception: if the first response was so far off that you need to rewrite the prompt from scratch, do it. Starting over is the right call when the original prompt had a fundamental structural problem — no task instruction, no context at all, a completely wrong format assumption baked in. The one-change rule applies once you have a reasonable first version and you're improving it. It doesn't mean you can never rewrite.

### When to stop

The other failure mode in iteration isn't writing a bad prompt — it's over-iterating on a prompt that was already good enough.

Not every task needs a perfect output. A draft internal Slack message to your three teammates, a quick summary of a churn-survey export for your own reference, a rough agenda for a sprint review tomorrow — these tasks do not require four rounds of iteration. They require a result that's good enough to serve the purpose. Once you have that, stop.

Here's how to calibrate when to stop:

**Ask: will further iteration produce value proportionate to the time spent?** If the next revision would save you thirty seconds of editing and take you ninety seconds to write, the math doesn't work. Use what you have.

**Ask: is the remaining gap something Claude can close, or something you'll have to add yourself anyway?** Some tasks need human judgment that Claude can't replicate — you know the politics of this customer relationship, or the history behind this churn risk, or the specific nuance of your brand voice that you haven't documented anywhere. At that point, iteration won't close the gap. Take the closest output and edit it yourself.

**Ask: what's the actual cost of a small imperfection here?** For something going to a strategic account, zero tolerance for imperfection is reasonable. For an internal post-mortem note that three people will read once, "mostly right" is entirely sufficient.

The mental trap to avoid is perfectionism dressed as diligence. Iterating past "good enough" on a low-stakes task is procrastination with extra steps. The sign that you're in this trap: you're iterating on word choices rather than fixing actual problems. You've crossed from refinement into fussing.

A useful heuristic: if you're on Version 4 of a prompt for a task that would have taken you ten minutes to do manually, you should stop iterating and either use Version 3 or do the task without Claude. The goal is to save time, not to prove Claude can be perfect.

### Common mistake → better approach

**Mistake:** Reading a Claude response and sending back "that's not quite right, can you try again?"

This gives Claude nothing to work with. It knows the output wasn't satisfactory, but it doesn't know what specifically missed the mark. Claude will produce a variation on the same response — usually slightly different in surface features, not fundamentally improved. You'll get Version 2 of the same problem.

**Better approach:** Name the specific failure type in your revision prompt.

```
The format is wrong — I needed this as a table, not a paragraph list.
Keep the content exactly as it is, just restructure it into a two-column
table: left column is the action item, right column is the owner.
```

Or:

```
The scope is too broad. You've covered six scenarios when I only need
the one I described — a trial user who hasn't activated yet. Remove the
sections on paying customers and renewals entirely. Focus everything on
the first-week trial scenario.
```

The revision prompt names the failure type, describes what's wrong, and tells Claude exactly what to do about it. That's a revision prompt that produces a meaningfully different response. "Try again" is not.

---


## Worked examples
All five examples below are shown — each demonstrates a distinct concept or technique from the lesson, not an industry variant.

### Example 1: From generic government fact sheet to usable client comms

**Scenario:** Missing context · Bookkeeper's EOFY summary

**Prompt:**
```

```

**Why it works:** **Why the one change worked:** Task didn't change. Format didn't change. The only addition was specific context — who the clients are, their financial sophistication, and the relationship. That context alone moved the output from generic to usable.

---

### Example 2: Prose analysis becomes a comparison table

**Scenario:** Wrong format · Competitor analysis for a client meeting

**Prompt:**
```

```

**Why it works:** **Why the one change worked:** The content was already right. Only the shape needed to change. The revision preserved all the analytical work and converted it into a format the consultant could talk from in a meeting — not read from.

---

### Example 3: Four-paragraph legal brief becomes an 80-word reassurance

**Scenario:** Wrong scope (over-scoped) · Property manager's tenant reply

**Prompt:**
```

```

**Why it works:** **Why the one change worked:** The scope constraint did the work. A specific word limit, an explicit instruction on what to remove, and a context note ("routine maintenance, not a dispute") told Claude to calibrate to the actual situation, not every possible situation.

---

### Example 4: Generic &rarr; specific &rarr; scannable

**Scenario:** Three-version iteration · Café rostering policy

**Prompt:**
```

```

**Why it works:** **Why the three-version story works:** Each version changed exactly one variable. V1 to V2: missing context added. V2 to V3: format corrected. Three targeted iterations, each producing a measurable improvement, each diagnosable in one line.

---

### Example 5: Version 1 was good enough — she stopped

**Scenario:** Knowing when to stop · Freelance designer's directory bio

**Prompt:**
```

```

**Why it works:** **The stop decision:** Claude returned an accurate, appropriately toned 58-word bio. The instinct was to iterate — maybe add a line about process, or mention a client type more specifically. But the bio was for a free directory that may receive 20 views. Output was accurate, length right, tone right. Good enough. The cost of 30 minutes of iteration for marginal improvement on a free listing wasn't justified. Matching iteration investment to task stakes is part of using Claude efficiently.

---

## Graded deliverable

**Title:** Three-version iteration log

**Brief:** Take a real task from your work — this can be a brand new prompt or one you've used in an earlier lesson or for your own work that didn't quite land. Run it through three deliberate iterations. One change per iteration. Each version gets a one-line diagnosis. Version 3 gets a final assessment of whether it's good enough to use. Then write a short reflection on the prompting blind spot this exercise exposed.

**What to submit:**

1. **Version 1 — prompt + Claude's response + one-line diagnosis** — The exact V1 prompt you sent, Claude's full response, and a one-line diagnosis of what failed or was missing.

2. **Version 2 — revised prompt + what changed + response + diagnosis** — The revised V2 prompt, one sentence on what changed and why, Claude's full response, and a one-line diagnosis of what was still missing.

3. **Version 3 — final prompt + response + final assessment** — The final prompt, Claude's full response, and a final assessment (2–4 sentences): is this good enough to use? Why or why not?

4. **Reflection (70–100 words)** — What did this exercise reveal about your own prompting blind spots? Be specific — not "I need to be more specific" but the actual pattern you noticed.

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Do the changes between versions target the specific failure identified in each diagnosis — not random additions or general improvements? A V2 that adds three things when the diagnosis named one failure scores low. A V2 that makes exactly one targeted change scores high.
- **Structure (25 pts)** — Is each version documented with a clearly stated hypothesis (what changed and why) and a result (what happened — what improved, what is still missing)? Submissions that paste prompts and responses without diagnoses can't be evaluated properly.
- **Constraint clarity (25 pts)** — Does the final prompt (V3) contain explicit constraints — format, scope, tone, word count, audience — that were absent or vague in V1? The delta between V1 and V3 should show a meaningful increase in constraint specificity.
- **Outcome focus (25 pts)** — Does the reflection identify a specific blind spot — a pattern in the student's prompting, not a general observation? "I need to be more specific" alone does not pass. "I consistently describe the task but not the audience, which means Claude defaults to a generic register" is the level of specificity this rewards.

---

## Notes for the AI grading engine

(Not shown to student)

- **Reward (high marks):**
  - Each version diagnosis names a specific failure type (missing context, wrong format, wrong scope) — not just a vague "it wasn't quite right"
  - Changes between versions are singular and clearly linked to the stated diagnosis — the student changed exactly what they said they would change
  - Version 3 contains format, scope, and context constraints that are visibly absent or weaker in Version 1 — the diff between V1 and V3 shows a real increase in specificity
  - The final assessment makes a clear, reasoned call: this is good enough because X, or this isn't because Y — not a neutral description
  - The 80-word reflection names a specific pattern in the student's prompting behaviour — something that recurred across the three versions — with enough precision that it would generate a different habit next time
  - Claude's responses are pasted in full — the grader can verify what actually changed between iterations

- **Penalise (dock points):**
  - Student changes multiple things between versions without explaining which change was intended to fix which failure — iteration is present but not deliberate
  - Diagnoses are generic ("it was too long," "it needed more detail") without naming the failure type or specifying what was missing
  - Version 3 and Version 1 are structurally similar — the student iterated on wording but not on components (added context, added format instruction, adjusted scope)
  - Claude responses are summarised rather than pasted in full — impossible to evaluate whether the iterations produced real improvement
  - Reflection stays at the level of "I need to be more specific" without identifying a specific pattern or habit
  - Final assessment doesn't reach a verdict — the student describes Version 3 without assessing whether it is usable

- **Common 60–69 patterns:** The student has run three iterations and the output clearly improved across versions. But the diagnoses are description rather than diagnosis — they say what the output was, not what caused it to be that way. The changes between versions are improvements but not clearly tied to a stated hypothesis. Or the reflection identifies a general tendency ("I forget to set the format") without connecting it to the specific evidence from their three iterations. In feedback, quote one of their diagnoses back and show how to restate it as a failure type: "You wrote 'the response was too long' — that's a wrong-scope failure. The fix is a scope constraint: [example]. Try naming the failure type in your reflection, then the habit you'll build to catch it earlier."

- **Common 80+ patterns:** The three iterations read like a structured experiment. Each diagnosis names a failure type. Each version changes one thing, and only one thing, that matches the diagnosis. The Version 1 to Version 3 delta is substantial — the final prompt is demonstrably more specified than the first. The final assessment reaches a clear verdict with a reason. The reflection names a specific, recurring blind spot — not "I need more context" but the particular information the student consistently omits and why (e.g., "I describe what I want done but not who will read it, so Claude defaults to a formal register that doesn't match my clients"). Excellent submissions feel like someone who genuinely learned something about themselves, not someone who completed an exercise.

- **Feedback tone:** Direct, specific, kind. Quote the student's own words — from their diagnoses, their revision prompts, and their reflection — when identifying wins or gaps. End with one concrete next step: either a specific iteration habit to build (e.g., "before you write a revision prompt, write one sentence naming which of the three failure types you're fixing"), or a specific Module 2 concept to revisit based on the pattern visible in their three iterations.

- **Resubmission gating:** Reward visible improvement versus the previous submission. If the resubmission has clearer diagnoses (failure type named), acknowledge that explicitly. If Version 3 now shows a meaningful constraint increase over Version 1, name that improvement. If the reflection is more specific than the first attempt, quote the improvement back. If the resubmission is essentially the same structure with minor wording adjustments, say so and name the one remaining gap directly — do not be vague about what still needs to change.
