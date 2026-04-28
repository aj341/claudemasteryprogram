# Lesson 6.1 — Capstone Project: Design Phase

**Module:** 06 · Core Capstone
**Estimated time:** 45 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites

- Module 1 complete (Lessons 1.1–1.6) — Claude Essentials
- Module 2 complete (Lessons 2.1–2.6) — Prompt Engineering Fundamentals
- Module 3 complete (Lessons 3.1–3.6) — Practical Daily Applications
- Module 4 complete (Lessons 4.1–4.6) — Claude Projects and Knowledge Management
- Module 5 complete (Lessons 5.1–5.6) — Extended Capabilities

---

## Learning objectives

By the end of this lesson you'll be able to:
- Explain the purpose and structure of the Module 6 capstone project and why it is designed differently from Modules 1–5
- Select a business challenge that is specific enough to build a solution for and significant enough to be worth the effort
- Define clear success criteria before building anything — named, measurable signals that will tell you the solution works
- Map which Foundation tier capabilities you will use and explain why each one fits your specific challenge
- Produce a complete project design document that serves as the brief for Lessons 6.2, 6.3, and 6.4

---

## Lesson script

### This is the real work

You have completed thirty lessons. You have built a prompt engineering practice, a Projects infrastructure, and a set of extended capabilities. Every lesson up to this point gave you a bounded exercise — a specific skill to practise, a specific output to produce. The curriculum decided what you worked on.

Module 6 is different. You decide what you work on.

The capstone is a four-part project, spread across Lessons 6.1 through 6.4. You pick one real practice challenge and build a complete Claude-assisted solution for it. Not a lesson exercise — an actual piece of work that matters to your firm. This lesson, 6.1, is the design phase. You map the problem, define the solution approach, name the tools you will use, and plan the implementation before touching Claude.

That sequence matters. Design before build. Problem before solution. Criteria before output. The lessons up to here have been about developing the skill of working well with Claude. Module 6 is about demonstrating it on something real.

The design document you produce in this lesson is the brief for everything that follows. Lesson 6.2 is the implementation — you build what you planned. Lesson 6.3 is evaluation — you measure what you built against the criteria you set today. Lesson 6.4 is the presentation — you explain what you built, what it produced, and where you would take it next. The choice you make in 6.1 carries through all four lessons. Choose something worth the time.

### Choosing the right challenge

Most students arrive at Lesson 6.1 with one of two problems. The first is choosing something too vague: "I want to improve my client communications" or "I want to use Claude more in my practice." These are directions, not challenges. You cannot build a solution for a direction. You cannot measure whether it worked.

The second is choosing something too large: "I want to automate my entire engagement onboarding" or "I want Claude to handle my LinkedIn." These are projects that would take months with a team. A capstone that cannot be completed in the time you have is a capstone that will fail.

The right challenge sits in a specific middle ground. It is concrete enough to describe in two or three sentences. It is significant enough that solving it produces a real result for your firm — not a nice-to-have, but a genuine improvement in time, quality, or consistency. And it is achievable with the Foundation tier toolkit: prompts, Projects, and extended capabilities. No APIs, no external automations, no developer dependencies.

Here is the test to apply to any challenge you are considering. Answer all three:

**Is it specific?** Can you name exactly what is broken or slow or inconsistent? Not "my fee proposal process is inefficient" but "I spend 45 minutes per fee proposal manually pulling scope items from discovery notes, calculating fee envelopes, and formatting the output — and I send 6–8 proposals a week." The second version names the task, the time cost, the frequency, and the friction point. That is specific.

**Is it significant?** Would solving this make a real difference — in time saved, quality improved, or consistency increased? A challenge that saves five minutes once a month is not worth a four-lesson capstone. A challenge that saves two hours a week, or removes a task you have been avoiding, or produces consistently better outputs for clients — that is worth the work.

