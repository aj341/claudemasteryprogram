# Lesson 2.3 — Prompt templates and reusable patterns

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
- Lesson 2.1 — How Claude reads your prompt
- Lesson 2.2 — Role, context, task, format — in depth

## Learning objectives

By the end of this lesson you'll be able to:
- Explain what a prompt template is and why it saves more time than rewriting from scratch
- Identify the repeating tasks in your business that are worth templating
- Extract a reusable template from a prompt that already worked well
- Store and organise your templates in a way you'll actually maintain
- Update a template when it starts producing weaker output

---

## Lesson script

### The prompt you've written three times this month

Think about the last four weeks. You've sent Claude a prompt to write a client update email. Then two weeks later, you wrote a different prompt for a different client update email. Then again last week, another one. Each time, you started from scratch — typed out the context, the tone instruction, the format, the constraints. Each time took two or three minutes. Each time produced a slightly different result because you wrote the prompt slightly differently.

That's a pattern you're repeating on a task Claude could handle consistently if you gave it a consistent input.

A prompt template is the solution. It's a prompt with deliberate blank spaces — variables — that you fill in with the details that change from task to task. Everything that stays the same across every instance of that task is already written. You only type what's new.

This lesson is about building those templates for the tasks that matter most in your business, storing them somewhere you'll use them, and keeping them current.

### What a prompt template actually is

A prompt template is a prompt with placeholders for the parts that vary. The structure, the role instruction, the format specification, the tone constraints — those are fixed. The details specific to this particular instance of the task — a client's name, the topic, the date, the specific product — are left as named blanks.

Here's a simple example. Say you regularly write internal project status updates. Without a template, you'd write something like this each time:

```
I'm a project manager at a 15-person marketing agency in Auckland.
We're wrapping up a website redesign project for a retail client.
We're on track, but the content delivery from the client is two weeks
behind. Write a short internal status update for my team, under 150 words,
professional tone, no jargon.
```

That's a solid prompt. But you write it from scratch every time, with slightly different wording, and Claude gives slightly different structures back.

A template version looks like this:

```
I'm a project manager at [AGENCY NAME], a [TEAM SIZE]-person [AGENCY TYPE]
in [CITY]. I'm writing a weekly internal status update for the
[PROJECT NAME] project.

Current status: [ON TRACK / AT RISK / DELAYED — choose one]
Key update this week: [ONE SENTENCE — what happened or changed]
Blocker or watch item: [ONE SENTENCE — or write "None this week"]
Next milestone: [DATE AND WHAT IT IS]

Write the status update in a professional but direct tone, under 150 words,
no jargon. Use plain paragraph format — no bullet points.
```

You fill in the brackets, you send it, and you get a consistently structured output every time. The variable parts change; the structure and tone instruction stay fixed.

That consistency is the point. When you use the same template for the same task type, you train your own expectations alongside Claude's inputs. You know what you're going to get. Your team knows what format to expect. The task becomes predictable in a good way.

### Finding the tasks worth templating

Not every task deserves a template. If you do something once, the effort of building a template isn't worth it. Templates earn their keep on tasks you do repeatedly — weekly, fortnightly, or whenever a particular trigger occurs (a new client onboards, a project closes, a complaint comes in).

Go back to the task map you built in Lesson 1.4. Look for tasks with these characteristics:

**Same structure every time.** The output always follows the same format: a status update, a client email of a certain type, a product description, a meeting agenda, a social media post. The content changes but the shape doesn't.

**Same audience or same purpose.** You're always writing to clients, or to your team, or to a specific platform. The audience doesn't shift from instance to instance.

**Same constraints.** The tone, the word count, the required elements — those don't change between instances. Only the specific details do.

**You've done it more than twice already.** If you've already written similar prompts for the same task type two or more times, you have enough data to extract a template. You've already discovered what works.

Common candidates in AU/NZ small businesses: client update emails, job or project quotes, follow-up emails after a meeting or site visit, social media captions for a recurring content type, internal team briefings, onboarding messages for new clients or customers, supplier inquiry emails, monthly reports to a business partner or board.

Look at your task map. Underline three tasks that fit these criteria. Those are your starting points.

### How to extract a template from a prompt that worked

The fastest way to build a template is not to write one from scratch. It's to take a prompt that already produced a useful output and work backwards.

Find a prompt you've sent that you were happy with — one where Claude returned something you used with minimal editing. Copy that prompt into a blank document.

Now read through it and ask: which parts of this prompt would change if I ran this same task for a different client, project, or situation next time?

