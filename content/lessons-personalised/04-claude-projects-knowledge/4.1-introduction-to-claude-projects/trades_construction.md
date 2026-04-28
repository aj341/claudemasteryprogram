# Lesson 4.1 — Introduction to Claude Projects

**Module:** 04 · Claude Projects & Knowledge
**Estimated time:** 20 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites
- Module 1 complete — Claude Essentials (Lessons 1.1–1.6)
- Module 2 complete — Prompt Engineering Fundamentals (Lessons 2.1–2.x)
- Module 3 complete — Advanced Prompting (Lessons 3.1–3.x)

## Learning objectives
By the end of this lesson you'll be able to:
- Explain what Claude Projects is and how it differs from a standard Claude conversation
- Describe the problem Projects solves — the blank-slate issue that makes Claude repeat work
- Identify what belongs in a Project: custom instructions, knowledge documents, and conversation history
- Name the three types of Projects worth building and when each one fits
- Recognise what Projects does not do, so you don't depend on it for the wrong things

---

## Lesson script

### Every new conversation starts from zero

Here's something that trips up a lot of tradies once they've been using Claude for a while. You've put in real effort to get Claude working well for {{businessName}}. You've written a good prompt, given it your context, taught it your tone. The response is exactly what you wanted — a quote follow-up that sounds like you, not a corporate template. You close the tab and head out to the next job.

Next morning, you open Claude and start a new conversation. Claude has no idea who you are. No memory of your business name, your customers, your trades, the tone you spent three prompts calibrating. Every new conversation starts from scratch. You're back to the beginning.

This is not a flaw in Claude. It's how the system is designed. Claude doesn't retain information between separate conversations by default. Each conversation is isolated. If you don't bring the context, Claude doesn't have it.

The practical effect: every time you start a fresh conversation, you either paste in your business context again, or you accept a more generic output. Most tradies do one of two things — they paste the same context block over and over, or they don't bother and get frustrated when Claude doesn't know what it should already know. Neither is a good solution.

Claude Projects fixes this, {{firstName}}. Not completely. Not in every possible way. But it solves the specific problem of context you want Claude to always have — without you needing to restate it every single time.

### What Claude Projects actually is

Claude Projects is a workspace inside Claude where you can store custom instructions, upload knowledge documents, and maintain an ongoing conversation history — all in one place. When you work inside a Project, Claude reads those instructions and documents at the start of every conversation. You don't have to paste anything. You don't have to explain your business again. You open the Project, and Claude is already briefed.

Think of it as a standing brief. In a regular Claude conversation, you're briefing Claude fresh each time — like ringing a sub-contractor with all the background every time you need a hand on a job. A Project is like giving that same sub-contractor a proper site induction they can refer to whenever you work together. The brief is always there. The context is persistent.

That's the core idea. Persistent context across conversations, in a defined workspace. Not just a folder of chats — a configured environment where Claude already knows what it needs to know before you ask your first question.

### What goes inside a Project

A Project has three containers. Understanding each one helps you build Projects that actually work.

**Custom instructions** are the most important. This is where you tell Claude: who it is for this Project, what business or job context it's working in, what it should and shouldn't do, how it should communicate, and what assumptions it can make. Custom instructions live at the Project level. Every conversation you start inside the Project reads them. They're your standing brief.

Here's an example of custom instructions for a business context Project:

```
You are a business assistant for Riverline Electrical, a 4-person residential electrical business in outer Brisbane. Our customers are mostly homeowners aged 35–65 in established suburbs — switchboard upgrades, rewires, and LED replacements. Most jobs run $800 to $6,500 plus GST.

My name is Sarah. I'm the owner-operator and handle quoting, customer comms, supplier ordering, and apprentice supervision.

Communication style: Direct, warm, plain English. We're a small business — write like one, not a corporate.

What I'll ask you about: quote follow-ups, variation summaries, customer updates, supplier emails, end-of-job wrap notes, social media posts, and apprentice instructions.

What you should not do: Assume we have an office team, big budgets, or fancy software. We use Tradify, Xero, and a shared Gmail. Keep recommendations practical and right-sized for a small sparkie business.
```

That's the shape of a good custom instruction set. Who Claude is for, who you are, your business context, your communication style, what you'll use it for, what to avoid.

