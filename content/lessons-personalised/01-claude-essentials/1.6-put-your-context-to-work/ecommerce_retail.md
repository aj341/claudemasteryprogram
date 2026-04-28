# Lesson 1.6 — Put your context to work

**Module:** 01 · Claude Essentials
**Estimated time:** 30 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites
- Lesson 1.1 — What Claude is, and what it isn't
- Lesson 1.2 — Write your first real prompt
- Lesson 1.3 — Audit your current AI use
- Lesson 1.4 — Map your weekly tasks
- Lesson 1.5 — Your business context

## Learning objectives
By the end of this lesson you'll be able to:
- Combine your context document, prompt skills, and task map into a single productive Claude session
- Open a session correctly — context first, task second — and explain why the order matters
- Apply the write-read-revise loop to a real business task and know when to stop iterating
- Evaluate whether a Claude session delivered genuine value, and articulate what to improve next time
- Identify the prompt pattern and context additions worth keeping for future sessions

---

## Lesson script

### This is where it clicks

The first five lessons were about building the parts. You learned what Claude is and what it isn't (1.1). You learned to write a prompt that actually specifies what you want (1.2). You audited what you've been doing with AI and where the gaps are (1.3). You mapped the tasks in your week that Claude is best suited to (1.4). And you wrote a context document — a structured description of {{businessName}} that gives Claude the background it needs to produce useful, relevant output (1.5).

This lesson is about putting all of those parts together in one real session.

You're not practising here. You're producing an output you can actually use. By the end of this lesson you'll have run a complete Claude session on a meaningful task from your task map, and you'll have something tangible to show for it — not a worked example, not a sample, but your own work.

That's the payoff.

### How to open a session properly

The most important structural habit you can build now is this: open every significant Claude session with your context document as the first message, then send your task prompt as a second, separate message.

Do not combine them into one giant block. Keep them as two distinct messages.

Here's why this matters. When Claude receives a message, it processes everything in it before generating a response. If you paste your context document and your task prompt together, Claude starts writing the answer before it has had the chance to settle into your context. When context comes first — as its own message, with a pause before the task arrives — Claude treats the context as the frame for everything that follows. The difference in output quality is noticeable. You'll get fewer responses that ignore your retail specifics, fewer responses pitched at the wrong customer, fewer responses that feel like they could have been written for any online shop.

The two-message structure also keeps things cleaner when you revise. Your context is on record. Your task prompt is its own clear unit. Your revision instructions can refer to either without restating the whole setup.

Practically, it looks like this:

```
Message 1 — your context document (paste in full from Lesson 1.5):

I run a small homewares brand called Saltbush & Co, based in regional Victoria.
We sell on Shopify and through about 15 boutique stockists nationwide.
Core range: hand-thrown ceramic mugs, linen tea towels, beeswax candles.
About 350 direct orders a month plus fortnightly wholesale dispatches.

My customers are mostly women 35–55 buying gifts and self-treats. Average
basket $95. Strong repeat-buy rate around 40%. They care about provenance
and small-batch detail. They don't respond to discount-driven marketing.

Voice: warm, direct, plain language. Australian English. No marketing fluff,
no shouty caps, no fake urgency. No emojis in customer emails.

Current focus: building wholesale stockists in Sydney and Brisbane, and
launching a new ceramic teapot in late May.

---

Message 2 — your task prompt:

Draft an outreach email to a Sydney homewares boutique that recently opened
their second location. Introduce Saltbush & Co briefly, reference their
expansion specifically, ask for a 20-minute call to discuss whether our
range would suit their stockists. Tone: warm and confident, not salesy.
Under 180 words.
```

That is a well-opened session. Context landed first. Task arrived clean and specific. Claude has everything it needs before it writes a word.

Notice what the context document in Message 1 does that the task prompt in Message 2 doesn't have to. It establishes the voice ("warm, direct, plain language — no marketing fluff"). It names the customer type. It states a current business focus. When Message 2 arrives asking for an outreach email with a "warm and confident, not salesy" tone, Claude isn't guessing at what that means for this particular brand — it already has the frame. That's the practical value of the two-message structure: the context message does the briefing work, the task message does the directing work, and neither has to carry both at once.

### Running the session: the write-read-revise loop

In Lesson 1.2 you learned the write-read-revise loop. This is where you use it in earnest.

When Claude responds to your task prompt, read it before you do anything else. Don't skim it. Read it as the intended recipient would read it — your customer, the boutique buyer, the supplier, whoever the output is for.

