import Link from "next/link";
import Reveal from "./Reveal";

const SERVICES = [
  { n: "01", slug: "ai-agents", title: "AI Agents", outcome: "Digital employees that answer, book, sell, and support — 24/7." },
  { n: "02", slug: "ai-automation", title: "AI Automation", outcome: "Your CRM, email, and back office, running on rails." },
  { n: "03", slug: "n8n-automation", title: "n8n Workflows", outcome: "Hundreds of apps, one enterprise-grade nervous system." },
  { n: "04", slug: "software", title: "Software — vibe-coded", outcome: "Internal tools and SaaS platforms, shipped in weeks." },
  { n: "05", slug: "apps", title: "Apps — vibe-coded", outcome: "iOS and Android products at startup speed." },
  { n: "06", slug: "web-development", title: "AI Web Development", outcome: "Sites that load fast, rank high, and convert." },
  { n: "07", slug: "seo", title: "SEO & GEO", outcome: "Found on Google — and cited by ChatGPT." },
];

export default function Services() {
  return (
    <section id="services" data-bg="#121214" data-chapter="dark" className="section">
      <div className="container-site grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="mono-label">What we build</p>
              <h2 className="type-display-l mt-6 text-(--text-hi)">
                Seven systems. One outcome: hours back.
              </h2>
            </Reveal>
          </div>
        </div>
        <ul className="lg:col-span-8">
          {SERVICES.map((s, i) => (
            <li key={s.n} className={i > 0 ? "hairline-t" : ""}>
              <Reveal delay={i * 40}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex flex-wrap items-baseline gap-x-6 gap-y-1 py-7 transition-colors hover:bg-ink-3 sm:flex-nowrap"
                >
                  <span className="mono-label w-8 shrink-0">{s.n}</span>
                  <h3 className="type-display-m text-(--text-hi) transition-transform duration-200 group-hover:translate-x-2">
                    {s.title}
                  </h3>
                  <p className="ml-auto max-w-60 text-right text-sm leading-snug text-(--text-mid)">{s.outcome}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
