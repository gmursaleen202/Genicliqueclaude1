import Link from "next/link";
import GlowField from "./GlowField";

const COLUMNS: [string, { label: string; href: string }[]][] = [
  [
    "Services",
    [
      { label: "AI Agents", href: "/services/ai-agents" },
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "n8n Workflows", href: "/services/n8n-automation" },
      { label: "Software", href: "/services/software" },
      { label: "Apps", href: "/services/apps" },
      { label: "Web", href: "/services/web-development" },
      { label: "SEO & GEO", href: "/services/seo" },
    ],
  ],
  [
    "Studio",
    [
      { label: "Work", href: "/work" },
      { label: "Studio", href: "/studio" },
      { label: "Process", href: "/#process" },
      { label: "FAQ", href: "/#faq" },
    ],
  ],
  [
    "Contact",
    [
      { label: "hello@geniclique.com", href: "mailto:hello@geniclique.com" },
      { label: "Book a call", href: "/contact" },
    ],
  ],
];

export default function Footer() {
  return (
    <footer data-bg="#050505" data-chapter="dark" className="hairline-t relative overflow-hidden">
      <GlowField
        blobs={[
          { color: "#4d7cff", bottom: "-30%", left: "10%", size: 700 },
          { color: "#8b5cf6", bottom: "-40%", right: "5%", size: 640, delay: "-8s" },
        ]}
      />
      <div className="container-site relative grid gap-12 py-20 sm:grid-cols-3">
        {COLUMNS.map(([title, links]) => (
          <div key={title}>
            <p className="mono-label">{title}</p>
            <ul className="mt-6 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-(--text-mid) transition-colors hover:text-(--text-hi)">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-site hairline-t relative flex flex-wrap items-center justify-between gap-4 py-6">
        <p className="mono-data flex items-center gap-2.5 text-[13px] text-(--text-low)">
          <span className="live-dot" />
          SYD 09:41 · systems running
        </p>
        <p className="mono-label !normal-case">© 2026 Geni Clique. All systems operational.</p>
      </div>
      <p
        aria-hidden="true"
        className="wm-gradient relative select-none whitespace-nowrap text-center font-medium leading-[0.75] tracking-tight"
        style={{ fontSize: "clamp(4rem, 13.5vw, 13rem)", transform: "translateY(18%)" }}
      >
        GENI CLIQUE
      </p>
    </footer>
  );
}
