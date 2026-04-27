# Lesson 3.3 — Problem-solving and decision making

**Module:** 03 · Practical Daily Applications
**Estimated time:** 25 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites
- Module 1 complete (Lessons 1.1–1.6)
- Module 2 complete
- Lessons 3.1 and 3.2 complete

## Learning objectives
By the end of this lesson you'll be able to:
- Use Claude as a thinking partner by narrating a problem and prompting it to ask you clarifying questions
- Structure a decision prompt that names your options, constraints, and evaluation criteria so Claude can map trade-offs clearly
- Ask Claude to argue against your preferred option to find the weaknesses in your own thinking
- Send the follow-up "what am I missing?" prompt as a standard second step in any decision conversation
- Identify the decisions where your judgment stays in charge — and Claude's input stays as input

---

## Lesson script

### Claude doesn't make decisions — it makes thinking clearer

Most people hit a hard business decision and do one of two things: they sit with it alone for too long, or they ask someone close to the situation who already has an opinion. Both have limits. Sitting alone means no pressure-testing. Asking someone invested means filtered feedback.

Claude is a different kind of resource. It has no stake in the outcome. It won't tell you what you want to hear. It won't get defensive if you push back. And it can hold a complex situation in its head and help you think through it — as long as you give it enough to work with.

But Claude is not a decision-maker. It doesn't know your business the way you do. It can't see the relationship history, the cash flow pressure, or the gut feeling you're carrying. What it can do is structure messy thinking, surface angles you haven't considered, and challenge the reasoning you've already formed. That's the tool. The decision stays with you.

This lesson is about how to use that tool well.

### Beat 1 — Using Claude as a thinking partner

The most underused way to work with Claude on decisions is the simplest: talk through the problem. Not as a formal prompt — as a brain dump. Describe the situation like you'd describe it to a trusted colleague over coffee. What's the problem, what are the stakes, what's making it hard, what options are you circling?

Then — and this is the move that makes it useful — ask Claude to ask you questions.

```
I'm sitting on a decision about whether to take on a new client. Here's
the situation: they're a mid-size construction company, the contract is
worth around $80k over 12 months, but the project scope feels vague and
the main contact has already changed their brief three times in discovery.
My gut says this is going to be high-maintenance. But $80k is meaningful
for us right now.

Before you give me any analysis or recommendations, ask me the questions
you'd need answered to actually help me think through this properly.
```

This approach does something important. It slows you down. It surfaces what information is missing. It makes Claude work for what it needs rather than pattern-matching your situation onto a generic framework. And the questions themselves are often useful — reading them, you'll realise which ones you already know the answer to and which ones you don't.

When Claude asks questions, you answer them. Then you ask it to proceed with an analysis. You've now given it a real brief — your brief — rather than a vague prompt.

Why does this work better than just describing the problem and asking for a recommendation straight away? Because when you go straight to "tell me what to do," Claude fills in the gaps it doesn't have. It assumes. It pattern-matches to the most common version of your type of decision, not your actual decision. Asking for questions first forces it to flag what it doesn't know — and forces you to confront the same gaps.

There's a secondary benefit: writing the brain dump itself clarifies things. The act of putting a messy problem into plain language — without any structure imposed — often reveals what's really bothering you about it. The thing you bury at the end of the paragraph, almost as an afterthought, is usually the real issue. Pay attention to that.

### Beat 2 — The structured decision prompt

Once you know enough to lay out your options, you can move to a more structured prompt. The goal is to give Claude:

- the options you're actually weighing (not hypothetical ones)
- the constraints you're working within (budget, timeline, capacity, anything ruled out)
- the criteria that matter most to you for this decision
- the output you want (a trade-offs table, a recommendation, a set of questions)

The structure matters because it prevents Claude from suggesting things you've already eliminated, and it forces you to be explicit about what you actually care about. Often, writing this prompt is itself useful — you realise you can't articulate your criteria, which is a sign you haven't finished thinking.

