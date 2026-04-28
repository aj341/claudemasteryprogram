# Lesson 4.6 — Projects capstone: building your project system

**Module:** 04 · Claude Projects & Knowledge
**Estimated time:** 30 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites

- Module 1 complete (Lessons 1.1–1.6)
- Module 2 complete (Lessons 2.1–2.6)
- Module 3 complete (Lessons 3.1–3.3)
- Lesson 4.1 — What Claude Projects are and why they matter
- Lesson 4.2 — Setting up your first Project
- Lesson 4.3 — Building your Project knowledge base
- Lesson 4.4 — Writing Project instructions that work
- Lesson 4.5 — Managing and updating your Projects

---

## Learning objectives

By the end of this lesson you'll be able to:
- Describe what a Project System is and how it differs from having a single Project
- Map your own work into 2–3 Projects with clear, non-overlapping purposes
- Document your Project architecture in a format you can maintain and share
- Identify the habits that keep a Project System useful as your work changes
- Explain how your Project System connects to Module 5's extended capabilities

---

## Lesson script

### From one Project to a system

By this point in Module 4, {{firstName}}, you've built at least one working Project for {{businessName}}. You know how to set it up, populate a knowledge base, write instructions that hold, and maintain it as your work changes. That's a meaningful achievement. Most people who use Claude never get there.

But a single Project has a ceiling. It covers one domain of your work — one role Claude plays for you, one set of context and instructions. Your business doesn't run in one domain. You have clients to serve, operations to manage, marketing to maintain, maybe a team to communicate with. One Project, configured for one of those domains, leaves the others back where you started: no persistent context, no tailored instructions, starting from scratch each conversation.

A Project System changes that. Not one Project — a small set of 2–3 Projects, each covering a different domain of your work, each configured precisely for that domain. Together they give Claude structured context across the parts of your business that matter most. Separately, each one is specific enough to be genuinely useful rather than generic.

This lesson is about building that system. Not in theory. In your actual business, this week.

### Beat 1 — The Project System concept

A Project System is not complex. It is a small number of Projects — two, three at most — that collectively cover the main domains of your work, each with a distinct purpose.

Here's what makes it a system rather than a collection: the Projects don't overlap. Each one has a clear answer to the question "what is this Project for?" If you have to think for more than five seconds about which Project to open for a given task, the system needs clarifying. The right Project should be obvious.

Think about how your work actually divides. Most small business owners operate across three broad areas: client-facing work (communications, proposals, delivery), internal operations (planning, finances, team), and growth or marketing (content, outreach, positioning). Those three areas have different audiences, different tones, different context Claude needs to do useful work. One Project trying to cover all three produces instructions so broad they're almost useless.

A Project System gives each domain its own configuration. Your client-facing Project has your client communication tone, your service descriptions, your treatment-plan structure. Your operations Project has your internal processes, your team norms, your financial context. Your marketing Project has your brand voice, your target audience, your content formats. When you open the right Project, Claude is already calibrated. You spend your time on the task, not on re-explaining who you are and what you need.

Two Projects is enough for many businesses. Three is a practical ceiling for this stage. More than three, and the system starts to require maintenance overhead that eats the time you were trying to save. Start with two if you're unsure. You can always add a third once the first two are running well.

One other thing the system gives you: consistency. When the same context lives in a Project and you return to it each session, Claude's outputs start to converge on the right register for that domain — tone, format, level of detail. That consistency doesn't come from prompting harder. It comes from the Project holding the context so you don't have to restate it. The outputs improve not because Claude gets better, but because the environment you've built for it stays stable.

### Beat 2 — Your Project architecture

Architecture is just a word for the map of your system. What Projects do you have, what does each one do, and when do you use each? Written down, that map is your Project architecture. You should be able to read it and know immediately which Project to open for any task.

Each Project in your architecture should have four elements:

