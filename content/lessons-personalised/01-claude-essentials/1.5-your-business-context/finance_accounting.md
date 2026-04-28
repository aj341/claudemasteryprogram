# Lesson 1.5 — Your business context

**Module:** 01 · Claude Essentials
**Estimated time:** 25 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites
- Lesson 1.1 — What Claude is, and what it isn't
- Lesson 1.2 — Write your first real prompt
- Lesson 1.3 — Audit your current AI use
- Lesson 1.4 — Map your weekly tasks

## Learning objectives
By the end of this lesson you'll be able to:
- Explain why Claude produces inconsistent results without business context
- Identify the five components every context document needs
- Write a 300–500 word context document for your own business
- Know what to keep out of a context document — and why it matters
- Use your context document to get better output from Claude immediately

---

## Lesson script

### The problem you've probably already noticed

You've done four lessons. You've sent real prompts, seen what Claude produces, and formed a view on where it's useful. But there's a friction point that shows up quickly once you try to use Claude consistently in your practice: every time you open a new session, Claude knows nothing about you.

Not your name. Not your firm. Not your client mix, your usual tone, your compliance constraints, or the tasks you run every week. You're starting from scratch each time. If you want Claude to produce output that fits your actual context, you have to re-explain that context — every single session.

Most accountants and bookkeepers handle this in one of two ways. Either they skip the context entirely and get generic output that needs heavy editing before it could go anywhere near a client file. Or they re-explain it from memory each time, inconsistently, which means Claude gets a slightly different picture of the practice every session. Both approaches produce unpredictable results.

There's a better approach: write it once, paste it in once per session, and be done with it.

That's what this lesson is for, {{firstName}}.

### What a context document actually is

A context document is a short, structured document — 300 to 500 words — that contains the key facts Claude needs to produce useful output for your specific practice. You write it once. At the start of any session where the output needs to actually fit your work, you paste it in before your first prompt.

That's it. It's not technical. It doesn't require any special formatting or software. It's a document you write today, save somewhere accessible, and use for the rest of the course — and beyond it.

The context document works because Claude reads everything in the current session. When you paste your context document at the start, every response you get in that session is shaped by it. Claude knows who you are, what you do, who your clients are, and what the guardrails are. You don't need to repeat yourself. You don't need to re-establish your practice in every prompt.

One important thing before you write: your context document is about your practice, not your clients. It contains your information — your role, your services, your tone, your workflows. It does not contain client names, client TFNs, ABNs, financial details, personal data, or anything else you'd find in a confidential client file. That boundary matters both practically and legally, which the next section covers.

### What to include — the five components

A context document that works covers five things. Not ten. Not twenty. Five.

**1. Who you are and what your practice does.** Your name, your role, your professional designation (registered tax agent, BAS agent, CPA, CA, CFP, mortgage broker), the size of your practice, and a one-sentence description of what you do. This is the foundation. Without it, Claude defaults to generic assumptions that may not fit you — or worse, drifts toward US tax terminology.

**2. Your clients and what they need.** Who do you work with? What do they typically come to you for? What's the standard scope of an engagement? You don't need to name anyone — describe your client type. "Small business owners in hospitality and retail, usually 5–20 staff, needing monthly bookkeeping and quarterly BAS preparation" is exactly the right level of detail.

**3. Your tone and communication style.** How do you write and talk? Formal or conversational? Technical or plain language? Australian English (always, in this profession). Is there anything you never say in client communications — jargon, Big-4 audit tone, specific words you avoid? Claude will match whatever style you specify. If you don't specify, it guesses — and the guess often slides into US accounting language.

**4. Your three to five key recurring tasks.** From your work in Lesson 1.4, you mapped your weekly tasks and identified which ones are best suited to Claude. Name those tasks here. "Draft BAS reminders, write end-of-FY client letters, create first-draft fee proposals, summarise file notes from review meetings, review engagement letters for scope creep." This tells Claude what you'll be asking it to do regularly, so the output is oriented toward those kinds of tasks.

**5. Your constraints.** This is the section most people skip and later regret. Constraints are the rules Claude needs to follow for your practice specifically. What should Claude never produce without your review? What TPB or compliance requirements apply to your work? Are there topics you don't want Claude to speculate on (e.g., specific tax treatments)? Is there information that's confidential and should never appear in outputs? This section is what makes your context document a genuine working document rather than a general introduction.

Here is what a well-structured context document looks like in practice:

```
BUSINESS CONTEXT — [Your Name]

Who I am and what I do:
I'm [Name], principal of a two-person bookkeeping practice based in Adelaide.
We work exclusively with small businesses under 15 staff in hospitality and retail.
Our core services are monthly bookkeeping, BAS preparation, and cash flow reporting.
We use Xero for all clients. Registered BAS agent since 2018.

My clients:
Small business owners — typically owner-operators or working directors. They're
time-poor, not financially trained, and rely on me to translate numbers into
decisions. They need clear, jargon-free communication. Most of my client contact
is by email, with quarterly catch-up calls.

Tone and communication style:
Warm and direct. Plain language — no accounting jargon unless I specifically ask
for it. Australian English (programme, organisation, behaviour, lodgement, etc.).
Sentences that are easy to scan. I never write "please don't hesitate to contact
me" — just "let me know if you have questions."

Key recurring tasks I'll use Claude for:
- Drafting client emails (routine BAS reminders, lodgement-due nudges, late-payment follow-ups)
- Writing first drafts of quarterly cash flow summaries for clients
- Summarising file notes from client catch-up calls
- Reviewing supplier engagement letters to flag payment terms and renewal clauses
- Writing internal process documentation for my part-time admin assistant

Constraints:
- I work in a regulated environment under the TPB. Never produce anything that
  looks like formal tax advice — frame outputs as drafts for my review, not
  finished advice.
- Do not invent specific dollar amounts, ATO rates, or section numbers unless
  I provide them first.
- Confidentiality: do not reference any specific client name, ABN, or business
  detail I share during a session in a way that could appear in a document.
- When in doubt about regulatory content (GST, PAYG, FBT, super), flag it
  clearly and recommend I verify with the current ATO source.
```

That document is around 320 words. It takes about 10 minutes to write. It will save you hours of context-repeating over the course of this program and well beyond it.

### What NOT to include

A context document is not a brain dump. It's not everything about your practice. It's the minimum Claude needs to produce useful output — and nothing more.

There are two kinds of things to keep out.

The first: sensitive client information. Client names, TFNs, ABNs, financial details, personal addresses, medical details, anything about a specific individual that they gave you in confidence. Your context document lives on your device, in your clipboard, potentially in Claude sessions. It should contain zero client-identifying data.

The second: operational detail Claude doesn't need upfront. Your full fee schedule, full staff list, detailed engagement history, long strategy documents, everything you've ever written. These can be shared with Claude during specific sessions when they're relevant. They don't belong in your context document, which needs to stay short enough to paste and scan in under 30 seconds.

An overly long context document also creates practical problems. Claude reads it, but so do you — every time you decide whether this session needs context. If the document is 1,500 words, you'll stop using it. Keep it to 500 words or under.

### How to use it

Once you've written it, using the context document at {{businessName}} is straightforward.

At the start of any session where the output needs to fit your practice specifically — a client email, a fee proposal, a working-paper summary — paste your context document in as the first message. You don't need to say anything else. Just paste it. Claude reads it and uses it for every response in that session.

For quick, low-stakes tasks — a one-line question, a quick fact-check on a section number, a calculation — you don't need the context document. Reserve it for sessions where the output matters.

After you paste it, write your first prompt as normal. You don't need to repeat what's in the context document in your prompt. Just ask for what you need. Claude has the context; your prompt can focus on the task.

Here's the simplest version of how a session with a context document starts:

```
[Paste your full context document here]

Draft an email to a client who has missed their monthly bookkeeping fee payment.
The invoice was due 14 days ago. Polite but clear. Under 120 words.
```

That's it. No re-explaining who you are. No re-stating your tone preferences. The context document has done that work.

### Common mistake → better approach

**Mistake:** Writing a context document that's a general business description — something that reads like the "About Us" page on your firm's website. "We are a client-focused accounting practice committed to delivering exceptional results for small businesses across Australia." This is marketing copy. It tells Claude nothing about what you actually need.

**Better approach:** Write the context document for Claude specifically, not for an audience. Think about what a highly capable junior accountant would need to know on their first day at the firm. What tasks will they do? What rules must they follow? How should they write? What's the one thing they should never get wrong on a BAS reminder or scope letter? That's your context document. Concrete, operational, specific.