Then ask yourself three questions:

1. Does this match the task? Did Claude do what I actually asked?
2. Does this sound like my brand? Does the voice, the level of detail, the framing match how we communicate?
3. Is it accurate? Are there any prices, dispatch dates, or claims that need to be corrected?

If the answer to all three is yes, you're done. Use it.

If something is off, write a targeted revision prompt. Don't restate the whole context. Just name the specific thing that needs to change.

One revision is normal. Two is fine. If you're on your third revision and still not there, stop iterating. Go back to your original task prompt and add the missing context that would have prevented the problem. Three rounds of revision is usually a signal that the initial prompt under-specified something — the audience, the tone, the constraints, the exact format. Fix the prompt, not the output.

A useful revision prompt looks like this:

```
The structure is good but the opening line is too generic — it could be
from any homewares brand. Rewrite just the opening two sentences to make
them specific to Saltbush & Co's small-batch, regional Victoria provenance.
Keep everything else the same.
```

That gives Claude a clear scope, a specific fix, and a constraint that preserves the work already done. It doesn't ask Claude to start over. It asks for the one change that matters.

### What to capture after a session that worked

When a session produces something genuinely useful, spend two minutes capturing what made it work. This is how the context document improves over time, and how you build a library of prompt patterns that produce good results for {{businessName}}.

Most retail operators skip this step. They get a good output, use it, and move on. Then two weeks later they try the same kind of task — say, the next restock-alert email — and start from scratch because they didn't note what worked. Two minutes of capture is the difference between a one-time win and a repeatable system.

After the session, note three things:

**What the prompt pattern was.** Jot down the structure you used — context first, then task, specific constraint on tone, word count specified. If it worked, you want to be able to reproduce it for the next similar task. Keep a simple document — a notes file, a Google Doc, anything you'll actually open again — and paste the structure in. Not the full prompt; just the pattern.

**What was missing from your context document.** If you had to add information in a revision prompt that really should have been there from the start — your preferred tone, a detail about your customer base, a constraint you always want applied — add it to the context document now, while it's fresh. One good session can improve your context document in ways that make the next ten sessions faster.

**What the next task is.** You have a task map from Lesson 1.4. After a session that worked, it's obvious which task to try next. Name it before you close the session. This keeps momentum and stops the task map from becoming a document you filed and forgot.

These two minutes of capture are what separate a one-off Claude win from a compounding habit. The context document that helped you today gets better because of what you learned today. The next session starts from a stronger base.

### Evaluating whether the session delivered real value

There's a simple test you can apply at the end of any Claude session. It takes ten seconds and gives you an honest read on whether the time was well spent.

Ask yourself, {{firstName}}: would I have produced an equivalent output in the same time without Claude?

If yes — if you would have written that customer reply just as quickly, or if the draft Claude produced needs so much editing that you're really rewriting it from scratch — then the prompt needs work. Something was missing that made the output too generic or too far from what you needed. That's a useful diagnosis: the session didn't fail, it told you what to add to the prompt next time.

If no — if Claude produced something you couldn't have drafted that quickly, or something you would have procrastinated on, or something that freed up mental energy for a harder task — then the session worked. Claude saved you meaningful time.

That's the target. Not perfection. Not a response you publish without reading. Meaningful time saved on a real task. When that happens consistently for the same type of task — restock alerts, returns replies, new-product copy — you have a working pattern. It belongs in your prompt library and your task map.

Notice that this test isn't about quality in the abstract. A Claude session that produces a mediocre product description in three minutes might still be worth running if that description would have taken you fifteen minutes to write and twenty minutes of procrastination before you started. The comparison isn't Claude versus perfect — it's Claude versus what you would actually have done without Claude, including the time you'd spend avoiding the task.

If the test produces a "probably no difference," that's useful information too. Some tasks genuinely aren't better with Claude. Others are, but only if you bring a specific kind of prompt. The task map from 1.4 was your first pass at identifying which tasks belong where. The sessions you run now will confirm or update that map. By the end of Module 2, you'll have a much clearer picture of which task types consistently save you time and which ones aren't worth the setup.

### Common mistake → better approach

**Mistake:** Combining the context document and the task prompt into one message, then restarting the session when the output isn't quite right.

The merged message looks like this: three paragraphs about the brand, then a paragraph about the task, all sent at once. Claude responds with something that partially uses the context and partially ignores it. The retailer rewrites the prompt, adds more context to the task, and sends it again — now with a second copy of the context mixed into the task. By the third attempt they're debugging a tangled message instead of working on the actual task.

