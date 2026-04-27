import type { ReactNode } from "react";

export const LESSON_1_1 = {
  slug: "1.1-what-claude-is-and-what-it-isnt",
  number: "1.1",
  module: "01",
  moduleTitle: "Claude Essentials",
  title: "What is Claude AI?",
  lead: "Before you learn to use Claude well, you need an honest mental model of what it actually is, what it's good at, and where it's going to trip you up. This is that lesson.",
  estTime: "20 min",
  format: "Read + Practice + Graded",
  prerequisites: "None",
  objectives: [
    "Explain what Claude is and how it generates text",
    "Describe how Claude differs from other AI tools you may have used",
    "Identify at least three realistic, specific use cases for Claude in your own work",
    "Set accurate expectations for what Claude will and won't do well"
  ],
  passMark: 70,
  rubric: [
    { name: "Specificity", points: 25, desc: "Names specific tools and describes concrete, observable differences. Applications describe named, specific tasks - not categories." },
    { name: "Structure", points: 25, desc: "All three sections present and distinguishable. Logical flow from experience to observation to application. Each application stands on its own." },
    { name: "Constraint clarity", points: 25, desc: "Grounded in your actual business, not generic scenarios. Applications realistic for your industry and role." },
    { name: "Outcome focus", points: 25, desc: "Applications identify genuine business value, not demos. Shows awareness of any limitations you'd need to manage." }
  ],
  deliverableBrief: "You've just read how Claude works, what it does well, and where it falls short. Now write a reflection based on your own experience and your own business context. This is not a summary of what you read - it's your analysis, honest and grounded in your actual work.",
  deliverableSections: [
    { num: 1, title: "Your current AI tool use", desc: "A brief description - which tools you've used, for what tasks, and an honest two-sentence assessment of how well they've worked for you.", hint: "2-4 sentences total." },
    { num: 2, title: "How Claude differs from what you've used", desc: "A reflection drawing on both what you've read today and any direct testing you've done. Ground it in your specific work context.", hint: "250-400 words." },
    { num: 3, title: "Three specific applications in your actual work", desc: "For each: name the specific task, the context in which you'd use it, and why you think Claude is suitable for it.", hint: "3 applications, 3-4 sentences each." }
  ]
};

