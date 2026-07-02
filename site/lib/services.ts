export type Service = {
  slug: string;
  number: string;
  name: string;
  headline: string;
  definition: string;
  replaces: string[];
  builds: { title: string; line: string }[];
  steps: { name: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "ai-agents",
    number: "01",
    name: "AI Agents",
    headline: "Digital employees, on staff in weeks.",
    definition:
      "Custom AI employees that think, communicate, and execute — trained on your business, connected to your tools, and working every hour you don't. They answer, book, sell, and support exactly to your script.",
    replaces: [
      "Answering the same twenty questions every day",
      "Triaging a shared inbox by hand",
      "Missed calls after 5pm",
      "Follow-ups that fall through the cracks",
    ],
    builds: [
      { title: "Customer support agents", line: "First reply in seconds, on brand, from your docs" },
      { title: "Sales agents", line: "Every inbound lead qualified and followed up" },
      { title: "Appointment booking agents", line: "Calendars managed without the email chain" },
      { title: "Internal knowledge assistants", line: "Your policies and processes, answerable" },
      { title: "Voice AI agents", line: "A phone that always answers in your voice" },
      { title: "Email assistants", line: "Drafts, triage, and replies that sound like you" },
      { title: "HR assistants", line: "Onboarding and staff questions handled" },
      { title: "Operations agents", line: "Checklists that run themselves overnight" },
    ],
    steps: [
      { name: "Map the role", body: "We define the job description: tasks, tone, guardrails, and escalation rules." },
      { name: "Train on your business", body: "The agent learns your docs, systems, and script — then we test it against real scenarios." },
      { name: "Deploy and supervise", body: "It goes live inside your channels with monitoring, human handoff, and weekly tuning." },
    ],
    faqs: [
      {
        q: "Will an AI agent sound like our brand?",
        a: "Yes — tone, vocabulary, and escalation rules are part of the build. The agent works from your voice guide and your real answers, and anything off-script routes to a human.",
      },
      {
        q: "What happens when the agent doesn't know the answer?",
        a: "It says so and hands off. Every agent ships with explicit escalation paths — to email, Slack, or a live person — so uncertainty becomes a routed ticket, never a made-up answer.",
      },
    ],
  },
  {
    slug: "ai-automation",
    number: "02",
    name: "AI Automation",
    headline: "Your back office, on rails.",
    definition:
      "Business process automation using modern AI: the repetitive work between your apps — copying, updating, chasing, formatting, reporting — rebuilt as systems that run identically every time.",
    replaces: [
      "Copy-pasting between CRM, inbox, and spreadsheets",
      "Writing the same proposal from scratch",
      "Chasing leads that went quiet",
      "Compiling the Monday report by hand",
    ],
    builds: [
      { title: "CRM automation", line: "Records that update themselves" },
      { title: "Email automation", line: "The right message, sent at the right moment" },
      { title: "Lead nurturing", line: "No lead goes cold from silence" },
      { title: "Proposal generation", line: "Branded, priced, and drafted in minutes" },
      { title: "Reporting", line: "Numbers on rails, every week, no hands" },
      { title: "Customer onboarding", line: "From signed to set up, automatically" },
      { title: "Internal operations", line: "The invisible admin, done" },
    ],
    steps: [
      { name: "Audit the hours", body: "We map where your team's week actually goes and attach an ROI figure to each process." },
      { name: "Rebuild as a system", body: "Each process becomes an automation with error handling, approvals, and logs." },
      { name: "Run and compound", body: "Systems ship weekly; each one frees hours that fund the next." },
    ],
    faqs: [
      {
        q: "Which processes should we automate first?",
        a: "The ones that are frequent, rule-based, and painful — usually reporting, lead follow-up, and data entry between systems. The mapping week ranks every candidate by hours returned per dollar.",
      },
      {
        q: "Do we have to change the tools we use?",
        a: "No. Automation is built on top of your existing stack. Replacing tools is a last resort, not a starting point.",
      },
    ],
  },
  {
    slug: "n8n-automation",
    number: "03",
    name: "n8n Automation",
    headline: "One nervous system for every tool.",
    definition:
      "Enterprise-grade workflow automation built on n8n: hundreds of business applications connected into one system, with AI steps where judgement is needed. Email to CRM to Slack to calendar to accounting to database — one flow.",
    replaces: [
      "Swivel-chair work between six open tabs",
      "Zapier bills that scale with your success",
      "Fragile automations nobody dares to touch",
      "Integration projects that never ship",
    ],
    builds: [
      { title: "End-to-end pipelines", line: "Email → CRM → Slack → Calendar → Accounting → Database → AI" },
      { title: "Self-hosted n8n", line: "Your automation on your infrastructure, no per-task tax" },
      { title: "AI-in-the-loop flows", line: "Summarise, classify, and draft inside the workflow" },
      { title: "Error-proofed operations", line: "Retries, alerts, and audit logs as standard" },
      { title: "Legacy rescues", line: "Your existing n8n or Zapier, upgraded to production grade" },
    ],
    steps: [
      { name: "Chart the flow", body: "Every trigger, tool, and handoff mapped end to end — including the failure cases." },
      { name: "Build on n8n", body: "Workflows assembled with versioning, error branches, and monitoring baked in." },
      { name: "Hand over the keys", body: "Documentation and training so your team can read, run, and extend every flow." },
    ],
    faqs: [
      {
        q: "Why n8n instead of Zapier or Make?",
        a: "Ownership and scale. n8n can run on your infrastructure with flat costs, handles complex branching and AI steps natively, and nothing is locked behind per-task pricing. We still build on Zapier or Make when it's genuinely the better fit.",
      },
      {
        q: "Can you take over our existing n8n setup?",
        a: "Yes — it's one of our most common engagements. We audit what exists, keep what works, and bring the rest up to production grade: error handling, monitoring, and documentation.",
      },
    ],
  },
  {
    slug: "software",
    number: "04",
    name: "Vibe Coding — Software",
    headline: "Custom software, shipped in weeks.",
    definition:
      "Internal tools and SaaS platforms built with AI-assisted engineering — senior builders using the fastest stack there has ever been. The software your business actually needs, at a fraction of traditional time and cost.",
    replaces: [
      "The spreadsheet that became load-bearing",
      "Per-seat SaaS that fits 70% of your process",
      "Six-month dev quotes for six-week problems",
      "Duct tape between systems that don't talk",
    ],
    builds: [
      { title: "CRM systems", line: "Shaped to your pipeline, not a template" },
      { title: "Client portals", line: "One login for everything your clients need" },
      { title: "Dashboards", line: "The numbers that matter, live" },
      { title: "Booking systems", line: "Scheduling that fits how you actually book" },
      { title: "Inventory software", line: "Stock truth across every location" },
      { title: "Business management platforms", line: "Your operations, in one system you own" },
    ],
    steps: [
      { name: "Blueprint", body: "One week to a clickable spec: screens, data model, integrations, and a fixed scope." },
      { name: "Build in sprints", body: "Working software every week — you steer while it's cheap to steer." },
      { name: "Own it outright", body: "Your code, your infrastructure, your data. We stay for the run phase, not the ransom.",},
    ],
    faqs: [
      {
        q: "Is AI-built software reliable enough for production?",
        a: "The AI accelerates senior engineers; it doesn't replace them. Every system ships with tests, review, monitoring, and the same production standards as hand-written code — it simply arrives in weeks instead of quarters.",
      },
      {
        q: "Who owns the code?",
        a: "You do, entirely — repository, infrastructure, and data. Leaving us is easy; nobody does.",
      },
    ],
  },
  {
    slug: "apps",
    number: "05",
    name: "Vibe Coding — Apps",
    headline: "Your app, at startup speed.",
    definition:
      "Mobile applications for iOS, Android, and cross-platform, built with AI-assisted engineering. From idea to App Store without the startup burn rate.",
    replaces: [
      "Agency quotes with two commas",
      "A year of roadmap before first release",
      "Web wrappers that feel like web wrappers",
      "The app idea that never left the notes app",
    ],
    builds: [
      { title: "iOS apps", line: "Native feel, App Store ready" },
      { title: "Android apps", line: "Every device, one codebase" },
      { title: "Cross-platform products", line: "React Native and Expo, shipped fast" },
      { title: "Companion apps", line: "A mobile front door for your existing systems" },
      { title: "MVPs that survive contact", line: "Built to validate, structured to scale" },
    ],
    steps: [
      { name: "Prototype", body: "A working prototype on your phone in the first sprint — not a deck about one." },
      { name: "Harden", body: "Auth, payments, offline, push: production concerns handled properly." },
      { name: "Launch and iterate", body: "Store submission, analytics, and a weekly release rhythm." },
    ],
    faqs: [
      {
        q: "iOS first, Android first, or both?",
        a: "Usually both via one cross-platform codebase — it's 90% of native quality for 55% of the cost. We go fully native when the product genuinely demands it.",
      },
      {
        q: "How fast is 'startup speed' really?",
        a: "A working prototype in weeks and a store-ready first version in one to three months, depending on scope. The mapping week gives you a fixed answer before you commit.",
      },
    ],
  },
  {
    slug: "web-development",
    number: "06",
    name: "AI Web Development",
    headline: "Websites that load, rank, and convert.",
    definition:
      "High-performing, AI-powered websites: premium design, obsessive speed, accessibility as standard, and the AI integrations — chat, search, personalisation — that make a site work like a system.",
    replaces: [
      "The template site that looks like everyone's",
      "Four-second load times bleeding conversions",
      "A website that's a brochure, not an employee",
      "Agencies that hand over and disappear",
    ],
    builds: [
      { title: "Marketing sites", line: "Award-grade design, Lighthouse 95+" },
      { title: "AI-integrated experiences", line: "Chat, search, and personalisation built in" },
      { title: "E-commerce", line: "Fast paths from looking to buying" },
      { title: "Interactive product demos", line: "Show the thing, don't describe it" },
      { title: "Headless builds", line: "Next.js frontends on the CMS you prefer" },
    ],
    steps: [
      { name: "Design for conversion", body: "Structure and copy engineered around one action — then made beautiful." },
      { name: "Build for speed", body: "Modern stack, optimised assets, Core Web Vitals as gates, not goals." },
      { name: "Wire in intelligence", body: "AI features and analytics that turn the site into a working system." },
    ],
    faqs: [
      {
        q: "How fast will the site actually be?",
        a: "Our build gates are Lighthouse 95+ on mobile, LCP under 1.8 seconds, and CLS under 0.05 — measured on throttled connections, not dev machines. Speed is a requirement, not a hope.",
      },
      {
        q: "Can you rebuild our existing site without losing rankings?",
        a: "Yes — migrations ship with full redirect maps, preserved metadata, and schema upgrades. Rankings typically improve because the technical foundation does.",
      },
    ],
  },
  {
    slug: "seo",
    number: "07",
    name: "SEO & GEO",
    headline: "Found by Google. Cited by ChatGPT.",
    definition:
      "Modern search visibility across both worlds: technical, local, semantic, and programmatic SEO for the rankings you know — plus GEO and AEO so AI assistants cite you when your customers ask them instead.",
    replaces: [
      "Ranking reports that never become revenue",
      "Content sprayed at keywords nobody buys from",
      "Invisibility in AI answers your buyers now trust",
      "Agencies that measure activity, not outcomes",
    ],
    builds: [
      { title: "Technical SEO", line: "Crawlable, fast, schema-complete foundations" },
      { title: "Local SEO", line: "Own the map pack where you operate" },
      { title: "Semantic & entity SEO", line: "Become the entity engines understand" },
      { title: "Programmatic SEO", line: "Hundreds of pages that earn their existence" },
      { title: "GEO", line: "Generative Engine Optimization — cited by AI search" },
      { title: "AEO", line: "Answer Engine Optimization — the answer, extracted" },
    ],
    steps: [
      { name: "Audit both worlds", body: "Where you stand in classic search and in AI answers — and where the money queries are." },
      { name: "Fix the foundations", body: "Technical debt, schema, speed, and entity clarity handled first." },
      { name: "Compound with content", body: "Answer-first pages that rank, get cited, and convert — measured monthly." },
    ],
    faqs: [
      {
        q: "What are GEO and AEO, in plain terms?",
        a: "Optimising to be the answer, not just a result. GEO makes AI search engines like ChatGPT and Perplexity cite your business; AEO structures your content so answer boxes and assistants can extract it directly. Both matter because your buyers increasingly ask AI first.",
      },
      {
        q: "How long until SEO shows results?",
        a: "Technical fixes move numbers within weeks; content compounding takes three to six months to show real revenue impact. We report against traffic, citations, and enquiries — never vanity rankings.",
      },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