```
I need to decide between three options for my front-of-house hire. Here
are the options I'm actually weighing:

Option A: Hire a part-time experienced person (3 days/week, $38/hr,
         available in 4 weeks)
Option B: Hire a full-time junior person (5 days/week, $28/hr, would
         need 6–8 weeks of training before they're useful)
Option C: Use a reception agency for 3 months while we reassess (higher
         cost, less commitment)

Constraints I'm working within:
- Budget ceiling: $65,000 for the first 12 months all-in
- We can't have a 6-week gap in front-of-house coverage — we have client
  visits every week
- Option D (offshore/VA) has already been ruled out — not right for our
  client-facing environment

What matters most to me: reliability, speed to being useful, and keeping
the cash flow manageable in Q3.

Output I want: a trade-offs table comparing the three options across my
three criteria. Then a 2–3 sentence summary of which option you'd lean
toward, with the reasoning.
```

Notice what this prompt does. It rules out Option D explicitly so Claude doesn't re-suggest it. It names specific criteria rather than leaving Claude to guess what "good" looks like. It specifies an output format — the table and summary — so the response is immediately useful, not a wall of text.

One more thing this prompt does: it surfaces where you're not yet clear. If you sit down to write a structured decision prompt and you can't name your criteria, that's information. It means you're not ready to decide — you're still at the "thinking partner" stage from Beat 1. The two modes work in sequence: talk through it first, then structure it once you know what you're actually evaluating.

A note on ruling things out: always include what you've already eliminated and why. If you've already said no to an option — for a real reason — tell Claude. Otherwise Claude will often re-surface it as though it's a fresh idea, which wastes time and erodes trust in the tool. "Option X has been ruled out because Y" takes five words. It saves a lot of back and forth.

**Common mistake → Better approach**

Mistake: "Help me decide whether to hire someone or use a contractor." Claude produces a generic comparison with no relevance to your situation, budget, team size, or timing.

Better approach: Write the structured decision prompt above. Name the actual options, the real constraints, the criteria that matter to you specifically, and the output format you need. The 90 seconds it takes to write that prompt saves you 15 minutes of editing a generic response into something useful.

### Beat 3 — Devil's advocate mode

Once you've done the analysis and you're leaning toward one option, you're most at risk of confirmation bias. You've been inside the decision long enough that you're assembling arguments for your preferred option rather than honestly testing it.

This is where devil's advocate mode pays off. You ask Claude to argue against you.

```
I've done the analysis and I'm leaning toward Option A — the experienced
part-time hire. Before I make this call, argue against Option A as
forcefully as you can. I want you to take the other side — find the real
weaknesses in my reasoning, the risks I might be minimising, and the ways
this decision could go badly. Be direct. Don't soften it.
```

Most people are surprised how good Claude is at this. It will find the holes. It will surface the risks you've been rationalising. It doesn't have a horse in the race, so it can argue the other side without flinching.

What you do with the devil's advocate output is your job. Some of it will feel wrong — and you'll be able to articulate why, which is useful. Some of it will land, and you'll need to either strengthen your decision or change it.

The point isn't to be talked out of your instinct. The point is to stress-test it before you're committed.

One practical note: when Claude argues against your position, read the response twice. On the first read, your instinct will be to dismiss the points that don't match your view. On the second read, slow down on the one or two arguments that made you uncomfortable. That discomfort is usually pointing at something real. You don't have to change your decision because of it — but you should be able to explain, to yourself, why those risks are acceptable or manageable. If you can't, that's a signal.

### Beat 4 — "What am I missing?"

After any substantive Claude analysis, send one more prompt. This one.

```
What am I missing?
```

That's it. Every time. It takes five seconds and routinely surfaces something worth considering.

Claude will often come back with angles that didn't fit cleanly into the original framework — second-order effects, stakeholder considerations, timing risks, questions about your assumptions. Not all of it will be relevant. Some of it will be obvious. But once in a while it will surface something real that you hadn't thought through.

Build this into every decision conversation as a habit. First prompt: the analysis. Second prompt: what am I missing? Third prompt: anything that follows from what Claude surfaced.

The "what am I missing?" prompt works because it explicitly invites Claude to step outside the frame you set. Your original prompt defined the options, the criteria, the constraints. "What am I missing?" asks Claude to look outside that definition. Different prompt — different type of response.

You can also make it more specific once you know what you're looking for:

```
What am I missing specifically about the risk side of this? I feel like
I've been focused on cost and speed, but I haven't fully thought through
what happens if Option A doesn't work out in the first 90 days.
```

The more specific version often gets a more useful answer. Start with the open version, then narrow it.