**Is it achievable with your current toolkit?** The Foundation tier is prompts, Projects, file processing, and vision. If your solution requires the Claude API, third-party automation, or code, it is outside scope for this capstone. That does not mean those things are impossible — it means they belong in a future project, after this course. Keep the scope inside what you have built.

### Defining your objectives and success criteria

Before you decide how to build anything, define what success looks like. This sounds obvious. Almost no one does it before they start.

Success criteria serve two functions in this capstone. First, they constrain your solution design — if you know you need to reduce fee proposal time from 45 minutes to under 15, you design a solution aimed at that specific target rather than building something vague and hoping it helps. Second, they give you a clear answer in Lesson 6.3 when you evaluate whether the solution worked. Without criteria, evaluation is just an opinion.

A useful success criterion has three properties. It is measurable — you can count it or time it or compare it. It is attached to the challenge — it measures the specific thing you are trying to change, not a proxy. And it is realistic — it is achievable with the solution you are planning, not a wish for perfection.

Good success criteria for a capstone:
- Fee proposal drafting time reduced from 45 minutes to under 15 minutes
- Client summary emails score 4 out of 5 or higher in a self-review against the checklist I defined
- All weekly status reports produced with a consistent structure — zero missing sections — over four weeks

Poor success criteria:
- Clients are more satisfied (not measurable without a survey or system)
- Claude produces better outputs (compared to what, measured how?)
- I use Claude more (frequency is not an outcome)

Name at least two measurable success criteria before you start designing your solution. They become the standard your Lesson 6.3 evaluation will be held to.

### Mapping your Foundation capabilities

The Foundation tier gives you a specific set of tools. The capability map in your design document is where you identify which tools your solution will use — and why those tools fit this problem.

The minimum requirement is three capabilities across different modules. Using three prompt templates from Module 2 counts as one capability, not three. The map needs breadth — at least one capability from Module 2, one from Module 4, and one from Module 5.

More importantly, the capability map should explain the logic. Not "I will use a Project from Module 4" but "I will use a Project from Module 4 to hold the discovery notes and fee tier definitions that Claude needs to reference in every proposal session — without it, I would have to re-paste this context each time." The capability is justified by the problem, not just listed.

Here is an example capability map entry written well versus written poorly:

```
POOR ENTRY:
Capability: File uploads (Module 5)
Use: Upload discovery documents

GOOD ENTRY:
Capability: File uploads — Module 5, Lesson 5.2
Use: Upload discovery interview transcripts at the start of each
proposal session. Claude reads the transcript and extracts the
specifications I need (presenting issue, scope items, stakeholders,
timing constraints) before I write the prompt for the proposal.
This replaces the manual reading and note-taking step that
currently takes 15–20 minutes per proposal.
```

The good entry names the specific document type, the specific output Claude extracts, and the specific step it replaces. That is a capability map entry that tells you exactly how implementation should work when you get to Lesson 6.2.

Work through each capability you plan to use and ask: why does this capability fit this specific problem, and what specific task in my workflow does it replace or improve?

### Building your implementation plan

The implementation plan is the last component of your design document. It is not a project management plan or a business case. It is a practical, step-by-step description of what you will actually do in Lesson 6.2 to build the solution.

Three to five steps is the right length. Each step should name one concrete action, describe what gets done in that action, and indicate roughly how long it should take. If you cannot describe what gets done in a step, the step is not defined well enough.

A common mistake at this stage is confusing planning with building. The implementation plan describes what you will build in 6.2 — it does not require you to start building it now. Write the steps in enough detail that a stranger could follow them and understand what the end state looks like.

**Common mistake → Better approach**

Mistake: Writing a high-level plan that sounds complete but is vague: "Step 1: Set up a Claude Project. Step 2: Build prompts. Step 3: Test the system." This plan describes categories of work, not actual work. You cannot follow it in Lesson 6.2 without making it up as you go.

