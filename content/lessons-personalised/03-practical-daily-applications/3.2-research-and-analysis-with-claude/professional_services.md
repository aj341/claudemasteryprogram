# Lesson 3.2 — Research and analysis with Claude

**Module:** 03 · Practical Daily Applications
**Estimated time:** 30 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites

- Module 1 complete (all six lessons)
- Module 2 complete (all lessons)
- Lesson 3.1 complete

## Learning objectives

By the end of this lesson you'll be able to:

- Explain what Claude can and cannot do in a research or analysis context — before you rely on it
- Apply the "bring your own material" workflow to any analysis task in your business
- Write a structured comparison prompt that produces a decision-ready output, not just a list
- Prompt Claude for a recommendation, not just a summary
- Evaluate Claude's analysis critically and identify where you need to fill gaps

---

## Lesson script

### What "research" actually means when you're using Claude

Most people hear "research" and think: go out and find information. That's one kind of research. It's not what Claude is for.

Claude is a text processor, not a search engine. It doesn't browse the internet, doesn't check live databases, and doesn't know what happened last week. If you ask Claude to research current software pricing, find today's exchange rate, or tell you what your competitors charged last quarter — you'll get either a refusal or, worse, a confident-sounding answer that's out of date.

But there's a second kind of research that Claude handles extremely well: analysing material you already have.

You have quotes from three software vendors. You have a contract section you don't fully understand. You have fifty rows of staff engagement survey responses. You have a discovery brief that's forty pages long. You have your notes from a scoping call. Any of these can go into Claude, and Claude can work with all of them — compare them, summarise them, extract patterns, flag risks, and tell you what they mean for a decision you need to make.

That's the pattern this lesson teaches, {{firstName}}. Not "ask Claude to find things." Ask Claude to analyse things you bring to it.

### What Claude is good at for research and analysis

Here's the honest list — the things Claude does reliably in an analysis context.

**Synthesising information you provide.** Paste in multiple documents, emails, or datasets and ask Claude to draw them together into a coherent picture. Claude holds everything in the conversation in working memory and can cross-reference it. This is where its large context window earns its keep.

**Comparing options against criteria.** Give Claude a shortlist — three subcontractors, two practice management tools, four candidate responses to a client complaint — along with the criteria that matter to you, and ask it to compare them. Claude produces structured comparisons consistently when you give it structured inputs.

**Analysing documents you paste in.** Engagement letters, scopes of work, terms and conditions, policy documents, survey results. Ask Claude to read and work with the document — extract key terms, flag unusual clauses, summarise the main obligations, note anything missing relative to what you'd expect to see.

**Summarising long material.** A long email thread, a board pack, a sub-contractor's deliverable. Paste it in and ask for a summary shaped around what you need from it — the decisions, the risks, the action items. Claude reads the whole thing and produces what you ask for.

**Asking analytical questions about material you provide.** "Given everything I've pasted in, what's the strongest argument for choosing Vendor A?" "What's missing from this proposal relative to what we asked for?" "What does this feedback pattern suggest about our onboarding process?" These are questions Claude handles well — because the material is in front of it and it can reason across it.

### What Claude is not good at for research and analysis

This matters as much as the previous section, so read it carefully.

**Finding live information.** Claude cannot check current prices, verify whether a vendor is still operating, look up today's exchange rates, or confirm that a regulation is still current. If you ask and Claude answers, it's drawing on training data — which has a cutoff date. Anything time-sensitive needs a current source.

**Knowing your specific industry's current pricing or market conditions.** "What should an HR consultant charge per day in Adelaide?" is a question Claude will attempt — but its answer is based on training data, not the current market. Use Claude to structure the analysis once you have the numbers. Get the numbers from a current source.

**Anything requiring real-time data.** Award rate updates, live tender boards, current job postings, today's weather, interest rate movements. Not Claude's territory.