**Knowledge documents** are files you upload into the Project. These can be your service list, rate card, brand guidelines, FAQs, standard variation templates, example customer emails, supplier contact lists, induction docs, or anything else Claude should be able to reference. When you ask Claude a question inside the Project, it can draw on these documents. You don't need to paste them into every conversation. They're available.

Keep documents focused and up to date. A short, well-structured rate card works better than a single massive document containing everything — Claude can reference the relevant parts more reliably when documents are separated by topic.

**Conversation history** is the ongoing record of everything you've discussed inside the Project. Unlike regular conversations that disappear when you close the tab, conversations inside a Project accumulate. Claude can see what you've discussed before within the same Project. If you briefed it on a tricky homeowner job last week, it still has that context this week — inside the same Project.

### The three types of Projects worth building

Most tradies get maximum value from three categories of Projects. You don't need to build all three on day one. But understanding the categories helps you decide where to start.

**The business context Project.** This is your "always on" assistant. It holds your complete business brief — business name and overview, your role, your customers, your communication style, your core trades and services, and the tools you use. Any task that doesn't belong to a specific job or recurring workflow goes here. It's your general-purpose Claude, already configured for your business. Most tradies build this one first, and it immediately makes every interaction faster.

**The job or client Project.** One Project per major active job — a long-running renovation, a multi-stage commercial fit-out, or an ongoing strata maintenance contract. The custom instructions hold that job's background — the head contractor or homeowner, the scope, the variations agreed, the head builder's preferences. Knowledge documents hold any relevant files: the signed contract, the SWMS, the agreed scope, notes from site meetings, RFIs sent and answered. Over the course of the job, the conversation history builds up a record of what you've worked on. When you need to write a progress claim or respond to an RFI, you open the job Project. Everything is there.

**The task Project.** For recurring work that follows a consistent pattern — weekly customer updates, end-of-job wrap emails, monthly social media posts, apprentice safety briefings. The custom instructions define the format, the tone, and the constraints of that specific task. Knowledge documents hold any fixed content: the standard wrap-up structure, the tone rules, the SWMS template. Each time you run the task, you're starting from a pre-configured environment. The Project doesn't just remember your business — it remembers the specific requirements of this particular output.

You can build more than three. Some businesses run a separate Project for each trade (electrical, data, hot water if you do both gas and solar), or keep a Project specifically for internal documents like SWMS, JSAs, or apprentice training notes. The category structure is a starting point, not a limit.

### What Projects does not do

This matters as much as what Projects does do. Misunderstanding the boundaries leads to frustration — and to depending on Projects for things it can't deliver.

**Projects does not search the web.** When Claude works in a Project, it draws on its training data plus whatever you've put in the Project. It doesn't go out and look up current information. If you need Claude to work with current data — today's wholesale prices, a new compliance standard, updated pricing from your supplier — you need to paste that information into the conversation yourself. The Project holds what you've given it. It doesn't update itself.

**Projects does not update itself.** If your hourly rates change, your service list changes, or your business context shifts (new ute, new apprentice, new trade added), your Project custom instructions and documents stay the same until you change them. Claude will continue to reference outdated information if you don't update it. Set a reminder to review your Project documents whenever something meaningful changes — at minimum, every quarter.

**Projects does not replace a proper job-management system for large volumes of information.** The knowledge document system works well for a business of your size with a focused set of documents. If you're trying to load in hundreds of pages across dozens of files and expect Claude to search and retrieve perfectly, you'll hit limits. Projects is not a search system. It reads documents you've uploaded, but it works best when those documents are concise, relevant, and well-organised. If your information needs are genuinely large and complex, a dedicated job-management tool like ServiceM8, simPRO, or Tradify is a better fit for that part of the work.

**Projects does not make Claude smarter.** This one surprises people. Claude's underlying capabilities are the same inside a Project as outside one. What changes is the context Claude has available. A better-configured Project gets you better outputs because Claude has better information — not because the model has changed. The quality ceiling is still Claude's capability. The floor is how well you've configured the Project.

### Common mistake → Better approach

**Mistake:** Treating Projects like a filing cabinet — adding every document you have access to, expecting Claude to search through it all and surface the right information.

**Better approach:** Curate the Project. Add documents that Claude will actually need to reference when doing the specific work you do in that Project. A job Project doesn't need your full service list — it needs the signed scope and any agreed variations. A task Project for your end-of-job wrap email doesn't need your full business plan — it needs the standing format, the tone rules, and a few strong example wraps. Relevance over volume. Claude reads documents, not just stores them. The more focused the documents are, the more usable the outputs.

