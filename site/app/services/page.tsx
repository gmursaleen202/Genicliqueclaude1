import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ChapterObserver from "@/components/ChapterObserver";

export const metadata: Metadata = {
  title: "Seven systems. One outcome: hours back. — Services",
  description:
    "AI agents, business automation, n8n workflows, custom software and apps, AI web development, and modern SEO — the seven systems Geni Clique builds.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <ChapterObserver />
      <Nav />
      <main id="main">
        <section data-bg="#050505" data-chapter="dark" className="pt-40 pb-24">
          <div className="container-site">
            <Reveal>
              <p className="mono-label">What we build</p>
              <h1 className="type-display-xl mt-8 max-w-4xl text-(--text-hi)">
                Seven systems. One outcome: hours back.
              </h1>
            </Reveal>
          </div>
        </section>
        <section data-bg="#0a0a0b" data-chapter="dark" className="pb-40">
          <div className="container-site">
            <ul>
              {SERVICES.map((s, i) => (
                <li key={s.slug} className={i > 0 ? "hairline-t" : ""}>
                  <Reveal delay={i * 40}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex flex-wrap items-baseline gap-x-6 gap-y-1 py-8 transition-colors hover:bg-ink-2 sm:flex-nowrap"
                    >
                      <span className="mono-label w-8 shrink-0">{s.number}</span>
                      <span className="type-display-m text-(--text-hi) transition-transform duration-200 group-hover:translate-x-2">
                        {s.name}
                      </span>
                      <span className="ml-auto max-w-72 text-right text-sm leading-snug text-(--text-mid)">
                        {s.headline}
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <footer className="hairline-t">
        <div className="container-site flex items-center justify-between py-8">
          <Link href="/" className="text-sm font-medium tracking-[0.14em] text-(--text-hi)">
            GENI CLIQUE
          </Link>
          <a href="mailto:hello@geniclique.com" className="mono-label transition-colors hover:text-(--text-mid)">
            hello@geniclique.com
          </a>
        </div>
      </footer>
    </>
  );
}
