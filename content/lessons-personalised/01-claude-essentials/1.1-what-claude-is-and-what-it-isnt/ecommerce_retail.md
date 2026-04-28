# Lesson 1.1 — What Claude is, and what it isn't

**Module:** 01 · Claude Essentials
**Estimated time:** 20 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites
- None

## Learning objectives
By the end of this lesson you'll be able to:
- Explain what Claude is and how it generates text
- Describe how Claude differs from other AI tools you may have used
- Identify at least three realistic, specific use cases for Claude in your own work
- Set accurate expectations for what Claude will and won't do well

---

## Lesson script

### What you're actually using when you use Claude

Claude is a large language model. That's the technical term. The more useful description: Claude is a program that reads text and writes text, trained on an enormous amount of written material to get very good at both.

When you type something to Claude, it reads every word you send and generates a response one token at a time — each word chosen based on what's most useful given everything that came before it. There's no lookup table, no search engine running in the background, no database of pre-written answers. Claude constructs each response from scratch, in real time, which is why it can be creative and why it occasionally gets things wrong.

Anthropic — the company that built Claude — made deliberate choices about how to train it. Claude is designed to be helpful, honest, and to avoid contributing to harm. In practice, this shapes behaviour you'll notice quickly: Claude will push back on requests it considers risky. It admits when it doesn't know something rather than making things up. It flags when it's uncertain instead of projecting false confidence. These aren't personality quirks — they're trained behaviours, and they matter when you're using Claude for work where accuracy counts — including the customer-facing copy you'll send out from {{businessName}}.

### How Claude sits within the AI landscape

You've probably already used at least one other AI tool. ChatGPT, Microsoft Copilot, Google Gemini — these are all large language models from different companies. Claude sits in the same category. The underlying technology is similar. The specific choices each company makes in training and safety tuning produce tools that behave differently.

A few things Claude does that are worth knowing:

**It reads long documents without losing track.** Claude has a large context window — the amount of text it can process in one go. You can paste in a full SKU price list, a 40-page supplier contract, or a long thread of customer emails about a damaged order and ask Claude to work with the whole thing. It won't summarise the first page and ignore the rest. This matters when your real tasks involve real documents, not short toy examples.

**It tells you when it doesn't know.** Claude will often say "I'm not certain about this" or "you should verify this with a current source." That might feel less impressive than a tool that always sounds authoritative, but in retail a confident wrong answer — say, the wrong returns window or the wrong stock-on-hand figure — is worse than an honest "I'm not sure." You'll find this trait saves you from sending a customer reply that you later have to walk back.

**It doesn't remember previous conversations.** Every new session in Claude.ai starts completely fresh. Claude has no memory of what you talked about yesterday, last week, or five minutes ago in a different tab. This surprises people when they first encounter it. You'll work around it by keeping a short context document — key facts about your business, your brand voice, your top SKUs, your current campaign — that you paste in at the start of important sessions. Later lessons cover this in detail.

**It doesn't browse the internet by default.** Claude's knowledge comes from its training data, which has a cutoff date. It can't pull live information — current freight rates, today's order count, this week's sale prices — unless you're using a version that has web access specifically enabled. If you ask about something that happened recently, Claude may not know about it, and should tell you so.

### Where you'll access Claude

**Claude.ai** is the web interface and the app. It's where this course happens. Log in, start a conversation, work. No technical setup required.

Many business tools are adding Claude as a built-in assistant — helpdesk platforms, email tools, even some inventory systems. If a tool you already use has an AI feature, it may be running on Claude.

There's also Claude via API, which developers use to build applications. You don't need this for the course, but knowing it exists explains why Claude sometimes behaves differently inside different products — each integration makes its own choices about what to expose.

For every lesson in this course, you're working in Claude.ai.

### What Claude is genuinely good at

This is a practical list. Not aspirational — honest about where Claude earns its keep in a retail operation.

