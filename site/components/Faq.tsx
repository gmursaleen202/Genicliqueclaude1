import Reveal from "./Reveal";
import GlowField from "./GlowField";

const FAQS = [
  {
    q: "How much does an AI agent or automation project cost?",
    a: "Most engagements start between [SLOT — pricing band] for a single system and scale with complexity. Every project begins with a mapping week that attaches an ROI figure to each automation before you commit to building it.",
  },
  {
    q: "How long until something is live?",
    a: "The first system is typically live in weeks, not quarters. Mapping takes one week, design one more, and the first working build ships within the first sprint — you see it running every week after that.",
  },
  {
    q: "Do you work with the tools we already use?",
    a: "Yes. We build on top of your existing stack — Gmail or Outlook, HubSpot or Salesforce, Xero, Slack, WhatsApp and 500+ other tools — via n8n and custom APIs. Replacing your tools is almost never the answer.",
  },
  {
    q: "What happens to our data? Where does it live?",
    a: "Your data stays in your accounts, under your ownership. We build inside infrastructure you control, document every data flow, and follow least-access principles. Nothing is trained on your data without explicit agreement.",
  },
  {
    q: "Do we need technical staff to run this?",
    a: "No. Systems are built to be boringly reliable, with monitoring and fallbacks included. Your team gets training and plain-English documentation; we handle the maintenance layer under an ongoing run agreement.",
  },
  {
    q: "What's the difference between AI automation and hiring a VA?",
    a: "A VA works set hours, needs training, and scales linearly with cost. An AI system runs 24/7, executes the process identically every time, and costs the same whether it handles ten tasks a day or ten thousand.",
  },
  {
    q: "We already use n8n or Zapier — can you build on it?",
    a: "Yes, and we prefer to. We audit what you have, keep what works, and upgrade it to production grade: error handling, monitoring, AI steps, and documentation your team can actually maintain.",
  },
  {
    q: "What support do we get after launch?",
    a: "Every build includes a run phase: monitoring, tuning, and iteration. Most clients keep a monthly run agreement; some graduate to fully self-managed systems — you own everything either way.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  return (
    <section id="faq" data-bg="#0a0a0b" data-chapter="dark" className="section hairline-t relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GlowField
        blobs={[
          { color: "#8b5cf6", top: "10%", right: "-12%", size: 640 },
          { color: "#4d7cff", bottom: "0%", left: "-10%", size: 540, delay: "-9s" },
        ]}
      />
      <div className="container-site relative grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="mono-label">FAQ</p>
            <h2 className="type-display-m mt-6 text-(--text-hi)">Straight answers.</h2>
          </Reveal>
        </div>
        <div data-fx="list" className="lg:col-span-8">
          {FAQS.map((f, i) => (
            <details key={f.q} className={`group py-6 ${i > 0 ? "hairline-t" : ""}`}>
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 text-xl font-medium text-(--text-hi) [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="text-(--text-low) transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="faq-a mt-4 max-w-xl leading-relaxed text-(--text-mid)">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