---

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 0,
  "mapping": {
    "Creative & Marketing": 3,
    "SaaS / Software": 5,
    "Professional Services": 3,
    "Trades & Construction": 1,
    "Finance & Accounting": 0,
    "Health & Wellness": 6,
    "Education & Coaching": 7,
    "Trades & Services": 1,
    "Other": 0
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Sole-trader bookkeeper in Adelaide

**Scenario:** Bookkeeping practice · Full context document for client communications

**Prompt:**
```

```

**Why it works:** Every section is concrete and operational. The tone section gives Claude specific examples of what to write and what to avoid ("as per" &rarr; "because of"). The constraints section makes the regulatory boundary explicit and explains the reasoning behind it. This document would produce consistent, usable output across dozens of sessions without any re-explaining.

---

### Example 2: Project manager at a family-run builder

**Scenario:** Residential building company · Full context document for site and client comms

**Prompt:**
```

```

**Why it works:** The constraints section reflects the actual regulatory and risk landscape of a licensed builder in Queensland — QBCC references, contract commitments, dispute flagging. This is what makes the document genuinely operational rather than generic. It tells Claude not just what to produce, but what to watch for.

---

### Example 3: Context document + task prompt in use

**Scenario:** Using the context document in a real session · Sarah's late-payment email

**Prompt:**
```

```

**Why it works:** The prompt itself is only two sentences and a constraint. It doesn't need to explain who Sarah is, what tone she uses, or that she writes in plain Australian English — the context document has already done that. The prompt can focus entirely on the specific task. The context document has reduced the prompting overhead to almost nothing.

---

### Example 4: Weak vs strong — a side-by-side

**Scenario:** Spotting a weak context document and fixing it · Marketing consultant

**Prompt:**
```

```

**Why it works:** The stronger version names the exact industry niches, the client psychology ("sceptical of marketing fluff"), and the specific words to avoid. The weak version describes a job category. The strong version describes an actual business — and gives Claude enough precision to produce output Priya won't need to rewrite.

---

### Example 5: Carrying context forward into Lesson 1.6

**Scenario:** Starting the next lesson with your context document

**Prompt:**
```

```

**Why it works:** This shows exactly how the context document carries forward. The student pastes it in, and the task prompt can focus on the goal. Claude has what it needs to give a relevant recommendation — not a generic one. This is the exact workflow the student will use in Lesson 1.6.

---

### Example 6: A complete context document for a 5-person vertical SaaS serving Australian dental clinics

**Scenario:** Brisbane SaaS founder · Full context document for customer comms

**Prompt:**
```
## Context document — ChairFill
      
      **Who we are**
      ChairFill is a 5-person SaaS based in Brisbane. I'm Priya, the founder. We sell appointment-recall and waitlist software to independent Australian dental clinics. We've been running 3 years, have around 240 paying clinics, and are not VC-backed — we grow off revenue.
      
      **Who our customers are**
      Practice managers and principal dentists at single-location or 2-location clinics, usually 4–15 staff. They are time-poor, not tech-fluent, and have been burned before by software that promised more than it delivered. They communicate in short emails between patients.
      
      **Tone for all customer-facing comms**
      Plain English. Helpful but not chirpy. We never use exclamation marks in support replies. We never say "we're so excited" or "amazing news". We sound like a competent friend who runs a tech business, not a marketing department. If we don't know something, we say so.
      
      **Recurring tasks Claude helps with**
      1. Monthly product update emails to all customers
      2. Support replies to feature requests we won't be building
      3. Onboarding email sequence for new sign-ups (5 emails over 14 days)
      4. Release notes for each fortnightly deploy
      5. Outage communications when something breaks
      
      **Constraints**
      - Never commit to a feature, date, or roadmap item I haven't already approved. If a customer asks, the answer is "I'll check with Priya and come back to you."
      - Australian Privacy Act applies — we store patient appointment data on behalf of clinics. Never suggest copying real patient names or DOBs into prompts or emails.
      - Don't write anything I'd be embarrassed to see screenshotted on Twitter.
      - AU English spellings throughout.
```

**Why it works:** The lesson defines the 5 components every context document needs — who you are, your clients, your tone, your 3–5 key tasks, your constraints. This document hits all five with real specifics: 240 clinics, "we never use exclamation marks", a named Privacy Act constraint, and an explicit "never commit to a roadmap item I haven't approved". It's also short enough to paste at the start of every session.

---

### Example 7: A complete context document for a 2-physio allied health clinic

**Scenario:** Geelong physio practice · Full context document for patient communications

**Prompt:**
```
## Context document — Bayside Physio Geelong
      
      **Who we are**
      Bayside Physio is a 2-physio practice in Geelong West run by me, Marco, and my business partner Helen. We've been open 6 years. We have one part-time admin (Jess) who works Tuesday and Thursday mornings. Around 60 active patients on the books at any time, mostly returning.
      
      **Who our patients are**
      Mostly 35–70, local, often referred by GPs at two nearby clinics. Common presentations: lower back pain, post-surgery rehab (knee and shoulder), chronic neck pain, sports injuries in the over-40s. They are not medical professionals. Many are anxious about pain or surgery.
      
      **Tone for all patient-facing comms**
      Warm, plain language, professional. Like a thoughtful neighbour who happens to be a clinician. We never use clinical jargon in patient emails — we say "lower back" not "lumbar spine". We don't use phrases like "wellness journey" or "healing journey". We're calm and matter-of-fact about pain.
      
      **Recurring tasks Claude helps with**
      1. Initial appointment confirmation emails (covering parking, what to wear, what to bring)
      2. Treatment plan summaries after the first consult (3–4 short paragraphs the patient takes home)
      3. 6-month and 12-month recall messages
      4. Replies to patients asking general questions between appointments
      5. Cancellation and reschedule confirmations
      
      **Constraints**
      - Never give a diagnosis, a prognosis, or specific clinical advice in writing. If a patient asks "is my back going to get worse?", the answer is "let's talk about that at your next appointment".
      - Never recommend medication or dosages. Refer to GP.
      - Never copy a real patient name, DOB, or clinical detail into a Claude prompt. Use "the patient" or initials only.
      - Australian Privacy Act and APP 1–13 apply. Health records stay in our practice management software, not in Claude.
      - AU English spellings.
```

**Why it works:** The lesson asks for all 5 components and warns against putting regulated client data into a context doc. This example covers each component with practice-specific detail (60 active patients, named admin, named GP referrers nearby) and explicitly states what stays out: real names, DOBs, diagnoses, prognoses. The "never use clinical jargon" tone rule is concrete enough that Claude can actually act on it.

---

### Example 8: A complete context document for a small after-school maths tutoring service

**Scenario:** Adelaide tutoring owner · Full context document for parent and student comms

**Prompt:**
```
## Context document — Northside Maths Tutoring
      
      **Who we are**
      Northside Maths is a small after-school tutoring service in Prospect, Adelaide, run by me, Anika. I have 3 part-time tutors (all current or recent maths teachers) and we work with around 45 students, Years 4 to 11. We run during school terms only — closed in school holidays.
      
      **Who our clients are**
      Parents pay; students attend. Parents are mostly working professionals, ages 35–55, choosing us because their child is either falling behind or capable but unmotivated. They want straight answers about progress, not edu-speak. The students themselves range from anxious 9-year-olds to laid-back Year 11s prepping for SACE.
      
      **Tone for all comms**
      Two tones, depending on audience.
      - To parents: direct, warm, specific. Plain language. Real examples from the session ("she got 4 of 5 fraction questions right unprompted today"). No jargon, no "21st-century learners".
      - To students (Years 7+ only, with parent cc'd): friendly, encouraging, never condescending. Short sentences.
      
      **Recurring tasks Claude helps with**
      1. End-of-session summaries to parents (3 sentences max, sent same day)
      2. End-of-term progress reports to parents (half a page)
      3. Term-start enrolment confirmation emails
      4. Replies to parent questions about a student's progress or homework
      5. Drafting reminder emails when a parent has missed two consecutive payments
      
      **Constraints**
      - Never give clinical or psychological advice (e.g. "your child sounds dyslexic"). Refer to a GP or educational psychologist.
      - Never give legal or financial advice on payment plans — defer to me.
      - Use age-appropriate language for any message a student might read.
      - Never copy a real student name into a Claude prompt — use first initial only.
      - AU English spellings. SACE not ATAR-only references — we're SA.
```

**Why it works:** The lesson stresses that constraints and tone need to be specific enough for Claude to act on. This document gives Claude two distinct tones (parent vs student) with concrete examples ("she got 4 of 5 fraction questions right"), names the recurring tasks with cadences (same-day summaries, term-start emails), and lists hard constraints — no clinical advice, no full names — that protect the practice without bloating the doc.

---

## Graded deliverable

**Title:** Your business context document

**Brief:** Now write one for your own business. This is the most practically useful thing you'll produce in Module 1 — you'll use it in Lesson 1.6 and well beyond. Then test it: paste it into Claude, send one task prompt, and submit all three fields below.

**What to submit:**

1. **Your context document (300–500 words)** — Covers the five components: (1) who you are, (2) your clients *(if you don't have clients yet, describe the audience you're targeting)*, (3) your tone, (4) three to five key tasks, (5) your constraints.

2. **Your test — prompt + Claude's full response** — Paste the exact prompt you sent using your context document, then Claude's full response. Do not summarise or cut.

3. **One thing you'd add or change (1–2 sentences)** — Reflect on how Claude used your context — what would you sharpen?

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Concrete, observable facts about the student's business: named industry, named client types, named recurring tasks. Vague descriptions score low; specific descriptions like "residential aged-care providers in Victoria, managing compliance documentation" score high.
- **Structure (25 pts)** — All five components present: who you are, your clients, your tone, your key tasks, and your constraints. A document missing constraints entirely scores low regardless of quality in other sections.
- **Constraint clarity (25 pts)** — The constraints section is specific and operational: what Claude should never do, regulatory or confidentiality considerations for the student's industry, and when to flag for review. "Keep it professional" scores low. Naming real regulatory requirements scores high.
- **Outcome focus (25 pts)** — The test prompt and Claude's response show the context document is actually working: Claude reflects the stated tone, addresses the right client type, shows awareness of constraints. The note shows the student read the response critically.

---

## Notes for the AI grading engine

These notes are read by the grading engine when scoring submissions for this lesson. They are not shown to the student.

- **Reward (high marks):**
  - Context document names a specific industry and client type with enough detail to distinguish the business from a generic description — for example, "B2B IT support for medical practices in Western Australia" rather than "IT support business"
  - Tone section includes specific examples of language to use or avoid, not just adjectives ("plain English, no 'pursuant to,' Australian spelling")
  - Constraints section names at least one real regulatory or professional requirement relevant to the student's industry (e.g., AHPRA, QBCC, ASIC, Privacy Act), or explicitly names categories of output that need human review before use
  - Test prompt shows the student actually using the context document — their prompt does not re-explain things already in the context document, indicating they understand the workflow
  - Claude's response in the test reflects the stated tone and client type — i.e., the context document is doing its job
  - The 1–2 sentence note is genuinely reflective: it identifies something specific that the document either missed or could be sharper on

- **Penalise (dock points):**
  - Context document reads as a general business description or marketing copy — "we are dedicated to delivering value to our clients" — without operational specificity
  - Constraints section is absent, or contains only generic instructions ("be professional," "don't make things up") that apply to any Claude session
  - Tone section is only adjectives with no examples or specifics ("professional and warm")
  - Test prompt re-explains things already in the context document, suggesting the student hasn't understood the workflow
  - Claude's response doesn't appear to have been influenced by the context document — generic output that could have come from any prompt
  - Context document is either under 200 words (too thin to be operational) or over 600 words (too long to be practical)

- **Common 60–69 patterns (near-pass):** The document covers most components but the constraints section is either absent or generic. The student has described who they are and what they do well, but hasn't thought through the rules — what Claude should flag, what shouldn't go into outputs, what regulatory environment applies. In feedback, name the missing or thin constraint, explain why it matters for their specific industry, and give them one concrete example of what a better constraint would look like in their context. End by telling them to keep this document open for Lesson 1.6.

- **Common 80+ patterns (excellent):** The context document reads like a real operational brief — someone picking it up with no other context could immediately start working effectively for this business. The constraints section names specific regulatory or professional requirements. The tone section includes at least one concrete example of language to use or avoid. The test prompt demonstrates that the student understands they don't need to repeat the context in their task prompt. The 1–2 sentence note identifies something genuinely useful — a gap in the document, or a way Claude used the context that surprised them.

- **Feedback tone:** Direct, specific, and kind. Quote the student's own words from their context document when identifying wins or gaps — never give generic feedback. If the constraints section is thin, name the specific regulatory or professional context that applies to their industry and explain what a constraint in that area would look like. Always end with one concrete next step: tell the student to save their context document somewhere accessible (desktop, phone notes, a pinned document) because they will paste it into Claude at the start of Lesson 1.6 — the capstone — and that lesson builds directly on what they've produced here.

- **Resubmission gating:** If the student resubmits, compare their revised context document against the stored original. The most common required revision is strengthening the constraints section. If they've added a real, specific constraint where there was a generic one before, name that improvement explicitly — "you've now told Claude that outputs involving ASIC requirements need your review before going to clients, which is exactly the kind of guardrail that matters in your work." If the revision added length without adding specificity, say so directly: longer is not better — sharper is better. Point to the one section that still needs more precision.
