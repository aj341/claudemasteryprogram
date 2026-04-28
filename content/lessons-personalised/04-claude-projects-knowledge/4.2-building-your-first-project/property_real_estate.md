# Lesson 4.2 — Building your first project

**Module:** 04 · Claude Projects & Knowledge
**Estimated time:** 25 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites

- Module 1 — Claude Essentials (all six lessons)
- Module 2 — Prompt Engineering Fundamentals (all lessons)
- Module 3 — complete
- Lesson 4.1 — What Claude Projects are and why they matter

---

## Learning objectives

By the end of this lesson you'll be able to:
- Choose the right first Project for your business based on immediate, visible ROI
- Write effective custom instructions using the 5-part structure
- Select and prepare knowledge documents that actually help — and know what to leave out
- Run the 3-prompt test to confirm your Project is working before you rely on it
- Know when and how to update your Project as your business changes

---

## Lesson script

### Choosing the right first Project

The single biggest mistake agencies make when setting up their first Claude Project is trying to build the most complete one possible. They pick the broadest, most ambitious use case — "a Project for everything sales-side" or "a Project for the entire rent roll" — and then spend so long trying to configure it that they never actually use it.

Don't do that.

Your first Project should solve one specific problem you have this week. Not next month. This week. The test is simple: could this Project save you a meaningful chunk of time or produce a clearly better output before Friday's open homes? If yes, it's the right starting point. If you're thinking months ahead, you've picked the wrong one.

Here's how to identify it. Look at your task list from Lesson 1.4 — the map of your recurring weekly work. Find the task that has all three of these qualities: you do it often, it's frustrating to do from scratch each time, and it requires consistent context that you're currently re-explaining manually. That's your first Project.

For most agency principals and property managers, one of these three candidates usually wins:

**Vendor and landlord communication.** You write emails and messages to vendors, landlords, and tenants constantly, and Claude doesn't know your agency name, your tone, or any of the recurring topics — open home feedback, rent reviews, condition report follow-ups. A Vendor and Landlord Communication Project changes that. Every message Claude helps you draft already knows who the agency is.

**Listing copy and CMA drafting.** You write similar listing descriptions and CMAs regularly, but each one needs the property's specific features, the vendor's motivation, and the comparables you've selected. A Listings Project makes every draft start from the agency's actual style, not a blank page.

**Property management correspondence.** You send routine inspection reports, lease renewal offers, arrears notices, and end-of-month owner statements but they never quite sound like {{businessName}}. A PM Correspondence Project gives Claude your standard phrasing, your tenancy-law guardrails, and your format preferences so the output is ready to send, not ready to rewrite.

Pick one. Build it properly. Use it for two weeks. Then build the next one.

### Writing effective custom instructions

Custom instructions are the core of any Project. They tell Claude who you are, what this Project is for, and how it should behave every time you use it. A weak set of instructions produces output that's almost right but always needs work. A strong set produces output you can use with minimal editing — straight to the vendor, straight to the landlord.

Use the 5-part structure. Every part matters.

**Part 1 — Who you are.** Your name, your role, your agency name, what the agency does, how many people work there, and what suburb or region you cover. Claude needs the actual facts — not a general category. "I'm an agent" is almost useless. "I'm {{firstName}} Lee, sales agent and licensee in charge at Coastline Realty in Port Macquarie, servicing 280 rent roll properties and listing 8–12 sales at any time across the Hastings region" gives Claude what it needs to calibrate everything that follows.

**Part 2 — What this Project is for.** State the specific purpose of this Project in one or two sentences. This sets the scope. If the Project is for vendor updates after open homes, say so. Claude should understand, from this section alone, what kinds of tasks to expect. It should also understand what's out of scope — don't ask Claude to guess the boundaries.

**Part 3 — What Claude should always do.** List the consistent behaviours you want in every response. Use Australian English. Match the tone you've described. Start every vendor update with the property address and the open home date. Always flag anything that looks like a complaint or a possible Fair Trading issue. These are the standing instructions that apply to every single interaction in this Project.

**Part 4 — What Claude should never do.** This is the section most people skip, and it's where a lot of Projects fail. "Never do" instructions need to be specific and operational — not generic. "Never be rude" is not useful. Claude isn't going to be rude. Useful "never do" instructions sound like this: "Never recommend a specific listing price — I set those after the CMA review." "Never imply that an offer has been accepted before exchange." "Never use the words 'unprecedented' or 'red-hot' in any listing copy." "Never suggest the vendor speak to another agency for a second opinion." These are constraints that have real consequences if violated.