**Writing and editing.** Product descriptions, customer reply templates, EOFY sale emails, supplier follow-ups, restock-alert copy. Claude handles all of this well. The catch: the quality of what you get out depends heavily on what you put in. A vague prompt produces generic, beige product copy. A specific prompt produces something you can actually paste into Shopify or Klaviyo.

**Summarising and extracting.** Paste in a long supplier agreement and ask Claude to pull out the lead-time clauses, the MOQ requirements, or the returns terms. Paste in two weeks of customer-service emails and ask for the top complaint themes. This is one of the highest-value things you can do with Claude today, with no learning curve.

**Thinking through problems.** This one is underused. Before you commit to a Black Friday discount structure or a new returns policy, try explaining your situation to Claude and asking it to identify questions you should be asking, or to challenge the weak points in your plan. It's a useful sounding board, especially for early-stage thinking.

**Explaining complex topics.** Ask Claude to explain GST on imported stock, an Incoterms clause in a freight contract, or how a payment-processor chargeback actually works. It handles this well. Give it the right question and a clear sense of your background, and it calibrates the explanation appropriately.

**Drafting communications.** Customer apologies, supplier escalations, "where's my order" replies, post-purchase follow-ups, the email that announces a price rise. Claude produces a reasonable first draft quickly. You still edit and review. But a solid draft is faster to work from than a blank page on a Friday afternoon.

### What Claude is not good at

**Real-time information.** Claude doesn't know what your stock-on-hand is right now, what today's AUD/USD rate is, or how many orders you took yesterday. Live data needs to come from your POS, Shopify, or whatever tool actually holds it.

**High-stakes decisions without your judgment.** Claude can help you think through a decision — should you drop a slow-moving SKU, should you offer free returns — structure your analysis, draft the announcement. You are the one who knows your margins, the supplier relationship, and what's at stake. Use Claude as a thinking tool, not as the decision-maker.

**Tasks where accuracy is non-negotiable.** Claude makes mistakes. It can misread a number on a price list, miss a nuance in a returns policy, or state a shipping cut-off with confidence that isn't accurate. Any output going on a product page, into a customer email blast, or onto a wholesale invoice needs a human review. This is not optional.

**Always knowing what it doesn't know.** Claude is trained to flag uncertainty, and it usually does. But it occasionally gets things wrong without flagging it. The more specific and verifiable the information — exact prices, dimensions, ingredients, dispatch dates — the more important it is to cross-check.

### Claude takes you at face value

One thing that catches people out early, {{firstName}}: Claude does not read between the lines. It responds to what you actually write, not what you meant to write.

If you ask Claude to "write something professional," it will produce something that matches its training on what "professional" means — which may not match what professional looks like for a small AU homewares brand or a Hobart gift shop. If you ask it to "make this shorter," it will shorten it, but won't necessarily know which lines about your free-shipping threshold or your hand-finished detail you can't afford to lose.

This isn't a flaw. It's a feature, once you know how to work with it. Claude gives you exactly what you specify. So the skill of using Claude well is really the skill of being precise about what you want.

A few things that always improve results:
- Name who you are and what you sell
- Describe the customer reading the output, not just the output itself
- Specify format (length, structure, tone, what to include and exclude)
- Tell Claude what "good" looks like for this specific piece of work

You don't have to do all of this every time. For a quick reply to a "where's my order" email, a short prompt is fine. But for anything that matters — a campaign email going to your full list, a product launch, a wholesale pitch — the extra 30 seconds of context usually produces something you can use on the first attempt rather than the fourth.

The rest of this module will build on this directly. You'll write your first real prompt (1.2), audit how you're currently using AI (1.3), map the weekly retail tasks that are best suited to Claude (1.4), document your business context so Claude always has what it needs (1.5), and in the capstone put all of that context to work in a real session (1.6). By the end of the module you'll have both the mental model and the hands-on reps to actually use this tool — not just understand it in theory.

### Common mistake → better approach

**Mistake:** "Write me something about our Black Friday sale." Claude produces something generic and useless.

