# Lesson 2.1 — The anatomy of an effective prompt

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

## Learning objectives
By the end of this lesson you'll be able to:
- Explain what "prompt engineering" means without using any technical language
- Identify the four core components of an effective prompt: Role, Context, Task, Format
- Describe why the order of those components affects the quality of Claude's response
- Rewrite a weak prompt into a strong one using all four components
- Diagnose a bad Claude output by identifying which component the original prompt was missing

---

## Lesson script

### Prompt engineering is not what it sounds like

"Prompt engineering" is one of those phrases that sounds intimidating if you've never heard it before. It implies you need to know how to code, or that there's a set of secret incantations that make AI work properly. Neither is true.

Prompt engineering is just the practice of writing clear, specific instructions. That's it. Every good communicator already does a version of this in their daily work — a brief to a designer, a scope to a contractor, a request to a new employee. The principles are the same. You're telling Claude who you are, what you need, and how you want it delivered.

The reason it has a technical-sounding name is that researchers first studied it in the context of AI systems — they were literally engineering the prompts to get better model outputs. But the skill itself is not technical. It's communication skill applied to a new medium.

The good news: you already have most of what you need. Module 1 gave you the foundational mental model — Claude takes you at face value, reads only what you write, and has no context beyond what you give it. Prompt engineering is just the systematic application of that mental model. It gives you a repeatable structure so you're not starting from scratch every time.

### The four components every effective prompt needs

Think of an effective prompt as having four building blocks. You don't need to label them every time, but you do need to include all of them for important work.

**Role:** Tell Claude who it is for this task, or who you are. This shapes the perspective it takes and the expertise level it brings to the response. "You are an experienced HR manager" produces a different response than leaving Claude to guess. "I'm a sole-practitioner psychologist in private practice" gives Claude the context to calibrate its language and assumptions.

**Context:** Give Claude the situation. What's the background? What's already happened? What's the environment this is happening in? Context is where most weak prompts fail — people jump straight to the task without giving Claude any of the surrounding information it needs to produce something relevant. Without context, Claude fills the gaps with generic assumptions. Those generic assumptions produce generic output.

**Task:** State clearly what you want Claude to do. Use a verb. "Write," "summarise," "analyse," "draft," "compare," "extract," "review." Vague task descriptions produce vague results. "Help me with this email" is a task description, but it's doing almost no work. "Draft a reply to this email, declining the meeting but proposing two alternative time slots" is a task description that tells Claude exactly what success looks like.

**Format:** Specify the shape of the output you want. Length, structure, tone, what to include, what to exclude. If you want a bullet list, say so. If you want 200 words, say 200 words. If you want formal language, say formal. If you want the output to avoid jargon because it's going to a client who isn't familiar with your industry, say that explicitly. Format is the component most people forget, and it's why they get back a 600-word essay when they wanted a three-sentence summary.

These four components work together. Skip one and Claude compensates by guessing — and its guess will usually be wrong, or at least generic. Include all four and Claude has everything it needs to produce something close to what you actually wanted on the first try.

Here's what a prompt that uses all four looks like:

```
You are an experienced practice manager in allied health. [Role]

I'm {{firstName}}, and I run a 3-practitioner physiotherapy clinic in Brisbane called {{businessName}}. We've just won approval as a Workers Compensation NSW-equivalent provider in Queensland and are seeing 6 new workplace-injury cases a week. The problem is that our current intake and consent tracking is done on paper and it's already creating errors. [Context]

Write a one-page overview of a simple digital intake and consent tracking system we could implement in the next 30 days. [Task]

Keep it practical and plain — no software jargon, no recommendations that require developer support. Use short paragraphs. 300 words maximum. [Format]
```

Compare that to: "Write me something about intake systems for clinics." Both are prompts. Only one is useful.

### Why order matters

Claude reads your prompt from the top down, in sequence. This isn't a minor technical detail — it changes how Claude interprets everything that follows.

Think about how you read a job brief, a client email, or a project spec. If the first sentence gives you the essential context, everything else lands in the right frame. If the first sentence is ambiguous or buried in background noise, you're guessing at what matters as you read.