**Verifying facts that weren't in the material you provided.** If you paste in a contract and ask whether the indemnity clause is standard for consulting engagements, Claude can comment on what it knows generally. But "generally" is not "currently in your specific market." For anything with legal or financial consequences, the analysis Claude provides is a starting point, not a conclusion.

The practical rule: if accuracy matters and the information is time-sensitive or highly specific to your market, use Claude to structure and analyse — but verify the facts from a current, authoritative source.

### The "bring your own material" workflow

This is the most valuable pattern in this lesson. It has four steps.

**Step 1: Gather your raw material.** This is the part Claude can't do for you. Find the quotes, the feedback, the contract, the proposals, the emails. If the material is confidential, you can summarise or paraphrase it before pasting — Claude doesn't require verbatim text, only enough detail to work with.

**Step 2: Decide what question you need answered.** Before you open Claude, be clear on the decision or output you need. "Which subcontractor should I bring on?" "What are the key risks in this client contract?" "What patterns appear in this engagement feedback?" The question shapes the prompt.

**Step 3: Paste in the material and give a structured prompt.** This is the critical step. The prompt needs to tell Claude: what the material is, what your question is, what format you want the output in, and — if relevant — the criteria you're using to evaluate. Specificity here is what separates a useful analysis from a generic one.

**Step 4: Evaluate the output and ask follow-up questions.** Claude's first analysis is a starting point. You may need to push back, ask it to go deeper on one point, or ask it to hold one conclusion up to a specific constraint you didn't mention in the first prompt. Treat the output as a draft, not a final answer.

Here's what a step 3 prompt looks like in practice:

```
Below are quotes from three IT support providers for our 12-person consulting firm.
I need to choose one supplier. My priorities, in order, are: response time (someone
on the phone within 30 minutes when something breaks), communication (clear status
updates without IT jargon), and price (lowest cost is not the goal — value for money is).

For each provider, summarise what the quote tells me about each of my three
priorities. Then produce a comparison table: rows are providers, columns are
my three priorities, cells are brief assessments. Finish with a short paragraph
identifying the strongest option based on this information only.

[Provider quotes pasted below]
```

That prompt gives Claude the material, the decision context, the evaluation criteria, the output format (summary plus table plus recommendation paragraph), and a scope instruction ("based on this information only"). Claude has everything it needs.

### Using Claude to compare and evaluate options

Comparison prompts are one of the highest-value uses of Claude in a professional services context. Here's what makes them work.

**Provide the options as parallel information.** If you're comparing three vendors, include the same categories of information for each — or note explicitly what's missing. Claude compares what you give it. If Vendor A's quote covers five pages and Vendor B's covers half a page, the comparison will reflect that asymmetry.

**State your evaluation criteria explicitly.** Don't make Claude guess what matters to you. "I care about price, turnaround time, and whether they've worked with professional services firms before" is far more useful than "help me compare these." Claude will weight the criteria you name — so name the right ones.

**Specify the output format.** For comparison tasks, a table is almost always more useful than prose. Ask for it explicitly: "produce a comparison table, then a short conclusion." You can always ask Claude to expand on any row of the table in a follow-up.

**Common mistake → better approach**

Mistake: "Compare these two practice management tools for me." Claude produces two paragraphs of balanced description that don't help you decide anything.

Better approach: "I need to choose between WorkflowMax and Accelo for {{businessName}}, a 5-person HR consultancy in Perth. My priorities are: ease of use for consultants with no project-management background, time-tracking that ties cleanly to engagement billing, and integration with Xero. Compare these two options against those three criteria in a table. Then give me a direct recommendation — not a list of pros and cons, an actual call on which one to choose for this situation."

The second prompt gives Claude the context (5-person HR consultancy, Perth), the explicit criteria (ease of use, billing-linked time tracking, Xero integration), the format (comparison table), and a clear instruction about the output type (recommendation, not pros and cons list). Claude responds in kind.

### Turning analysis into a decision

The difference between a summary and a useful analysis is a recommendation.