### Beat 5 — Where human judgment stays non-negotiable

Claude is useful for structuring decisions. It is not a substitute for judgment. There are categories of decision where you must remain in charge — not because Claude is unhelpful, but because there are things Claude genuinely cannot know.

**Relationship context.** Claude doesn't know what went unsaid in your last meeting with that client, or the dynamic you've built with a staff member over two years. Decisions that hinge on relationship nuance require your read — not a framework.

**Values and culture.** What kind of business you want to run. What you're willing to compromise on and what you won't. These aren't criteria Claude can infer from a prompt. They come from you.

**Risk tolerance.** Claude can describe the risks of an option. It cannot feel the financial pressure you're under, or know how much a wrong call would cost you personally and professionally. You carry that context. Claude doesn't.

**Irreversible decisions.** The higher the stakes and the harder the reversal, the more your judgment needs to lead. Use Claude to think clearly, but be honest with yourself that you are the one who has to live with the outcome.

None of this means Claude is less useful on high-stakes decisions. It means you use it differently. More questions, less deference. More pressure-testing of the output, more skepticism about confident-sounding conclusions. Claude as a rigorous thinking tool — not as the closer.

The sign of good judgment is knowing when to take Claude's analysis seriously and when to set it aside. That skill develops with practice. By the time you've run a few real decisions through this process, you'll have a feel for where Claude adds value and where your read of the situation overrides it.

One more thing worth naming: if you find yourself using Claude's recommendation as justification for a decision you've already made — "Claude agreed with me" — that's a sign you're not using it as a thinking tool. You're using it as a validation tool. Those are different things. Validation feels good. Thinking is harder and more useful.

The test is whether you'd tell someone the reasons for your decision in your own words, from your own analysis. If the answer is yes, and Claude helped you get there — that's the tool working. If the answer is "Claude said Option A was best," you haven't done the thinking yet.