Claude works the same way. If you open with Role and Context, Claude has already formed a framework before it reaches the Task. It knows who's speaking, what the situation is, and what expertise to bring. When the Task arrives, Claude can filter it through that established frame. The Format instruction at the end tells it how to package the response it's already assembling.

Now flip the order. Lead with the Task first — "Write a rejection letter" — then add context and role at the end. Claude has already begun generating a response in a particular direction. The context you add later may or may not fully override the initial assumptions it made. You'll often get an output that's half generic (from the first read) and half personalised (from the late context). It's patchwork.

The rule is simple: set the stage before you issue the instruction. Role and Context first. Task second. Format last.

There's one exception worth knowing: if the context is very long — for example, you're pasting in a full document for Claude to analyse — put the task instruction first, then the document. This tells Claude what to look for as it reads. But for most everyday prompts, the standard order holds.

### What separates a weak prompt from a strong one

The fastest way to understand this is a direct comparison.

---

**Weak prompt:**

"Write a social media post about our new service."

**Strong prompt:**

```
You are a social media copywriter who specialises in allied health practices.

I own a small remedial-massage and myotherapy clinic called {{businessName}} based in Wollongong. We've just launched a 6-week neck-and-shoulder reset program aimed at desk-based workers who get tension headaches. The program includes weekly hands-on treatment, posture screening, and a short home-stretch routine — the things a single one-off massage doesn't fix.

Write one Instagram caption promoting this new program. Target audience is office workers aged 25–45. The tone should be warm and direct — not clinical. Use a call to action that sends them to the booking link in bio.

150 words maximum. No hashtags in the caption itself.
```

---

Look at what changed. The strong prompt:
- Establishes a role with relevant expertise
- Names the actual business, its location, and its service
- Describes the specific audience
- States a concrete task with a clear output type
- Specifies tone, format, length, and exclusions

The weak prompt has none of that. Claude has to guess the business type, the audience, the tone, the length, and what "new service" means. Every guess it makes is a coin flip. You're not directing it — you're asking it to operate blind.

The output from the strong prompt will be usable. The output from the weak prompt will require so much editing that you'd have been faster writing it yourself.

### Common mistake → better approach

**Mistake:** Asking Claude to "improve" something without saying what improvement means.

"Can you improve this email?" Claude will make changes — but its definition of improvement might mean making it longer, adding more formal language, or restructuring it in a way you didn't want. Without knowing what you consider improvement, Claude fills in the gap.

**Better approach:** Be specific about what you want changed and why.

"This email is currently 300 words and too formal in tone. The client is a regular long-term physio patient, not a corporate referrer. Rewrite it to sound more like a direct conversation — warm but professional. Aim for under 180 words. Don't change the core message or the ask in the final paragraph."

Now Claude knows what improvement means in your context. It's not guessing at which direction to change things.

### Diagnosing a bad output

When Claude gives you something that misses the mark, the instinct is to assume Claude is broken, or that it's just "not good at this." Almost always, the real diagnosis is simpler: a component was missing from the prompt.

Here's a quick diagnostic you can run on any unsatisfactory output:

**Was the output too generic?** Context was missing. You didn't give Claude enough background about your business, your client, or the situation. It made generic assumptions and produced a generic result.

**Was the output the wrong shape?** Format was missing. You didn't specify length, structure, or tone. Claude defaulted to its own best guess, which may not match what you needed.

**Did Claude solve the wrong problem?** The Task was vague. A task like "help with this" or "write something about X" leaves too much open. Claude picked an interpretation — it just wasn't your interpretation.

**Did the response sound like it came from the wrong person?** Role was missing. Claude had no expertise signal to anchor to, so it defaulted to a neutral, middle-of-the-road voice that doesn't serve anyone well.

Run this diagnostic before you decide Claude can't do the thing. Nine times out of ten, adding or sharpening the missing component produces a dramatically different output from the same request.

