# Lesson 2.4 — Advanced prompt techniques

**Module:** 02 · Prompt Engineering Fundamentals
**Estimated time:** 20 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites
- Lesson 1.1 — What Claude is, and what it isn't
- Lesson 1.2 — Write your first real prompt
- Lesson 1.3 — Audit your current AI use
- Lesson 1.4 — Map your weekly tasks
- Lesson 1.5 — Your business context
- Lesson 1.6 — Put your context to work
- Lesson 2.1 — How Claude actually reads your prompt
- Lesson 2.2 — Prompt structure that works
- Lesson 2.3 — Constraints and format instructions

---

## Learning objectives
By the end of this lesson you'll be able to:
- Apply chain-of-thought prompting to tasks where visible reasoning improves the output
- Use few-shot prompting to train Claude on your preferred output style with 2–3 examples
- Write role prompts that are specific enough to genuinely shift Claude's perspective
- Give Claude a partial structure to fill in, rather than asking it to invent the format from scratch
- Identify which tasks benefit from advanced techniques — and which ones don't need them

---

## Lesson script

### Four techniques that actually change the output

Lessons 2.1 through 2.3 covered the fundamentals: how Claude reads your prompt, how to structure it, and how to use constraints to get a specific format. Those fundamentals do a lot of work. Most tasks you run in a week at {{businessName}} will respond well to a clear, specific, well-constrained prompt — no special technique required.

But there's a category of task where the fundamentals aren't quite enough. Complex reasoning tasks. Tasks where you want output that sounds like a very specific person in a very specific situation. Tasks where you want Claude to consistently match a format you already have rather than inventing one of its own. Tasks where giving Claude one example of what you want produces better results than a page of instructions describing it.

This lesson covers four techniques for those situations. They are not tricks. They are structured ways of giving Claude more useful information about what you need, or more useful instructions about how to approach the problem. Each one has a specific use case. And at the end of the lesson, we'll talk about when not to use any of them — because over-engineering a simple prompt is its own problem.

### Technique 1: Chain-of-thought prompting

Chain-of-thought prompting asks Claude to show its reasoning before it gives you the answer. The most direct way to invoke it is to include a phrase like "think through this step by step before giving me your recommendation" or "reason through this first, then state your conclusion."

Why does this help? When Claude works through a problem sequentially — rather than jumping straight to an output — it catches errors in its own reasoning, considers factors it might otherwise skip, and produces conclusions that are grounded in visible logic rather than pattern-matched from training. You can also read the reasoning and spot where Claude made an assumption you disagree with, rather than just staring at a conclusion that doesn't feel right.

This technique earns its place on complex, multi-variable tasks. Think: deciding whether to recommend a small business client move from a sole-trader structure to a Pty Ltd, weighing tax, asset protection, and admin overhead. Reviewing a Div 7A loan position that has several possible interpretations. Evaluating whether to take on a complex new client based on scope, risk, and fee. These are tasks where the answer is not obvious, where several factors pull in different directions, and where you want to see the working — not just the output.

Chain-of-thought prompting is overkill for simple tasks. If you want a subject line for a BAS reminder, you don't need Claude to reason through it. If you want three plain-English ways to describe accruals to a sole trader, showing its working adds noise, not value. The signal that you need chain-of-thought is when you find yourself reading a Claude answer and thinking "how did it get there?" — or when the task involves trade-offs and you want to understand what Claude is weighing.

```
I'm helping a client decide between two practice software options for their
in-house bookkeeper. Here are the key facts:

Option A: $380/month, 48-hour response time on support, 3 years on the
market, two existing AU users in hospitality.
Option B: $420/month, same-day support response, 8 years on the market,
ATO-listed software with strong STP and BAS lodgement integration.

Think through this step by step — consider cost, reliability, AU compliance
fit, and what matters most for a hospitality SMB doing weekly payroll —
then give me a clear recommendation with a one-line reason.
```

The phrase "think through this step by step" is doing the work. It tells Claude to reason before it concludes.

### Technique 2: Few-shot prompting

Few-shot prompting gives Claude 2–3 examples of the output you want before asking it for the real output. Instead of describing what you want in abstract terms, you show it.

This technique is especially useful when you have a distinctive voice or format that's difficult to specify through instructions alone. Writing your own client-onboarding emails in a particular style. Describing engagement scope in a way that's specific to your practice. Writing internal partner updates that match a tone the team already knows. If you spend thirty minutes trying to describe the style in words — and Claude still doesn't quite get it — try showing it two examples instead.

The structure is simple: provide the examples clearly labelled as examples, then provide the actual request. Keep the examples realistic and representative. If you give Claude an unusually polished example, it will aim at that level for everything. If you give it an example that's too casual, it will match that casualness even when you need something more formal — like a year-end client letter. The examples you choose are the calibration.