Those parts become your variables. Put them in brackets and give each one a name: `[CLIENT NAME]`, `[PROJECT STATUS]`, `[KEY UPDATE]`, `[WORD COUNT]`. Be descriptive in the bracket label — future you should know exactly what to put there without thinking.

Everything you didn't mark as a variable stays fixed. That's the template structure.

Then do one more pass. Look at the fixed parts and ask: is this instruction specific enough that Claude would follow it correctly if I gave it brand-new context? If a constraint is vague — "write it professionally" — sharpen it now: "write it in a professional but direct tone; avoid corporate jargon and filler phrases like 'please do not hesitate to contact us.'"

This extraction process takes about five minutes per template. It's faster than building from scratch because you're working from something that already worked.

### The right structure for a template

In Lesson 2.2 you learned the Role → Context → Task → Format structure. That structure applies directly to templates. A well-built template covers each of those elements — some fixed, some variable.

Here's how they map:

**Role** — usually fixed. Claude's role in this task doesn't change based on who the client is. "You are writing from the perspective of a professional service provider communicating with a client" stays the same every time.

**Context** — partly fixed, partly variable. Your business background is fixed (and can come from your context document). The situation-specific details — the client's name, the project, what happened this week — are variables.

**Task** — fixed structure, variable specifics. "Write a [TYPE OF DOCUMENT]" is fixed. The details inside the task instruction might include variables: "covering [TOPIC]" or "for [AUDIENCE]."

**Format** — almost always fixed. Word count, layout, tone, what to include or exclude — these should be consistent for the same task type. If your client update emails are always under 200 words and never use bullet points, that's fixed in the template.

A common mistake is leaving format instructions as variables — putting `[TONE]` or `[LENGTH]` as blanks. If you have to decide those every time, you're defeating the purpose of a template. Decide them once, fix them in the template, and only override them in the rare case where this instance genuinely needs something different.

### Common mistake → better approach

**Mistake:** Building a template with too many variables.

A template with eight brackets to fill in — `[CLIENT NAME]`, `[INDUSTRY]`, `[PROJECT TYPE]`, `[TIMELINE]`, `[MAIN OUTCOME]`, `[TONE]`, `[LENGTH]`, `[SPECIFIC CONSTRAINT]` — isn't really saving you time. You're still doing the thinking you'd do writing the prompt from scratch, just in a form with boxes to fill.

**Better approach:** Keep variables to the information that genuinely changes from instance to instance. Everything that stays the same for this task type — tone, length, format, who you are, how you communicate — gets fixed in the template. Aim for two to four variables maximum on most task templates. If you find yourself with more than five, review which ones you can decide once and fix permanently.

### Storing and organising your templates

The most useful template library is the one you actually use. Which means it has to be somewhere you can reach in ten seconds, in the same moment you sit down to do the task.

The storage medium matters less than the access habit. A Google Doc you open every morning beats a Notion database you set up thoughtfully and visit once a week. A pinned note on your phone beats an elaborate folder structure you have to navigate.

A few options that work for different people:

**Claude Projects.** If you're in Claude daily, the Project's instructions field is the right place for your most-used templates. Paste them directly into the project context and they're available every session without any retrieval step.

**A single text document.** One file called `prompt-templates.txt` (or `.md`) on your desktop or in your cloud drive. No folders, no categories — just a running list of templates, each with a short heading. Ctrl+F to find the one you need.

**Notion or similar.** A database with one page per template works well if you're already in Notion and it's your default workspace. Add a tag for the task type (client communication, internal, social, admin) so you can filter fast.

**A pinned document in your team chat.** If you share these with staff, Slack or Teams pinned messages get them there without another app.

The one thing that kills a template library: putting templates in a place that requires more than three clicks or five seconds to reach. If the retrieval step feels like effort, you'll rewrite from scratch instead.

Pick the storage method you'll actually use — not the most organised one.

### The maintenance habit

Templates stop working when your business context changes and the template doesn't. You change your pricing structure and the template still mentions the old one. You shift your tone after client feedback and the template still has the old voice instruction. You add a new service and the template doesn't know about it.

This doesn't mean reviewing your templates on a schedule. It means noticing when an output starts coming back weaker than it used to, and using that as the trigger to check the template.

The signs a template needs updating:

- Claude's output needs more editing than it used to. The output is still okay, but you're making the same corrections each time.
- You've started adding extra instructions each time you send the template — things you wrote once in a revision prompt and now write every time. Those additions belong in the template.
- Something about your business changed — a new service, a different client type, a rebranded voice — and the template still describes the old situation.

