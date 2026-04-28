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

When you sit down with a capable junior accountant and explain a task, you're doing something you don't notice: you're filling in context. You mention which client it relates to. You reference the email they sent last week. You say "keep it light — this owner doesn't like Big-4 audit language." All of that happens in a few seconds, without effort.

Claude doesn't get that. It has no memory of your practice, your clients, your tone, or your history unless you write it down. Every prompt starts with a blank sheet. Claude is highly capable at following instructions, drawing on information, and producing structured output — but it can only work with what you give it. Nothing more.

This is the most important thing to understand about how prompts fail. The output isn't usually wrong because Claude made a mistake. It's usually generic because you didn't give Claude enough to work with. The fix isn't a smarter AI. It's more context from you.

Context is the single biggest lever you have on prompt quality. It outranks clever phrasing, fancy structures, and any prompt "hack" you've seen on LinkedIn. A well-contextualised prompt in plain English will beat a framework-compliant prompt with no context, every single time.

This lesson is about how to provide context efficiently — not by writing paragraphs of background for every task, but by knowing exactly which details matter and including those.

### The three types of context

Context in a prompt falls into three categories. Think of them as three lenses, each one focusing Claude's response differently.

**1. Who you are**

This is your role, your practice, and the relevant parts of your professional situation. It tells Claude which world you operate in.

A generic prompt says: "Write a quote follow-up email."

A prompt with who-you-are context says: "I run a 6-person bookkeeping firm in regional Victoria. Most of our clients are in the trades or hospitality sectors. We send fee proposals after discovery calls, and our typical engagement is $400–$800 per month, plus FY tax return work."

Claude now knows the industry, the practice size, the client base, and the price bracket. Every word in the response can be calibrated to that reality instead of written for a generic firm in a generic context.

You don't need to write your full CV. Two or three sentences that situate you clearly is enough for most tasks. The goal is for Claude to understand whose problem it's solving.

**2. What the situation is**

This is the specific task at hand — not just the task type, but the circumstance behind it.

"Write a difficult client email" tells Claude the task type. It doesn't tell Claude what makes this one difficult, who it's going to, what the dynamic is, or what outcome you're trying to produce.

"I need to email a long-term client — we've worked with them for three years — to let them know we're increasing our monthly bookkeeping fee by 20%, effective from 1 July. We've absorbed rising software costs (Xero, MYOB) for two years and can't hold the line. The increase is fair and I don't want to lose this client. They're a good payer and easy to work with." That's the situation. Now Claude can actually help.

The situation context is the part people most often skip. They name the task ("write a fee proposal," "summarise this ATO ruling," "draft a response") but don't say anything about the circumstances that make this specific instance worth thinking about. Those circumstances are where all the nuance lives.

**3. Who the output is for**

This is the audience — who will read it, what they already know, what they care about, and what tone will land with them.

The same information written for a 60-year-old tradesperson who's never touched accounting software should read completely differently from the same information written for a startup founder who reads management accounts every Monday morning. Claude can calibrate for either — but only if you say who's on the receiving end.

Audience context doesn't have to be long. "For a client who's not comfortable with terms like accruals or working capital" or "for my business partner who has a CA background and wants the short version" — one sentence is often enough to shift the entire register of the response.

When you're drafting anything that's going to another person, always include at least a one-line audience note. It is one of the highest-value lines you can add.

### Vague versus specific: what actually changes

Here is a direct comparison. Same task, different amount of context.

**Vague:**

```
Write a fee proposal for a new client.
```

Claude will produce something generic. It may have good bones — an intro, a scope section, pricing, a close. But it won't sound like {{businessName}}. It won't address this client's specific situation. It will be usable as a template, not as a deliverable.

**Specific:**

```
I run a 4-person accounting practice in Perth. We've just had a discovery
call with a cafe chain that wants compliance work across three locations
— monthly bookkeeping, quarterly BAS, and FY tax returns. They mentioned
they're "Xero-confident" but fee-conscious, and the owner asked twice
about how we handle scope creep on ad-hoc questions.

Write a fee proposal introduction and scope section. The tone should be
confident but not salesy — I want them to feel like they're hiring a
specialist, not being pitched to. Keep the scope section to dot points.
Don't include pricing in this section — that comes later in the document.
```

