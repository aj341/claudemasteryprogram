# Lesson 5.3 — Introduction to Claude API and automation

**Module:** 05 · Extended Capabilities
**Estimated time:** 20 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites

- Lessons 1.1–1.6 (Module 1: Claude Essentials — complete)
- Lessons 2.1–2.6 (Module 2: Prompt Engineering Fundamentals — complete)
- Lessons 3.1–3.5 (Module 3: Practical Daily Applications — complete)
- Module 4 — complete
- Lesson 5.1 — Extended capabilities overview
- Lesson 5.2 — Prompts at scale: Projects and system prompts

---

## Learning objectives

By the end of this lesson you'll be able to:
- Explain what the Claude API is in plain English — and why it matters for business owners who aren't developers
- Name the three main no-code automation tools that connect to Claude and describe when to use each
- Map a real automation from trigger to output using one of three AU/NZ small business examples as a model
- Understand API pricing in practical terms — what an automation actually costs per month
- Apply the "do it manually first" rule to assess whether a task in your business is ready to automate

---

## Lesson script

### What the API actually is — in plain English

You've been using Claude through a chat interface. You type, Claude responds, you read it. That's the front end — the part you see and interact with directly.

The API is the back end. API stands for Application Programming Interface, but ignore that for now. What it means in practice: the API is a way for other software to talk to Claude directly, without you being in the middle.

Think of it like this. When you call a client to discuss a fee proposal, you're the human in the loop. But if your firm has an online booking form, prospects can request a discovery call at any time without anyone picking up a phone. The API is the online booking form. Other tools and apps can send requests to Claude and receive responses automatically — without you having to type anything, and without you having to be there at all.

That's the key shift, {{firstName}}: the API lets Claude respond to triggers — not just to your manual prompts. A new prospect form submission comes in, Claude drafts a response. A Xero report is updated, Claude generates a summary. A batch of client emails arrives, Claude summarises each one. All of this happens in the background, driven by events, not by you sitting at a keyboard.

You don't need to understand the technical side of the API to benefit from it. But you do need to understand what it makes possible — because that shapes the decisions you'll make in this lesson about where automation might fit at {{businessName}}.

### No-code tools: the bridge between Claude and your other software

Connecting your practice tools to Claude's API directly would require a developer. But there's a category of software called no-code automation tools that does that connecting work for you — through a visual interface, without any programming.

The three most relevant for AU/NZ practices right now are Zapier, Make, and n8n.

**Zapier** is the most widely used and has the gentlest learning curve. It works on a "trigger and action" model: something happens in one app, Zapier does something in another. It has a native Claude integration, which means you can include a Claude step in any Zap — send Claude some text, get a response back, pass that response somewhere else. Zapier is subscription-based and the pricing scales with how many automated tasks you run each month. For most small practices testing a first automation, the free tier or the Starter plan is enough to begin.

**Make** (formerly Integromat) is more visual and more flexible than Zapier. You build workflows as flowcharts — each step is a module, and you can branch, filter, and loop through data in ways Zapier doesn't support as easily. It tends to suit practitioners who want more control over what happens at each step. The learning curve is steeper, but the pricing is generally more cost-effective at higher volumes.

**n8n** is an open-source option. You can run it yourself (free, but requires some technical setup) or use their hosted version (paid). It's the most flexible of the three but also the most technical. For most accountants without a developer, n8n's self-hosted option is probably a step too far — but their cloud version is a genuine option if you want deep customisation without vendor lock-in.

The practical takeaway: if you want to test your first Claude automation without a developer, start with Zapier. It has the most tutorials, the largest community, and the clearest interface for someone building their first workflow. Make is worth exploring once you've run a few Zaps and want more flexibility. n8n is for when you've outgrown both and want to own the infrastructure.

None of these tools require you to write code. What they require is clear thinking about what you want to happen — which is what this lesson's deliverable is designed to develop.

### Three real automations for AU/NZ small businesses

Here are three specific examples of Claude-powered automations that practitioners have built using no-code tools — no developer required.

**1. Auto-drafting responses to discovery form submissions**

Trigger: A new prospect submits the discovery form on your firm's website (via Typeform, JotForm, Gravity Forms, or similar).

What Claude does: Receives the form data — name, entity type, services they're after, current accountant — and drafts a personalised response email that acknowledges the specific enquiry, mentions relevant experience with that type of client, and proposes a next step (usually a 20-minute discovery call).

Output: A draft email, either sent automatically or saved to your drafts folder for review before sending.

