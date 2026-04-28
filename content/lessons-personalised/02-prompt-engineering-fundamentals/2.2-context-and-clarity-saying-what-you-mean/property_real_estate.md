# Lesson 2.2 — Context and clarity: saying what you mean

**Module:** 02 · Prompt Engineering Fundamentals
**Estimated time:** 30 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites
- Lessons 1.1–1.6 — Claude Essentials (all six)
- Lesson 2.1 — How Claude reads a prompt

## Learning objectives
By the end of this lesson you'll be able to:
- Explain why context is the single biggest variable in whether a prompt produces useful output
- Identify and supply all three types of context: who you are, what the situation is, who the output is for
- Rewrite a vague prompt into a specific one that produces a usable first response
- Include at least one clear "don't" or exclusion in every prompt that has a strong style or format requirement
- Apply the minimum viable context principle to keep prompts efficient without stripping them of what matters

---

## Lesson script

### Why Claude can't read the room

When you sit down with a capable colleague and explain a task, you're doing something you don't notice: you're filling in context. You mention which vendor it's for. You reference the email the buyer's solicitor sent last week. You say "keep it warm — these vendors are nervous about the price guide." All of that happens in a few seconds, without effort.

Claude doesn't get that. It has no memory of your agency, your vendors, your tone, or your rent roll history unless you write it down. Every prompt starts with a blank sheet. Claude is highly capable at following instructions, drawing on information, and producing structured output — but it can only work with what you give it. Nothing more.

This is the most important thing to understand about how prompts fail. The output isn't usually wrong because Claude made a mistake. It's usually generic because you didn't give Claude enough to work with. The fix isn't a smarter AI. It's more context from you.

Context is the single biggest lever you have on prompt quality. It outranks clever phrasing, fancy structures, and any prompt "hack" you've seen on agent forums. A well-contextualised prompt in plain English will beat a framework-compliant prompt with no context, every single time.

This lesson is about how to provide context efficiently — not by writing paragraphs of background for every listing or lease, but by knowing exactly which details matter and including those.

### The three types of context

Context in a prompt falls into three categories. Think of them as three lenses, each one focusing Claude's response differently.

**1. Who you are**

This is your role, your agency, and the relevant parts of your professional situation. It tells Claude which corner of the property market you operate in.

A generic prompt says: "Write a vendor follow-up email after an open home."

A prompt with who-you-are context says: "I'm the principal of a 10-person regional NSW agency. We list mostly residential houses in the $750k–$1.5m range, with some rural lifestyle properties. Most campaigns run private treaty over four to six weeks. We send vendor updates every Saturday after the OFI."

Claude now knows the market, the agency size, the price bracket, and the campaign rhythm. Every word in the response can be calibrated to that reality instead of written for a generic agency in a generic suburb.

You don't need to write your full bio. Two or three sentences that situate you clearly is enough for most tasks. The goal is for Claude to understand whose listing it's working on.

**2. What the situation is**

This is the specific task at hand — not just the task type, but the circumstance behind it.

"Write a difficult vendor email" tells Claude the task type. It doesn't tell Claude what makes this one difficult, who the vendor is, what the dynamic is, or what outcome you're trying to produce.

"I need to email a vendor we've had on the market for five weeks. We've run two opens and one mid-week inspection, with 22 groups through and only one written offer at $50k below the price guide. The vendors are starting to push back on the campaign and have hinted they'd like to test another agent. I want to recommend a price adjustment without sounding like I've given up. They're sensible people and the property will sell at the right number." That's the situation. Now Claude can actually help.

The situation context is the part agents most often skip. They name the task ("write a vendor update," "summarise this contract," "draft a response") but don't say anything about the circumstances that make this specific instance worth thinking about. Those circumstances are where all the nuance lives.

**3. Who the output is for**

This is the audience — who will read it, what they already know, what they care about, and what tone will land with them.