That prompt produces a usable first draft. Every element of it — the firm size, the client type, the client's stated concerns, the tone instruction, the format instruction, the explicit scope exclusion (no pricing) — narrows Claude's response from the possible range to the useful range.

The output from the vague prompt takes 15 minutes of editing to make useful. The output from the specific prompt might need one pass.

### Saying what you don't want

Most accountants write prompts that describe what they want. Fewer write prompts that describe what they don't want. Both matter.

"Write a fee proposal introduction" tells Claude what to produce. It doesn't tell Claude what to avoid. So Claude might write an opening that starts with "We are delighted to present..." which you hate. Or it might use jargon that your tradie client wouldn't understand. Or it might include a firm history paragraph that you never put in proposals.

Adding one or two negative instructions — things to leave out, tones to avoid, formats to skip — often does more work than adding an extra paragraph of positive context.

Good exclusions are specific. "Don't include a firm history section." "Avoid any phrase like 'we are pleased to offer' or 'we look forward to a long and prosperous engagement' — I hate that language." "No bullet points — this should read as prose." "Don't make assumptions about the client's budget or whether they're already on Xero."

A vague exclusion ("don't make it too formal") is better than no exclusion at all, but it leaves Claude guessing about where the line is. A specific exclusion ("avoid words like 'pursuant to,' 'herewith,' or 'in accordance with'") removes all the guessing.

Think of your prompt as a brief. A good brief tells the writer what to produce and what to steer away from. Both halves are necessary.

### The minimum viable context principle

There is a point of diminishing returns. You don't need to write three paragraphs of background for a task that needs one sentence. You don't need to explain your whole practice history before asking Claude to summarise a document. Over-contextualised prompts are rare — most accountants err in the opposite direction — but they do happen, and they waste your time, {{firstName}}.

Minimum viable context means: enough detail that Claude can produce a useful response without asking clarifying questions, but no more. The test is simple. Read your prompt back. Is there anything Claude would need to know to complete this task that you haven't included? If yes, add it. Is there anything you've included that doesn't actually affect what you need? Cut it.

For short tasks — quick email replies, brief summaries, simple file note conversions — two or three sentences of context is usually enough. For complex outputs — fee proposals, scope-of-services letters, client-facing tax memos — you might write ten sentences of context, and that's fine. The length isn't the issue. Whether every sentence is doing useful work is.

Here is a rough guide. Ask yourself three questions before sending:

- **Has Claude got enough to know who I am for this task?** If you're a sole-practitioner BAS agent, say so. If you're a senior accountant writing for the partner group, say so.
- **Has Claude got enough to understand this specific situation?** Name the context that makes this task different from a generic version of the same thing.
- **Has Claude got enough to write for the right audience?** Name the person or group who'll receive this, and what matters to them.

If the answer to all three is yes, you have minimum viable context. Send it.

### Common mistake → better approach

**Mistake:** "Write me a social media post about our new service."

This prompt is almost information-free. Claude knows you want a social media post and that you have a new service. That's it. The output will be something like: "Excited to announce our latest offering! [Service] is now live. Contact us today to find out more." Publishable. Worthless.

**Better approach:**

```
I own a 3-person bookkeeping practice in Brisbane. We've just launched a
new service: a half-day "BAS health check" for small business owners
(under 20 staff) who suspect their bookkeeping has been letting through
GST coding errors for the last few quarters. Fixed fee, $595, includes
a written summary and a remediation plan if needed.

Write a LinkedIn post announcing this service. The audience is small
business owners — not other bookkeepers. They're worried about ATO
attention but don't know where to start. Write it in plain language.
One paragraph, no bullet points. Lead with the problem the business
owner has, not with us. Don't write "Excited to announce" — I want it
to sound like an actual person wrote it.
```

The second prompt takes about 90 seconds to write. The output is ready to post with at most one edit pass. The difference is not the length — it's that every sentence gives Claude something specific to work with: the practice size, the service details, the price, the audience mindset, the format, and an explicit "don't" that prevents the most common lazy opener.

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