**Better approach:** Two messages, always. Context document first, sent on its own. Task prompt second. If the output needs revision, send a targeted revision prompt as a third message — not a restatement of the whole setup.

This keeps every message doing one job. The context message frames the session. The task message directs it. The revision message improves the output. When something goes wrong, you know exactly which message caused it and where to fix it.

---

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 1,
  "mapping": {
    "Creative & Marketing": 0,
    "SaaS / Software": 5,
    "Trades & Construction": 1,
    "Property & Real Estate": 3,
    "Finance & Accounting": 2,
    "E-commerce & Retail": 4,
    "Health & Wellness": 6,
    "Education & Coaching": 7,
    "Trades & Services": 1,
    "Other": 1
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Full session — outreach email for a branding studio

**Scenario:** Branding studio · Outreach email to a food-and-hospitality prospect

**Prompt:**
```

```

**Why it works:** The context landed separately so Claude knew the studio's voice before the task arrived. The task prompt was specific about format (under 180 words), purpose (conversation request, not pitch), and tone. The revision was targeted — it named exactly which sentences needed changing and why, and explicitly protected the rest of the draft.

---

### Example 2: Full session — job quote follow-up for a trades business

**Scenario:** Electrical contracting business · Quote follow-up after two weeks of silence

**Prompt:**
```

```

**Why it works:** The context document included the business's communication philosophy ("plain, professional, no jargon") and the specific thing the owner is trying to fix (close rate). Both of those shaped Claude's first response without the student having to repeat them in the task prompt. The revision was specific — two named changes, both small, and an explicit instruction to keep everything else.

---

### Example 3: Opening a session with an updated context document

**Scenario:** Financial planning practice · Updated context doc after Lesson 1.5 grader feedback

**Prompt:**
```

```

**Why it works:** This context document shows the kind of update that happens naturally after Lesson 1.5 grader feedback — additional specificity about clients ("feel talked down to by advisers"), clarity on what the practice doesn't do (investment trading, insurance), and a concrete current project that Claude can use immediately. The student can now open any session this month with this document and Claude will understand the context for the workshop materials without further explanation.

---

### Example 4: Capturing a reusable prompt pattern

**Scenario:** Property management · Reusable listing template captured after a successful draft

**Prompt:**
```

```

**Why it works:** **Why capturing this matters:** The structure — features as bullets from inspection notes, a one-sentence buyer description, an explicit avoid list — produced a usable listing in a single draft across three different properties. Rather than rebuilding the prompt each time, the property manager keeps a template with brackets for the variable parts. The context document handles the agency's voice and positioning. The template handles the listing-specific structure. Together they make a repeatable pattern.

---

### Example 5: Applying the value test honestly

**Scenario:** Retail homewares · Social captions evaluated against the value test

**Prompt:**
```

```

**Why it works:** **The value test, applied:** The owner reviewed the three captions and used one almost verbatim, modified one significantly, and discarded one. Her assessment: she would have spent 20–30 minutes writing these without Claude and would likely have written two options, not three. The session took 8 minutes including the prompt and one revision. Verdict: worth it for this task type. Added to her task map as a weekly Claude task. Added a note to her context document: "Instagram captions: always provide the product name and the specific feeling the product creates — not just the product category." The value test isn't about whether the output was perfect. Two of three captions needed work. But the time equation was clear: faster with Claude, even accounting for revision time. That's the signal that a task belongs on the regular Claude list.

---

### Example 6: Running a full session: context, draft, one revision, then a value check

**Scenario:** Sydney SaaS founder · Drafting a v1 sunset email to existing customers

**Prompt:**
```
Pasting my context document first.
      
      [CONTEXT DOC] QuoteFlow is a 4-person SaaS in Sydney. We sell a quoting tool to Australian plumbers and electricians, around 320 paying customers on $49/month. Founder is Priya. Tone for customer comms: helpful, plain English, never over-promise. Recurring tasks: release notes, support replies, onboarding emails, billing notices. Constraints: no commitments to features not yet shipped; never imply data migration is automatic when it isn't.
      
      Task: draft an email to the 87 customers still on QuoteFlow v1 telling them v1 will be switched off on 30 June 2026. v2 has been live for 8 months. Migration is one-click for most, but customers with custom price books need to export and re-import. Support will help anyone who emails us. Keep it under 180 words, warm but direct, single clear CTA: "Migrate now" button linking to the in-app migration wizard. Australian English. No marketing fluff — these are tradies, they want the facts.
      
      After your draft, I'll tell you what to revise.
```

**Why it works:** This is the full session shape the lesson teaches: context first, then the task, then the write-read-revise loop. Priya pastes the context doc up front so Claude knows the audience and the constraint "never imply data migration is automatic when it isn't", then names the artefact, the cadence (30 June), the length, and the CTA. The closing line sets up the revision step before evaluating against the value test.

---

### Example 7: Context, draft a recall, revise the tone, then judge it against the value test

**Scenario:** Geelong physio practice manager · 6-month recall message session

**Prompt:**
```
Pasting our practice context first.
      
      [CONTEXT DOC] Bayside Physio & Pilates, 2-physio clinic in Geelong, practice manager is Rachel. Around 600 active patient files. Tone: warm, professional, plain language, never clinical-sounding in patient comms. Recurring tasks: appointment confirmations, treatment plan summaries, recall messages, account follow-ups. Constraints: no diagnoses or treatment advice in writing; no implication a recall is medically required; respect Privacy Act and AHPRA advertising guidelines (no testimonials, no scare tactics).
      
      Task: draft an SMS recall to the 142 patients we last saw 6+ months ago who haven't rebooked. Goal is to prompt them to book a check-in if their issue has flared up or a new one has come up. 320-character limit so it sends as one SMS. Friendly, not pushy. Include the practice name, a one-line reason to come in, a booking link placeholder [BOOK_LINK], and an opt-out line. Australian English.
      
      Once I see the draft I'll tell you what to soften — first drafts usually read a bit too clinical for our crowd.
```

**Why it works:** Rachel runs the full lesson loop — paste context, name the task, plan for one revision, then evaluate. The constraint block ("no diagnoses... no implication a recall is medically required") is doing exactly what the lesson calls for: feeding Claude the guardrails up front so the draft doesn't need a major rewrite. The 320-character limit and single CTA make the value test (did this save me time vs writing it myself?) answerable.

---

### Example 8: Context, draft a Term 2 email, revise the ask, then run the value test

**Scenario:** Brisbane maths tutoring owner · Term 2 parent email session

**Prompt:**
```
Pasting my business context first.
      
      [CONTEXT DOC] BrightMaths Tutoring, after-school maths tutoring in Brisbane, owner is Daniel, 1 lead tutor + 3 casual tutors, around 70 active students Years 5–10. Audience for parent comms: time-poor parents, mostly mums, who want their kid to feel confident in maths without extra stress. Tone: warm, plain, no education jargon (no "multimodal", no "learning outcomes"). Recurring tasks: term enrolment emails, weekly lesson summaries to parents, end-of-term reports. Constraints: no guarantees about grade improvements; age-appropriate framing; never compare students to each other.
      
      Task: draft the Term 2 enrolment email going out next Monday. Term 2 starts 21 April and we have 12 spots left across our Tuesday and Thursday sessions. Two specific asks: (1) re-confirm their kid's spot by replying YES, and (2) refer a friend — we'll give both families a free week. 200 words max. Subject line + body. Australian English, friendly, one clear next step per ask.
      
      I'll come back with one round of edits if the tone is off, then decide if it's ready to send.
```

**Why it works:** Daniel walks the lesson's full session arc: context first, then a real recurring task (Term 2 enrolment), then a planned revision loop and a value check ("decide if it's ready to send"). The two-ask constraint and the 200-word cap stop Claude from waffling, and the "no education jargon" rule in the context doc is exactly the kind of guardrail the lesson says belongs in context, not the prompt.

---

## Graded deliverable

**Title:** Your first complete Claude session

**Brief:** Pick one real task from your top three in the task map from Lesson 1.4 — something meaningful, not a throwaway. Run a complete Claude session: your context document from Lesson 1.5 as the first message, your task prompt as the second, and at least one revision if needed. Submit all five items below. This is the most substantial deliverable in Module 1.

**What to submit:**

1. **Your context document from Lesson 1.5 (paste in full)** — The full document, not a summary. If you updated it after grader feedback, use the latest version. Expect 300–500 words for a solid context doc.

2. **The task prompt you sent to Claude** — The exact prompt you sent as Message 2 — copied from Claude.ai, no summarising.

3. **Claude's full response to the task prompt** — The complete response — do not summarise or cut. Paste it in full so the grader can evaluate the real output.

4. **One follow-up or revision (prompt + response) OR a brief note on why none was needed** — Your revision prompt plus Claude's response to it. If you didn't revise, write a short note explaining why the first response was sufficient.

5. **Your retrospective (150–200 words)** — What worked, what you'd change in the prompt or context document, and which task from your task map you'll try next in Module 2.

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Does the context document provide real business detail — industry, clients, voice, current focus — not just generic background? Is the task prompt specific enough that the output is genuinely useful — named task, named audience, stated constraints — rather than a generic test prompt?
- **Structure (25 pts)** — Are all five items present and clearly separated? Is the session structured correctly — context first as its own item, task prompt as its own item, revision prompt (or explanation of its absence) as its own item? Is the submission navigable, not a single undifferentiated block of text?
- **Constraint clarity (25 pts)** — Does the task prompt include format and constraint instructions — word count, tone, what to include or exclude, audience — building on what was learned in Lesson 1.2? Vague task prompts that produce generic output signal the student hasn't applied the prompt skills from earlier in the module.
- **Outcome focus (25 pts)** — Does the retrospective show genuine evaluation? Does the student assess whether the session delivered real value — time saved, useful output, a meaningful task completed — and identify something specific to improve in the prompt or context document, and name their next task with a reason?

---

## Notes for the AI grading engine

These notes are read by the grading engine when scoring submissions for this lesson. They are not shown to the student.

- **Reward (high marks):**
  - Context document shows real business specificity — not generic background, but named clients, named communication style, a current priority that shapes what Claude is being asked to do
  - Task prompt applies skills from Lesson 1.2 — context, task, format, at least one concrete constraint — and is specific enough that the output is plausibly useful rather than a demonstration exercise
  - The session is structured as two separate messages (context, then task) — even if the student only describes this in their retrospective, award credit if they show awareness of the principle
  - Revision prompt (if present) is targeted — it names the specific thing to change, not "make it better"
  - Retrospective is honest and specific: the student names what worked AND what fell short, applies the value test (whether the session saved meaningful time), and identifies a named next task with a reason — not just "I'll keep using Claude"
  - Excellent retrospectives show synthesis across the module — connecting insights from 1.2 (prompt structure), 1.4 (task selection), and 1.5 (context document quality) to explain what they'd do differently

- **Penalise (dock points):**
  - Context document is absent, minimal, or clearly pasted from the Lesson 1.5 template without personalisation
  - Task prompt is generic — could have been sent by anyone in any industry, no concrete constraints, no format instruction
  - Claude's response is summarised rather than pasted in full — this makes it impossible to evaluate the actual quality of the session
  - Retrospective is only positive — "great output, very helpful" without any specific evaluation of what worked, what didn't, or what to improve
  - No revision prompt included and no explanation of why it wasn't needed — students who skip revision without explanation may not have read the output critically

- **Common 60–69 patterns (near-pass):** The task is real and the context document has some substance, but the task prompt lacks constraints from Lesson 1.2 — no word count, no tone instruction, no format specification. The result is a Claude response that's reasonable but generic, and the retrospective acknowledges this without naming what prompt change would fix it. Or the retrospective is thin — it describes the session without evaluating it. In feedback, quote the task prompt back and show exactly where to add one constraint and one format instruction. Then point to the retrospective and ask: did the session save you time? Why or why not? That's the question a stronger retrospective answers.

- **Common 80+ patterns (excellent):** The context document is substantive and current — it reflects the specific business, not a generic description. The task prompt applies all four components from Lesson 1.2. The revision prompt is targeted and precise. The retrospective goes beyond description: the student applies the value test honestly, names a specific improvement to the context document or prompt (not just "be more specific"), and names their next task in Module 2 with a genuine reason. You can picture the student's actual business from reading the submission. The output Claude produced is plausibly something the student will use or has already used.

- **Feedback tone:** Direct, specific, and kind. Quote the student's own words — from their task prompt, their revision, and their retrospective — when identifying wins or fix points. This is the capstone: excellent submissions deserve genuine recognition of what the student has built across Module 1. Always end with one concrete next step: a specific recommendation for Module 2 based on what this student's task map and retrospective reveal about where they'll get the most value next.

- **Resubmission gating:** When comparing a resubmit to the original submission, check for three specific improvements: (1) did the context document gain specificity, (2) did the task prompt gain a constraint or format instruction it was missing, (3) did the retrospective become more evaluative and honest. If all three improved, say so explicitly and name each. If only one or two improved, acknowledge the progress and name the remaining gap directly. If the resubmission is essentially the same as the original with minor additions, say so — and be specific about what still needs to change.