When any of those happen, open the template and update it. This takes two minutes. The fix is almost always: add the correction you've been making manually into the fixed part of the template, or update the context to reflect how your business has changed.

A template library that gets small updates when needed stays useful for years. One that never gets touched becomes a liability — you send it, you edit the output, you forget the fix, you edit again next time. The library should make your work faster, not add a maintenance problem. The rule is simple: if you corrected the output in the same way twice, update the template.

---

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 0,
  "mapping": {
    "Creative & Marketing": 2,
    "SaaS / Software": 6,
    "Trades & Construction": 1,
    "Property & Real Estate": 0,
    "Finance & Accounting": 4,
    "E-commerce & Retail": 3,
    "Health & Wellness": 5,
    "Trades & Services": 1,
    "Other": 0,
    "Education & Coaching": 7
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Clearpath Agency · construction-sector client

**Scenario:** Project management · Fortnightly client update email

**Prompt:**
```

```

**Why it works:** The fixed elements — agency name, format, tone, sign-off — stay the same every fortnight. The six variables cover only what genuinely changes. The output is consistent in structure and voice across all client emails, because the template enforces it.

---

### Example 2: Bright Side Electrical · Perth sole trader

**Scenario:** Electrical trades · Follow-up email after a site visit

**Prompt:**
```

```

**Why it works:** Every follow-up email follows the same shape. The fixed section establishes who he is and the tone he wants. The six variables cover only what changes per job. Across a month of site visits, this template saves 10–15 minutes per job.

---

### Example 3: Strand Hair Studio · Brisbane

**Scenario:** Salon services · Monthly summary to a business partner

**Prompt:**
```

```

**Why it works:** Marcus gets the same structure every month, which means he can scan it in 90 seconds. The salon owner fills in the same set of fields each month. The fixed format instruction produces a consistent email even when content varies.

---

### Example 4: Kettle & Kind · Adelaide homewares

**Scenario:** Retail · Instagram caption for a product feature

**Prompt:**
```

```

**Why it works:** Brand voice, audience, and format constraints are fixed. The three variables are the only parts that change per post. Her feed maintains a consistent voice across dozens of products without rewriting the prompt each time.

---

### Example 5: Steadview Financial · Melbourne

**Scenario:** Financial services · New client onboarding email

**Prompt:**
```

```

**Why it works:** The practice's identity, voice, and client description are fixed. The five variables capture exactly what changes per new client. The result is a welcome email that sounds personal but is structured identically every time — so no steps get missed.

---

### Example 6: A treatment plan summary template the front desk can run after every initial consult

**Scenario:** Geelong physio practice · Reusable treatment plan summary template

**Prompt:**
```
You are drafting a treatment plan summary email for a patient at Bayside Physio, a 2-physio clinic in Geelong. The email goes from the treating physio to the patient within 24 hours of their initial consult. It confirms what was discussed, the plan, and next steps — nothing more.
      
      Use these inputs:
      - Patient: [PATIENT FIRST NAME]
      - Treating physio: [PHYSIO NAME]
      - Presenting issue: [PRESENTING ISSUE in plain language, e.g. "lower back pain after a fall"]
      - Treatment approach: [TREATMENT APPROACH, 1–2 sentences]
      - Recommended sessions: [NUMBER OF SESSIONS] over [TIMEFRAME]
      - Home exercises: [LIST 2–4 EXERCISES or "none yet"]
      - Next appointment: [NEXT APPOINTMENT DATE/TIME]
      - Review point: [WHEN WE'LL REASSESS, e.g. "after session 4"]
      
      Format: short email, max 160 words, plain language (no clinical jargon unless we've already used the term in session). Warm but professional. Sign off from [PHYSIO NAME], Bayside Physio. Don't make claims about recovery timelines beyond what's in the inputs, and don't add disclaimers or marketing language about the clinic.
```

**Why it works:** This is a textbook reusable template — bracketed variables like [PATIENT FIRST NAME] and [TREATMENT APPROACH] mark every spot the front desk swaps in real details, so the prompt stays stable across hundreds of patients. *Use it after every initial consult, before the patient leaves the carpark.* The lesson's "extract a template from a prompt that already worked" principle is exactly what's happening here.

---

### Example 7: Extracting a reusable monthly product-update template with bracketed variables

**Scenario:** ChairFill (4-person dental-recall SaaS, Melbourne) · Reusable template for monthly product-update emails to clinic admins

**Prompt:**
```
You are a SaaS product writer for ChairFill, a recall-and-rebooking tool used by Australian dental clinics. Tone: practical, clinic-admin-friendly, never tech-bro. Assume the reader is a practice manager, not an engineer.
      
      Context: We send a monthly email to all paying clinics summarising what shipped that month — usually 1-3 features, plus any fixes worth mentioning. The email's job is to get practice managers to actually try the new features, not just announce them.
      
      Task: Write this month's update email using the variables below.
      
      Variables:
      - [MONTH AND YEAR]: e.g. April 2026
      - [HEADLINE FEATURE NAME]: the one big thing this month
      - [HEADLINE FEATURE — ONE-LINE BENEFIT]: what it lets the clinic do
      - [HEADLINE FEATURE — WHERE TO FIND IT]: menu path, e.g. Settings > Recalls
      - [SECONDARY FEATURES]: list of 0-2 smaller features, each with name + one-line benefit
      - [FIX WORTH MENTIONING]: optional, one line, plain English (not "resolved an edge case")
      - [SUPPORT CONTACT]: e.g. Jess on support@chairfill.com.au
      
      Format:
      - Subject line including [MONTH AND YEAR]
      - Opening line referencing the month
      - "This month's headline" section: feature name, one-line benefit, one sentence on where to find it
      - "Also new" section: only include if [SECONDARY FEATURES] is filled
      - "One fix worth flagging" section: only include if [FIX WORTH MENTIONING] is filled
      - Closing line pointing to [SUPPORT CONTACT]
      - Total: 160-220 words
```

**Why it works:** This is a real template, not a one-off prompt. The fixed parts (role, tone, structure, word count) stay constant; the bracketed variables are the only things that change month to month. Note the conditional sections — "only include if filled" — which is the maintenance move from the lesson: a template that handles the months when nothing extra shipped without breaking.

---

### Example 8: A reusable template for turning raw course-feedback responses into a one-page trainer summary

**Scenario:** Small RTO (Sydney, 11 staff) · Reusable end-of-course feedback summary template for trainers

**Prompt:**
```
You are summarising end-of-course student feedback for a registered training organisation. Tone: factual, balanced, no defensiveness, no sugar-coating. Written for the trainer who delivered the course, not for marketing.
      
      Context: After every course we run a short feedback survey (5 questions, 1-5 scale plus open comments). The trainer reads this summary before they debrief with the head of training. The template needs to work whether we got 8 responses or 80.
      
      Task: Produce a one-page feedback summary using the variables below.
      
      Variables:
      - [COURSE NAME]: e.g. Cert IV in Business
      - [COHORT DATES]: e.g. 3 Feb – 24 Apr 2026
      - [TRAINER NAME]: e.g. Megan
      - [NUMBER OF RESPONSES] / [NUMBER ENROLLED]: e.g. 14 / 19
      - [AVERAGE SCORES]: per question, 1-5
      - [POSITIVE COMMENTS]: paste the raw open-text positive responses
      - [CRITICAL COMMENTS]: paste the raw open-text critical responses
      
      Format:
      - Header line: [COURSE NAME], [COHORT DATES], [TRAINER NAME], response rate calculated from [NUMBER OF RESPONSES] / [NUMBER ENROLLED]
      - "Scores at a glance" — bulleted, one line per question
      - "What worked" — 3-4 bullets, each grounded in a specific quote or pattern from [POSITIVE COMMENTS]
      - "What to look at" — 2-3 bullets from [CRITICAL COMMENTS], phrased as observations not verdicts
      - "One thing to discuss in the debrief" — single sentence, the most important pattern
      - Total length: 250-350 words, fits on one page
```

**Why it works:** This shows the structure the lesson teaches — fixed parts (role, tone, section headings, length) plus bracketed variables for the parts that change every cohort. The variable list is doing real work: it forces the user to gather the inputs before running the template, which is the recurring-task discipline the lesson emphasises. "Phrased as observations not verdicts" is the kind of fixed instruction that protects quality across dozens of future runs.

---

## Graded deliverable

**Title:** Build and use two real prompt templates

**Brief:** Build two templates for real, recurring tasks in your business — tasks you do at least twice a month. The templates can be brand new (you're writing them now) or refined versions of prompts you've used before. For one of the two, fill it in, run it in Claude, and paste the result. Then write a short storage note. Submit all four fields below.

**What to submit:**

1. **Template 1 — task description + full template** — One sentence naming the real repeating task and how often you do it. Then the full template text with variables in brackets like `[CLIENT NAME]`. Aim for 80–200 words including the task line.

2. **Template 2 — task description + full template** — Same format as Template 1. A genuinely different task category — not two variations of the same email. Aim for 80–200 words including the task line.

3. **Live example of Template 1 — filled in + Claude's response** — Template 1 with every variable filled in for one real instance, followed by Claude's full response. Do not summarise. Length depends on Claude's response — typically 150–400 words combined.

4. **Storage note (~80 words)** — Where will you actually store and retrieve these? Be honest — the place you'll actually use. If you don't have a system yet, describe the simple one you'll start with (a Notes file, a Notion page, a Google Doc — whatever you'll actually open).

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Are both templates written for real, named tasks in the student's actual business — not generic templates that could apply to any industry? Do the variables map logically to the parts of that task that genuinely change from instance to instance?
- **Structure (25 pts)** — Does each template follow a logical order — establishing role/context, task, and format + constraints? Are the fixed parts clearly fixed and the variable parts clearly marked? Is the template complete enough that filling in the brackets would produce a usable output without further editing?
- **Constraint clarity (25 pts)** — Do the fixed parts include specific, actionable constraints — named tone, word count, format rules, exclusions — rather than placeholder instructions like "add tone here" or [TONE]? Constraints that still require a decision at send time are not real constraints.
- **Outcome focus (25 pts)** — Does the live example show that the template produces a useful output without significant additional editing? Does the storage note reflect a realistic, honest plan — not aspirational organisation — based on how the student actually works?

---

## Notes for the AI grading engine

These notes are read by the grading engine when scoring submissions for this lesson. They are not shown to the student.

- **Reward (high marks):**
  - Both templates are clearly grounded in the student's specific business — the task name, the business context, and the variables all make sense together and couldn't be mistaken for another industry's template
  - Variables are named descriptively (`[CLIENT NAME]`, `[PROJECT STATUS]`, `[KEY FINDING FROM SITE VISIT]`) rather than generically (`[VARIABLE 1]`, `[INSERT DETAIL]`)
  - Fixed parts of each template include at least one specific format constraint (word count, layout rule) and at least one specific tone or content constraint — already decided, not left as a variable
  - The live example shows Claude's full response, and the response is clearly shaped by the template structure — consistent format, appropriate tone, no obvious generic filler
  - The storage note is specific and realistic: it names an actual tool or location, describes how the student will access it during a real work moment, and does not rely on a new habit they haven't established yet

- **Penalise (dock points):**
  - Templates are generic — could be "meeting follow-up email template" for any business, with no industry or task specificity in the fixed sections
  - Variables represent decisions the student hasn't made yet — tone, length, format marked as blanks that still need to be chosen each time
  - Constraints are absent from the fixed sections: no word count, no tone instruction, no format rule — just a task instruction with blanks
  - Claude's response to the live example is summarised or cut rather than pasted in full
  - Storage note is aspirational rather than honest — describes an elaborate system the student has just invented rather than a location they already use

- **Common 60–69 patterns:** Templates are specific to a real task but the fixed sections are thin — the context is there (who, what business) but the format and constraint instructions are missing or vague ("professional email" without further specification). The live example works, but the output needed more editing than a well-constrained template should require, which suggests the constraints weren't tight enough. In feedback, quote back the constraint section of the template and show exactly what one specific constraint — a word count, a structural rule, a named exclusion — would have done to reduce the editing needed.

- **Common 80+ patterns:** Both templates read like documents built for genuine recurring use. The variables are minimal and well-named. The fixed sections are specific enough that filling in the brackets and pressing send would genuinely produce something usable. The live example shows an output that's consistent with the template's stated format and constraints. The storage note names a specific tool or file the student already uses in their workday — not something new — and describes a retrieval moment that's credible given their context (e.g., "I'll open it at the start of the Monday session before I write any client emails").

- **Feedback tone:** Direct, specific, and kind. Quote the student's template text when pointing out what's working or what needs tightening. If a constraint is missing, show — with a concrete example — what that constraint would look like written into the fixed section of their template. End with one concrete next step: either a specific fix to the weaker of the two templates, or a recommendation for which task from their task map should become Template 3.

- **Resubmission gating:** Compare the revised templates to the originals. If the fixed sections gained specific constraints they were missing (word count added, tone named more precisely, format rule added), name that improvement explicitly and quote the before and after. If the storage note became more specific and realistic, acknowledge the shift. If the resubmission adds variables to fix what the grader identified as missing constraints — i.e., the student made them variables rather than deciding them — flag this directly: the goal is to decide those constraints once, not to keep deferring them.