```
Here are two examples of how I write fee-proposal follow-up emails for my
bookkeeping practice:

Example 1:
Hi Sarah, just checking in on the fee proposal I sent through last Thursday
for your monthly bookkeeping and quarterly BAS. Happy to answer any questions
or adjust the scope if the budget needs to work differently. Let me know
either way — no pressure.

Example 2:
Hi Marcus, following up on the fee proposal from last week for your FY26
tax return work. If the timing doesn't suit you right now, that's completely
fine — just let me know and I can put it on hold until you're ready to
move forward.

Now write a follow-up for this situation: I sent a fee proposal to a client
called James three weeks ago for a full FY catch-up — around $4,500 of
back BAS work plus tax returns. I haven't heard anything. Same tone and
style as the examples above.
```

Claude now has two reference points for what the voice looks like in practice. "No pressure" tone, first name only, short sentences, an offer to adjust rather than a hard follow-up. The instruction "same tone and style as the examples above" locks that in.

### Technique 3: Role prompting with specificity

You've probably seen the advice to tell Claude to "act as an expert" before asking a question. This is a weak version of role prompting. An "expert" is too generic to change anything meaningful about the output. Expert in what? From what industry? With what priorities?

Role prompting works when the role is specific enough to shift Claude's actual perspective — its vocabulary, its assumptions, its concerns, what it pays attention to. The difference between a weak role prompt and a strong one is specificity of context.

Weak: "You are a financial expert."
Stronger: "You are the senior accountant at a 6-person AU practice. You're reviewing the management accounts for a 12-person construction client at the end of a quarter where materials costs came in 15% over budget and the GST coding has been inconsistent."

The stronger version gives Claude a character who has a job, a context, and a specific problem in front of them. That context shapes what Claude notices, what it flags, and how it frames its response. It's not asking Claude to pretend — it's giving Claude a point of view that makes its response more useful.

The most effective role prompts for small AU practices tend to be:

- A specific professional reviewing a specific type of document ("You are a registered tax agent reviewing a draft scope-of-services letter for a new construction-client engagement")
- A specific client type responding to a specific piece of communication ("You are a 58-year-old sole-trader plumber who has just received this BAS reminder email — read it and tell me what stands out, what confuses you, and what you'd expect to hear next")
- A specific internal voice evaluating a decision ("You are the practice manager of a 6-person accounting firm reviewing whether to take on a complex new hospitality group with three trading entities")

The role only works if you follow it with a genuine task. A well-specified role plus a vague task still produces a vague output. Specificity in the role and specificity in the task work together.

### Technique 4: Output scaffolding

Output scaffolding means giving Claude a partial structure to fill in, rather than asking it to invent the structure from scratch.

When you ask Claude to write a fee proposal, it will produce a fee proposal. But whose proposal format? One that reflects whatever proposal conventions are most common in its training data — which may or may not match how your practice or AU accounting norms structure them. If you already know what a good output looks like for your context, the fastest way to get it is to provide the skeleton and ask Claude to fill it in.

This is the difference between:

"Write a year-end handover summary for a completed FY tax engagement."

And:

```
Complete this year-end handover summary using the information I'll give you. Use exactly this structure:

FY HANDOVER SUMMARY

Client name:
Entity type:
FY year:
Work delivered: [2–3 sentences on what was prepared and lodged]
Items outstanding: [bullet list — if none, write "None"]
Client sign-off notes: [one sentence on how sign-off went, any conditions]
Lodgement reference and date: [one sentence]
Next scheduled contact: [date or "not applicable"]

Here is the engagement information: [paste details]
```

The second version uses output scaffolding. Claude fills in the headings you defined, in the order you defined them. You get the format you need without having to edit a structurally different output.

Output scaffolding is particularly useful for: recurring practice documents with a standard format (FY handovers, file notes, fee summaries), client-facing templates that have to match your firm's structure, and any task where you already know what a good output looks like — you just need the content generated.

### Common mistake → Better approach

**Mistake:** Using multiple advanced techniques at once on a simple task.

{{firstName}} asks Claude to review a draft client email, but the prompt includes: a detailed role specification, three example emails, a step-by-step reasoning instruction, and a detailed output scaffold. The prompt is 600 words. The task — reviewing a 100-word email — takes fifteen seconds to read. The elaborate prompt doesn't improve the output. It often makes it worse, because Claude spends its effort responding to the complexity of the prompt rather than the simplicity of the task.