Claude defaults to balanced. Ask it to compare two things and it will tell you what's good and bad about both. This is useful — but often not enough. You need a call. You need to know what to actually do.

Getting a recommendation from Claude requires saying so explicitly. "Don't just summarise — give me your recommendation based on the information provided." "Make a call. If you had to choose one, which one and why?" "Based on everything I've pasted in, what should I do?"

Claude will give you a recommendation when you ask for one. It will note its uncertainty where relevant. That combination — a direct answer plus honest uncertainty flags — is more useful than a balanced summary that leaves the decision entirely to you.

One more technique: tell Claude the decision has to be made. "I need to choose one of these subcontractors by end of week. Based only on what I've pasted in, which one gives me the strongest case?" The time pressure isn't information Claude uses technically, but framing the task as a real decision with stakes focuses the output in a useful way.

After Claude gives a recommendation, push on it. Ask: "What's the strongest argument against this recommendation?" "What information would change your call?" "What am I most likely to regret about this choice in six months?" These follow-up questions surface the limits of the analysis and give you a more complete picture before you decide.

### A word on confidential material

If the material you need to analyse is commercially sensitive — a client engagement letter, internal financials, staff performance notes — you have two options.

First, check your firm's policy on pasting confidential material into any AI tool. This is not unique to Claude. If there's no policy, consider making one before you rely on this workflow.

