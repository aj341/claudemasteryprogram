# Lesson 5.4 — Emerging features and staying current

**Module:** 05 · Extended Capabilities
**Estimated time:** 20 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites

- Lessons 1.1–1.6 (Module 1: Claude Essentials — complete)
- Lessons 2.1–2.6 (Module 2: Prompt Engineering Fundamentals — complete)
- Lessons 3.1–3.5 (Module 3: Practical Daily Applications — complete)
- Module 4 — complete
- Lesson 5.1 — Vision capabilities: analysing images and documents
- Lesson 5.2 — Working with files and complex documents
- Lesson 5.3 — Introduction to Claude API and automation

---

## Learning objectives

By the end of this lesson you'll be able to:
- Explain why Claude changes faster than most tools you use — and what that actually means for your day-to-day use
- Tell the difference between capability upgrades and interface upgrades — and why the distinction matters when an update lands
- Name the right places to follow Claude news without getting buried in AI content
- Apply the "wait for the use case" approach when a new feature is announced
- Diagnose and adapt when a model update changes how Claude responds to a prompt that used to work

---

## Lesson script

### Why Claude changes faster than the tools you're used to

Think about the last time your billing platform changed. There was probably a banner notification, a few updated menu items, maybe a new dashboard layout. You adapted in an afternoon. The core of the tool — where the data lives, how you navigate it, what it produces — stayed the same.

Claude changes differently. New capabilities arrive without warning. The same prompt you've been using for three months might produce a noticeably different output today — sometimes better, sometimes just different, occasionally worse. The model you're talking to is updated regularly, and Anthropic doesn't always announce every change when it happens.

This isn't a flaw in how Anthropic manages the product. It reflects the reality of what language models are. They're not software in the traditional sense, where version 3.2 replaces version 3.1 and everything else holds still. The model's behaviour is shaped by training, and retraining changes things in ways that are difficult to predict completely — including things that weren't the target of the change.

For most founders, this is mostly good news. Each update generally makes Claude more accurate, more capable, and better at following complex instructions. The average quality of outputs goes up over time. New features open up tasks you couldn't do before. The trajectory is positive.

But "mostly good news" isn't the same as "no adjustments required." A few times a year, something you've been relying on at {{businessName}} will shift. A prompt that used to produce clean structured output will suddenly add extra explanation you didn't ask for. A tone that used to feel right will skew slightly formal. An output format you'd standardised will change shape. When that happens, you need to know how to recognise it and what to do.

The starting point is understanding what kind of change just occurred — and that's what the next section covers.

### Two categories of updates — and how to tell them apart

Not all updates are the same. They fall into two categories, and the way you respond to each is different.

**Capability upgrades** mean Claude can now do something it couldn't do before, or do something it did poorly much better. Examples: the ability to process much larger documents, improved reasoning on multi-step tasks, better performance on structured data, the addition of vision capabilities. These updates expand what's possible. They don't break anything you're already doing. The right response is to notice them and file them away: is there a task in my SaaS where this new capability would actually help?

**Interface upgrades** mean the product has changed how you access Claude — not what Claude can do. Examples: a new Projects feature, a changed menu structure, a new way to upload files, a redesign of the chat interface. These updates change where buttons are, how you start a workflow, or what the platform looks like. They can interrupt your existing habits even if the underlying model is unchanged.

The way to tell them apart: ask yourself, "Has what Claude can do changed, or has how I get to Claude changed?"

A capability upgrade means you have new options available. An interface upgrade means you might need to find where something moved. Both require a few minutes of adaptation, but they require different kinds of adaptation — exploring new possibilities versus updating your muscle memory.

Knowing which type of change just happened stops you overreacting or underreacting. You don't need to rebuild your workflows when a menu moves. You don't need to ignore a new capability just because it's not in today's task list.

### Where to follow Claude updates without getting buried