### Why this changes how you work

The shift from standard conversations to Projects is not just technical. It changes your mental model of what Claude is.

In a standard conversation, Claude is a smart tool you have to fully configure each time you use it. Every prompt carries the full burden of context. The quality of each output depends almost entirely on what you put into that specific prompt.

In a Project, Claude is closer to a configured assistant. The baseline context is already there. You're not starting from zero. You're starting from the brief. The prompts you write inside a Project can be shorter and more direct, because the standing instructions carry the background. You focus on the task, not on re-explaining who you are and what {{businessName}} does.

That's a meaningful change in daily workflow. It makes Claude faster to use between site visits. It makes outputs more consistent across the business. And it means the effort you put into setting up the Project pays off across every future conversation you have inside it.

---

## Worked examples
All five examples below are shown — each demonstrates a distinct concept or technique from the lesson, not an industry variant.

### Example 1: A sole-trader bookkeeper's standing brief

**Scenario:** Business context Project · Brisbane bookkeeper

**Prompt:**
```

```

**Why it works:** The instructions cover who Claude is assisting, the actual client base, the communication style with a concrete reason for it, and a clear scope of what will be asked. The final constraint — "he works alone" — prevents Claude from suggesting solutions that assume a team.

---

### Example 2: Knowledge document strategy for a six-month contract

**Scenario:** Client Project · Marketing consultant's new engagement

**Prompt:**
```

```

**Why it works:** The custom instructions reference the uploaded documents by name, which tells Claude they exist and should be consulted. The brand voice description is specific — "they talk about their tradies with genuine pride" is actionable detail that shapes every output.

---

### Example 3: A monthly newsletter with a fixed structure

**Scenario:** Task Project · Fremantle gift shop newsletter

**Prompt:**
```

```

**Why it works:** The fixed structure in the custom instructions means Claude produces the same format every time without being told. The specific prohibition on "limited time offer" language addresses the most common mistake an AI would make with retail content.

---

### Example 4: The one prompt you send first — always

**Scenario:** Verifying context · After setting up a business context Project

**Prompt:**
```

```

**Why it works:** A simple, direct verification step. It forces Claude to demonstrate what context it has, so you can catch gaps or errors in your custom instructions before they affect real work outputs. If Claude's summary is missing something important or gets something wrong, fix the instructions now — not after you've sent a client email.

---

### Example 5: Explicitly referencing the Project document in the prompt

**Scenario:** Using a knowledge document · Business coach's pricing reply

**Prompt:**
```

```

**Why it works:** The prompt explicitly references the Project document ("the pricing guide in this Project") so Claude knows to consult it rather than invent pricing. The output is grounded in actual business information, not a generic AI-generated approximation.

---

## Graded deliverable

**Title:** Build your first Project and prove it works

**Brief:** Identify two Projects that would genuinely help your business — real Projects tailored to how you work, not generic examples. Then build one of them: configure it, test it, and show that Claude responds differently inside the Project than it would in a standard conversation. Four fields. All four must be submitted together.

**What to submit:**

1. **Your two Project ideas** — Name each Project, state which type it is (business context, client, or task), and write 2–3 sentences explaining why each one would benefit your work. Be specific: what repeating problem does each Project solve?

2. **The Project you built — custom instructions + document list** — Paste the full text of your custom instructions as written, plus a list of any documents you uploaded (document name and a one-sentence description of what each contains).

3. **Test prompt + Claude's full response** — Send a prompt inside your new Project that verifies a specific piece of context from your instructions. Paste both the prompt and Claude's full response. Test something concrete — not "do you know who I am?" but something like "draft a reply using my pricing" or "write a short intro for our next newsletter."