**Name** — Short and specific. Not "Work" or "Business Claude" — something that tells you what it's for at a glance. "Client Comms," "Operations," "Marketing Content." The name is the first thing you see when you open Claude. Make it work for you.

**Purpose** — One or two sentences on what this Project handles. Not a list of every possible task — the core function. "All written communication with current clients: proposals, project updates, scope change emails, and end-of-engagement wrap-ups." That's a purpose. "Client stuff" is not.

**Knowledge base** — What you've uploaded or written into the Project's knowledge. The documents, the reference materials, the context Claude needs to do useful work here. Your architecture doesn't need to list every file — just the categories. "Our service menu, three proposal examples, tone guide, and current client roster."

**When to use it** — The trigger. What task or situation should make you reach for this Project specifically rather than a general Claude conversation or another Project? If this element is fuzzy, the purpose is probably fuzzy too.

Written out, your architecture for a service business might look like this:

```
Project: Client Comms
Purpose: All written communication with current and prospective clients of {{businessName}}.
Knowledge: Service descriptions, gap-fee structure, past treatment-plan examples, clinic tone guide.
When to use: Drafting plan summaries, progress updates, scope or fee changes, client check-ins.

Project: Operations
Purpose: Internal planning, clinical-team communication, and practice tracking.
Knowledge: Clinician roster, internal processes doc, weekly update format, financial context.
When to use: Writing staff updates, planning documents, any task facing inward, not outward.
```

That is a functional architecture. Two Projects, clearly differentiated, each with a distinct domain. When a task arrives, you look at it for five seconds, you know which Project it belongs in, and you open that one.

Your architecture document doesn't need to be elaborate. A table in Notion, a note in your project management tool, even a sticky note on your monitor — whatever you'll actually refer to. The format is irrelevant. The discipline of writing it out is what matters. It forces the clarity that makes the system work.

### Beat 3 — From Project builder to Project maintainer

Building a Project System is one job. Maintaining it is a different, ongoing job. Most people do the first and neglect the second. The system slowly drifts out of alignment with their actual work, and six months later it's no longer useful.

The maintenance job is not hard. It requires three habits, each of which takes about five minutes when you do it.

**Habit 1: Quarterly knowledge audit.** Every three months, open each Project and read through what's in the knowledge base. Ask: is this still accurate? Has anything in my business changed that this document doesn't reflect? Service offerings change, pricing changes, team members change, clients change. If the knowledge base still describes the business you ran six months ago, it's giving Claude the wrong foundation. Update the documents, remove what's stale, add what's new.

**Habit 2: Instruction check when something goes wrong.** When Claude produces an output that's off — wrong tone, wrong structure, wrong level of detail — don't just send a correction. Read the Project instructions and ask why the instruction didn't prevent the problem. Usually either the instruction is missing that specific case, or it exists but is too vague to be actionable. Fix the instruction, not just the output. This is how instructions improve over time rather than accumulating workarounds.

**Habit 3: Semi-annual architecture review.** Every six months, look at your Project architecture as a whole. Has your work changed enough that the domains don't carve up the same way anymore? Did you add a new service line that doesn't fit neatly into the Projects you have? Did one Project become so dominant that it's doing work two different Projects should be doing? This review is the moment to restructure — not because restructuring is always necessary, but because catching a misalignment early prevents months of friction.

**Common mistake → Better approach**

Mistake: Treating the Project setup as a one-time task. You spend an afternoon building two well-configured Projects, then leave them untouched for a year while your business changes around them. The knowledge base describes services you no longer offer. The instructions don't account for a new client segment. The outputs drift in quality and you can't work out why — you start reverting to general Claude conversations instead.

Better approach: Add the quarterly knowledge audit to your calendar as a recurring event. 20 minutes, once a quarter, for each Project. Open the knowledge base documents, scan for what's outdated, update or replace. Then open the instructions and confirm they still describe how you actually want Claude to behave. This is maintenance, not rework. It keeps the system aligned with a business that is always changing.

### Beat 4 — What comes next

