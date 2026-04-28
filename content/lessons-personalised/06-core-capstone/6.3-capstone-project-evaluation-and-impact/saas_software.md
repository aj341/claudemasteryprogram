# Lesson 6.3 — Capstone Project: Evaluation and Impact

**Module:** 06 · Core Capstone
**Estimated time:** 45 minutes
**Format:** Read + Measure + Graded deliverable

## Pre-requisites

- Modules 1–5 complete (all lessons passed)
- Lesson 6.1 — Capstone Project: Design and Planning (passed)
- Lesson 6.2 — Capstone Project: Build and Implement (passed)

---

## Learning objectives

By the end of this lesson you'll be able to:
- Return to your 6.1 success criteria and measure honestly against them — without moving the goalposts
- Choose an appropriate measurement method for both quantitative and qualitative outcomes
- Describe a partial result accurately, without inflating or dismissing it
- Identify the specific elements of your solution that worked and those that didn't
- Write a sustainability plan with a named trigger or habit, not a vague intention

---

## Lesson script

### The question that separates good AI users from frequent ones

You designed something in 6.1. You built it in 6.2. Now comes the part most founders skip.

Not because it's hard. Because it's uncomfortable. Measuring something means accepting whatever the measurement shows. That's easy when everything went perfectly. It's harder when it went partially. And it's genuinely difficult when it didn't go the way you expected.

Here's the distinction worth carrying forward: there is a difference between someone who uses Claude well and someone who uses Claude a lot. Frequency is easy to measure. Effectiveness is harder. The founders who get the most from this kind of tool are not the ones who open it most often — they're the ones who ask "did that actually work?" and stay honest about the answer.

This lesson is about that question.

### Going back to what you said success would look like

Open your 6.1 submission. Find the section where you wrote your success criteria. Read it before you do anything else in this lesson, {{firstName}}.

This is the most important step, and it's also the one most founders skip. The temptation is to evaluate the solution you built against how you feel about it now. That's not evaluation — that's rationalisation. Real evaluation goes back to the criteria you wrote before you built anything, when your expectations hadn't been shaped by the experience of building.

Your 6.1 success criteria are your baseline. Not what you wish you'd written, not what feels fair given what actually happened — what you actually wrote.

If you wrote "save at least 30 minutes per week on customer onboarding emails," then the evaluation question is: did you save at least 30 minutes per week on customer onboarding emails? Not "did it help with onboarding?" or "did it seem faster?" The specific criterion you set is the one you measure against.

This constraint is intentional. It teaches something important about working with AI tools: the criteria you set before you build are more reliable than the criteria you construct afterwards to fit what you got. Post-hoc rationalisation is how founders convince themselves that a mediocre result was actually fine, and it's also how they miss the signal that tells them what to fix.

### How to measure — quantitative and qualitative

Some of your success criteria will be countable. Time saved. Emails drafted. Documents processed. Replies sent. If a criterion names a number, the measurement method is straightforward: count the thing before the solution, count it after, and compare. Even an approximate count is more useful than a description.

For example: if your criterion was "reduce first-draft time for LinkedIn posts from 25 minutes to under 10," you can time yourself. Do it three times. Average the result. That's a measurement.

Other criteria won't be countable. "Better quality" is real, but you can't weigh it. "Less stressful" is real, but there's no unit. These qualitative outcomes need a different approach — not a count, but a specific observation that gives a reader enough information to judge whether the outcome occurred.

Here is a prompt you can use to help structure a qualitative measurement:

```
I'm evaluating whether my Claude solution improved [specific outcome].
Before I built the solution, the problem looked like this: [describe
the before state in detail]. After using the solution for [time period],
here's what I observed: [describe the after state in detail]. Help me
identify whether this constitutes a meaningful improvement, and what
evidence I should cite in my evaluation report.
```

The goal is specificity, not certainty. You don't need to prove a causal link between your solution and the outcome. You need to describe what you observed with enough detail that another person could assess it independently.

### What to do when results are mixed

Most real implementations work partially. Not completely. Not at all badly — just not at the level the founder hoped for when they were planning.

This is normal. It is not a failure. It is what honest evaluation looks like.