---

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 0,
  "mapping": {
    "Creative & Marketing": 2,
    "SaaS / Software": 5,
    "Professional Services": 4,
    "Finance & Accounting": 1,
    "E-commerce & Retail": 0,
    "Health & Wellness": 3,
    "Other": 0,
    "Education & Coaching": 6
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Ask Claude to ask you the questions first

**Scenario:** Thinking partner · Café owner deciding on a supplier switch

**Prompt:**
```

```

**Why it works:** The problem is fully articulated — the pull, the hesitation, the emotional texture. Asking for questions first slows the process down and makes Claude surface what it actually needs, rather than pattern-matching to a generic supplier comparison.

---

### Example 2: Options, constraints, ranked criteria, output format

**Scenario:** Structured prompt · Bookkeeper raising rates

**Prompt:**
```

```

**Why it works:** All three options are specific and real. The constraint about which clients would struggle is explicit. Criteria are ranked — Claude knows what matters most. The output format is stated clearly so the response is immediately usable.

---

### Example 3: Stress-test a decision you've already made

**Scenario:** Devil's advocate · Marketing consultancy hiring a PM

**Prompt:**
```

```

**Why it works:** The reasoning for the decision is stated upfront — Claude needs to know what case to argue against. Asking for the "strongest version" prevents a hedged, both-sides response. Specifying "first 12 months" focuses the risks on the near term.

---

### Example 4: Target the specific angle you've underweighted

**Scenario:** "What am I missing?" · Physio clinic considering a second location

**Prompt:**
```

```

**Why it works:** The "what am I missing?" prompt is focused on one specific angle — upside risk — rather than left open. The student has already done the downside analysis; they're explicitly asking Claude to examine the part they've underweighted. Targeted version, targeted answer.

---

### Example 5: Ask Claude for thinking support, not the call

**Scenario:** Human judgment · HR consultancy owner on a team member decision

**Prompt:**
```

```

**Why it works:** The owner explicitly acknowledges Claude's limits upfront. They're not asking for the decision — they're asking for thinking support on the parts Claude can actually help with. The output request is specific: a framework for the conversation, not a script, not a recommendation on whether to let M go.

---

### Example 6: Structured decision prompt to pick the next feature for a small SaaS roadmap

**Scenario:** Sydney SaaS founder · Choosing the next feature from a backlog of five

**Prompt:**
```
I'm Tom, the founder of QuoteRunner, a quoting tool for Australian plumbers. We're 4 people (2 devs, me on product, 1 part-time CS). Around 180 paying customers, $14k MRR. I need to choose ONE feature to build next quarter. Help me think through it as a structured decision.
      
      Options on the table:
      1. Xero invoice sync (most-requested, ~6 weeks build)
      2. SMS quote reminders (~2 weeks, low risk)
      3. Multi-user accounts for plumbing teams (~10 weeks, unlocks bigger plans)
      4. iOS app (~14 weeks, customers ask but rarely churn over it)
      5. Better quote templates (~3 weeks, fixes our #1 support complaint)
      
      Constraints: only 2 devs, can't ship more than one big thing this quarter, cash runway is 9 months, we charge $79/month flat.
      
      Rank these against three criteria in this order: (1) reduces support load, (2) increases willingness-to-pay, (3) defensibility against the new competitor that launched in March. Give me a ranked table with one-sentence reasoning per option, then tell me which you'd pick and what you'd want to know before committing.
```

**Why it works:** This is the lesson's structured decision prompt — options, constraints, and ranked criteria all named explicitly. By ordering criteria ("reduces support load" first, "defensibility" third), Tom forces a real prioritisation rather than a hedged answer. The closing "what you'd want to know before committing" keeps human judgment in charge: Claude ranks, Tom decides.

---

### Example 7: Using a structured decision prompt to weigh adding a new subject before Term 2

**Scenario:** Tutoring business owner · Deciding whether to add Year 11 Chemistry for Term 2

**Prompt:**
```
I own SharpenUp Tutoring in Adelaide — currently 6 tutors, we run Year 7–12 Maths and English only. I'm deciding whether to add Year 11 Chemistry from Term 2 (starts late April). I want you to act as a thinking partner, not give me the answer.
      
      Options:
      A. Add Year 11 Chemistry now for Term 2.
      B. Pilot it Term 3 instead with one tutor and a waitlist.
      C. Don't add it — stay focused on Maths/English.
      
      Constraints:
      - I have one ex-teacher tutor available who could cover it (10 hrs/week max).
      - 14 families have asked about Chemistry in the last 8 weeks.
      - Term 2 starts in 3 weeks — limited time to market.
      - I don't want to dilute our Maths/English brand.
      
      Rank these criteria in this order: (1) revenue in the next 6 months, (2) risk to existing reputation, (3) tutor workload sustainability, (4) ease of marketing.
      
      Format your response as: a short take on each option against the ranked criteria, then 3 clarifying questions you'd want me to answer before I commit, then your provisional lean. I'll make the call.
```

**Why it works:** This demonstrates the structured decision prompt from 3.3 — options + constraints + ranked criteria + format, all explicit. The owner also asks for clarifying questions back, which keeps the thinking-partner dynamic alive instead of letting Claude jump straight to "do option B". Final call stays with the owner.

---

## Graded deliverable

**Title:** A real business decision, run through the process

**Brief:** Bring one real business decision and run it through the four moves: brain dump, structured decision prompt, devil's advocate if you're leaning one way, and "what am I missing?" The decision can be: **(a)** something you're currently sitting on, **(b)** a decision you made in the last few months that you'd like to revisit with Claude, or **(c)** a decision you know is coming in the next quarter. A hire, pricing change, supplier switch, scope call, lease decision, taking on a difficult client. The point is the thinking, not the timing. Submit the decision, the full prompt + response, the "what am I missing?" exchange, and a 100-word reflection on what shifted.

**What to submit:**

1. **The decision — options on the table + real constraints** — 3–5 sentences. Name the decision (live, recent, or upcoming), the actual options you're weighing (with numbers where relevant), and the constraints you're working within (budget, timeline, capacity, what's already been ruled out). If revisiting a past decision, briefly note what you actually chose so the "what am I missing?" step in section 3 has something to push against.

2. **Your structured decision prompt + Claude's response** — Paste the full prompt you sent (options, constraints, ranked criteria, output format) and Claude's full response. Don't summarise or truncate.

3. **"What am I missing?" follow-up + Claude's response** — The follow-up prompt you sent (bare or targeted to a specific angle) and Claude's full response. If you also ran devil's advocate, include it here too.

4. **Reflection (100 words — 75 min, 150 max)** — Did Claude change your thinking? If yes, name the specific thing that shifted and why. If no, what did the process confirm or surface? Name the thing — not "it was helpful."

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Is the decision real and specific — not hypothetical or vague? Are the actual options named with real numbers? "I'm deciding between two suppliers" scores 8. "I'm deciding between Supplier A at $4.20/unit with 4-week lead times and Supplier B at $3.80/unit with 7-week lead times, where I can't go below a 95% fill rate" scores 22+.
- **Structure (25 pts)** — Does the decision prompt lay out options, criteria, and the desired output type (table, recommendation, questions)? Are the criteria named and ranked rather than implied? Does the prompt tell Claude what's already been eliminated so it doesn't re-suggest it?
- **Constraint clarity (25 pts)** — Does the student explicitly name what's already been ruled out and why? Does the prompt define what "good" looks like for this decision — not just the options, but the criteria for evaluating them? A prompt saying "I need to stay under budget" scores lower than one naming the actual budget ceiling and why it can't flex.
- **Outcome focus (25 pts)** — Does the 100-word reflection show the student used Claude as input to their own judgment — not a replacement for it? Does it name something specific that shifted (or specifically didn't shift)? "It was helpful" scores 8. "Claude's devil's advocate point about onboarding made me realise I'd been assuming 4 weeks when our last hire took 10" scores 22+.

---

## Notes for the AI grading engine

(Not shown to student)

- **Reward (high marks):**
  - Decision prompt names specific options with real numbers (costs, timelines, headcount, capacity) rather than labels like "Option A" without content
  - Constraints section of the prompt explicitly rules something out and gives the reason — not just "Option X won't work" but "Option X was ruled out because of Y"
  - Criteria are ranked or weighted — student shows awareness that not all criteria are equal
  - The "what am I missing?" follow-up is targeted to a specific angle (e.g. "specifically on the risk side" or "specifically what the cost of waiting might be") rather than a bare generic prompt
  - The reflection names a specific thing Claude surfaced and says specifically how it changed (or didn't change) their thinking — concrete over abstract
  - Student shows awareness of where their own judgment supersedes Claude's analysis — especially on relationship or values dimensions of the decision

- **Penalise (dock points):**
  - Decision is clearly hypothetical — "imagine I was deciding..." or a decision from years ago with no live stakes
  - Options in the prompt are abstract labels without real content ("Option A vs Option B" with no specifics attached)
  - No constraints named — prompt reads as an open question rather than a structured decision brief
  - Reflection says "Claude was helpful" or "it gave me a lot to think about" without naming what specifically was useful or shifted
  - Student presents Claude's recommendation as their decision — no sign of independent judgment applied to the output
  - "What am I missing?" prompt is not included, or is included but Claude's response to it is truncated or absent

- **Common 60–69 patterns:** Student submits a real decision with real options, but the prompt lacks named criteria — Claude has to infer what matters, which it will do generically. Reflection acknowledges something shifted but stays vague ("it made me think more carefully about the risks"). In feedback: quote the criteria gap back to them — "Your prompt names your options clearly, but it doesn't tell Claude what matters most to you. Is it cost? Speed? Reversibility? Your next prompt should rank those three things explicitly, then ask for the trade-offs table again." One concrete revision instruction, not five suggestions.

- **Common 80+ patterns:** The decision prompt reads like a proper brief — real numbers, named criteria with relative weighting, explicit ruled-out options with reasons. The "what am I missing?" is targeted, not generic. The reflection identifies a specific thing Claude surfaced — names it, says what it changed — and then explicitly notes where the student's judgment overrode or supplemented Claude's analysis. You can picture the actual decision from reading the submission, and you can see that the student drove the process rather than just receiving output.

- **Feedback tone:** Direct, specific, kind. Quote student's words — the specific option they named, the constraint they included, the phrase from the reflection. Never generic. End with one concrete next step: which element of their next decision prompt to improve first, and what that improvement looks like in specific language.

- **Resubmission gating:** Compare against the previous submission. If the student added named criteria and explicit constraints in their revised prompt, reward that improvement directly and name what changed. If they added length to the reflection without adding specificity — more words, same level of abstraction — say that clearly: "Your reflection is longer but the core observation is still vague. Tell me the specific thing Claude said that landed, in your own words, and what you did differently because of it."