export function Lesson1_1Body(): ReactNode {
  return (
    <div className="lesson-body">
      <h2>What you&apos;re actually using when you use Claude</h2>
      <p>Claude is a large language model. That&apos;s the technical term. The more useful description: Claude is a program that reads text and writes text, trained on an enormous amount of written material to get very good at both.</p>
      <p>When you type something to Claude, it reads every word you send and generates a response one token at a time — each word chosen based on what&apos;s most useful given everything that came before it. There&apos;s no lookup table, no search engine running in the background, no database of pre-written answers. Claude constructs each response from scratch, in real time, which is why it can be creative and why it occasionally gets things wrong.</p>
      <p>Anthropic — the company that built Claude — made deliberate choices about how to train it. Claude is designed to be helpful, honest, and to avoid contributing to harm. In practice, this shapes behaviour you&apos;ll notice quickly: Claude will push back on requests it considers risky. It admits when it doesn&apos;t know something rather than making things up. It flags when it&apos;s uncertain instead of projecting false confidence. These aren&apos;t personality quirks — they&apos;re trained behaviours, and they matter when you&apos;re using Claude for work where accuracy counts.</p>

      <h2>How Claude sits within the AI landscape</h2>
      <p>You&apos;ve probably already used at least one other AI tool. ChatGPT, Microsoft Copilot, Google Gemini — these are all large language models from different companies. Claude sits in the same category. The underlying technology is similar. The specific choices each company makes in training and safety tuning produce tools that behave differently.</p>
      <p>A few things Claude does that are worth knowing:</p>

      <h3>It reads long documents without losing track</h3>
      <p>Claude has a large context window — the amount of text it can process in one go. You can paste in a lengthy contract, a 40-page report, or a long email thread and ask Claude to work with the whole thing. It won&apos;t summarise the first page and ignore the rest. This matters when your real tasks involve real documents, not short toy examples.</p>

      <h3>It tells you when it doesn&apos;t know</h3>
      <p>Claude will often say &quot;I&apos;m not certain about this&quot; or &quot;you should verify this with a current source.&quot; That might feel less impressive than a tool that always sounds authoritative, but in business contexts a confident wrong answer is worse than an honest &quot;I&apos;m not sure.&quot; You&apos;ll find this trait saves you from acting on bad information.</p>

      <h3>It doesn&apos;t remember previous conversations</h3>
      <p>Every new session in Claude.ai starts completely fresh. Claude has no memory of what you talked about yesterday, last week, or five minutes ago in a different tab. This surprises people when they first encounter it. You&apos;ll work around it by keeping a short context document — key facts about your business, your preferences, your current project — that you paste in at the start of important sessions. Later lessons cover this in detail.</p>

      <h3>It doesn&apos;t browse the internet by default</h3>
      <p>Claude&apos;s knowledge comes from its training data, which has a cutoff date. It can&apos;t pull live information — current prices, recent news, today&apos;s events — unless you&apos;re using a version that has web access specifically enabled. If you ask about something that happened recently, Claude may not know about it, and should tell you so.</p>

      <h2>Where you&apos;ll access Claude</h2>
      <p><strong>Claude.ai</strong> is the web interface and the app. It&apos;s where this course happens. Log in, start a conversation, work. No technical setup required.</p>
      <p>Many business tools are adding Claude as a built-in assistant — project management platforms, writing tools, customer service software. If a tool you already use has an AI feature, it may be running on Claude.</p>
      <p>There&apos;s also Claude via API, which developers use to build applications. You don&apos;t need this for the course, but knowing it exists explains why Claude sometimes behaves differently inside different products — each integration makes its own choices about what to expose.</p>
      <p>For every lesson in this course, you&apos;re working in Claude.ai.</p>

      <h2>What Claude is genuinely good at</h2>
      <p>This is a practical list. Not aspirational — honest about where Claude earns its keep.</p>
      <h3>Writing and editing</h3>
      <p>First drafts, editing passes, restructuring an argument, adjusting tone, cutting word count. Claude handles all of this well. The catch: the quality of what you get out depends heavily on what you put in. A vague prompt produces generic output. A specific prompt produces something you can actually use.</p>
      <h3>Summarising and extracting</h3>
      <p>Paste in a long document and ask Claude to pull out the key points, list the decisions, find the risk clauses, or extract the action items. This is one of the highest-value things you can do with Claude today, with no learning curve.</p>
      <h3>Thinking through problems</h3>
      <p>This one is underused. Before writing a proposal or preparing a recommendation, try explaining your situation to Claude and asking it to identify questions you should be asking, or to challenge the weak points in your argument. It&apos;s a useful sounding board, especially for early-stage thinking.</p>
      <h3>Explaining complex topics</h3>
      <p>Ask Claude to explain a regulation, a financial instrument, a contract clause, or a technical process in plain language. It handles this well. Give it the right question and a clear sense of your background, and it calibrates the explanation appropriately.</p>
      <h3>Drafting communications</h3>
      <p>Emails, proposals, meeting summaries, client briefs. Claude produces a reasonable first draft quickly. You still edit and review. But a solid draft is faster to work from than a blank page.</p>

      <h2>What Claude is not good at</h2>
      <h3>Real-time information</h3>
      <p>Claude doesn&apos;t know what happened last week. Stock prices, current events, today&apos;s news — these require a different tool or a current source.</p>
      <h3>High-stakes decisions without your judgment</h3>
      <p>Claude can help you think through a decision, structure your analysis, draft the advice. You are the one who knows the full context, the relationship, and what&apos;s at stake. Use Claude as a thinking tool, not as the decision-maker.</p>
      <h3>Tasks where accuracy is non-negotiable</h3>
      <p>Claude makes mistakes. It can misread a number, miss a nuance, or state something with confidence that isn&apos;t accurate. Any output going into a client-facing document, a regulated submission, or a significant decision needs a human review. This is not optional.</p>
      <h3>Always knowing what it doesn&apos;t know</h3>
      <p>Claude is trained to flag uncertainty, and it usually does. But it occasionally gets things wrong without flagging it. The more specific and verifiable the information, the more important it is to cross-check.</p>

      <h2>Claude takes you at face value</h2>
      <p>One thing that catches people out early: Claude does not read between the lines. It responds to what you actually write, not what you meant to write.</p>
      <p>If you ask Claude to &quot;write something professional,&quot; it will produce something that matches its training on what &quot;professional&quot; means — which may not match what professional looks like in your specific context. If you ask it to &quot;make this shorter,&quot; it will shorten it, but won&apos;t necessarily know which parts matter and which don&apos;t.</p>
      <p>This isn&apos;t a flaw. It&apos;s a feature, once you know how to work with it. Claude gives you exactly what you specify. So the skill of using Claude well is really the skill of being precise about what you want.</p>
      <p>A few things that always improve results:</p>
      <ul>
        <li>Name who you are and what context you&apos;re working in</li>
        <li>Describe the audience for the output, not just the output itself</li>
        <li>Specify format (length, structure, tone, what to include and exclude)</li>
        <li>Tell Claude what &quot;good&quot; looks like for this specific task</li>
      </ul>
      <p>You don&apos;t have to do all of this every time. For simple tasks, a short prompt is fine. But for anything that matters — a client document, an important email, a complex analysis — the extra 30 seconds of context usually produces something you can use on the first attempt rather than the fourth.</p>

      <div className="callout">
        <div className="callout-kicker">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          Common mistake → better approach
        </div>
        <div className="callout-block">
          <div className="callout-block-label">Mistake</div>
          <div className="callout-block-text">&quot;Write me something about our marketing strategy.&quot; Claude produces something generic and useless.</div>
        </div>
        <div className="callout-block">
          <div className="callout-block-label">Better approach</div>
          <div className="callout-block-text">&quot;I run a B2B accounting software company with around 120 clients across Australia. We&apos;re trying to write a one-page summary of our marketing strategy to give to a new marketing hire starting next week. The key point we want to get across is that we grow primarily through referrals from existing clients, not inbound channels. Draft this in plain, clear language — no jargon. 250 words maximum.&quot;</div>
        </div>
        <div className="callout-block">
          <div className="callout-block-label">Why it matters</div>
          <div className="callout-block-text">The difference is specificity and constraints. Claude meets you at whatever level of detail you bring. Bring more context, get better output. This principle runs through every lesson in this course.</div>
        </div>
      </div>
    </div>
  );
}