When results are mixed, there are three things worth doing. First, separate the criteria. One criterion might have been fully met while another was barely touched. Treat them individually rather than averaging them into a vague "sort of worked" assessment.

Second, look for the reason behind the gap. If you wrote "reduce customer reply response time to under two hours" and you actually got it to four hours, the evaluation isn't "partially met — aim was ambitious." The evaluation is "criterion partially met — response time reduced from 6 hours to 4 hours (33% improvement), but still above the 2-hour target. The bottleneck turned out to be [specific issue — e.g. the engineering ticket lookup, not the drafting step I'd optimised]." That tells you something useful. The vague version tells you nothing.

Third, don't retroactively lower the bar. "I didn't quite hit my target, but I think the target was too ambitious" might be true. But it should be written as a reflection on your planning, not as a rewrite of the criterion. The criterion stays as written. The evaluation notes the gap and explains it.

**Common mistake:** Writing "the solution was helpful and I think it improved my workflow overall."

**Better approach:** "Criterion: reduce drafting time for weekly customer-success digests from 90 minutes to under 30 minutes. Actual result: 45 minutes average across 4 weeks (timing confirmed). Criterion partially met — 50% reduction achieved, not the 67% targeted. The remaining time is spent reviewing and adjusting Claude's structure, which I hadn't accounted for in the original design."

The second version tells the grading engine, and more importantly tells you, where the lever is.

### What worked and what didn't

This section is not a summary. It's a post-mortem.

Two or three specific observations, each grounded in something that actually happened. Not "Claude was really helpful with the tone" — that's a feeling, not an observation. Instead: "The system prompt instruction to match the tone of our existing customer-success emails worked well. Every draft came back in the right register without manual editing — in previous attempts without that instruction, I was rewriting about 40% of the output."

The same specificity applies to what didn't work. Not "it was a bit slow to set up" but "the initial setup of the Claude Project knowledge base took three hours, not the one hour I'd estimated, because I had to reformat three existing docs before uploading them."

Specificity in this section does two things. It gives you something to act on — vague observations produce vague improvements. And it demonstrates to the grading engine that you actually ran the solution in real conditions at {{businessName}}, not just tested it once and extrapolated.

### Will you actually keep using this?

The sustainability question is the one most evaluation frameworks ignore. They ask whether the solution worked. They don't ask whether it will keep working — or whether it will quietly get abandoned in three weeks when the novelty wears off.

Be honest with yourself here. A solution that requires significant ongoing effort to maintain tends not to survive contact with a busy work week. A solution built into a trigger — something that already happens on a regular schedule — tends to stick.

The sustainability plan you write here needs to name something concrete. Not "I will remember to use this" — that's not a plan. Not "I'll make it part of my routine" — that's an intention, not a mechanism.

A concrete sustainability plan sounds like this: "Every Monday morning when I open my Linear board to plan the week, I'll run the weekly customer update prompt before doing anything else — it takes four minutes and produces the draft I used to spend 30 minutes on." The trigger is Monday morning Linear. The action is specific. The time cost is known.

Or: "This solution lives in a pinned Claude Project, so it's the first thing I see when I open Claude. I don't need to remember it — I just need to keep the Project pinned and actually open Claude instead of starting from scratch in a new tab."

One concrete trigger or habit. That's the minimum. If you can't name one, that's a signal worth sitting with.

### Before you write your submission

A few things to check before you start writing.

Go back to 6.1. Read your success criteria again. Write them down somewhere you can refer to them while writing this evaluation. If you find yourself writing new criteria that weren't in 6.1, stop. Note them in the "what worked and what didn't" section as a reflection on your planning — but don't evaluate against them as if they were always the target.

Collect your evidence before you write. If you can get actual numbers, get them first. Time yourself. Count things. Screenshot a before/after if it helps. Qualitative observations are legitimate measurement, but they should describe something specific you observed — not a general impression formed at the end.

Separate the five submission components clearly. The grading engine marks them individually. A strong paragraph that blends measurement method, results, and comparison into one section is harder to grade and almost always scores lower than three clearly separated, shorter entries.

Finally, be honest even when honesty is uncomfortable. An evaluation that describes a partial result clearly and explains why — and then names what would need to change for the solution to hit the original target — will score higher than an evaluation that claims full success without specific evidence to support it.