There's no shortage of people writing about AI. But most of that content — newsletters, YouTube channels, LinkedIn posts, podcasts — is written for people who want to stay on top of AI as a field. You don't need that. You need updates that tell you what Claude can do now that it couldn't do last month, and whether anything you rely on has changed.

Three sources cover that without requiring you to read everything.

**Anthropic's blog** at anthropic.com/news. When a major update ships — a new model, a significant new capability — Anthropic publishes an announcement here. It's infrequent (a few times a year for major releases), written for a general audience, and doesn't require a deep technical background. Set a reminder to check it once a month. Five minutes.

**Claude's release notes**, accessible from within Claude.ai under the "What's new" section or equivalent in your interface. These are more granular — specific feature additions, interface changes, performance improvements. They're updated more frequently than the blog, and they're specific to the product you use. This is the right place to check when you notice something has changed in the interface or when a prompt behaves differently.

**One practical newsletter**, not twenty. The AI space produces a large volume of content, most of it aimed at investors, developers, or people who want to be generally informed about the industry. For your purposes — using Claude in a small SaaS — one curated newsletter is enough. Look for newsletters that write about practical applications of AI tools rather than news about AI as an industry. "Claude added a new feature that does X, here's how to use it" is useful. "AI is going to change everything about work" is not, for your purposes.

What to avoid: tech Twitter, AI influencer TikTok, and any source whose business model requires them to publish every day. Daily AI content is almost always noise. Follow fewer sources, check them less often, and trust that the updates that actually matter to your work will show up in the places you've already bookmarked.

### The "wait for the use case" approach

When a new Claude feature is announced, the instinct is to learn it immediately — to go in and try it, watch a tutorial, test it out. That instinct is understandable but usually counterproductive.

Here's why: a feature you learn without a real task to apply it to doesn't stick. You run a few tests, get a feel for how it works in the abstract, and two weeks later you haven't used it again. You've spent an hour learning something and haven't changed how you work at all.

A better approach, {{firstName}}: when a new feature is announced, read the announcement. Understand what the feature does in principle. Then ask yourself one question — "Is there a task in my SaaS I already have, right now, where this feature would make a genuine difference?" If the answer is yes, learn the feature in the context of that task. If the answer is no, file the feature away. Make a note: "Claude now does X. Watch for tasks where this would help."

When you eventually have a task that fits, the feature will be there. And you'll learn it in the context of something real, which means you'll actually retain it.

The `wait for the use case` approach has a second benefit: it filters out features that sound exciting but don't fit your business. Not every Claude capability is relevant to every founder. A feature that helps developers process code at scale is not a feature you need to understand deeply if you run a non-technical, marketing-side of a SaaS. A capability that improves Claude's performance on long financial documents is extremely relevant to a billing-tool founder reconciling Stripe payouts and mostly irrelevant to a content-side founder writing release notes. Waiting for your own use case to surface means you spend learning time on the features that will actually change how you work.

### When Claude gets something wrong that it used to get right

This is the situation most founders aren't prepared for: you've built a reliable workflow around a Claude prompt, and one day the output is off. Not wrong in a factual sense — just different from what you expected. The tone shifted. The format changed. The level of detail changed. Something that used to be reliable is now inconsistent.

The first question to ask is: did I change anything? Check your prompt. Check the context you provided. Check whether you're in a Project and whether the Project's system prompt has changed. Sometimes the issue is on your side, not Claude's.

If nothing on your side changed, the second question is: did Claude change? Check Anthropic's blog and release notes for recent updates. If a model update shipped in the past week or two, that may be the cause.

The third step is diagnosis — and this is where your prompt engineering skills from Module 2 become directly useful. When a prompt stops producing the output you expected, treat it like a debugging problem:

1. Rerun the prompt exactly as written. Is the issue consistent, or was it a one-off?
2. If it's consistent, identify what specifically changed — the format, the tone, the length, the level of detail?
3. Add an explicit instruction for the thing that changed. If Claude is now adding explanation you didn't ask for, add: `Provide no preamble or explanation. Output only the requested content.` If the tone has shifted, add: `Write in a direct, professional tone — no warmth, no hedging.`