```
VAGUE PLAN (do not do this):
Step 1: Create a Project for proposals
Step 2: Add prompts
Step 3: Test with a real proposal
Step 4: Refine

SPECIFIC PLAN (aim for this):
Step 1: Create a Proposals Project in Claude. Upload the two scope
templates I use most often. Write the Project instructions to define
Claude's role as a proposal-drafting assistant who knows my fee
tiers ($8k/$18k/$35k) and standard terms. (~15 mins)

Step 2: Write the extraction prompt template — the prompt I will use
to pull scope items from a newly uploaded discovery transcript at
the start of each proposal session. (~20 mins)

Step 3: Write the proposal drafting prompt template — the prompt
that takes the extracted scope plus client requirements and produces
a formatted proposal draft in my standard layout. (~20 mins)

Step 4: Run the full workflow on a real proposal from this week.
Document what works and what needs adjustment. (~30 mins)

Step 5: Revise both prompts based on the test. Finalise the workflow
description I will include in my 6.3 evaluation. (~15 mins)
```

Better approach: Write each step as a named action, not a category. Name the specific prompt, document, or Project element you are building in that step. Include a rough time estimate so you can plan the 6.2 lesson realistically. When you read the plan, you should be able to start following it immediately.

### What you are building toward

The design document you produce in this lesson is not an academic exercise. It is a working brief. In Lesson 6.2, you open that document and follow it. In Lesson 6.3, you return to the success criteria you wrote today and measure against them honestly. In Lesson 6.4, you present the result — what you built, what it produced, and what you learned.

That four-part structure is the closest this course gets to real project work, because it is real project work. Not a simulation, not a case study — an actual solution you designed and built for {{businessName}}, using a toolkit you spent five modules developing.

The best capstone projects in this course share one characteristic: specificity from the start. The students who produce the strongest 6.3 evaluations are the ones who wrote the sharpest design documents in 6.1. The challenge is named precisely. The success criteria are measurable. The capability map explains why, not just what. The implementation plan is specific enough to follow.

That precision is available to you right now, {{firstName}}, before you open Claude. It does not require advanced skills — it requires clarity about what you are actually trying to do. Take the time in this lesson to get that clarity. The rest of the module depends on it.