This automation works well because discovery responses are high-stakes (first impression) and often repetitive (the same questions, the same type of small business, the same services). Once you've done this manually twenty times and know what a good response looks like, automating the first draft saves fifteen to twenty minutes per enquiry while keeping the quality consistent.

**2. Summarising incoming email threads**

Trigger: An email lands in a specific label or folder (e.g., "Client Queries" or "Supplier Queries") in Gmail or Outlook.

What Claude does: Reads the email thread and produces a three-to-five bullet summary: what the situation is, what's been agreed, what's outstanding (a missing receipt, an unsigned engagement letter), and whether any action is required from you.

Output: The summary is either sent to you as a daily digest, added as a file note in your practice management system, or posted to a Slack channel your team monitors.

This works for accountants managing a high volume of client communications who need a quick read on each thread without opening and scrolling through every email chain. It's especially useful at end of FY when client correspondence spikes and a single client can have a 30-message thread about substantiation receipts.

**3. Generating a weekly report from a spreadsheet**

Trigger: A scheduled time trigger — every Monday morning at 7am, or every Friday at 5pm.

What Claude does: Receives data from a Google Sheet (lodgement progress, fees-billed-vs-target, WIP balances, BAS deadlines coming up — whatever you track) and produces a plain-English weekly summary: what's on track, what's slipping, what needs attention.

Output: A formatted report emailed to you, posted to Slack, or added to a shared Google Doc the partners review.

This works because pulling meaning from numbers is exactly the kind of task Claude does well — and it's a task most practice principals do manually at the end of every week, spending twenty to thirty minutes writing a summary they could generate in thirty seconds. Once you've done it manually enough times to know what a good weekly partner update looks like, automating it is straightforward.

### What automation actually costs

The API is priced differently from Claude Pro. Claude Pro is a flat monthly subscription — you pay regardless of how much you use it. The API is usage-based — you pay per token, where a token is roughly three-quarters of a word.

Current pricing for Claude Sonnet (the model most automation workflows use, as at April 2026): approximately USD $3 per million input tokens and $15 per million output tokens. To put that in practical terms: a typical discovery form response — processing a 200-word form submission and generating a 150-word draft email — costs roughly a fraction of one cent. Running that automation a hundred times a month costs less than a dollar in API fees alone.

The real costs in automation are:
- The no-code tool subscription (Zapier Starter is around AUD $35–50/month at current rates, Make and n8n are comparable)
- Your time setting up and testing the workflow (typically two to four hours for a first automation)
- Ongoing review time, because automated outputs still need a human eye, especially early on — and especially in a regulated practice where the TPB still holds you responsible for what goes out under your name

The API cost itself is rarely the barrier. The setup time and the discipline to test properly before relying on it — those are the real investments.

### When NOT to automate yet

Here is the most important concept in this lesson, and the one most accountants skip.

Automate only what you have already done repeatedly by hand, and know works.

If you haven't manually responded to twenty discovery form submissions and developed a sense of what a good response looks like — including the tone, the length, the specific things to mention, the things to avoid (anything that reads as finished tax advice, anything that commits to a fee before a scope call) — you don't yet know what "good" looks like. You can't configure Claude to produce good automated outputs if you haven't defined what good means for your practice. You'll build an automation that produces mediocre outputs at scale, and you won't notice because you're no longer in the loop.

The "do it manually first" rule is not about being cautious. It's about being effective. An automation built on a well-tested manual process runs reliably and produces consistent results. An automation built before you've figured out the process is just a faster way to scale confusion — and possibly create a TPB exposure.

Before you automate any task, ask yourself three questions:
- Have I done this task manually at least ten to twenty times?
- Do I have a clear sense of what a good output looks like — could I write the standard down?
- Would I be comfortable reviewing the automated output once a week rather than every time?

If the answer to any of those is no, the task is not ready to automate. Keep doing it manually. Keep refining your prompt. Get to the point where your manual Claude outputs are so consistent you're almost copying and pasting from one to the next. That's when automation adds value.

### Common mistake → Better approach

**Mistake:** Building an automation for a process you've never actually done manually.

A practitioner reads about automating discovery responses, thinks "great idea," spends a weekend building a Zapier workflow with Claude, and switches it on. The automation sends responses — but they're generic, they don't reflect the practice's voice, they don't address the right client concerns, and the conversion rate from enquiry to discovery call drops. The principal eventually turns it off, concludes "AI doesn't work for accounting," and goes back to writing responses by hand.