**Better approach:** Match the technique to the task. A simple review task needs a clear question and maybe a constraint or two ("flag any sentences that sound like Big-4 audit jargon"). Few-shot prompting earns its place when your voice is hard to describe. Role prompting earns its place when a specific perspective genuinely changes what you need. Chain-of-thought earns its place when the task involves trade-offs or multi-step reasoning. Output scaffolding earns its place when you have an established format that Claude can't infer. Use one at a time. Evaluate whether it changed the output. If it didn't, take it out.

### When not to use advanced techniques

The most important thing this lesson teaches is not when to use advanced techniques — it's when not to.

Advanced techniques add time to your prompting process. They make prompts longer and harder to revise. They create complexity that can obscure what Claude is actually being asked to do. They are tools for specific problems, not default settings for every prompt.

If the task is simple, the best prompt is usually simple. "Summarise this client email in three bullet points." "Rewrite this BAS-reminder paragraph in plain English." "Give me five subject line options for this end-of-FY newsletter." None of these benefit from chain-of-thought, few-shot examples, a detailed role, or a structural scaffold. They benefit from being clear about the task, the audience, and the format. That's it.

Ask yourself before adding a technique: what specific problem is this technique solving? If you can't answer that question directly — "I'm using few-shot because my voice is hard to describe in abstract terms" or "I'm using chain-of-thought because I need to see the trade-off reasoning before I decide on the entity restructure" — don't use it. A technique used without a reason is just noise in the prompt.

The trap is complexity for its own sake. More elaborate prompts do not reliably produce better outputs. They sometimes produce worse ones, and they always produce slower workflows. The fundamentals from Lessons 2.1 through 2.3 handle most tasks well. Advanced techniques handle the edge cases. Know which one you're in before you reach for the toolkit.

---

## Worked examples
All five examples below are shown — each demonstrates a distinct concept or technique from the lesson, not an industry variant.

### Example 1: Two candidates, four variables, one reasoning chain

**Scenario:** Chain-of-thought · Hiring decision for a café

**Prompt:**
```

```

**Why it works:** The chain-of-thought instruction asks Claude to weigh four factors explicitly before concluding. The owner can read the reasoning and see whether Claude weighted the Thursday–Sunday requirement correctly. The final "two sentences" constraint keeps the conclusion compact even though the working is visible.

---

### Example 2: Boutique homewares — two examples, one new product

**Scenario:** Few-shot · Brand voice for product descriptions

**Prompt:**
```

```

**Why it works:** Two short, real examples do more than two paragraphs of style instructions. Claude can see the sentence length, understated tone, and the way features are stated factually rather than sold. "In the same voice" points Claude directly to the examples as the reference.

---

### Example 3: Reading a subcontractor indemnity clause

**Scenario:** Role prompting · Plain-English contract review

**Prompt:**
```

```

**Why it works:** The role is a specific professional with a specific gap ("no legal background") and specific relevant experience. That framing produces plain-English output pitched at the right level — not a legal opinion, not a surface summary, but a practical read. The three questions at the end give Claude a clear structure within the role.

---

### Example 4: Bookkeeper fills in a ready-made structure

**Scenario:** Output scaffolding · Weekly cash flow summary

**Prompt:**
```

```

**Why it works:** The scaffold defines every heading, every line item, and the exact format for the two written fields. Claude fills in the numbers and writes the two sentences within the structure already defined. The bookkeeper gets a formatted summary ready to send — not one they then have to reformat.

---

### Example 5: Knowing when not to bother

**Scenario:** No technique needed · Tenant holding message

**Prompt:**
```

```

**Why it works:** **Why advanced techniques don't add value here:** This task has a clear output, a simple audience, and a small amount of information to convey. There's nothing to reason through. The voice doesn't need examples to calibrate. There's no complex structure to scaffold. Adding a detailed role, examples, or chain-of-thought would make this prompt longer without making the output better.

---

## Graded deliverable

**Title:** Apply one advanced technique to a real business task

**Brief:** Pick one task you'd normally send to Claude with a straightforward prompt. Pick one of the four techniques — chain-of-thought, few-shot, role prompting, or output scaffolding — that you think will genuinely improve the output. Write both versions: a basic prompt and an advanced prompt for the same task. Run both in Claude. Then write a 100-word analysis of what the technique actually changed.

**What to submit:**

1. **Technique choice + one-sentence reason** — One of: chain-of-thought, few-shot, role prompting, output scaffolding. Name it and say why you chose it for this task.

2. **Basic prompt** — A real, reasonable prompt you'd normally send — not a deliberately bad strawman.

3. **Advanced prompt** — The same task, with your chosen technique *actually applied* — not just named.

4. **Claude's response to the basic prompt** — Paste in full. Do not summarise or cut.

5. **Claude's response to the advanced prompt** — Paste in full. Do not summarise or cut.