---

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 0,
  "mapping": {
    "Creative & Marketing": 4,
    "SaaS / Software": 5,
    "Professional Services": 1,
    "Trades & Construction": 0,
    "Property & Real Estate": 2,
    "Finance & Accounting": 1,
    "E-commerce & Retail": 2,
    "Health & Wellness": 6,
    "Education & Coaching": 7,
    "Trades & Services": 0,
    "Other": 0
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Solar installation business — Brisbane

**Scenario:** Trades · Quoting workflow

**Prompt:**
```

```

**Why it works:** Specific numbers (8–12 quotes, 40–50 minutes, 28% margin) before asking for design input give Claude real constraints. The three-part output structure ensures Claude produces something usable: a feasibility check, a capability map, and a step-by-step plan. This is Claude being used in the design phase to sharpen the design — not to start building.

---

### Example 2: Financial planning practice — Melbourne

**Scenario:** Professional services · Client summaries

**Prompt:**
```

```

**Why it works:** The problem is defined in measurable terms before asking for design input: under 600 words, template structure, minimum three specific next steps. The two client complaints are named directly — Claude designs around concrete quality problems rather than vague quality goals. Pasting both template and sample notes means the capability map is tailored to real inputs.

---

### Example 3: Gift and homewares store — Adelaide

**Scenario:** Retail · Weekly reporting

**Prompt:**
```

```

**Why it works:** The student pre-empts the most important constraint — no technical setup, just file uploads — and builds it into the brief. The three-part question structure is well-calibrated: feasibility, solution approach, plan. Mentioning file sizes (400+ rows, 4–6 pages) is a strong design-phase move — it tells Claude to account for document length in the prompt structure recommendation.

---

### Example 4: Boutique recruitment agency — Sydney

**Scenario:** Recruitment · Job description writing

**Prompt:**
```

```

**Why it works:** Stating "I am not trying to build anything yet — I am designing it first" keeps the conversation in design mode. The capability question is well-framed: not "how do I do this" but a choice between two specific approaches (Project vs standalone template) with a follow-on about knowledge base content. Asking for template structure rather than filled-in content is the right design-phase move.

---

### Example 5: Two-person graphic design studio — Canberra

**Scenario:** Creative · Design document review

**Prompt:**
```

```

**Why it works:** Using Claude to review the design document before submitting is legitimate design-phase work — it catches gaps without asking Claude to do the thinking for you. The instruction "do not rewrite any section" keeps control with the student and produces targeted feedback. The design document itself demonstrates what a strong submission looks like: specific, quantified challenge; solution overview that describes mechanism; capability map with module references and use-case logic.

---

### Example 6: Priya designs her support triage capstone with objectives, criteria, and capability map

**Scenario:** SaaS founder · Capstone design phase

**Prompt:**
```
I'm Priya, founder of LedgerLoop (4-person Sydney SaaS, reconciliation tool for AU bookkeepers). I'm doing my Module 6 capstone. Help me write the design doc.
      
      The recurring painful task: support triage. We get 30-40 Intercom tickets a week. I personally read every one, tag it (bug / how-to / billing / feature request), and draft the first reply. It eats 6-7 hours a week and I'm the bottleneck.
      
      Draft my design doc with these sections:
      1. Challenge statement (why this, why now)
      2. Objectives (what 'done' looks like in plain English)
      3. Success criteria — 3 measurable, written before I build
      4. Foundation capabilities I'll use, mapped to Modules 1-5: Project setup (custom instructions + knowledge base with our docs and tone guide), prompting patterns from Module 2, file uploads for ticket exports, and which extended capability matters most
      5. Implementation plan — what I'll build first, second, third
      6. What I am NOT trying to do in v1 (scope guard)
      
      Keep it specific to a 4-person SaaS. Don't suggest I integrate with Intercom's API yet — that's v2.
```

**Why it works:** This is the 6.1 design move in full — recurring + painful + real challenge, objectives and success criteria written BEFORE building, and explicit capability mapping back to Modules 1-5. The scope guard ("not trying to do in v1") shows the project-level thinking the lesson asks for, not a one-off prompt.

---

### Example 7: Marcus chooses patient recall as his capstone and writes the design doc

**Scenario:** Physio practice owner · Capstone design phase

**Prompt:**
```
I own Northshore Physio in Auckland — three practitioners, one front-desk, about 320 active patients. For my Module 6 capstone I want to tackle patient recall messages: people who finished a treatment plan 8-12 weeks ago and haven't rebooked. Right now my receptionist Anya does this manually on Fridays — pulls a Cliniko export, writes each SMS herself, takes about 3 hours and she hates it.
      
      Help me draft my capstone design doc:
      
      1. Challenge statement — why recall (not notes summaries, not the newsletter)
      2. Objectives in one paragraph — what a working solution does for Anya's Friday
      3. Success criteria — three measurable ones I commit to BEFORE building (time saved, message quality, response rate)
      4. Foundation capability map — which Module 1-5 skills I'll use: Project with custom instructions for our practice voice, knowledge base (our service list, common conditions, recall tone guide), file uploads for the weekly Cliniko CSV
      5. Implementation plan in three steps
      6. Privacy guardrail — we're under the NZ Privacy Act 2020, so what I will and won't put into Claude (no full clinical notes, de-identified categories only)
      
      Keep it grounded — three practitioners, not a hospital.
```

**Why it works:** Hits the 6.1 brief: recurring + painful + real, with success criteria locked in BEFORE the build. The capability map ties directly back to Modules 1-5, and the explicit Privacy Act 2020 guardrail shows capstone-level thinking about what data goes near the model — not just a one-off prompt.

---

### Example 8: Hannah picks term-report drafting as her capstone and locks in success criteria

**Scenario:** Tutoring business owner · Capstone design phase

**Prompt:**
```
I run BrightPath Tutoring in Brisbane — six tutors, 84 students across primary and high school, English and maths. End of every term I have to produce a one-page progress report per student for parents. It takes me three full evenings (roughly 11 hours) and the quality drifts as I get tired. This is my Module 6 capstone.
      
      Draft my design doc:
      
      1. Challenge statement — why term reports beat the other candidates (parent comms pack, tutor handover notes)
      2. Objectives — what the working capstone does at end of Term 2, in plain English
      3. Three success criteria, measurable, written now before I build:
         - Time per report (target vs current 8 minutes per report)
         - Quality bar (would I send it to a parent without rewriting? yes/no rate)
         - Tutor adoption (do my six tutors actually use it for their handover notes too)
      4. Foundation capability map: Project setup (custom instructions for our tone — warm, specific, never generic), knowledge base (our reporting rubric, NCCD-aware language for our two students with adjustments, sample 'good' reports from last term), file uploads for each student's session notes CSV
      5. Implementation plan — three phases, ending Friday before Term 2 reports go out
      6. What's OUT of scope for v1 — I am NOT trying to auto-send, NOT pulling from Cliniko-style integrations
      
      Keep it real for a six-tutor business.
```

**Why it works:** Models the 6.1 design phase end-to-end — recurring painful task, three measurable success criteria written BEFORE building, capability map tied to Modules 1-5, and an explicit "out of scope for v1" line. The NCCD reference is genuine AU education context, not a buzzword.

---

## Graded deliverable

**Title:** Capstone design document

**Brief:** This is the foundation for the next three lessons. Everything you build in Lesson 6.2, measure in Lesson 6.3, and present in Lesson 6.4 is based on the design document you submit here. Pick one real business challenge, name it precisely, map the capabilities you will use, and plan the implementation before you touch Claude. The more precise this document is, the more effectively you can execute the next three lessons.

**What to submit:**

1. **Business challenge statement (2–3 sentences)** — Name the problem, why it matters, and how you know it is real. Include specific numbers: time cost, frequency, volume. Avoid "inefficient processes" — name the specific process, the specific friction, and the specific cost to your business.

2. **Solution overview (3–4 sentences)** — Describe the Claude-assisted solution and *how it functions* — not what it will achieve. Name the type of solution (Project, prompt workflow, file processing sequence, or a combination), the inputs it requires, and what it produces.

3. **Capability map (min. 3 entries, 2+ modules)** — For each capability: name it, name the module, and explain in one to two sentences why it fits this specific problem — what task it handles, what it replaces or improves. Minimum three capabilities across at least two modules.

4. **Implementation plan (3–5 steps)** — Three to five steps in plain language. Each step names one concrete action, describes what gets built or produced, and includes a rough time estimate. Specific enough to follow in a single working session.

5. **Success criteria (2–4 measurable signals)** — At least two measurable signals that will tell you the solution worked. Each criterion countable or timeable — not "better quality" but "time from client brief to first draft reduced from X to Y, measured across five runs" or "output reviewed against checklist with zero missing sections."

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Is the challenge real and named with enough precision that the grader can picture the actual business problem? Does the challenge statement include specific numbers — time cost, frequency, volume — rather than vague descriptions? Are the success criteria measurable by an agreed method, not just improvements in a general direction?
- **Structure (25 pts)** — Does the submission include all five components — challenge, solution overview, capability map, implementation plan, success criteria — clearly labelled? Is each component substantively completed, not a single sentence standing in for a full section? Capability map with at least three entries; plan with at least three concrete steps.
- **Constraint clarity (25 pts)** — Does the capability map explain *why* each capability fits this problem — not just list capabilities that exist? Does each entry name the specific task the capability handles and what it replaces? Is the implementation plan specific enough to follow — named artefacts, named prompt types, time estimates — or is it a list of categories?
- **Outcome focus (25 pts)** — Does the design show that the student understands why each capability fits their specific problem? Does the solution overview describe a mechanism, not a wish? Do the success criteria connect directly to the challenge — measuring the specific thing that is broken, not a proxy?

---

## Notes for the AI grading engine

These notes are read by the grading engine when scoring submissions for this lesson. They are not shown to the student.

- **Reward (high marks):**
  - Challenge statement includes specific numbers — time cost, frequency, volume — that make the problem concrete and verifiable
  - Capability map entries each contain a "why this capability" explanation that connects directly to the problem described in the challenge statement — not a general description of what the capability does
  - Implementation plan steps name specific artefacts being built (a named Project, a named prompt template, specific document types for upload) rather than describing categories of work
  - Success criteria are attached to the challenge — they measure the specific thing the challenge names, with a measurement method described, not just a direction of improvement
  - Solution overview describes a mechanism — inputs, process, output — rather than an aspiration or a general intention to use Claude

- **Penalise (dock points):**
  - Challenge statement uses vague language ("inefficient," "inconsistent," "better quality") without naming specific tasks, frequencies, or time costs
  - Capability map lists capabilities without explaining why they fit this problem — entries that describe what a capability is rather than what specific role it plays in the solution
  - Implementation plan steps are categories, not actions — "build prompts" rather than "write a drafting prompt that takes these four inputs and produces this output format"
  - Success criteria are not measurable — "clients will be happier" or "outputs will be more consistent" with no measurement method
  - Solution overview is aspirational rather than mechanical — it describes what the student wants to achieve without describing how the solution will actually work

- **Common 60–69 patterns (near-pass):** The student has done the thinking — the challenge is real, the solution is plausible, the components are present. But the specificity is thin. The challenge statement describes the problem area without naming the specific task, time cost, or frequency. The capability map lists three capabilities with module references but the "why" explanations are generic — they describe what the capability does in general rather than what specific role it plays in this solution. The implementation plan has four steps but they read as categories ("set up Project," "write prompts," "test," "refine") rather than actions. The success criteria state a direction ("reduce time," "improve consistency") without a measurement method. In feedback, quote the student's challenge statement and ask: how long does this task currently take you, and how often do you do it? Then quote one capability map entry and ask: what specific content will go in this Project that is specific to your challenge — not generic knowledge about Claude? Those two questions are the concrete next steps toward resubmission.

- **Common 80+ patterns (excellent):** The challenge statement reads like a project brief — specific task, named time cost, named frequency, named friction point. The capability map demonstrates systems thinking: each capability is justified by its role in the workflow, and together the capabilities cover the full solution without gaps or overlap. The implementation plan reads as a session plan — a stranger could follow it and understand what the end state of each step looks like. Success criteria are paired with measurement methods: not just "time reduced" but "time reduced from X to Y, measured across five real runs in the first two weeks of use." The solution overview describes a mechanism the student clearly understands — inputs, process, output — without over-promising. Acknowledge the precision of the design document specifically. Name the strongest component and explain what makes it strong. End with one concrete observation about what the implementation phase (6.2) will require based on this design — a specific prompt type, a specific knowledge base decision, or a specific testing approach — that the student can carry directly into that lesson.

- **Feedback tone:** Direct, specific, and kind. Quote the student's own words when pointing out wins or gaps — do not speak in generalities about what the submission should have done. This is the start of the capstone, which is a genuine commitment of time and effort, and that deserves acknowledgment — but acknowledge the specific ambition in their design, not the fact that they reached Module 6. Always end with one concrete next step pointing toward 6.2: a named action they can take in the implementation phase based on what they have designed here.

- **Resubmission gating:** If the student resubmits, compare against their previous submission. Reward visible improvement in the criteria they previously failed. If the challenge statement gained specific numbers that were missing, name that improvement. If the capability map entries gained "why this capability" explanations, name that improvement. If the implementation plan moved from categories to named actions, name that improvement. If the resubmission is essentially unchanged with added words but no added specificity, say so directly and name the exact sentence that still needs to become concrete before it passes.