Second, know that you can paraphrase or anonymise the material before pasting. Replace client names with "Client A" and "Client B." Replace individual names with roles. Replace specific dollar amounts with ranges. Claude can still do meaningful analysis on paraphrased material — the analytical patterns don't disappear when you remove identifying details.

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 0,
  "mapping": {
    "Creative & Marketing": 4,
    "SaaS / Software": 5,
    "Professional Services": 3,
    "Property & Real Estate": 0,
    "E-commerce & Retail": 1,
    "Health & Wellness": 8,
    "Education & Coaching": 7,
    "Other": 0
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Three cleaning contractor quotes → a recommended supplier

**Scenario:** Comparing supplier quotes · Property management

**Prompt:**
```

```

**Why it works:** Criteria are ranked, not just listed. The format instruction is specific: summary, then table, then recommendation paragraph. The phrase “based only on what the quotes say” scopes Claude to the material provided and prevents it from drawing on general knowledge that may be out of date.

---

### Example 2: A termination clause → plain-English review + solicitor questions

**Scenario:** Analysing a contract section · Retail

**Prompt:**
```

```

**Why it works:** The three-part numbered structure produces a structured output. The final line (“I understand I need legal advice”) is both accurate and keeps the prompt grounded — it signals to Claude that the student wants useful preliminary analysis, not a blanket warning. It does not ask Claude to find or verify external legal standards.

---

### Example 3: 40 cafe comments → themes, dayparts, and outliers worth a second look

**Scenario:** Summarising customer feedback · Hospitality

**Prompt:**
```

```

**Why it works:** “Do not generalise beyond what the comments say” and “if a theme only appears in 3 out of 40 comments, say so” are constraint clarity at its best. Claude is told what counts as evidence and how to be honest about the strength of each finding. This produces an output the cafe owner can trust, rather than a confident-sounding generalisation.

---

### Example 4: A 6-month digital transformation proposal → better-prepared follow-up call

**Scenario:** Evaluating a consultant proposal · Logistics

**Prompt:**
```

```

**Why it works:** The explicit “I am not looking for a verdict” line is honest about what the student needs at this stage. Claude is directed toward preparation, not a yes/no call — which is the right framing when the decision needs more information. The four-part structure produces an output that is directly usable in the follow-up call.

---

### Example 5: Asana vs ClickUp → a single call, with trade-offs named

**Scenario:** Getting a direct recommendation · Creative services

**Prompt:**
```

```

**Why it works:** “Do not give me a balanced summary of pros and cons” is an explicit constraint that overrides Claude’s default balanced output. “Make a call” combined with “tell me what I am trading off” produces a recommendation plus honest trade-off disclosure — which is more useful than a neutral comparison. Asking for the question whose answer would change the recommendation is a technique worth keeping.

---

### Example 6: Structured comparison of support tools, ending in a recommendation

**Scenario:** Sydney SaaS founder · Comparing three customer support tools to pick one

**Prompt:**
```
I'm the founder of QuoteRunner, a 4-person vertical SaaS for Australian plumbers (about 320 paying customers, $18k MRR). I'm about to pick a customer support tool and I've narrowed it down to three: Help Scout, Intercom Starter, and Front. I've pasted the pricing pages and feature lists from all three below. No customer data — just the public marketing pages.
      
      Please do the following:
      
      1. Build a comparison table with these rows: monthly cost for 3 seats, shared inbox quality, knowledge base / help centre, basic automations, integrations with HubSpot and Stripe, mobile app, AU data residency or note if unclear.
      
      2. Under the table, give me a short "watch out for" section — anything in the pricing or terms that could bite a small team (per-seat creep, contact-tier pricing, annual lock-in, etc.).
      
      3. Then give me a direct recommendation: which one would you pick for QuoteRunner today, and what would have to be true about us for the answer to flip to one of the others.
      
      If something isn't clear from the pages I've pasted, say so rather than guessing.
      
      [Paste of Help Scout pricing page]
      [Paste of Intercom Starter pricing page]
      [Paste of Front pricing page]
```

**Why it works:** Textbook bring-your-own-material workflow — the founder pastes the actual pricing pages instead of asking Claude to research them. The structured comparison prompt locks in a table, a risks section, and a recommendation, which is the lesson's "turn analysis into a decision" move. The line "say so rather than guessing" respects Claude's limits.

---

### Example 7: Choosing practice software with a structured comparison and clear recommendation

**Scenario:** Practice manager · Comparing three practice management software options

**Prompt:**
```
I manage Riverbend Allied Health, a 6-practitioner clinic in Ballarat (2 physios, 2 podiatrists, 1 myotherapist, 1 dietitian, around 240 active clients). We're moving off paper-and-spreadsheet and have shortlisted three practice management systems: Cliniko, Nookal, and Halaxy. I've copied the public feature and pricing pages for all three below — no patient data, no real client names.
      
      Please do the following:
      
      1. Build a comparison table with these rows: monthly cost for 6 practitioners, online bookings, SMS recall, HICAPS / Tyro integration, Medicare / DVA claiming, telehealth, group/class bookings (for our Pilates room), Australian data hosting, and what the page says about Australian Privacy Principles compliance.
      
      2. Flag anything I should ask the vendor on a demo call — especially gaps in what the pages actually claim vs. imply.
      
      3. Give me a direct recommendation for a practice that does about 70% physio/podiatry consults, 20% myo/dietitian, and 10% Pilates classes. Tell me what would have to change about us to flip the recommendation.
      
      If a feature isn't clearly described on the page, say "not stated" rather than assuming.
      
      [Pasted pages from Cliniko, Nookal, Halaxy follow]
```

**Why it works:** Bring-your-own-material done right — the manager pastes vendor pages, no patient data, which is the lesson's confidentiality point. The structured comparison forces a table plus follow-up questions plus a recommendation tied to the practice's actual mix, turning analysis into a decision instead of an unranked list.

---

### Example 8: Synthesising parent feedback into themes and a clear next move

**Scenario:** Coaching practice owner · Summarising 40 parent feedback survey responses

**Prompt:**
```
I run Headstart Coaching, a small after-school study skills programme for Year 7–10 students in Hobart (2 coaches, around 55 active students). At the end of Term 1 I sent parents a 6-question feedback survey and got 40 responses back. I've pasted the raw responses below — I've already removed parent and student names, so it's anonymous text only.
      
      Please do the following:
      
      1. Group the comments into 4–6 themes. For each theme: a one-line description, an estimate of how many of the 40 responses touch on it, and one short verbatim quote.
      
      2. Separate "what's working" themes from "what's not working / requests" themes.
      
      3. Flag anything that sounds like a single strong opinion vs. a genuine pattern — I don't want to overreact to one loud parent.
      
      4. Then give me a direct recommendation: the one change I should make before Term 2 starts in three weeks, and the one thing I should leave alone even though it came up. Tell me what evidence in the responses points each way.
      
      If a theme is ambiguous, say so rather than forcing it into a category.
      
      [Pasted survey responses follow — 40 entries, names removed]
```

**Why it works:** Bring-your-own-material in textbook form — the owner has stripped names before pasting, which is the lesson's confidentiality beat. The structured comparison prompt forces themes, counts, and quotes, separates a single voice from a real pattern, and lands on a Term 2 decision — turning 40 raw comments into one ranked action, not just a list.

---

### Example 9: Pulling themes out of 80 patient feedback responses without reading every one

**Scenario:** Physiotherapy clinic owner · Summarising 6 months of patient feedback

**Prompt:**
```
I run BendFlex Physio in Newcastle, three practitioners, and we send a short post-discharge survey to every patient. I have 6 months of responses (about 80) in a CSV — columns are date, practitioner, NPS score, "what we did well", "what we could improve". I'm pasting the de-identified text below.
      
      I want to understand what patients are actually telling us so I can decide what to change. Please:
      
      1. Identify the top 3 themes in "what we did well" and the top 3 in "what we could improve", with a rough count of how often each appears.
      2. Flag any theme that shows up for one practitioner but not the others.
      3. Pull out 2–3 representative verbatim quotes per theme (short).
      4. End with a one-paragraph plain-English summary I could read to my team at next Tuesday's huddle.
      
      Don't recommend changes yet — I want to look at the themes first and decide myself. Names have already been removed; please don't try to re-identify anyone.
```

**Why it works:** This is the bring-your-own-material workflow from 3.2 — Claude isn't researching physio trends online, it's analysing the owner's actual patient data. The prompt gives structure (counts, per-practitioner flags, quotes, summary) and deliberately stops short of asking for a recommendation, keeping the owner's judgment in charge of what to change.

---

## Graded deliverable

**Title:** Real analysis, real material

**Brief:** Bring a genuine analysis task from your business — comparing vendors, reviewing a contract section, summarising customer feedback, evaluating a proposal. Follow the bring-your-own-material workflow: gather the raw material, name the question, write a structured prompt, paste Claude's full response, and reflect honestly on what the analysis got right and what it missed.

**What to submit:**

1. **The decision + the raw material you gave Claude** — Start with one sentence on the decision or analysis you needed. Then paste the raw material (quotes, feedback, contract section, proposal, notes) — or, if it's confidential, a paraphrased version plus one line on why you couldn't paste directly.

2. **The prompt you sent to Claude** — Paste the exact prompt text, copied from Claude.ai. Include the material reference, your question, the criteria you named, and the output format you asked for.

3. **Claude's full analysis — pasted in completely** — Paste Claude's entire response. Do not summarise, do not trim — the grader needs to see what Claude actually produced against your prompt.

4. **Reflection (~80 words)** — Was the analysis usable? What did it get right? What was missing or wrong? What would you change in the prompt if you ran this again? Be specific — name one thing that worked, one thing that missed, and one concrete prompt change.

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Does the student provide actual material to analyse — pasted content, paraphrased material, or real data — rather than a vague description of a hypothetical task? Is the decision or analysis question real and specific to their business context? A prompt built on "imagine I had three vendor quotes" scores low. A prompt built on actual quotes, even paraphrased, scores high.
- **Structure (25 pts)** — Does the prompt tell Claude what kind of output to produce — a comparison table, a numbered list, a recommendation paragraph, a risk summary? Does it sequence the task logically: here is the material, here is the question, here is the format I need? A prompt that just says "analyse" without specifying what shape the analysis should take scores low.
- **Constraint clarity (25 pts)** — Does the prompt specify what is in scope and what is not? Does it name the evaluation criteria Claude should use? Does it tell Claude what to do and what not to do — for example, "make a recommendation" or "do not generalise beyond what the material says"? Absent constraints produce a generic output. Named constraints produce a usable one.
- **Outcome focus (25 pts)** — Does the reflection assess the analysis honestly — including gaps, limitations, or things Claude missed or got wrong? "It was really useful and very accurate" scores low. A reflection that names one thing the analysis got right, one thing it missed, and one prompt change that would improve it next time scores high.

---

## Notes for the AI grading engine

(Not shown to student)

- **Reward (high marks):**
  - Student provides real material — pasted or paraphrased — and the task is clearly live (a real vendor selection, an actual contract, current feedback data)
  - Prompt specifies output format: a table, a numbered breakdown, a recommendation paragraph — something concrete, not just "analyse this"
  - Prompt names evaluation criteria explicitly — what matters, in what order, or with what weighting
  - Prompt includes at least one scope instruction — what Claude should include, exclude, or not generalise beyond
  - Reflection identifies something specific the analysis got wrong or missed, and names a prompt change that would fix it
  - Reflection shows the student actually read and evaluated Claude's output — not just submitted it

- **Penalise (dock points):**
  - Material is absent or clearly hypothetical — "imagine I have three supplier quotes" instead of actual quotes
  - Prompt asks Claude to "research" or "find out" information rather than analyse provided material — student hasn't absorbed the lesson's core distinction
  - No format instruction — student asked Claude to "analyse" without specifying what kind of output
  - No criteria named — Claude is left to guess what matters for the comparison or analysis
  - Reflection is only positive with no critical assessment of what the analysis did or didn't do
  - Student summarises or paraphrases Claude's output in Item 4 rather than pasting it in full

- **Common 60–69 patterns:**
  - The task is real and material is present, but the prompt lacks output format instructions — Claude gives a flowing prose analysis when a table or structured breakdown would be more usable. In feedback: quote the prompt back, show where a format instruction would go, and give a one-line example of what to add.
  - Reflection is honest but surface-level — "the analysis was pretty good but missed some details." In feedback: ask them to name one specific detail it missed and one specific prompt change that would surface it next time.
  - Student brings real material but asks Claude to find or verify external information (e.g. "is this contract clause standard in the industry?") — and then notes in the reflection that Claude wasn't sure. In feedback: explain the distinction between asking Claude to analyse provided material versus asking it to verify external facts, and suggest a revised prompt structure.

- **Common 80+ patterns:**
  - Prompt includes explicit evaluation criteria ranked in order, a multi-part output format instruction (table plus recommendation plus caveat), and a scope constraint ("based only on the material below")
  - Student chose a genuinely difficult analysis task — ambiguous material, multiple competing criteria, or a decision with real stakes — and the prompt is written to handle that complexity
  - Reflection is specific: names one output element that worked, one that missed, and gives a concrete revised prompt instruction — not just "I'd be more specific"
  - Student followed up with Claude after the first response and the submitted prompt or reflection shows evidence of iteration

- **Feedback tone:** Direct, specific, kind. Quote the student's prompt or reflection when pointing out wins or gaps. If the prompt is missing a format instruction, show exactly where it would go and give an example. If the reflection says "it was useful" without specifics, ask: what specifically was useful — and what would you want differently if you ran this analysis every month? End with one concrete next step: either the single prompt revision most likely to improve their output, or a recommendation to apply this workflow to one of the other tasks they mentioned in their Module 1 deliverable.

- **Resubmission gating:** Compare the revised submission against the original. If they added a format instruction where there was none, name that improvement explicitly. If they added explicit criteria where Claude was previously left to guess, acknowledge that. If the reflection shows more critical thinking than the first attempt, say so. If the revision is essentially the same prompt with a few extra words but no new structure or constraints, say so clearly and name the one remaining gap.