---


## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 0,
  "mapping": {
    "Creative & Marketing": 1,
    "SaaS / Software": 5,
    "Professional Services": 4,
    "Trades & Construction": 3,
    "Property & Real Estate": 0,
    "Finance & Accounting": 0,
    "E-commerce & Retail": 2,
    "Health & Wellness": 6,
    "Education & Coaching": 7,
    "Trades & Services": 3,
    "Other": 0
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Clearwater Accounts — quantitative measurement

**Scenario:** Bookkeeping · Time saved on client onboarding

**Prompt:**
```

```

**Why it works:** Real numbers, a clear before state, and the specific 6.1 criterion to measure against. Claude can calculate 2 clients &times; (22 &minus; 9.7 min) = 24.6 minutes saved per week — just under the 30-minute target — and flag the shortfall honestly. No vague claims, no invented framing.

---

### Example 2: Proposal introduction quality — specific before/after

**Scenario:** Marketing consultant · Qualitative measurement

**Prompt:**
```

```

**Why it works:** Before and after states described in concrete terms rather than abstract claims. The prompt tells Claude what a good measurement summary should do — be specific enough for independent assessment. The output will be far more credible than "quality improved."

---

### Example 3: Supplier invoice processing — framing a partial hit

**Scenario:** Retail · Honest partial result

**Prompt:**
```

```

**Why it works:** The student already knows the gap and the reason. The prompt asks Claude to frame an honest partial result without spin in either direction. The output separates the achieved improvement (43% reduction) from the shortfall and names the structural reason — which is more useful than claiming the target was too ambitious.

---

### Example 4: Client report drafting — dollar-value impact

**Scenario:** Sole trader · ROI framing for 6.4

**Prompt:**
```

```

**Why it works:** Clean inputs, a clear output format, and a two-sentence constraint that forces precision. The student walks away with a credible, citable figure for 6.4 — not a vague claim about productivity.

---

### Example 5: Position description drafting — naming a real trigger

**Scenario:** HR manager · Concrete sustainability plan

**Prompt:**
```

```

**Why it works:** The student tells Claude exactly what the paragraph needs to contain and explicitly rules out the vague language that makes sustainability plans useless. The result will name a trigger, a habit, and a failure mode — the minimum a sustainability plan needs to be actionable.

---

### Example 6: Priya reports an honest partial result on her support-triage capstone after four weeks

**Scenario:** SaaS founder · Honest partial-result evaluation

**Prompt:**
```
I'm Priya at LedgerLoop. Four weeks ago I shipped my Module 6 capstone — Claude Project for support triage and first-draft replies. I'm at the 6.3 evaluation step. Help me write the honest partial-result write-up against my original 6.1 success criteria.
      
      Here's the data:
      
      Criterion 1 — time per ticket (target: under 4 min, was 12 min). Result: 3.5 min on how-to and billing tickets. Bug tickets still 11 min because I have to verify against our actual codebase. PARTIAL.
      
      Criterion 2 — drafts feel on-brand (target: I send without rewriting 70% of the time). Result: 82% on how-to, 74% on billing, 41% on bug replies (too apologetic, over-promises a fix timeline). MIXED.
      
      Criterion 3 — I'm not the bottleneck (target: my co-founder Tom can run triage Fridays). Result: yes, Tom ran the last two Fridays solo. PASS.
      
      Write me an honest evaluation that:
      - States plainly what worked and what didn't
      - Doesn't oversell — bug tickets are still a problem
      - Names the specific reason bug replies drift (no codebase access)
      - Proposes a v2 scope (add a knowledge doc of our top 20 known issues) but flags it's a v2, not a fix-tomorrow
      
      Keep it 250 words. I'm submitting this as my Module 6 capstone evaluation.
```

**Why it works:** This is the 6.3 honest partial-result move — going BACK to the success criteria written in 6.1 and reporting against each one with the courage to name what didn't work. The "v2 not a fix-tomorrow" line is the lesson's discipline against retrofitting success.

---

### Example 7: Marcus writes the sustainability plan that decides whether his recall capstone survives past month two

**Scenario:** Physio practice owner · Sustainability plan with triggers

**Prompt:**
```
I'm Marcus at Northshore Physio. My Module 6 capstone — patient recall message drafting — has been running for six weeks. The 6.1 success criteria all hit (Anya's Fridays dropped from 3 hours to 38 minutes; rebooking response rate up from 14% to 22%; she actually likes using it).
      
      Now the 6.3 question: will we still be using this in three months? Help me write the sustainability plan with concrete triggers, not vague intent.
      
      Cover:
      
      1. Who owns it — name the person, not 'the team'. Anya owns the weekly run. I own the Project's knowledge base updates.
      2. The recurring trigger — exactly when does the recall pass happen, tied to something already on the calendar (the Friday Cliniko export Anya already does)
      3. Maintenance trigger — what makes us update the knowledge doc and when (every quarter, plus any time we add a new service or change pricing)
      4. Kill-switch trigger — under what specific condition do we stop using it. Be concrete. (e.g., if response rate drops below 16% for three consecutive weeks, OR if a patient complains the SMS felt impersonal, we pause and review.)
      5. Privacy review trigger — every six months I re-check what we're putting in vs the NZ Privacy Act 2020 principles, even if nothing's changed
      
      Write it as a one-page plan Anya and I can pin above the front desk. Plain English. No jargon.
```

**Why it works:** Hits the 6.3 sustainability move directly — concrete triggers, not vague intent. Each trigger is tied to something already happening (Friday export, quarterly review, six-month privacy check), which is exactly the lesson's test for whether a capstone survives past the launch buzz. The kill-switch is the honest part most students skip.

---

### Example 8: Hannah measures the real time saved on Term 2 reports against her 6.1 target

**Scenario:** Tutoring business owner · Quantitative time-saved evaluation

**Prompt:**
```
I'm Hannah at BrightPath Tutoring. Term 2 reports are out — first cycle using my Module 6 capstone Project. Now the 6.3 quantitative pass. Help me write the time-saved section of my evaluation against my original 6.1 criterion.
      
      The 6.1 target: under 3 minutes per report, down from 8.
      
      What actually happened across 84 reports:
      - Total elapsed time across three evenings: 4 hours 20 minutes (was 11 hours last term)
      - Per-report average: 3 min 6 sec
      - BUT: 9 reports needed a heavy rewrite (the two NCCD-adjusted students, plus the 7 senior students prepping for QCE — Claude's draft was too generic for high-stakes feedback). Those 9 averaged 11 minutes each.
      - Strip those 9 out: the other 75 averaged 2 min 14 sec.
      
      Write the quantitative section that:
      - Reports the headline honestly (3 min 6 sec — just over target)
      - Surfaces the bimodal pattern (75 fast, 9 slow) instead of hiding it in an average
      - Calculates real hours saved across the term (was 11 hrs, now 4 hrs 20 min — saved 6 hrs 40 min, 60% reduction)
      - Notes what the 9-report tail tells me about scope for v2 (separate knowledge doc for high-stakes/NCCD reports)
      
      Keep it 200 words, plain numbers, no spin.
```

**Why it works:** This is the 6.3 quantitative measurement move — going back to the 6.1 criterion with real numbers and refusing to hide a bimodal result inside an average. Surfacing the 9-report tail is exactly the honest reporting the lesson teaches: the average looks fine, but the truth is more useful.

---

## Graded deliverable

**Title:** Capstone Evaluation Report

**Brief:** Measure the actual impact of your capstone solution — the one you designed in 6.1 and built in 6.2 — against the success criteria you set before you built anything. Submit five clearly separated components: measurement method, results, criteria comparison, what worked and didn't, and a sustainability plan with a concrete trigger. Honesty scores higher than polish here.

**What to submit:**

1. **Measurement method** — For each 6.1 success criterion, describe how you measured it — what you counted, timed, compared, or observed. 1–2 sentences per criterion.

2. **Results** — What actually happened. Numbers where you can get them, specific observations where you cannot. As specific as the data allows.

3. **Criteria comparison — met / partially met / not met** — For each criterion, state the verdict and explain the gap (or confirm the hit). Quote or clearly paraphrase the 6.1 criterion before you compare. 1–3 sentences per criterion.

4. **What worked and what didn't** — 2–3 specific observations grounded in what actually happened. Include at least one thing that did not work as planned, described specifically.

5. **Sustainability plan (one paragraph, ~120 words)** — Name a concrete trigger or habit that keeps the solution alive after the course ends. "I'll remember" is not a plan. Name the moment, the action, and what would break the habit.

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Are results specific? Actual numbers used where the outcome is measurable, precise observations used where it is not. Vague claims ("it was helpful," "quality improved") score in the bottom half of this band. Specific figures or described observations with enough detail for independent assessment score in the top half.
- **Structure (25 pts)** — Are all five submission components present and clearly separated — measurement method, results, criteria comparison, what worked and didn't, and sustainability plan? A submission that blends components or omits one scores proportionally lower. The reader should be able to identify each component without effort.
- **Constraint clarity (25 pts)** — Does the measurement explicitly tie back to the 6.1 success criteria? Submissions that introduce new criteria — or measure against a revised version of the original without acknowledging the revision — score in the bottom half. Quoting or clearly paraphrasing the 6.1 criteria and measuring against them directly scores in the top half.
- **Outcome focus (25 pts)** — Is the evaluation honest? Partial results described as partial, with reasons. "Everything went perfectly" without evidence scores low. The sustainability plan must name a concrete trigger or habit — not an intention. A vague sustainability paragraph scores in the bottom quarter regardless of other scores.

---

## Notes for the AI grading engine

These notes are read by the grading engine when scoring submissions for this lesson. They are not shown to the student.

- **Reward (high marks):**
  - Student quotes or clearly paraphrases their 6.1 success criteria before measuring against them
  - Numbers are used where the outcome is measurable — even rough numbers (timed three times, averaged) are significantly better than impressions
  - Partial results are described accurately with a named reason for the gap — not excused, not inflated
  - The sustainability plan names a specific trigger (a day, a task, a moment in the workflow) and a specific action — not "I'll remember to use it"
  - The "what worked and what didn't" section contains at least one observation about something that didn't work as planned, described specifically

- **Penalise (dock points):**
  - Vague results language: "it was helpful," "definitely improved," "made things easier" without specifics — dock heavily from Specificity
  - Missing components: any of the five components absent or clearly merged — dock from Structure proportionally
  - New criteria introduced post-hoc without acknowledging they differ from 6.1 — dock heavily from Constraint clarity
  - "Everything went perfectly" or equivalent, without specific evidence — dock from Outcome focus; this is the most common form of dishonest evaluation and should not be rewarded
  - Sustainability plan that contains only intentions, not mechanisms — dock from Outcome focus

- **Common 60–69 patterns:**
  - All five components present, results written in general impressions rather than specifics. Student clearly completed the solution but didn't collect data. Grade reflects the structure without rewarding the vagueness.
  - Success criteria comparison present, but criteria appear to have been revised from 6.1 originals to make the result look better. Constraint clarity drops this into the 60s even if other sections are solid.
  - Sustainability plan is one or two sentences saying the student intends to keep using the solution. No trigger named.

- **Common 80+ patterns:**
  - Student quotes 6.1 criteria verbatim in the comparison section. Results include actual numbers with a brief note on methodology. Partial results are named as partial with a specific explanation. At least one "what didn't work" observation is specific enough to be actionable. Sustainability plan names a day or task trigger.
  - Results section includes a calculation (time saved × frequency = weekly impact). Student acknowledges that one criterion wasn't measured as rigorously as others and explains why. This kind of honest methodological note is a strong signal of genuine self-assessment.

- **Feedback tone:** Direct, specific, kind. This lesson is about honesty, not perfection. A student who submits an honest account of a mixed result should be rewarded for the honesty and guided on how to sharpen the specifics. Quote the student's own words when pointing to a strength or a gap. End every grade card with one concrete next step toward 6.4 — for example: "Take the ROI figure you calculated and put it in a single sentence for your 6.4 presentation. That number is your lead."

- **Resubmission gating:** When scoring a resubmission, compare explicitly to the previous submission. Reward visible improvement — even if the resubmission is still borderline, a student who added specifics and named a concrete trigger should be acknowledged for the revision. Dock if the resubmission adds bulk without adding specificity.