**Part 5 — The default output format.** What does a typical output from this Project look like? Bullet lists? Short paragraphs? A structured email with a subject line? A specific word count range? State it here. If most of your outputs are vendor update emails under 200 words, say so. If most are listing copy with three sections — opening hook, key features, lifestyle paragraph — describe those sections. Format defaults save you the effort of specifying format in every prompt.

Here's what a complete set of custom instructions looks like in practice:

```
WHO I AM
I'm Marcus Webb, sales director at Webb Property Group — a family-run agency
in Brisbane's western suburbs. We list 10–14 properties at a time, mostly
between $850K and $1.6M. We run private treaty and a smaller number of
auction campaigns. I oversee three sales agents and one BDM, and report to
my father, who is the principal.

WHAT THIS PROJECT IS FOR
This Project is for drafting and reviewing vendor-facing communications:
post-OFI updates, price feedback conversations, recommended-adjustment
letters, and responses to vendor questions during a campaign.
This Project is NOT for property management correspondence, internal
operations, or contract documents.

WHAT CLAUDE SHOULD ALWAYS DO
- Write in plain, direct Australian English — no agent jargon unless I use
  it first
- Keep vendor update emails to three paragraphs or fewer unless I ask for more
- When a message involves a price adjustment, structure it as: (1) what the
  campaign has shown, (2) what the market is telling us, (3) what we recommend
- Flag any draft that touches a possible complaint or dispute with the note
  "REVIEW BEFORE SENDING — possible Fair Trading territory"

WHAT CLAUDE SHOULD NEVER DO
- Quote a specific listing price or recommended-price figure — I add those
  manually after the CMA review
- Suggest the vendor speak to a competing agency or get a second opinion
- Use apologetic language that implies the agency is at fault before I've
  confirmed that — write "we're looking into the buyer feedback" not
  "we're sorry the campaign isn't working"
- Include exchange or settlement dates in any draft — those go in only after
  I've confirmed them with the conveyancer

DEFAULT OUTPUT FORMAT
Email format: subject line, then three short paragraphs of plain prose.
No bullet lists in vendor emails. Professional but conversational tone —
not corporate. Under 200 words unless I request otherwise.
```

That is roughly 280 words. It takes 20 minutes to write once. It saves you time and inconsistency across every campaign you run.

### Common mistake → better approach

**Mistake:** Writing "never do" instructions that describe generic AI behaviour — things like "never make things up" or "always be accurate." These are baseline expectations for any Claude interaction. They don't actually constrain the Project's behaviour in ways that matter for the specific work an agency does.

**Better approach:** Write "never do" instructions that reflect the specific risks and standards of selling and managing property. Ask yourself: what's the one thing Claude could produce in this Project that would cause a real problem with a vendor, a landlord, or Fair Trading? A price commitment I didn't authorise? A guarantee about settlement timing? A tone that damages an owner relationship? That's your "never do." It should be specific enough that you can picture the exact output it prevents.

### Selecting and preparing knowledge documents

Custom instructions tell Claude how to behave. Knowledge documents tell Claude what to know. They're different, and it's worth being clear on that distinction before you start uploading files.

Knowledge documents are the reference material Claude draws on when you're working. For a Vendor Communications Project, that might be your standard agency agreement summary, your marketing inclusions, or a one-page description of how each campaign type runs (private treaty, auction, expressions of interest). For a Listings Project, it might be your style rules for listing copy, your inclusions checklist, and a set of past listings that represent the quality and format you're aiming for.

The rule for selecting documents is: include what Claude genuinely needs to know to produce a better output than it could without it. That sounds obvious, but most agencies violate it by treating their Project like a filing cabinet. They upload everything that feels relevant and end up with a cluttered, unfocused Project where Claude has to wade through old condition reports to find the brief.

Keep it focused. A good first Project has two to four documents, not twenty. Each document should answer one of these questions: What does the agency actually offer? What does a finished output look like? What rules apply to this type of work?

What not to include: confidential vendor or landlord records, anything containing personal data about individuals or tenants, financial statements, documents that change frequently enough that Claude's version will be out of date within weeks, and long strategic documents that contain only a small amount of information Claude actually needs. If a marketing playbook is 50 pages but only 5 pages are relevant to listing copy, extract those 5 pages and upload that version.