**Better approach:** Do the manual version first. Open Claude, paste in a real discovery form submission, write a prompt that produces a response you'd actually be proud to send. Do this fifteen times. Refine the prompt each time something doesn't land. Once your prompt reliably produces a response that feels like you wrote it — and you can see the quality in the results — then you have everything you need to build the automation. The prompt you've refined manually becomes the system prompt in your Zap. The inputs you've been pasting manually become the variables the form data fills in. The automation doesn't replace your judgment. It runs the judgment you've already developed.

---

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 4,
  "mapping": {
    "Creative & Marketing": 3,
    "SaaS / Software": 5,
    "Professional Services": 4,
    "Trades & Construction": 0,
    "Property & Real Estate": 1,
    "Finance & Accounting": 4,
    "E-commerce & Retail": 2,
    "Health & Wellness": 6,
    "Education & Coaching": 7,
    "Trades & Services": 0,
    "Other": 4
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Auto-draft a warm response to new website enquiries

**Scenario:** Enquiry form automation · Brisbane residential builder

**Prompt:**
```

```

**Why it works:** **Why it's automation-ready:** The prompt defines a clear role, a numbered task list, a hard length constraint, and feeds in real form data. Turned into a Zap with Name, Project type, and Message as variables pulled from Typeform, every submission runs through identical instructions. Trigger: new Typeform submission. Claude action: the prompt above with form data injected. Output: saved as a Gmail draft for review.

---

### Example 2: A structured triage summary instead of reading every thread

**Scenario:** Email thread summary · Residential property manager

**Prompt:**
```

```

**Why it works:** **Why it's automation-ready:** The output scaffold defines every field the property manager needs, including urgency with a reason. Run automatically across twenty threads each morning, every summary has the same shape and takes the same time to scan. Trigger: email lands in Gmail label "Client Enquiries." Claude action: the prompt above with the thread body injected. Output: a daily digest email.

---

### Example 3: A plain-English trading summary every Monday morning

**Scenario:** Weekly report from a spreadsheet · Café owner

**Prompt:**
```

```

**Why it works:** **Why it's automation-ready:** The output scaffold forces the same shape every week regardless of the numbers. The "one thing to watch" field forces Claude to be actionable, not descriptive. Trigger: scheduled Monday 7am. Claude action: the prompt above with the week's Google Sheet data injected. Output: emailed to the owner and posted to a shared Slack channel.

---

### Example 4: Why this automation fails the three-question test

**Scenario:** Not ready yet · Freelance designer at project 15

**Prompt:**
```

```

**Why it works:** **Why it's not ready:** "Sounds like me" isn't defined. No pricing structure. No workload check. With only 15 projects completed, there's no stable, repeatable response pattern yet — and a misquoted price in an automated email has real consequences. The right move: keep doing this manually, add a constraint to the prompt each time, and revisit automation at project thirty. Saying "not ready" is a pass, not a fail.

---

### Example 5: Eight months of manual runs has stabilised the pattern

**Scenario:** Ready to automate · Bookkeeper's weekly payroll summary

**Prompt:**
```

```

**Why it works:** **Why it's ready:** The bookkeeper has run this prompt — or close to it — every week for eight months. The format is stable. The anomaly field catches the one thing that varies. The "action required" field surfaces the decision point for the client. Connected to her payroll data source in Make, the only variable is the numbers — and she reviews the output before sending. That's the right level of oversight for a financial document.

---

### Example 6: Running the 3-question readiness test on support ticket triage before building it

**Scenario:** SaaS founder · Support triage automation candidate

**Prompt:**
```
I run QuoteRail, a quoting tool for AU trades (4-person team, 380 paying customers). I'm thinking of automating support triage: form submission &rarr; Claude classifies (billing / bug / how-to / feature request) and drafts a first reply &rarr; I review in Front and send. Before I build it in Make, run me through the 3-question readiness test honestly.
      
      Context:
      - I get 25-40 tickets/week, mostly via Intercom form
      - I currently spend roughly 6 hours/week on first-touch replies
      - I've manually used Claude to draft replies maybe 8 times so far — results have been roughly 70-75% usable
      - Last bug-related reply Claude drafted referenced a feature we sunsetted in February
      
      For each of the three questions (saves &gt;30 min/week, basic prompt gets 80% right, used &gt;monthly), give me: my answer, your read on it, and what I'd need to do to flip a "no" to a "yes". Then give me a verdict: ready, not ready, or ready-with-conditions. Don't be polite — if I'm not ready, say so.
```

**Why it works:** This is the 3-question readiness test applied exactly as the lesson teaches it — with honest inputs (only 8 manual runs, 70-75% accuracy, an outdated-feature hallucination). The prompt forces a verdict and asks what would flip a "no" to a "yes", which surfaces the "do it manually 10+ times first" rule without the founder having to know the answer in advance.

---

### Example 7: Mapping a recall-message automation with the 3-question test and a strict no-clinical-data rule

**Scenario:** Physio practice owner · Recall message automation candidate

**Prompt:**
```
I own Bayside Physio in Mentone (3 practitioners, 1 admin, ~140 active clients). I want to map an automation: weekly export from Cliniko of clients due for 6-month recall &rarr; Claude drafts a personalised SMS + email &rarr; admin reviews in a Google Sheet &rarr; sends from Cliniko. Walk me through whether to build this.
      
      What I'll send to the API (and ONLY this): first name, last service type from a fixed list (initial / follow-up / dry needling / exercise review), months since last visit, preferred channel. NO clinical notes. NO Medicare numbers. NO injury details. NO date of birth.
      
      Run the 3-question readiness test:
      1. Will it save &gt;30 min/week? I currently spend ~90 min/week on recalls.
      2. Does a basic prompt get 80% right? I've drafted 12 manually with Claude — admin edited 2 lightly, rest sent as-is.
      3. Used &gt;monthly? Recalls run weekly.
      
      Then flag any Privacy Act 1988 / APP issues with what I've scoped, and tell me one thing I might've missed about reviewer fatigue once volume goes up.
```

**Why it works:** The owner explicitly scopes what data crosses the API boundary (no clinical notes, no Medicare numbers) before applying the 3-question test — modelling the "do it manually 10+ times first" rule with 12 real drafts. The reviewer-fatigue ask shows the lesson's point that automation introduces new failure modes a manual process doesn't have.

---

### Example 8: Honest "not ready yet" check on enrolment welcome email automation mid-term

**Scenario:** Tutoring business owner · Enrolment welcome automation candidate

**Prompt:**
```
I run Northside Tutoring in Hamilton NZ (6 tutors, ~85 students, mix of NCEA Level 1-3 and Year 7-10). When a parent enrols via our Typeform, I currently spend 15-20 min writing a welcome email + a short parent FAQ tailored to their child's year level and subjects.
      
      I want to know if I should automate this now or wait. Setup would be: Typeform &rarr; Make &rarr; Claude drafts welcome + FAQ &rarr; I review in Gmail &rarr; send.
      
      Honest data:
      - 6-9 enrolments/month during term, drops to 1-2 in holidays
      - I've drafted with Claude maybe 4 times — one had a wrong reference to "Year 11" when the kid was Year 9 NCEA Level 1
      - My prompt is currently a single paragraph with no examples
      - I haven't decided what tone to lock in across tutors yet
      
      Apply the 3-question readiness test (saves &gt;30 min/week, basic prompt gets 80% right, used &gt;monthly). Be blunt. If the answer is "not ready", tell me what to do for the next 6 weeks before I revisit.
```

**Why it works:** This deliberately fails the readiness test — only 4 manual runs, an NCEA-level mix-up, no locked tone. It demonstrates the lesson's "not ready yet" verdict and the "do it manually 10+ times first" rule, while giving the owner a 6-week plan to revisit. Asking for bluntness aligns with the lesson's caution against premature automation.

---

## Graded deliverable

**Title:** Map one automation — then do it manually first

**Brief:** Identify one automation opportunity in your business and map it: trigger, Claude action, output. Pick the no-code tool you'd use (Zapier, Make, or n8n) and say why. Run the task once manually in Claude's chat — with a real, constrained prompt and the full response pasted in. Then write a 100-word assessment answering the three "do it manually first" questions and reaching a clear verdict: ready to automate, or not yet.

**What to submit:**

1. **The automation opportunity — trigger, Claude action, output** — Three labelled fields. Name the specific tool or event that starts it. Say what Claude does with which inputs. State where the output ends up.

2. **No-code tool choice — Zapier, Make, or n8n — and why** — Name one of the three tools from the lesson. One sentence explaining why you chose it over the other two, based on your situation (volume, technical comfort, budget).

3. **The manual run — full prompt + Claude's full response** — The exact prompt you ran in Claude's chat interface (role, task, format, length — no bracket placeholders, use real or realistic data), followed by Claude's full response pasted in.

4. **Ready-to-automate assessment (100 words — answer all three questions and state a verdict)** — Answer each of the three questions directly: done it 10–20 times? Know what good looks like? Comfortable reviewing weekly? Then state your verdict — ready or not ready — with a reason.

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Is the automation opportunity real and specific — not "respond to emails" but "draft a response to new enquiry form submissions from our website, saved to Gmail drafts"? Does the trigger name the actual tool or event? Does the Claude action describe what Claude does with specific inputs? Does the output state where the result goes?
- **Structure (25 pts)** — Does the automation map include all three elements — trigger, Claude action, and output — clearly labelled? Is the tool choice stated with a one-sentence reason? Are all four submission items present and clearly separated?
- **Constraint clarity (25 pts)** — Does the manual run use a properly constrained prompt — role, task, format, length — not a casual one-line question? Is Claude's full response pasted in (not summarised)? Does the prompt reflect the specific automation the student mapped — not a generic version of it?
- **Outcome focus (25 pts)** — Does the 100-word assessment answer all three questions from the "do it manually first" test — done it 10–20 times, know what good looks like, comfortable reviewing weekly? Does it reach a clear verdict, ready or not ready, with a reason? Does the student show they understand that "not ready" is a valid answer, not a failure?

---

## Notes for the AI grading engine

(Not shown to student)

- **Reward (high marks):**
  - The trigger names a specific app or event — "new Typeform submission," "email arrives in Gmail label 'Client Enquiries'" — not just "when someone contacts us"
  - The Claude action describes what inputs Claude receives and what it produces — not just "Claude writes a response"
  - The output states the destination — Gmail drafts, Slack channel, Google Doc, CRM note — not just "a summary"
  - The tool choice names one of the three tools from the lesson with a reason that reflects actual differences between them (e.g., "Zapier because I'm starting out and it has the most documentation" — not "because it's the best")
  - The manual prompt is fully written with a role, clear task, format or length constraint, and uses real data or a realistic substitute — not a placeholder like "[paste your enquiry here]"
  - Claude's full response is pasted — the student ran the prompt
  - The 100-word assessment answers all three questions from the lesson (done it before? know what good looks like? comfortable reviewing weekly?) and reaches a clear verdict
  - High-scoring students often conclude the task is NOT ready to automate yet and explain why — this shows they understood the lesson's core principle, not just its examples

- **Penalise (dock points):**
  - Trigger, Claude action, or output is missing from the automation map
  - The automation is described at a level that couldn't be built — "Claude would read emails and respond appropriately" — no inputs, no output destination
  - The tool choice is absent or says only "Zapier" with no reason
  - The manual run prompt contains bracket placeholders (e.g., "[paste client name here]") rather than real or realistic data — it was not actually run
  - Claude's response is summarised rather than pasted in full
  - The 100-word assessment is a general reflection on AI and automation without answering the three test questions or stating a verdict
  - The student claims the task is ready to automate but the manual run prompt is weak, vague, or unconstrained — contradicting their own assessment

- **Common 60–69 patterns:** The automation opportunity is specific enough to understand but the trigger is vague ("when a client emails me" rather than "email arrives in Gmail with label X"). The manual run uses a real prompt but it's missing one constraint — usually a format or length instruction — so Claude's response is longer or more varied than what an automation would need to produce consistently. The 100-word assessment reaches a verdict but doesn't answer the three questions explicitly. In feedback: quote the trigger and show what specificity looks like ("instead of 'when a client emails me,' try 'email arrives in a Gmail label called Client Enquiries'"). Quote the prompt and name the missing constraint. Ask: would this prompt produce the same shape of output every time? That consistency is what makes automation work.

- **Common 80+ patterns:** All three automation fields are named tools and specific events. The manual prompt reads like a system prompt — role, task, format, constraints, real data. Claude's response is clean and directly usable. The tool choice has a reason that reflects the student's actual situation (volume, technical comfort, budget). The 100-word assessment is honest — often the student concludes they need ten more manual runs before automating, and they explain specifically what they'd be testing. These submissions show the student has moved from "automation is exciting" to "I understand what it takes to make it work."

- **Feedback tone:** Direct, specific, and kind. Quote the student's trigger, Claude action, or output field when showing what more specificity would look like. If the prompt has a placeholder, name it and show what real data would replace it. If the 100-word assessment doesn't answer all three questions, list them and ask the student to answer each one in their resubmission. End with one concrete next step — either a specific edit for resubmission, or (if they passed) the one thing to test first when they're ready to build.

- **Resubmission gating:** Check whether the automation map has genuinely become more specific — not just longer. Check whether the manual run prompt has been run again with a real or realistic input. Check whether the 100-word assessment now answers all three questions. If the student changed their automation opportunity entirely in the resubmission, award credit if the new one is more specific and the reasoning is sound — choosing a better-suited automation is part of the skill.