The same campaign update written for a first-time vendor selling the family home of 30 years should read completely differently from the same update written for an investor who owns six properties and just wants the numbers. Claude can calibrate for either — but only if you say who's on the receiving end.

Audience context doesn't have to be long. "For a vendor who's never sold before and is anxious about every offer" or "for an investor client who wants the short version with rental yield implications" — one sentence is often enough to shift the entire register of the response.

When you're drafting anything that's going to a vendor, buyer, tenant, or landlord, always include at least a one-line audience note. It is one of the highest-value lines you can add.

### Vague versus specific: what actually changes

Here is a direct comparison. Same task, different amount of context.

**Vague:**

```
Write a listing description for a new property.
```

Claude will produce something generic. It may have good bones — a hook, a feature list, a location line, a call to inspect. But it won't sound like your office. It won't address this property's specific story. It will be usable as filler, not as a deliverable.

**Specific:**

```
I run a boutique sales office in the Inner West of Sydney. I've just signed
up a 3-bedroom semi in Marrickville — original 1920s details, renovated
kitchen and bathroom, 280sqm block with a north-facing courtyard. The vendors
are downsizing after raising three kids there. Price guide is $1.85m–$2m,
auction in four weeks.

Write a 180-word listing description. The tone should be warm and grounded —
I want buyers to picture living there, not feel like they're reading a sales
brochure. Lead with the lifestyle, not the bedroom count. Don't use phrases
like "must be seen" or "won't last" — I won't put my name to that language.
```

That prompt produces a usable first draft. Every element of it — the office style, the property details, the vendor backstory, the price guide, the tone instruction, the format instruction, the explicit exclusion of tired phrases — narrows Claude's response from the possible range to the useful range.

The output from the vague prompt takes 15 minutes of editing to make useful. The output from the specific prompt might need one pass.

### Saying what you don't want

Most agents write prompts that describe what they want. Fewer write prompts that describe what they don't want. Both matter.

"Write a vendor update" tells Claude what to produce. It doesn't tell Claude what to avoid. So Claude might write an opening that starts with "We are pleased to provide an update on your campaign..." which you'd never send. Or it might use industry jargon your vendor wouldn't understand. Or it might include a generic paragraph about market conditions that adds nothing to this specific campaign.

Adding one or two negative instructions — things to leave out, tones to avoid, formats to skip — often does more work than adding an extra paragraph of positive context.

Good exclusions are specific. "Don't include a generic market commentary section." "Avoid any phrase like 'we're delighted to report' or 'fingers crossed' — that's not how we talk to vendors." "No bullet points — this should read as a personal note." "Don't quote any specific buyer feedback unless I've given it to you."

A vague exclusion ("don't make it too formal") is better than no exclusion at all, but it leaves Claude guessing about where the line is. A specific exclusion ("avoid words like 'leverage,' 'best-in-class,' or 'going forward'") removes all the guessing.

Think of your prompt as a brief to a junior agent. A good brief tells them what to produce and what to steer away from. Both halves are necessary.

### The minimum viable context principle

There is a point of diminishing returns. You don't need to write three paragraphs of background for a task that needs one sentence. You don't need to explain your whole rent roll history before asking Claude to summarise a condition report. Over-contextualised prompts are rare — most agents err in the opposite direction — but they do happen, and they waste your time.

Minimum viable context means: enough detail that Claude can produce a useful response without asking clarifying questions, but no more. The test is simple. Read your prompt back. Is there anything Claude would need to know to complete this task that you haven't included? If yes, add it. Is there anything you've included that doesn't actually affect what you need? Cut it.

For short tasks — quick tenant replies, brief CMA summaries, simple SMS confirmations — two or three sentences of context is usually enough. For complex outputs — listing presentations, owner reports after a difficult quarter, vendor advocate briefs — you might write ten sentences of context, and that's fine. The length isn't the issue. Whether every sentence is doing useful work is.

Here is a rough guide. Ask yourself three questions before sending:

- **Has Claude got enough to know who I am for this task?** If you're a sales principal in a specific market, say so. If you're a BDM writing for a landlord, say so.
- **Has Claude got enough to understand this specific situation?** Name the context that makes this listing, lease, or campaign different from a generic version of the same thing.
- **Has Claude got enough to write for the right audience?** Name the vendor, buyer, tenant or owner who'll receive this, and what matters to them.

If the answer to all three is yes, {{firstName}}, you have minimum viable context. Send it.

### Common mistake → better approach

**Mistake:** "Write me a social media post about a new listing."

This prompt is almost information-free. Claude knows you want a social post and that there's a new listing. That's it. The output will be something like: "JUST LISTED! Stunning property now on the market. DM for details." Postable. Worthless.

**Better approach:**

```
I run a 4-person sales office in Brisbane's western suburbs at {{businessName}}.
We've just listed a renovated Queenslander in Paddington — three bedrooms,
two bathrooms, character details retained, modern kitchen, deck off the back.
Price guide $1.4m–$1.55m, auction in three weeks.

Write an Instagram caption announcing the listing. The audience is local
buyers and people thinking of selling in the area — not industry. Keep it
to two short paragraphs, no hashtag wall (I'll add three at the end myself).
Lead with what it feels like to live there, not the spec sheet. Don't write
"Just listed" as the opener — every agent uses that and it sounds like a
robot wrote it.
```

The second prompt takes about 90 seconds to write. The output is ready to post with at most one edit pass. The difference is not the length — it's that every sentence gives Claude something specific to work with: the office location, the property details, the price guide, the audience mindset, the format, and an explicit "don't" that prevents the most common lazy opener.