Your Project System is the last piece of Module 4's foundation. It's not the end of what Projects can do for you — it's the platform everything else builds on.

In Module 5 you'll add capabilities that make your Projects substantially more powerful. Vision: the ability to give Claude images, screenshots, PDFs with visual content, and have it interpret them in the context of your Project. File processing: uploading documents — spreadsheets, contracts, reports — and asking Claude to analyse, extract, or summarise them against the knowledge your Project already holds. And the first introduction to automation patterns: how to set up repeatable Claude workflows that run consistently without you rebuilding the context each time.

All of those capabilities work better with a functioning Project System already in place. A Project that's been running for three months, with a maintained knowledge base and refined instructions, gives Module 5's tools a rich foundation to work from. A general Claude conversation doesn't.

This is why the capstone matters. Not as a box to tick before Module 5 — as the infrastructure that makes Module 5 useful. If you go into Module 5 without a working Project System, you're adding capability to an unstable base. If you go in with two or three well-maintained Projects, every new capability has structured context to build on.

Build the system now. Then maintain it. That compound effect is the point.

One more thing worth naming: the fact that you have a working Project System after Module 4 puts you ahead of the vast majority of Claude users — including plenty who have been using it far longer than you. Most people use Claude in default conversations. They get useful outputs sometimes, inconsistent results often, and they never quite understand why. You now know why: no persistent context, no calibrated instructions, no architecture. A Project System solves all three. That's what you've built here. Everything in Module 5 is an extension of it.


## Graded deliverable

**Title:** Your Project System