6. **Analysis (85–120 words)** — Name which specific elements of the technique drove the difference. State whether the advanced version was worth the extra effort for this task.

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Is the chosen technique actually applied in the advanced prompt — not just named or gestured at? For chain-of-thought: an explicit reasoning instruction. For few-shot: 2–3 real examples. For role prompting: a role with a named industry, situation, and constraint. For output scaffolding: the structure given, not just described.
- **Structure (25 pts)** — Are both prompts for the same task, with the same core goal? Is the basic prompt genuinely reasonable — not a strawman? Are both Claude responses pasted in full? Are all six items clearly separated and labelled?
- **Constraint clarity (25 pts)** — Does the analysis name specific elements of the technique that changed the output — not vague claims like "it was more detailed"? For example: "The two examples showed Claude my sentence length and factual tone, which it matched exactly."
- **Outcome focus (25 pts)** — Does the analysis reach a genuine verdict on whether the technique added value for this task? Does the student show they can judge when the advanced approach is worth the effort — rather than treating more elaborate prompts as automatically better?

---

## Notes for the AI grading engine

(Not shown to student)

- **Reward (high marks):**
  - The advanced prompt shows genuine technique usage — chain-of-thought prompts include an explicit reasoning instruction (not just "explain your thinking" at the end); few-shot prompts contain actual labelled examples before the real request; role prompts name a specific professional in a specific situation with a specific gap or concern; output scaffolds provide the full structure in the prompt itself
  - The basic prompt is a real, reasonable prompt for the same task — not a one-word placeholder or a deliberately vague request designed to make the comparison easy
  - Both Claude responses are pasted in full — the student ran the prompts rather than fabricating or summarising
  - The 100-word analysis names a specific mechanism — what exactly in the technique changed what exactly in the output — rather than generic observations about quality
  - The analysis includes a genuine verdict: was it worth the effort for this task? High-scoring students often conclude that the technique helped but that a simpler version of the technique would have worked just as well — that kind of calibrated judgment is exactly what this lesson is teaching
  - Excellent submissions show the student chose a task where the technique was genuinely appropriate — a complex decision for chain-of-thought, a voice-specific output for few-shot, a perspective-dependent review for role prompting, a recurring structured document for output scaffolding

- **Penalise (dock points):**
  - The "advanced" prompt names the technique without applying it — e.g., "use chain-of-thought" appears as an instruction but the prompt contains no step-by-step reasoning structure; or the role prompt says "you are an expert" without any specific context
  - The basic prompt is obviously weak — a single sentence with no constraints — making the comparison meaningless
  - Claude responses are summarised rather than pasted in full
  - The analysis is 100 words of positive description without naming a specific mechanism or reaching a verdict on value
  - The student chose a task where no advanced technique was needed and their analysis doesn't acknowledge this — "I used chain-of-thought for writing a subject line" without recognising the mismatch
  - The student used more than one technique in the advanced prompt without flagging it, making it impossible to isolate what changed

- **Common 60–69 patterns:** The technique is applied but loosely — the role prompt is more specific than "expert" but still generic ("you are a marketing professional"), or the few-shot examples are described rather than written out ("here is an example of the kind of email I send"). The basic prompt is reasonable. Both responses are pasted. But the analysis describes the difference without naming a specific mechanism. In feedback: quote the advanced prompt and identify the one element that makes it still too generic. Show what a specific version would look like with one concrete edit. Then point to the analysis and ask: which specific word or sentence in the output changed, and why?

- **Common 80+ patterns:** The technique is applied precisely — the role prompt names an industry, a company size, a specific document type, and a specific concern the role holder would have. The few-shot examples are real business outputs the student has actually written. The output scaffold matches how the student's business actually formats that document. The basic prompt is a real, usable prompt. The analysis names a specific change in the output and reaches a clear verdict: "Worth it for this task because X" or "The output improved but the basic version with one extra constraint would have got there — I didn't need the full technique." The student shows they are building judgment about when to use each technique, not just demonstrating that they can apply them.

- **Feedback tone:** Direct, specific, and kind. Quote the student's own prompt text when identifying what works or what needs changing — do not speak in generalities. If the technique is almost there, show exactly what one edit would complete it. If the analysis lacks a mechanism, quote a sentence from the student's text and model what naming the mechanism would look like. End with one concrete next step: either a specific adjustment for resubmission or a suggestion for which technique to try on their next task.

- **Resubmission gating:** Check whether the advanced prompt has been genuinely revised to apply the technique correctly, not just expanded with more words. Check whether the analysis now names a specific mechanism. If the student swapped to a different technique entirely in the resubmission, award credit for the clearer technique choice if the reasoning is sound — technique selection is part of the skill being assessed.