---
## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 1,
  "mapping": {
    "Creative & Marketing": 3,
    "SaaS / Software": 5,
    "Professional Services": 3,
    "Trades & Construction": 0,
    "E-commerce & Retail": 1,
    "Health & Wellness": 2,
    "Education & Coaching": 6,
    "Trades & Services": 0,
    "Other": 1
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Onboarding Priya on a Christchurch residential build

**Scenario:** Construction · Welcome email for a new site supervisor

**Prompt:**
```

```

**Why it works:** All three context types are present. Who Dan is (owner, residential construction, Christchurch). What the situation is (new hire from a commercial background, specific first-day logistics). Who the output is for (Priya, and implicitly Dan's direct communication style). The "don't make it formal" constraint plus the team-culture note prevents a stiff corporate tone.

---

### Example 2: Damaged ceramic vase — a Melbourne homewares response

**Scenario:** Retail · Response to a customer complaint

**Prompt:**
```

```

**Why it works:** The business context (premium homewares, local ceramics) tells Claude the brand register. The situation (polite complaint, specific product, specific price) gives Claude the facts. The audience note (a disappointed but reasonable customer) guides the tone. The explicit ban on "Thank you for reaching out" removes the most common hollow opener.

---

### Example 3: Proposal summary for a Sydney physio practice

**Scenario:** Healthcare · Briefing a time-poor business partner

**Prompt:**
```

```

**Why it works:** The audience description ("practising physio, no admin time, knows healthcare but not software procurement") is precise enough to guide both the selection of what to include and the language level. The explicit exclusion cuts the vendor padding. The three-minute reading time gives Claude a useful length target without a rigid word count.

---

### Example 4: Account manager ad for an Adelaide marketing agency

**Scenario:** Professional services · Position description for an agency's first hire

**Prompt:**
```

```

**Why it works:** The who-you-are context (5-person agency, regional clients, specific sectors) stops Claude from producing a generic corporate PD. The situation (first account manager, 15 clients, defined scope) makes the responsibilities specific rather than invented. The two exclusions (not a corporate HR document, no degree requirement) shape the document before a word is written.

---

### Example 5: Mobile phone policy for a Brisbane cafe

**Scenario:** Hospitality · Short staff policy

**Prompt:**
```

```

**Why it works:** The who-you-are context (owner, 9 casuals, hospitality) sets the register. The situation context (good team, a real problem, explicit goal of avoiding resentment) guides the tone. The audience context (18–25 year old casuals) keeps the language plain. The two exclusions ("not legalese," no signature section) prevent the two most common failures on this type of document.

---

### Example 6: Turning a vague support reply into a clear, honest no-for-now response

**Scenario:** Sydney SaaS founder · Replying to a feature request that won't be built

**Prompt:**
```
I run QuotePilot, a quoting tool used by about 240 Australian plumbing businesses. We're a 4-person team in Sydney. A customer, Dave from Northside Plumbing, has emailed asking us to add a Xero two-way sync. We've looked at it and it's not on the roadmap for the next 6 months — the engineering lift is too big for our team size and only a handful of customers have asked.
      
      Dave is one of our top 20 accounts by revenue and has been with us for 3 years. He's a straight-talker, not a fan of corporate fluff.
      
      Draft a reply email from me (Priya, founder) that:
      - Thanks him for the suggestion and explains plainly why we can't commit to it now
      - Notes that we log every request and review the list quarterly
      - Offers the existing CSV export as a workaround in the meantime
      - Keeps it under 180 words, warm but honest
      
      Don't promise it's "coming soon" or hint at a roadmap commitment we can't keep. Don't use phrases like "we hear you" or "your feedback is invaluable" — Dave will switch off.
```

**Why it works:** The prompt layers all three context types — business (4-person team, 240 customers), situation (Dave's specific request, top-20 account), and preference (warm but honest, under 180 words). The exclusions — no "coming soon", no "we hear you" — show the saying-what-you-don't-want principle from the lesson, which stops Claude defaulting to corporate-support clichés.

---

### Example 7: Rewriting a vague request into a specific, parent-ready progress update

**Scenario:** Brisbane tutoring owner · Drafting a hard progress message to a parent

**Prompt:**
```
I own Northside Tutoring, a 3-tutor maths and English service in Brisbane. About 45 active students, mostly Year 7–10. We send progress updates to parents at the end of each term.
      
      I need to write to Sarah, mum of Year 9 student Liam. Liam has missed 4 of the last 8 sessions, hasn't completed homework for 3 weeks, and his last topic test in algebra was a clear step backwards. Sarah pays upfront each term and is generally engaged but I know she works long hours as a nurse and doesn't love being told things are going badly.
      
      Draft a short email from me (Mel, owner) that:
      - Names the specific issues plainly (attendance, homework, the algebra test)
      - Suggests a 15-minute phone call this week to talk through options
      - Doesn't blame Liam or guilt-trip Sarah
      - Stays under 200 words
      
      Don't use educational jargon like "learning outcomes", "differentiated instruction" or "engagement metrics" — Sarah is a working parent, not a teacher. Don't soften so much that the message becomes mush.
```

**Why it works:** All three context types are present — business (3-tutor practice, 45 students), situation (Liam's specific drop-off, Sarah's circumstances), and preference (plain, no blame, under 200 words). The explicit exclusion — no "learning outcomes" or "differentiated instruction" — demonstrates the lesson's "say what you don't want" principle, which stops Claude reaching for school-report jargon.

---

## Graded deliverable

**Title:** Write a context-rich prompt for a real task

**Brief:** Think of a task you currently do manually, have tried with AI and got mediocre results, or know you should be delegating but haven't. It needs a real output — a document, email, summary, post, policy, or report. Write a context-rich prompt that includes all three context types plus at least one clear exclusion, run it in Claude, and submit all four fields below.

**What to submit:**

1. **Task description (2–5 sentences)** — Describe the task and why your current approach (manual, no AI, or basic AI prompts) falls short — what's missing or costing you time.

2. **Your context-rich prompt** — Must include all three context types (who you are, what the situation is, who the output is for) and at least one clear exclusion ("don't," "avoid," or "leave out").

3. **Claude's full response** — Paste Claude's response in full. Do not summarise, cut, or paraphrase.

4. **Reflection (~100 words)** — Which of the three context types made the biggest difference to the output, and why?

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Does the prompt include all three context types with concrete, real detail? Who the student is must be grounded in an actual industry and role, not generic. The situation must describe this specific task instance, not the task category. The audience must name a real person or group and say something about them.
- **Structure (25 pts)** — Is context established before the task instruction, so Claude has what it needs before it reads what to do? Does the prompt flow logically from setup to request? Are format instructions included — what the output should look like, not just what it should contain?
- **Constraint clarity (25 pts)** — Does the prompt include at least one specific "don't," exclusion, or negative instruction? Is it concrete (a named thing to avoid) rather than vague ("not too formal")? Strong submissions often have two or three exclusions that clearly came from real experience of what generic AI output gets wrong.
- **Outcome focus (25 pts)** — Does the reflection go beyond "the output was good"? Does it specifically name which of the three context types made the biggest visible difference to Claude's response, and explain why that element mattered for this particular task?

---

## Notes for the AI grading engine

These notes are read by the grading engine when scoring submissions for this lesson. They are not shown to the student.

- **Reward (high marks):**
  - Prompt contains all three context types with specific, non-generic detail — grader can identify the student's actual industry, the real task situation, and the real audience from reading the prompt alone
  - At least one exclusion is concrete and clearly drawn from experience — it names a specific word, phrase, section, or format to avoid, not just "keep it professional"
  - Context is established before the task instruction — setup precedes request
  - Reflection names one specific context element (by type: who they are / the situation / the audience) and explains what difference it made to the output, with reference to something in Claude's actual response
  - Task description genuinely identifies a current workflow problem — not invented or hypothetical

- **Penalise (dock points):**
  - Prompt is generic or could have been written by anyone — no industry, no real situation, no named audience
  - Context types are missing: any of the three absent or present only as a vague label ("I'm a small business owner" with no further detail)
  - Exclusions are absent entirely, or present only as vague adjectives ("not too technical," "keep it simple") with no specific named thing to avoid
  - Reflection evaluates only positively — "it was great, very useful" with no comparison across context types or no identification of which element mattered most
  - Claude's response is paraphrased or partially pasted rather than submitted in full

- **Common 60–69 patterns (near-pass):** The task is real, and two of the three context types are present, but the third is missing — most often the audience note. The exclusion exists but is too vague to count as specific. The reflection is honest but identifies "specificity in general" rather than naming a particular context type. In feedback, name the missing or weak element, quote where it should appear in their prompt, and give a one-line example of what a stronger version would look like.

- **Common 80+ patterns (excellent):** All three context types are present with enough real detail that the grader can picture the student's actual work situation. At least one exclusion is precise — a named phrase, a named section, a specific thing that generic AI output tends to produce that this student doesn't want. The reflection is analytical: it names the specific context type that moved the needle most, points to evidence in Claude's response, and explains why that element was the key variable for this task. The task description shows genuine self-awareness about where their current process falls short.

- **Feedback tone:** Direct, specific, and kind. Quote the student's own words when identifying wins or fix points — do not give abstract advice. If a context type is missing, quote the prompt and show exactly where to add it. If an exclusion is too vague, give a concrete example of a stronger version based on the student's own task. Always end with one concrete next step: the single most important addition or change that would lift their submission to 70+ or, for those already passing, the one thing that would take them from 70 to 85.

- **Resubmission gating:** If the student resubmits, compare against their first submission stored in the platform. If they added a missing context type, name the improvement explicitly and quote both versions. If they strengthened a vague exclusion into a specific one, acknowledge that directly. If the reflection now names a specific context type where it was previously generic, say so. If the revised submission is substantially unchanged — same context gaps, same vague exclusion, same surface-level reflection — say so plainly and name the one thing still missing before the gate can open.