**Brief:** Document a real, working Project System — 2 to 3 Projects you have set up and used since starting Module 4, each described with the four architecture elements (name, purpose, knowledge base, when-to-use). For each Project, submit one real task you ran inside it (prompt + Claude's full response — the most recent real task in each Project is fine, not necessarily this week). Then write a 150-word reflection on what's changed in how you work with Claude since you started Module 4. This is the Module 4 capstone — a working system, not a plan.

**What to submit:**

1. **Project 1 architecture — name, purpose, knowledge base, when-to-use** — Your first Project, documented with all four elements. Name on one line. Purpose in 1–2 sentences. Knowledge base as categories. When-to-use as the trigger that makes you reach for this Project.

2. **Project 2 architecture — name, purpose, knowledge base, when-to-use** — Your second Project. Must serve a genuinely distinct domain from Project 1. All four elements.

3. **Project 3 architecture — optional third Project, same four elements** — Optional. Only add a third if it covers a domain the first two genuinely don't. If you are running a two-Project system, write "Not applicable — running a two-Project system" and a sentence on why that's the right fit for now.

4. **Working task examples — one real prompt + Claude's full response per Project** — For each Project above, paste a real prompt + Claude's full response from your work in that Project (the most recent meaningful task is fine — doesn't have to be from this exact week). Label each pair clearly ("Project 1 — prompt / response," "Project 2 — prompt / response," etc.). Different task types across Projects score higher than three of the same thing.

5. **Reflection (150 words ± 10)** — What's specifically changed in how you work with Claude now that you have a structured Project System, compared to when you started Module 4? Name concrete before-and-after differences. "I have Projects now" is not a reflection. Minimum 140, maximum 165.

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Are all 2–3 Projects real and active — tasks completed in them this week, not set up and left idle? Does each Project serve a distinct domain? Two Projects with overlapping purposes (e.g. "Client Emails" and "Client Communications") score low regardless of how well each is described individually. Projects named but with no working task examples score in the 6–10 range.
- **Structure (25 pts)** — Does each Project entry include all four elements: name, purpose, knowledge base, and when-to-use trigger? Is the purpose statement specific enough to distinguish this Project from the others? A purpose like "business tasks" is not a purpose. Missing elements per Project cost points proportionally.
- **Constraint clarity (25 pts)** — Do the task examples (one per Project) demonstrate genuine variety across different task types and different Projects? Submitting three email drafts scores in the 10–14 range even if each is technically correct. Strong submissions show meaningfully different task types: a strategic document in one Project, an internal communication in another, a client-facing draft in a third.
- **Outcome focus (25 pts)** — Does the 150-word reflection name specific before-and-after differences? Concrete changes: context the student used to re-explain every session that they no longer need to, output quality that improved because instructions are calibrated, decisions about which Project to open that are now instinctive. Vague positives ("it's been really useful") score 8–12. Specific named changes score 20+.

---

## Notes for the AI grading engine

(Not shown to student)

- **Reward (high marks):**
  - All 2–3 Projects are clearly distinct — the purpose statements don't overlap, and the knowledge bases reflect genuinely different domains of the student's business
  - The four-element structure is complete for every Project — name, purpose (specific enough to act as a boundary rule), knowledge base, and a when-to-use trigger that names actual task types rather than vague categories
  - The working task examples span meaningfully different task types — not three emails, not three reports, but tasks that demonstrate the different nature of each Project (e.g., one strategic, one operational, one client-facing)
  - The reflection uses concrete language: names a specific thing that changed, describes the before state and the after state, and does not rely on abstractions like "more efficient" or "saves time" without saying what specifically was removed or improved
  - Student shows awareness that the system requires maintenance — mentions the knowledge base, instruction quality, or the evolution of their Projects over time

- **Penalise (dock points):**
  - Projects with overlapping purpose statements — if two Projects could swap their names without confusion, the system lacks architecture
  - Any Project missing one or more of the four required elements — partial entries get partial credit for the Structure criterion
  - Working task examples that are all the same task type (three email drafts, three summaries) — even if submitted in different Projects
  - Reflection that says only positive things without naming anything specific — "Claude is amazing now" is not a reflection on what changed
  - Projects that appear set up for this deliverable rather than in active use — purpose statements that don't match the task examples, knowledge bases described abstractly with no actual content named, task examples that read like demonstrations rather than real work
  - Submitted task examples that are paraphrased or truncated — full prompts and full Claude responses are required to evaluate the quality of the working system

- **Common 60–69 patterns:** The student has real Projects set up with real content, but the four-element structure is incomplete — typically the when-to-use trigger is missing, making the architecture feel like a description rather than a map. Or the task examples are technically different Projects but the same task type. Reflection is positive but abstract. In feedback: quote their strongest purpose statement back to them and name what makes it work, then show the gap in their weakest entry. Give one concrete sentence they could add to the missing element. For the reflection: "Your reflection says the system has saved you time — tell me one specific thing you no longer have to do because of it. Write that sentence and your reflection will improve significantly."

- **Common 80+ patterns:** The architecture reads like a functioning system — you can see how each Project connects to a real part of the student's work week, the boundaries are clear, and the knowledge base descriptions suggest content that would actually help Claude do useful work. The task examples are genuinely varied — you can picture why task A belongs in Project 1 and task B belongs in Project 2, and it's not just because the Projects are named differently. The reflection is specific enough to be almost instructional — the student is describing their own before/after in terms that would help another student understand what Projects are for and why they matter.

- **Feedback tone:** Direct, specific, kind. Quote the student's own words — their purpose statement, their reflection phrase, the task they submitted. Never generic. If an element is missing, name it and give one example sentence of what it could say. If the reflection is vague, quote the vague phrase and ask the specific question that would make it concrete. End with one forward-looking observation: what the student's strongest Project is set up to do well in Module 5, based on what they've built.

- **Resubmission gating:** Compare the resubmission against the original. Reward visible structural improvement — a missing when-to-use trigger added, a vague purpose statement sharpened, a reflection that now names something specific. If the student added a third Project that was missing, acknowledge it and evaluate it by the same four-element standard as the first two. If they've added words to the reflection without adding specificity, name that directly: "Your reflection is longer but the core observation is still at the level of 'it's been useful.' Tell me the specific thing — name the task, name what changed about how you approach it."