**Better approach:** "I run a Shopify homewares store doing about $400k a year. We have around 1,800 active email subscribers. I want to send a single Black Friday email — sitewide 20% off, ends midnight Cyber Monday, free shipping on orders over $80. The key thing I want to get across is that this is the only sitewide sale we run all year — we don't discount the rest of the time. Draft this in plain, warm language — no shouty caps, no fake urgency. 180 words maximum."

The difference is specificity and constraints. Claude meets you at whatever level of detail you bring. Bring more context, get better output. This principle runs through every lesson in this course.

---

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 0,
  "mapping": {
    "Creative & Marketing": 1,
    "SaaS / Software": 5,
    "Professional Services": 1,
    "Trades & Construction": 3,
    "Trades & Services": 3,
    "Property & Real Estate": 3,
    "Finance & Accounting": 4,
    "E-commerce & Retail": 3,
    "Health & Wellness": 2,
    "Education & Coaching": 6,
    "Other": 0
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Getting Claude to tell you where it's reliable — and where it isn't

**Scenario:** Financial adviser · Testing Claude's self-awareness about limitations

**Prompt:**
```
I'm a financial adviser in Australia. Before I start using Claude regularly for work, I need an honest answer about your limitations. Tell me:
1. What your knowledge cutoff date is
2. What kinds of financial information I should never rely on you for
3. What kinds of information you ARE reliable for in my day-to-day advisory work
Be direct and don't soften the limitations. I'd rather know upfront than find out mid-client-meeting.
```

**Why it works:** It establishes who's asking and why, invites honesty explicitly, and asks numbered questions — which gets a structured, useful answer. Asking for both reliable and unreliable areas produces a balanced response rather than just reassurance.

---

### Example 2: Getting an honest comparison without a sales pitch

**Scenario:** Consultant · Comparing Claude to tools you've already used

**Prompt:**
```
I've been using ChatGPT for about a year for business tasks — mainly writing emails, summarising reports, and drafting client proposals. I'm now testing Claude. Without making this a sales pitch for either tool, give me a straight list of where Claude is likely to perform differently to ChatGPT for business writing and document analysis. Include both where it might be better and where it might fall short.
```

**Why it works:** Asking for both better and worse keeps the response balanced and honest. Specifying "not a sales pitch" pushes Claude toward useful comparison rather than self-promotion.

---

### Example 3: Getting calibrated advice on risk for a regulated environment

**Scenario:** GP clinic manager · Asking Claude to articulate risks in your context

**Prompt:**
```
I manage a GP clinic in regional Queensland. I want to use Claude for administrative work only: patient communication templates, internal policy documents, and staff rostering language. Before I start, tell me:
- What could go wrong if I'm not careful
- Which kinds of decisions I should never delegate to Claude without human review
- Any specific considerations for a regulated healthcare setting

I'm not planning to use Claude for clinical decisions — just admin. But I still want to know the boundaries.
```

**Why it works:** Asking Claude to articulate risks in a specific professional context gets genuinely useful, calibrated advice. The framing ("I'm not planning to use it clinically, but...") helps Claude give a proportionate answer rather than a blanket warning.

---

### Example 4: Getting Claude to write something for your actual business

**Scenario:** Commercial property manager · Testing Claude on a real task immediately

**Prompt:**
```
I run a small commercial property management firm. We manage around 30 commercial tenancies in Melbourne.

A tenant submitted a maintenance request for a broken HVAC system 7 days ago. We're still waiting on a contractor quote. I need to send a holding email to the tenant — professional, honest about the delay, and keeping goodwill intact.

Write a draft. 150 words maximum.
```

**Why it works:** A real scenario with a specific word limit and a clear purpose. Claude can produce something usable immediately. The word limit forces concision and prevents a padded response.

---

### Example 5: Understanding the no-memory behaviour before it catches you

**Scenario:** Accounting practice · Understanding the no-memory behaviour

**Prompt:**
```
I'm learning to use Claude for my accounting practice. I've heard that Claude doesn't remember previous conversations. Before I build any workflows around Claude, explain:
1. Exactly what this means in practice — what carries over and what doesn't
2. What I should do to keep useful context available across sessions
3. Whether there's a way to give Claude persistent context about my business so I'm not repeating myself every time I open a new chat

Keep this practical. I don't need the technical explanation of why it works this way — just what it means for how I use it.
```

**Why it works:** Numbered questions get structured answers. "Keep it practical" and "I don't need the technical explanation" are explicit constraints that save time and keep the response useful for a non-developer.

---

### Example 6: Testing whether Claude can draft a feature sunset email without over-promising

**Scenario:** Hobart SaaS founder · Drafting a feature deprecation notice

**Prompt:**
```
I'm Tom, founder of QuoteRail, a 4-person SaaS in Hobart that sells quoting software to AU plumbers and electricians. We're shutting down our legacy "PDF Builder" feature on 30 June. About 180 of our 540 active customers still use it at least weekly. The replacement is called Quote Studio and it's been live for 8 months — most of those 180 just haven't migrated yet.
      
      Draft an email to those 180 customers telling them PDF Builder is being switched off on 30 June, explaining why (we can no longer maintain two quote engines on a 4-person team), pointing them to Quote Studio, and offering a 20-minute migration call with me personally.
      
      Constraints:
      - Plain language, the tone of a founder writing to a tradie, not a corporate change-management memo
      - No more than 220 words
      - Don't promise that Quote Studio has every PDF Builder feature — it doesn't
      - Don't apologise more than once
      - End with a clear deadline and one link placeholder I can fill in
      
      Before you write it, tell me anything you're unsure about that would change the email.
```

**Why it works:** This prompt tests the lesson's idea that Claude takes you at face value — specificity matters. Tom names the product, the customer count, the deadline, the tone he wants, and what NOT to promise. The closing line ("tell me anything you're unsure about") also exercises Claude's ability to admit uncertainty before drafting, instead of confidently inventing details about Quote Studio's feature parity.

---

### Example 7: Checking whether Claude can hold a long brief without losing the parent-friendly tone

**Scenario:** Wellington tutoring owner · Testing Claude on a Term 2 enrolment email

**Prompt:**
```
I run BrightPath Tutoring, a 6-tutor maths and English service in Wellington for Years 5 to 10. Term 2 starts on 28 April. I want to send our existing parent list (around 90 families) an email about Term 2 bookings.
      
      Here's everything you need to know:
      - We have 14 spots left across the timetable and we always sell out by week 2 of term
      - New this term: a small Year 9 NCEA Level 1 maths group on Wednesday 4pm, 6 spots, $45/session
      - Our drop-off-and-go model continues — parents don't need to stay
      - We had two tutors leave at the end of last term; both have been replaced. I don't want to mention that unless it's necessary
      - Voice: warm, direct, no edu-speak. Parents here are time-poor.
      
      Draft the email. Then, in a separate paragraph, tell me which parts of it you're least confident about — whether that's the tone, the specifics about NCEA, or anything else. I want to see what you're guessing at versus what's grounded in what I told you.
```

**Why it works:** The lesson teaches that Claude admits uncertainty when asked. The owner deliberately closes with "tell me which parts you're least confident about" — testing whether Claude will flag its own guesses (especially around NCEA specifics) instead of bluffing. The detailed brief also demonstrates that specificity beats vague instructions: named term dates, spot counts, voice notes, and an explicit exclusion about ex-staff.

---

## Graded deliverable

**Title:** Your first Claude comparison

**Brief:** You've just read how Claude works, what it does well, and where it falls short. Now write a reflection based on your own experience and your own business context. This is not a summary of what you read — it's your analysis, honest and grounded in your actual work.

**What to submit:**

1. **How Claude actually works** — From the lesson, pick one thing Claude is genuinely good at and one thing it's not. In your own words, explain *why* each is on that list — what does it tell you about how Claude generates text or how Anthropic trained it? *80–120 words.*

2. **Three tasks in your work where Claude could earn its keep** — For each: (a) name the specific task, (b) where it sits in your week, (c) which Claude strength from the lesson makes it suited. If a task touches one of Claude's limits (real-time info, accuracy-critical, high-stakes), name how you'd manage that. *3 tasks, 50–70 words each.*

3. **Your first precise prompt** — The lesson says using Claude well is the skill of being precise about what you want. Pick one of your three tasks above and write the opening line you'd give Claude — start by naming the business you run (or work in) and your role in it, then describe the task, the context Claude needs, and what "good" looks like for this specific piece of work. *60–100 words.*

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Section 2 names specific tasks, not categories. Section 3 prompt names role, context, and a "good" criterion. "Summarise the monthly client report I send first of each month" beats "help with documents."
- **Structure (25 pts)** — All three sections present and distinguishable. Section 1 explains *why*, Section 2 lists three concrete tasks, Section 3 is an actual prompt. Each section stands on its own.
- **Constraint clarity (25 pts)** — Grounded in your actual business and role. Tasks read like they could only have come from someone doing your job — not generic scenarios. Section 1 reasoning ties back to specific lesson concepts.
- **Outcome focus (25 pts)** — Tasks identify genuine business value, not demonstrations. Section 3 prompt is specific enough that Claude could produce something useful on the first try. Awareness of any Claude limitations to manage.

---

## Notes for the AI grading engine

These notes are read by the grading engine when scoring submissions for this lesson. They are not shown to the student.

- **Reward (high marks):**
  - Reflection names specific tools by name (ChatGPT, Microsoft Copilot, Bard/Gemini, Jasper, Otter.ai, etc.) and articulates observable, specific differences — not "it feels more thoughtful"
  - Applications describe a named, specific task from the student's real work with enough context to be concrete ("drafting the weekly update email we send to our 15 retail landlords" rather than "writing emails")
  - Student shows awareness of at least one Claude limitation and addresses how they'd manage it in their specific applications
  - Section 1 is genuinely personal — mentions their actual tool history with real assessment, not just "I've used AI tools before"
  - Applications show variety across different types of tasks (not three variations of the same task type)

- **Penalise (dock points):**
  - Applications are generic ("use it for emails," "help with writing," "analyse documents" without specificity)
  - No real business context — the reflection could have been written by anyone in any industry
  - Section 2 is a summary of lesson content rather than the student's own reflection and experience
  - Section 1 is absent or one sentence with no real substance
  - AI tools mentioned are not named, only referred to vaguely as "other AI tools" or "the ones I've used"

- **Common 60–69 patterns (near-pass):** Student submits all three sections with reasonable content, but applications remain generic — "help with client emails" without specifying which emails, which clients, what a good output looks like. Or the reflection summarises lesson content with minimal personal perspective added. In feedback, quote their generic application back to them and ask them to answer: which specific task? For which client or project? What would "done" look like? One concrete revision instruction outperforms five vague suggestions.

- **Common 80+ patterns (excellent):** Student names specific tools and gives real examples from their own experience — including where those tools fell short for them. Applications are detailed enough that you could write the prompt immediately from reading the description. Student either acknowledges relevant limitations and explains how they'd handle them, or explains convincingly why the limitations don't apply in their context. You can picture the student's actual job from reading the submission.

- **Feedback tone:** Direct, specific, and kind. Quote the student's own words when identifying wins or fix points — never generic. Always end with one concrete next step: specifically, tell them which of their three applications to try first in Lesson 1.2 — "Write your first real prompt" — and why that one makes the most sense to start with.

- **Resubmission gating:** If the student resubmits, compare against their previous submission stored in the platform. If they added specificity to their applications (the most common required fix), reward that improvement explicitly and name what changed. If they only added length without adding precision, say so directly: more words is not the goal — more precision is. Point to the one application that still needs more specificity.