This is the core skill this module builds. Not writing prompts from scratch every time — but knowing exactly which lever to pull when something doesn't work.

---

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 4,
  "mapping": {
    "Creative & Marketing": 1,
    "SaaS / Software": 5,
    "Professional Services": 1,
    "Trades & Construction": 0,
    "Finance & Accounting": 2,
    "E-commerce & Retail": 3,
    "Trades & Services": 0,
    "Other": 4,
    "Health & Wellness": 6,
    "Education & Coaching": 7
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Introducing a new site log-off policy

**Scenario:** Operations · Staff policy notice for a plumbing business

**Prompt:**
```

```

**Why it works:** The prompt specifies the exact business situation, the reason behind the policy change, and the tone balance required. "Firm but respectful" and "accountability, not punishment" are precise tone constraints that produce a very different output than "professional tone."

---

### Example 2: "Our Services" section for a family-owned furniture retailer

**Scenario:** Client services · Proposal section for a marketing consultant

**Prompt:**
```

```

**Why it works:** The prompt includes critical client context — their prior bad experience with agencies — which shapes the entire tone of the output. Without that detail, Claude would likely produce a services section full of the vague language the client explicitly dislikes.

---

### Example 3: Transition to retirement explainer email

**Scenario:** Finance · Explaining a concept to a client

**Prompt:**
```

```

**Why it works:** The prompt specifies the client's existing knowledge level, the communication channel (follow-up email), and gives a specific instruction about how to handle technical terms. These constraints produce an output calibrated for the actual reader, not a generic financial explainer.

---

### Example 4: Handmade ceramic mug listing

**Scenario:** Retail · Product description for a gift shop

**Prompt:**
```

```

**Why it works:** The explicit prohibition on "perfect gift" and "artisanal" prevents the most common copy clichés. The persona ("recommendation from a friend who knows the maker") is specific enough to produce a distinctive tone rather than generic retail copy.

---

### Example 5: Bookkeeper's client meeting summary

**Scenario:** Admin · Meeting summary from rough notes

**Prompt:**
```

```

**Why it works:** Passing rough notes to Claude and asking for a specific output format is a high-value, low-effort use of Claude for administrative work. The rough notes are the Context; the format instruction is specific enough that Claude doesn't have to guess what "clean meeting summary" means.

---

### Example 6: Weak prompt to strong: Role, Context, Task, and Format made explicit

**Scenario:** Melbourne SaaS PM · Rewriting "write release notes" the proper way

**Prompt:**
```
Weak version I started with: "Write release notes for our v2.4 update." That gave me marketing waffle. Rewriting with all four components.
      
      ROLE: You are the product manager at LedgerLite, a 5-person SaaS in Melbourne. Our customers are Australian bookkeepers running 1–3 person practices.
      
      CONTEXT: We're shipping v2.4 next Tuesday. The user-facing changes are: (1) bulk reconciliation now handles up to 500 lines at once, up from 100; (2) a new "flag for review" button on any transaction; (3) Xero sync now retries automatically if it fails; (4) the dashboard loads about 40% faster. Internal-only changes (refactored auth, moved to a new logging service, fixed 14 minor bugs) should NOT appear — bookkeepers don't care. Audience reads these in the in-app changelog and in our fortnightly customer email.
      
      TASK: Write the release notes for v2.4.
      
      FORMAT: Markdown bullet list. Plain English, no buzzwords (no "empower", no "seamless", no "leverage"). Lead each bullet with the user benefit, then a short "what changed" clause. Maximum 200 words total. Include a one-line intro and a one-line sign-off. Australian English.
```

**Why it works:** Every component the lesson names is on the page and labelled. ROLE pins Claude as a PM at a small AU SaaS; CONTEXT spells out what shipped, what stays out, and who reads it; TASK is one sentence; FORMAT locks length, structure, voice, and spelling. The original weak version ("write release notes for our v2.4 update") is shown for contrast — that's the lesson's weak-to-strong rewrite in action, and the missing components explain why the first attempt produced waffle.

---

### Example 7: Diagnosing a weak prompt by spotting the missing component, then rewriting it

**Scenario:** Podiatry clinic (Hamilton, NZ) · Pre-appointment instructions for new diabetic foot-check patients

**Prompt:**
```
First, here's a weak version a colleague wrote: "Write pre-appointment instructions for diabetic foot check patients."
      
      That output came back too clinical, too long, and assumed knowledge patients don't have. The missing component is Context — the prompt didn't say who the patient is, what they need to bring, or what tone the clinic uses.
      
      Now the rewritten prompt:
      
      You are writing patient-facing instructions for a small podiatry clinic. Tone: calm, plain English, reading age around Year 8.
      
      Context: Riverside Podiatry in Hamilton sees adult patients (mostly 55+) referred by their GP for an annual diabetic foot assessment. The appointment is 30 minutes. We need them to: bring their current shoes, bring a list of their medications, wear loose trousers or bring shorts, and avoid moisturiser on their feet that morning. We are not giving medical advice in this email — only logistical preparation.
      
      Task: Write the pre-appointment email.
      
      Format:
      - Subject line
      - One-line warm opener
      - A "What to bring" bulleted list (4 items)
      - A "What to wear" line
      - A "One small thing" line about the moisturiser, with a brief reason
      - Sign-off from the front desk team
      - Total: 140-180 words
```

**Why it works:** This example shows the lesson's diagnosis move — looking at a bad output and asking "which component is missing?" The original had a Task only. The rewrite layers in Role (clinic voice + reading age), Context (patient demographic, appointment length, the four prep items, the scope limit on medical advice), and a Format that turns it into something a real reception team would send.

---

### Example 8: Why Context belongs before Task — a coach's session-recap prompt rebuilt in the right order

**Scenario:** Executive coach (sole operator, Wellington) · Session-recap email to a coaching client

**Prompt:**
```
You are writing as an executive coach to a coaching client. Tone: direct, warm, no fluff, no coaching jargon ("hold space", "lean in", "show up" are banned).
      
      Context: I'm Tane, an executive coach based in Wellington. My client Sarah is a finance director at a 60-person tech company, six sessions in. Today's session covered: her difficulty saying no to her CEO, a specific situation last Tuesday where she agreed to a project she didn't have capacity for, and an experiment we agreed to — she'll draft one "no" response this week before saying yes to anything new from him. We also surfaced that her pattern shows up with her board chair too, which she found uncomfortable to notice.
      
      Task: Write a session-recap email to Sarah.
      
      Format:
      - Subject line
      - Three sections with light headings: What we covered, The experiment for this week, One thing to sit with
      - Each section: 2-4 sentences, no bullet points
      - Total length: 160-200 words
      - Closes with one open question, not a statement
      - Signed "Tane"
```

**Why it works:** This demonstrates why Context comes before Task. Claude needs the session content (the specific Tuesday situation, the experiment, the board-chair pattern) before it can write anything useful — putting Task first would force it to invent details. The banned-jargon list inside the Role component is also a small lesson move: telling Claude what NOT to do is often more powerful than telling it what to do.

---

## Graded deliverable

**Title:** Rewrite a weak prompt — and show your work

**Brief:** Find a prompt you've actually used with Claude (or another AI) that didn't produce a great result. If you don't have one, use "Write me an email about our prices going up." Rewrite it into a strong four-component prompt grounded in your own business, run it in Claude, and reflect on what changed. Submit all four fields below.

**What to submit:**

1. **The original weak prompt** — Either a prompt you've genuinely used that didn't produce a great result, or the provided fallback: "Write me an email about our prices going up." Label it clearly.

2. **Your rewritten strong prompt (100–250 words typical)** — All four components (Role, Context, Task, Format). Use your real business — not placeholders like [my business].

3. **Claude's response to the strong prompt** — Paste the actual response you received in full. Do not summarise, cut, or paraphrase.

4. **Reflection (80–120 words)** — What was missing from the original? What did the four components add? Why did the output improve (or, if it didn't as much as expected, what you'd change next)?

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Does the rewritten prompt name all four components with concrete details? Role is a named expertise, not just "assistant." Context includes real business information — company name, industry, actual situation — not placeholders like "[my business]." Task uses a verb and describes a specific output. Format states length, tone, structure, and at least one exclusion.
- **Structure (25 pts)** — Is the prompt in the correct order: Role and Context before Task, Format at the end? Does it read as a coherent set of instructions rather than a list of fragments? Is there a clear separation between what's happening (Context) and what Claude should do (Task)?
- **Constraint clarity (25 pts)** — Are constraints explicitly stated rather than implied? This includes length, tone, what to exclude, who the audience is, and what "good" looks like for this specific task. Constraints should be specific enough that two different people reading the prompt would produce similar outputs.
- **Outcome focus (25 pts)** — Does the reflection show understanding of *why* the rewrite worked, not just *that* it worked? The student should identify which specific component(s) were missing from the original prompt and connect that absence to the quality gap in the original output.

---

## Notes for the AI grading engine

These notes are read by the grading engine when scoring submissions for this lesson. They are not shown to the student.

- **Reward (high marks):**
  - Rewritten prompt uses real business details — named business, actual industry, specific scenario — not generic examples or bracket placeholders
  - All four components are present and clearly contribute something: Role isn't just "you are an assistant," Context contains genuine situational information, Task uses a specific verb and outcome, Format includes at least two concrete constraints (e.g., length and tone)
  - Prompt is ordered correctly — Role/Context before Task, Format last — without requiring the student to label the components explicitly
  - Reflection identifies the specific missing component(s) from the weak prompt by name and explains how those components changed the output quality
  - Claude's pasted response is visibly more specific and usable than the weak prompt would have produced — the grading engine should infer this from the quality of the strong prompt, since the weak prompt's response isn't available for comparison

- **Penalise (dock points):**
  - Rewritten prompt still contains placeholder text such as [my business name], [industry], [client name] — this means the student did not complete the personalisation step
  - Role component is trivial: "You are a helpful assistant" adds nothing and should be penalised under Specificity
  - All four components are labelled as headers but the content under each is vague or thin — labels don't substitute for substance
  - Reflection describes the result ("the output was better") without explaining the mechanism ("the Context told Claude X, which meant Claude could Y instead of guessing Z")
  - Format component is absent or contains only one instruction (e.g., only a word count) — constraint clarity requires more than one dimension

- **Common 60–69 patterns (near-pass):** Student includes all four components and uses real business context, but the constraints are thin — only one format constraint, no exclusions stated, or the Role is generic. The reflection describes what changed but not why. In feedback, quote their Format instruction back to them and ask: "What should Claude *not* include? Who is the audience? What does 'good' look like for this output?" One targeted expansion question per criterion that scored under 18/25.

- **Common 80+ patterns (excellent):** Rewritten prompt is immediately recognisable as real-world: named business, specific situation, constraints that show the student has thought about the reader or recipient of the output. Reflection names the specific missing components from the original, explains the connection to output quality, and shows the student has internalised the diagnostic framework — not just applied a template. Claude's pasted response is clearly specific and usable. The student may also note what they'd do differently in a second iteration.

- **Feedback tone:** Direct, specific, and kind. Quote the student's own words when pointing out wins or gaps — never give generic feedback. If the Role is thin, quote it back and show what a stronger version looks like. If the reflection is only describing the result, quote a sentence and ask "why did that happen?" Always end with one concrete next step: the single highest-value change they could make if they were to revise this prompt for a real task tomorrow.

- **Resubmission gating:** If the student resubmits, compare against their previous submission. If they improved their Format constraints (the most commonly failed criterion), acknowledge that explicitly and quote the improvement. If they replaced a placeholder with real business details, name the specific placeholder that's gone. If they added length to their reflection without adding the causal reasoning, say so directly: "You've added more words, but I still can't see the connection between what was missing and why the output changed. Try answering: what did Claude have to guess in the original prompt that it didn't have to guess in the rewrite?"