Prepare your documents before uploading. Remove specific vendor or tenant names if they appear. Check that the document actually represents your current practice — don't upload an inspection process from 2022 if the team has changed it. Give each file a clear filename so you can tell at a glance what it contains.

### Testing your Project before you rely on it

Before you use this Project for real campaigns, run three test prompts. Each test checks a different thing.

**Test 1: Context check.** Ask Claude to summarise what it knows about you and this Project. You're checking that the custom instructions have been read and understood. The response should name {{businessName}}, describe the Project's purpose, and be able to list the key "always do" and "never do" instructions. If Claude gives you a generic response or seems to be missing key facts, your custom instructions need revision.

**Test 2: Task test.** Send a realistic task — the kind of thing you'll actually use this Project for. If it's a Vendor Communications Project, draft a message about a common scenario: a Saturday open home update, a response to a vendor's price question, a recommended-adjustment note after week three of a campaign. Review the output against your expectations. Does it match your tone? Does it apply the format defaults? Does it avoid the things you told it to avoid? This is where you catch the gaps in your instructions before they matter.

**Test 3: Constraint test.** Send a prompt that deliberately triggers one of your "never do" rules. If you told Claude never to quote a specific listing price, ask it to draft a letter and see if a price slips in. If you told it to flag dispute-related content, send a message that describes a vendor complaint and check the flag appears. If your constraints are working, Claude should either comply with the rule or tell you why it can't. If it ignores the constraint entirely, rewrite that instruction to be more specific.

Once all three tests produce results that look right, your Project is ready. Use it for real.

### The maintenance cycle

A Claude Project is not a one-time setup. It's a working document that should evolve as the agency does.