4. **Reflection (80 words — no more, no less)** — Describe one concrete difference you noticed compared to working in a standard Claude conversation. Not "it knew my name" — identify a specific change in output quality, response relevance, or the effort required to get a usable result.

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Are the two Project ideas genuinely business-specific? A pass requires real business context: named business type, actual use case, and a clear articulation of the repeating problem each Project solves. Generic ideas ("a writing project," "a project for emails") score in the 10–14 range. Strong submissions name the exact workflow or client situation each Project addresses.
- **Structure (25 pts)** — Do the custom instructions follow a coherent format? At minimum: who Claude is for this Project, the business context, the communication style, what tasks it will be used for, and at least one explicit constraint or exclusion. A single vague paragraph scores poorly. Instructions that read like a proper standing brief score well.
- **Constraint clarity (25 pts)** — Does the test prompt verify a specific piece of context from the instructions — not just "does this work" but something that would only produce the right output if Claude has actually read the Project? A prompt that applies specific guidance (pricing, tone rule, format, client background) scores well. A generic "write me a social media post" scores low.
- **Outcome focus (25 pts)** — Does the reflection identify a concrete difference in Claude's behaviour or output quality? Strong reflections name something observable: "Claude applied my pricing without me pasting it," "the tone matched my brand voice without me describing it," "my prompt was 40 words instead of 200." Weak reflections describe the experience vaguely ("it felt more personal") without identifying a measurable difference.

---

## Notes for the AI grading engine

These notes are read by the grading engine when scoring submissions for this lesson. They are not shown to the student.

- **Reward (high marks):**
  - Both Project ideas name a real business situation with a clearly stated repeating problem — the student can articulate what they were doing before (pasting context, starting from scratch) and what the Project replaces
  - Custom instructions cover all five expected elements: who Claude is for this Project, business context, communication style, task scope, and at least one explicit constraint or exclusion — in a format that reads as a standing brief, not a list of fragments
  - Test prompt is designed to verify specific context: it references something in the instructions (a pricing guide, a brand rule, a client situation) and would only produce the right output if Claude has read the Project instructions
  - Claude's pasted response is visibly shaped by the custom instructions — the grading engine should look for evidence of context application: specific business names, tone adherence, format compliance, or factual details that came from the instructions or uploaded documents
  - Reflection names a concrete, observable difference: a reduction in prompt length required, a specific output that wouldn't be possible without the Project, or a noticeable improvement in response relevance

- **Penalise (dock points):**
  - Project ideas are generic: "a project for work tasks," "a writing project," "a project to help with emails" — no specific business situation, no articulation of the repeating problem
  - Custom instructions are thin: a single paragraph with no communication style guidance, no constraint or exclusion, or no statement of what the Project will and won't be used for
  - Test prompt is not a genuine test of context — it's a generic prompt that Claude would answer reasonably well even without the Project instructions (e.g., "write a social media post about my business")
  - Reflection says "it knew who I was" or "it felt more personal" without identifying a specific observable difference in output quality or required effort
  - Student lists documents uploaded but does not indicate what they contain — the document list should show the student understands what each document contributes to Claude's context

- **Common 60–69 patterns (near-pass):** Student has set up a real Project with genuine business context in the custom instructions, but the test prompt doesn't verify specific context — it's a general-purpose request that would produce similar output with or without the Project. The reflection describes the experience ("it was easier") without naming what specifically changed. In feedback, quote their test prompt and ask: "Would Claude have produced the same response in a standard conversation if you'd asked the same question? What in the instructions or documents made the difference? Show me that in your reflection."

- **Common 80+ patterns (excellent):** Project ideas are immediately recognisable as real workflow problems — the student names the specific task they repeat, the context they used to paste every time, and why that was inefficient. Custom instructions read like a proper internal brief: coherent, specific, with a named communication style and at least two concrete constraints. The test prompt is a genuine verification — it tests something that would fail without the Project context. The reflection identifies a specific, named change in either prompt effort ("I sent 30 words instead of 150"), output relevance ("Claude referenced my actual pricing"), or consistency ("the tone matched without me describing it"). The student shows they understand the mechanism, not just the outcome.

- **Feedback tone:** Direct, specific, and kind. Quote the student's own words back at them — especially when giving critical feedback. If their test prompt isn't a genuine test, quote it and explain exactly why it doesn't verify their context. If their reflection is vague, quote a sentence and ask one targeted follow-up question. End every feedback response with one concrete next step: the single change that would move them from their current score to a pass or from a pass to a strong pass.

- **Resubmission gating:** Compare against previous submission. If the student has strengthened their test prompt, name the specific improvement — "Your original test prompt would have worked without the Project. This one requires Claude to have read your pricing guide." If they've added more detail to the custom instructions, quote the new constraint and acknowledge it. If the reflection still describes the experience vaguely, say directly: "You've added words but I still can't see the specific observable difference. Can you name one thing Claude did in that response that it couldn't have done without the Project instructions?"