Model updates almost always change things in ways that can be corrected with more explicit instructions. The feature or capability you relied on hasn't disappeared — the model's default behaviour around it has shifted. More specific instructions override defaults. That's been true since Module 2, and it's still true here.

### Common mistake → Better approach

**Mistake:** Deciding a new feature isn't useful because the first test didn't impress you.

A founder reads about Claude's ability to analyse documents — invoices, contracts, reports. She uploads a PDF of a vendor contract and types: "What does this say?" Claude summarises the contract. She thinks: "That's fine, but I could just read it myself." She doesn't use the feature again.

The test failed not because the feature is limited but because the task wasn't specific. "What does this say?" is a reading task. The feature's value is in analysis tasks — comparison, extraction, identification of specific clauses, flagging anomalies. A better test would be: "Read this contract. Identify the payment terms, the notice period for cancellation, and any clauses that differ from our standard 30-day MSA." That prompt extracts information the founder would otherwise have to search for manually, and it would have revealed what the feature actually does.

**Better approach:** Before testing any new Claude capability, write down the specific task you want it to solve — in the format you learned in Module 2. Role, task, context, constraints, format. Then run the test against that real task. If the result doesn't help, you now have a specific, constrained test you can iterate on. If it does help, you've already learned the feature in the context of real work.

---


## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 4,
  "mapping": {
    "Creative & Marketing": 2,
    "SaaS / Software": 5,
    "Professional Services": 4,
    "Trades & Construction": 3,
    "Property & Real Estate": 1,
    "Finance & Accounting": 0,
    "E-commerce & Retail": 1,
    "Health & Wellness": 4,
    "Education & Coaching": 4,
    "Trades & Services": 3,
    "Other": 4
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Classify the update before changing your workflow

**Scenario:** Capability vs interface · Bookkeeper's Projects update

**Prompt:**
```

```

**Why it works:** The prompt gives Claude the specific update, the student's current setup, and asks for a categorisation before asking for a practical recommendation. By asking Claude to categorise first, the student builds the habit of distinguishing capability from interface changes — and gets a recommendation grounded in their actual workflow, not a generic tutorial.

---

### Example 2: Three weeks later, a real task surfaced — then she used the feature

**Scenario:** Wait for the use case · Retail owner's supplier comparison

**Prompt:**
```

```

**Why it works:** The student waited until she had a real task before using the document comparison capability. Full Module 2 structure — role, task, real data, output format, specific recommendation criteria. The output directly supports a business decision. She didn't learn the feature in the abstract; she learned it by using it.

---

### Example 3: One targeted instruction fixes unwanted preamble after a model update

**Scenario:** Diagnosing a shifted output · Marketing consultant's captions

**Prompt:**
```

```

**Why it works:** **Why the one change worked:** She identified exactly what shifted — unwanted preamble — and added one targeted instruction to suppress it. She didn't rewrite the whole prompt or blame Claude. She treated it as a defaults problem and overrode the new default explicitly. Minimal, targeted, fast.

---

### Example 4: Ask for a recommendation grounded in your actual use cases

**Scenario:** Judgment call · Landscaper assesses extended context windows

**Prompt:**
```

```

**Why it works:** The prompt gives Claude the feature, the business context, and the existing use cases — then asks for a judgment call with a reason. Asking what to do if the answer is no is often the more useful part. The owner gets a genuine recommendation, not a generic "yes this is useful."

---

### Example 5: Constraints force prioritisation — and make the system usable

**Scenario:** Filter the noise · Setting up a 15-minute weekly system

**Prompt:**
```

```

**Why it works:** Explicit about what the student does not want — general AI news, tech sites, social media — which is as important as what they do want. Three sources and 15 minutes forces prioritisation rather than an exhaustive list. The output format (what / how often / how long) makes the system immediately actionable.

---

### Example 6: Diagnosing whether a drifting support-reply template is model drift, prompt rot, or a Claude default change

**Scenario:** SaaS founder · Diagnosing a support-reply template that shifted

**Prompt:**
```
I'm the founder of RosterRight (rostering for AU hospo, 5-person team). For 4 months I've used the same Claude prompt to draft Tier-1 support replies from a customer message + their account metadata. Last 2 weeks the drafts have shifted: noticeably longer, more hedging ("you may want to consider..."), and twice it suggested a workaround for a feature we shipped a fix for in March.
      
      Help me diagnose which of the three causes from the lesson is most likely:
      1. Model drift (the model itself behaves differently)
      2. My prompt rotted (something about my product/context changed and the prompt no longer matches)
      3. A Claude update changed default behaviour (e.g. verbosity, hedging defaults)
      
      What I've already checked:
      - Same model ID, same temperature, same system prompt
      - Customer message styles haven't obviously changed
      - I noticed the shift around 10 April; I don't recall reading any Anthropic update that week
      
      For each of the three causes: how would I quickly test it with 2-3 real tickets I have on hand? What's the cheapest test to run first? End with a one-line recommendation for what I should do today vs this week.
```

**Why it works:** This is the lesson's diagnostic framework applied directly — the three causes (model drift / prompt rot / default behaviour change) named explicitly, with the founder bringing concrete observations (longer replies, more hedging, an outdated workaround). Asking for the cheapest test first matches the lesson's "wait for the use case, don't over-investigate" pragmatism.

---

## Graded deliverable

**Title:** Map a new feature to a real task — then test it honestly

**Brief:** Apply two of the lesson's staying-current moves to your own work. **Move 1 (always):** identify one Claude feature or recent capability shift you haven't adopted yet, match it to a specific task in your business, test it with a structured prompt, and write a short assessment. **Move 2 (pick one):** classify a recent Claude update you've noticed (capability vs. interface, ready vs. wait), OR diagnose a Claude output that shifted on you (what changed and how you adjusted), OR sketch the 15-minute weekly filter system you'll use to stay current going forward. The point is practising the judgement, not chasing every release note.

**What to submit:**

1. **The feature you identified — what it does, and why you hadn't used it** — Name the feature specifically. Describe what it does in one or two sentences. Explain why you hadn't used it before this lesson.

2. **The real task you matched it to — and why it's a good fit** — Describe the task: what it is, how often you do it, why it matters in your business. Then explain why the feature is well-suited — not just that it exists, but why the task's shape matches what the feature does.

3. **The prompt you ran — and Claude's full response** — Fully written prompt using Module 2 structure (role, task, context, constraints, output format). Real or realistic data only — no bracket placeholders. Then paste Claude's full response, not summarised.

4. **Honest assessment + your second move (120–180 words total)** — **Part A — assessment of Move 1 (60–80 words):** Did the feature actually help your specific use case? Name what worked, what didn't, what you'd do differently. An honest no is as valuable as a yes. **Part B — your second move (60–100 words):** Pick one and do it: classify a recent Claude update you've noticed (what kind of update, what it changed for you), OR diagnose a Claude output that shifted on you (what was different, how you adjusted), OR write the 15-minute weekly filter system you'll start using.

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Is the feature named precisely — not "I used vision" but "I used Claude's ability to extract specific data points from a PDF invoice"? Is the task genuinely specific, naming the actual work, frequency, and why it matters? Vague features and vague tasks both score low.
- **Structure (25 pts)** — Does the task-to-feature mapping explain why the feature is well-suited — not just that it exists and could theoretically help? Does the fit explanation show the student understands what the feature does functionally, not just in marketing terms? Are all items clearly separated?
- **Constraint clarity (25 pts)** — Does the test prompt use proper Module 2 structure — role, task, context, constraints, output format? Are real or realistic data used rather than bracket placeholders? Does the prompt actually test the specific feature identified, not a generic use of Claude that could have been done before this lesson?
- **Outcome focus (25 pts)** — Is the 80-word assessment honest — including cases where the feature did not help as expected? Does it identify specifically what worked and what didn't, not just a general impression? Does it include what the student would do differently — showing that the test produced learning, not just a result?

---

## Notes for the AI grading engine

(Not shown to student)

- **Reward (high marks):**
  - The feature is named specifically — "Claude's extended context window," "vision capability for extracting text from handwritten notes," "document comparison across multiple uploaded files" — not just "a new feature I found"
  - The "why I hadn't used it" explanation is honest and specific — "I didn't have a task that needed it" or "I didn't know it existed until lesson 5.1" — not vague
  - The task mapping explains the fit at a functional level — why the feature's specific capability matches the structure of the task, not just that both exist
  - The test prompt uses Module 2 structure throughout — role is defined, task is specific, output format is named, constraints are explicit
  - Claude's response is pasted in full — the student actually ran the prompt
  - The 80-word assessment names specific things that worked or didn't, explains what would be tested differently, and reaches a clear verdict
  - High-scoring assessments often conclude the feature was helpful but not in the way initially expected — this shows genuine engagement with the test rather than confirmation bias

- **Penalise (dock points):**
  - The feature is described so vaguely it could be anything — "I used Claude's image feature" with no specifics about what was uploaded or extracted
  - The task is described at a level that isn't real — "I would use this for client communication" without naming an actual, current task
  - The fit explanation amounts to "this feature could be useful for this task" without explaining why the feature is specifically suited — not just generically applicable
  - The test prompt contains bracket placeholders — the student designed a prompt they didn't actually run
  - Claude's response is summarised ("Claude produced a good response about X") rather than pasted in full
  - The 80-word assessment is entirely positive with no specific evaluation — reads like a product review rather than an honest test report
  - The assessment is under 60 or over 120 words — shows the student ignored the constraint, which is itself part of the skill being assessed

- **Common 60–69 patterns:** The feature is real and the task is identifiable, but the fit explanation is thin — the student says "this feature would help with this task" without explaining the functional match. The prompt has three of the four Module 2 elements but is missing an output format instruction, so Claude's response is longer or differently shaped than the task would need. The 80-word assessment evaluates the output quality but not the feature specifically — it says "Claude did a good job" rather than "the extended context window specifically helped because I could process the whole document without summarising it first." In feedback: quote the fit explanation and ask "what specifically about this task's structure makes this feature the right tool — rather than a regular Claude prompt?" Quote the assessment and ask what changed in the output because of this feature specifically.

- **Common 80+ patterns:** The feature is named with precision — often including the specific subfunctionality they tested. The task mapping shows the student understands what the feature does at a functional level, not just a marketing level. The prompt is clearly constructed using Module 2 principles — role, task, context, constraints, format — and real data is used throughout. The assessment is genuinely honest — often noting that the feature helped with one aspect of the task but not another, or that the prompt needed adjustment after the first test. These submissions show the student has developed the habit of feature-as-tool-for-task rather than feature-as-novelty.

- **Feedback tone:** Direct, specific, and kind. Quote the student's fit explanation when showing what stronger reasoning looks like. If the prompt has a placeholder, name it and show what real data would replace it. If the 80-word assessment doesn't engage with the feature specifically — only with Claude's general output quality — point to the distinction and ask the student to rewrite the assessment with that question in mind: "what did this specific feature make possible that a regular Claude prompt wouldn't have done?" End with one concrete next step: either a specific edit for resubmission or (if they passed) the one thing to try next with the feature they tested.

- **Resubmission gating:** Check that the fit explanation has become more functional — not just longer or more enthusiastic. Check that the prompt has been genuinely run with real or realistic data — not just had placeholders filled in with generic text. Check that the 80-word assessment now engages with the feature specifically and includes both what worked and what didn't. If the student changed their chosen feature in the resubmission, award credit if the new choice is more genuinely matched to a real task and the fit explanation is stronger.