You need to update your Project when any of the following happen: your service inclusions change, your fee structure changes, your team structure changes, you find Claude consistently getting something wrong (that's a sign a rule is missing or unclear), or a worked example you uploaded is no longer representative of what you want now.

The maintenance interval for most agencies is every one to three months. Set a calendar reminder. Open your Project, read the custom instructions, and ask yourself: does this still describe how the agency works? Does the "never do" list still cover the risks {{firstName}} actually faces this quarter? Are the knowledge documents still current?

This is a 15-minute task when you do it regularly. It becomes a two-hour task if you let the Project drift for 12 months without touching it.

The agencies that get the most value from Claude Projects are not the ones who set up the most sophisticated configuration on day one. They're the ones who use the Project consistently, notice what's working and what isn't, and make small adjustments over time. A Project that's been refined over six months is dramatically more useful than one that was carefully planned and never touched again.

---

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 1,
  "mapping": {
    "Creative & Marketing": 1,
    "SaaS / Software": 5,
    "Professional Services": 1,
    "Trades & Construction": 0,
    "Finance & Accounting": 3,
    "E-commerce & Retail": 2,
    "Health & Wellness": 6,
    "Education & Coaching": 7,
    "Trades & Services": 0,
    "Other": 1
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: A short prompt — because the Project carries the context

**Scenario:** Client communication · Residential plumber

**Prompt:**
```

```

**Why it works:** The Project's custom instructions already contain the business name (Blackwater Plumbing), the service area (Sunshine Coast), the tone (warm and direct, never corporate), and a never-do rule about not mentioning competitors. The prompt stays short because the Project carries the standing context. Claude produces a message that sounds like this specific business, not a generic trades company.

---

### Example 2: Scope template + two anonymised examples = on-brand draft in one shot

**Scenario:** Proposal drafting · Marketing consultant

**Prompt:**
```

```

**Why it works:** The Proposal Project's knowledge documents include a scope template, service descriptions for LinkedIn and email marketing, and two anonymised example proposals. The never-do instructions include "never include pricing estimates — I add those manually." Claude drafts a structured, on-brand proposal. The consultant adds the numbers, reviews the scope, and sends — rather than starting from a blank page.

---

### Example 3: A Project that knows the store layout and the POS system by name

**Scenario:** Internal documentation · Retail store manager

**Prompt:**
```

```

**Why it works:** The Documentation Project's custom instructions specify the store name (Trellis & Co, Hobart), the tone (friendly, clear, not condescending), and a format default (numbered steps, plain English, under one A4 page). The knowledge documents include the current store layout, the POS system name, and the previous version of the checklist. Claude produces an accurate, on-brand draft that reflects this specific store — not a generic retail template.

---

### Example 4: Test 3 in action: deliberately trip a never-do rule

**Scenario:** Testing the constraint · Bookkeeper

**Prompt:**
```

```

**Why it works:** The Project's never-do rules include: "Never give a recommendation on accounting method changes — flag for me to address personally or refer the client to their accountant." Claude should produce a draft that acknowledges the question but explicitly flags that the recommendation needs the bookkeeper's review and directs the client to their accountant. If that's what comes back, the constraint is working. If Claude gives a recommendation anyway, the instruction needs rewording — and the student now knows that, pre-deployment.

---

### Example 5: Noticing a gap after 60 days — and fixing it in 15 minutes

**Scenario:** Maintenance cycle · Photographer

**Prompt:**
```

```

**Why it works:** The photographer noticed a consistent gap — a missing piece of information Claude should know by default — and treated the Project as editable rather than fixed. The fix is straightforward: add payment terms to the custom instructions under "what Claude should always do." This is how Projects improve over time: not by rebuilding from scratch, but by small, targeted refinements based on real use.

---

### Example 6: A first Project for drafting customer support replies at a 6-person SaaS company

**Scenario:** Brisbane SaaS founder · Setting up a customer support drafting Project

**Prompt:**
```
I'm setting up my first Claude Project: a customer support drafting assistant for InvoiceLane, our invoicing SaaS for Brisbane tradies. I do most of the support myself with help from one part-timer, around 25-30 tickets a week. I want Claude to draft replies I can edit and send.
      
      Custom instructions (5 parts):
      1. WHO YOU ARE: You're drafting on behalf of InvoiceLane, a 6-person Brisbane SaaS that sells a $49/month invoicing tool to Australian sole-trader tradies (sparkies, plumbers, carpenters).
      2. WHAT YOU DO: Draft email replies to support tickets. Plain text only, no HTML.
      3. TONE: Friendly but direct. Tradie-readable — short sentences, no software jargon. Sign off "Cheers, [name] from InvoiceLane".
      4. WHAT YOU SHOULD DO: Acknowledge the issue in the first line. If a workaround exists, give it before the explanation. Tell the customer what we'll do next and when.
      5. WHAT YOU SHOULD NEVER DO: Never promise a feature is "coming soon" or commit to a release date. Never apologise more than once per email. Never use the words "delighted", "robust", or "ecosystem".
      
      Knowledge documents I'll attach:
      - Product overview (1 page: what InvoiceLane does, what plans, what's NOT in it)
      - Support voice and tone guide (the rules above + 4 sample replies I've sent that nailed it)
      - Top 20 FAQs with current correct answers
      
      Then I'll run the 3-prompt test:
      - Context check: "What product are you supporting and who's the typical customer?"
      - Task test: "Draft a reply to: 'My quote PDFs are coming out without the GST line, what's going on?'"
      - Constraint test: "Draft a reply to: 'When will you add Stripe payments?'" — checking it doesn't promise a date.
```

**Why it works:** Hits every component of the lesson's first-Project framework. All 5 parts of custom instructions are present and named. The 2–4 knowledge documents are concrete and bounded (not "everything we have"). The 3-prompt test maps cleanly: context check confirms grounding, task test exercises the recurring job, constraint test ("when will you add Stripe payments?") deliberately probes the "never promise a date" rule.

---

### Example 7: A first Project for drafting patient communications at a small physio clinic

**Scenario:** Geelong physio practice manager · Setting up a patient communication Project

**Prompt:**
```
I'm Priya, practice manager at Bellbrae Physio & Movement — 2 physios and me, around 90 active patients across Geelong and Torquay. I want my first Claude Project to draft patient emails I can review before sending: appointment confirmations, recall messages, treatment plan summaries, and replies to admin questions.
      
      Custom instructions (5 parts):
      1. WHO YOU ARE: You're drafting on behalf of Bellbrae Physio & Movement, an allied health practice. You write to patients, not for clinicians.
      2. WHAT YOU DO: Draft patient-facing emails and SMS in plain language.
      3. TONE: Warm and professional. Plain English, year-9 reading level. No clinical jargon unless we've already used it with that patient.
      4. WHAT YOU SHOULD DO: Address patients by first name. Confirm date, time, and location. If asked an admin question, answer the admin part and flag any clinical question for the physio to handle.
      5. WHAT YOU SHOULD NEVER DO: Never give clinical advice, diagnoses, exercise prescriptions, or interpretations of symptoms. Never use the phrase "wellness journey" or "holistic". Never include real patient details from one email in another. Never promise an outcome from treatment.
      
      Knowledge documents I'll attach:
      - Practice overview (locations, hours, services, our two physios, what we do and don't treat)
      - Common patient questions (top 15 admin questions with current answers — fees, rebates, cancellation policy, parking)
      - Referral pathways (when to suggest GP, when to suggest podiatry, when to escalate to physio review)
      
      Then I'll run the 3-prompt test:
      - Context check: "What practice are you writing for and who reads these emails?"
      - Task test: "Draft a 6-month recall email to a patient who hasn't been in since October."
      - Constraint test: "A patient asks 'should I keep doing the calf raises if my Achilles is still sore?'" — checking it refers to the physio rather than answering.
```

**Why it works:** Demonstrates every part of the lesson's first-Project setup. The 5-part instructions explicitly carve out scope of practice in the "never do" section ("no clinical advice, diagnoses, exercise prescriptions") — the highest-stakes constraint for an allied health Project. Three bounded knowledge docs, not a document dump. The constraint test is a real clinical question designed to probe whether the boundary actually holds.

---

### Example 8: Setting up a parent communication Project for a primary maths tutoring service

**Scenario:** Brisbane tutoring business · First Project for parent communications

**Prompt:**
```
I'm setting up my first Claude Project for Bright Spark Tutoring, a 3-tutor primary maths service in Paddington, Brisbane. I want it to draft parent communications — weekly progress notes, term wrap-ups, and the occasional difficult message. Please write the custom instructions in 5 parts:
      
      1. Who I am: Owner-operator, ex-classroom teacher, run a small after-school maths tutoring service for Years 3–6, around 45 active students.
      2. What I do: One-on-one and pair tutoring, 45-minute sessions, term-based bookings aligned to QLD school terms.
      3. Tone: Warm, plain-English, parent-friendly. No teacher jargon, no false praise. Write like I'm chatting at the school gate.
      4. What Claude should do: Draft progress notes from my session bullets, term wrap-up emails, and tricky parent replies. Always ask which child and which term before drafting.
      5. What Claude should never do: Never invent observations I didn't give you. Never diagnose learning difficulties or recommend assessments — that's outside my scope. Never use phrases like "21st century learners" or "learning journey".
      
      Knowledge documents I'll add: (1) Practice overview, (2) Tone & phrasing examples (3 past emails parents loved), (3) Common parent FAQs.
      
      Then give me 3 test prompts — one to check it knows my context, one to test a real task, one to test a constraint.
```

**Why it works:** The prompt walks through all 5 parts of custom instructions cleanly, names 3 knowledge documents (practice overview, tone examples, FAQs), and explicitly asks Claude to design the 3-prompt test. The constraint "never diagnose learning difficulties" protects scope of practice, and asking for the test up front turns Project setup into something verifiable rather than hopeful.

---

## Graded deliverable

**Title:** Build your first working Claude Project

**Brief:** This deliverable is the real thing. You're not writing about a Project or planning one — you're building and testing an actual Claude Project for your own business, running the 3-prompt test, and submitting the evidence that it's working. Graded on what you built, not what you planned.

**What to submit:**

1. **Full custom instructions — all five parts** — Paste your complete custom instructions exactly as they appear in your actual Project. All five parts: who you are, what this Project is for, what Claude should always do, what Claude should never do, and the default output format. Real business details throughout — no bracket placeholders.

2. **Knowledge document list — name + one-sentence rationale each** — Two to four documents. For each, list the file name and a one-sentence explanation of why you included it (what Claude needs it for). Or, if you chose not to include any documents, state that and explain why.

3. **Three test prompts + Claude's full responses** — Paste all three test prompts and Claude's full responses. Label each as Test 1 (context check), Test 2 (task test), and Test 3 (constraint test). Do not trim the responses — the grader needs the full output to judge whether the Project is working.

4. **-word honest assessment (80–120 words)** — Is this Project ready to use in real work? Be honest: what's working well? What's still missing or not behaving as expected? What's the first thing you'd refine? "It all worked great" with no critical observation scores low — a strong assessment names a specific gap.

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Do the custom instructions use real business details throughout — named business, actual role, real industry context, specific service descriptions? Instructions that describe a generic category ("small business owner who does marketing") score low. Instructions that read as if they could only have been written by one particular business score high.
- **Structure (25 pts)** — Do the custom instructions follow the 5-part structure: who you are, what this Project is for, what Claude should always do, what Claude should never do, and the default output format? All five parts must be present and substantive. Labelling the parts without filling them in does not pass.
- **Constraint clarity (25 pts)** — Are the "never do" instructions specific and operational? "Never be rude" or "always be accurate" are baseline Claude behaviour. "Never suggest strategies that require more than two staff to execute" or "never include a pricing estimate" are specific, consequential, and testable. Test 3 must actively check one of the never-do rules.
- **Outcome focus (25 pts)** — Does the 100-word assessment honestly identify gaps, not just confirm the Project works? A high-scoring assessment names at least one specific thing that's still missing or imperfect and states what the student would do to fix it. "It all worked great" with no critical observation scores low regardless of the rest of the submission.

---

## Notes for the AI grading engine

(Not shown to student)

- **Reward (high marks):**
  - Custom instructions name the actual business — not a category or a placeholder — and contain specific, observable facts about the business context: industry, team size, client type, service names, geographic location where relevant
  - All five parts of the custom instruction structure are present and substantive; "what this Project is for" explicitly states both what the Project covers and what it does not
  - "Never do" instructions are specific and consequential — they describe outputs that would cause real problems for this business, not generic AI caution
  - Test 3 (constraint test) uses a prompt that genuinely triggers a "never do" rule and the student reports on whether Claude complied — a student who chose a constraint that can't be triggered by a simple prompt and notes that in their assessment should receive partial credit
  - The 100-word assessment names a specific gap or refinement — not a vague sense that something could be better, but a concrete missing piece: a rule that isn't in the "never do" list, a knowledge document that would improve accuracy, a format default that isn't quite right
  - Knowledge document rationale is clear: the student explains why each document helps Claude produce better output, not just that the document is "relevant"

- **Penalise (dock points):**
  - Custom instructions still contain bracket placeholders such as [business name], [industry], [client type] — indicates the student did not complete the personalisation step
  - "Never do" section is absent, or contains only generic constraints that apply to any Claude interaction ("never make things up," "always be professional")
  - Test 1 (context check) shows Claude giving a generic or confused response, and the student did not notice or address this — the Project is not working and the student hasn't caught it
  - Three test prompts are all identical or very similar in type — the student has not tested the Project across different scenarios
  - The 100-word assessment claims the Project is fully ready with no gaps — this is almost never true of a first build and suggests the student did not read the output critically
  - Knowledge documents are listed but no rationale is provided for inclusion

- **Common 60–69 patterns:** Student has built a real Project with genuine business detail but the "never do" instructions are thin or generic. The custom instructions cover who they are and what the Project is for, but constraints are missing or vague. In feedback, quote their "never do" section back and ask: what's the one output this Project could produce that would cause you a real problem? That answer is their missing constraint. Give them one concrete example of what a strong constraint for their industry would look like, then ask them to rewrite the section and resubmit.

- **Common 80+ patterns:** Custom instructions read as if they were written by someone who knows exactly what outputs they need and what could go wrong. The "never do" rules are specific enough to picture the output they prevent. The three tests are genuinely distinct — context check, task, and constraint — and the student reports honestly on what each test revealed. The 100-word assessment names at least one specific gap and a concrete next step for addressing it. The student has included knowledge documents that reflect actual business content, not placeholder or sample files.

- **Feedback tone:** Direct, specific, kind. Quote the student's own words — from their custom instructions, their test prompts, or their assessment — when identifying wins or gaps. Never give generic feedback ("your instructions were good") without quoting what specifically worked. If the "never do" section is thin, quote it and contrast it with what a specific, operational constraint looks like. End every grade card with one concrete next step: the single highest-value change they could make before their next real use of this Project.

- **Resubmission gating:** Compare the resubmission against the original. The most common required improvement is strengthening the "never do" section or making the 100-word assessment genuinely honest about gaps. If the student has added a specific "never do" constraint where there was a generic one before, name that change explicitly and explain why it matters. If the assessment now names a specific gap where before it was only positive, acknowledge that shift as exactly the kind of critical thinking the criterion rewards. If the resubmission is longer but not more specific, say so: "You've added more words but the constraints are still describing baseline Claude behaviour rather than your specific business risks. Try answering: what could Claude produce in this Project that would cost you a client or cause you to send a message you'd regret?"
