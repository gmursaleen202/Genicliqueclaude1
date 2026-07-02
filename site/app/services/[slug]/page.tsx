import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/lib/services";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import GlowField from "@/components/GlowField";
import ChapterObserver from "@/components/ChapterObserver";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.headline} — ${service.name}`,
    description: service.definition,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        description: service.definition,
        provider: { "@type": "Organization", name: "Geni Clique" },
        serviceType: service.name,
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://geniclique.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://geniclique.com/services" },
          { "@type": "ListItem", position: 3, name: service.name },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChapterObserver />
      <Nav />
      <main id="main">
        <section data-bg="#050505" data-chapter="dark" className="flex min-h-[80svh] flex-col justify-center pt-16">
          <div className="container-site py-20">
            <Reveal>
              <p className="mono-label">
                <Link href="/services" className="transition-colors hover:text-(--text-mid)">
                  Systems
                </Link>{" "}
                / {service.number} — {service.name}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="type-display-xl mt-8 max-w-5xl text-(--text-hi)">{service.headline}</h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-(--text-mid)">{service.definition}</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#cta" className="pill-primary">
                  Book a strategy call
                </a>
                <Link href="/" className="pill-secondary">
                  Back to the studio
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section data-bg="#0a0a0b" data-chapter="dark" className="section hairline-t">
          <div className="container-site grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="mono-label">What it replaces</p>
              </Reveal>
            </div>
            <ul className="lg:col-span-8">
              {service.replaces.map((r, i) => (
                <li key={r} className={i > 0 ? "hairline-t" : ""}>
                  <Reveal delay={i * 50}>
                    <p className="struck py-5 text-xl">{r}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section data-bg="#121214" data-chapter="dark" className="section hairline-t">
          <div className="container-site">
            <Reveal>
              <p className="mono-label">What we build</p>
              <h2 className="type-display-l mt-6 max-w-3xl text-(--text-hi)">Inside the system.</h2>
            </Reveal>
            <ul className="mt-16 grid gap-x-12 sm:grid-cols-2">
              {service.builds.map((b, i) => (
                <li key={b.title} className="hairline-t">
                  <Reveal delay={i * 40}>
                    <div className="py-6">
                      <h3 className="text-xl font-medium text-(--text-hi)">{b.title}</h3>
                      <p className="mt-1 text-(--text-mid)">{b.line}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section data-bg="#fafaf8" data-chapter="paper" className="section">
          <div className="container-site grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <p className="mono-label">How it lands</p>
                  <h2 className="type-display-l mt-6 text-(--text-hi)">Weeks, not quarters.</h2>
                </Reveal>
              </div>
            </div>
            <ol className="lg:col-span-8">
              {service.steps.map((s, i) => (
                <li key={s.name} className={i > 0 ? "hairline-t" : ""}>
                  <Reveal delay={i * 60}>
                    <div className="grid gap-2 py-10 sm:grid-cols-12 sm:gap-6">
                      <p className="mono-label sm:col-span-2">{String(i + 1).padStart(2, "0")}</p>
                      <h3 className="type-display-m text-(--text-hi) sm:col-span-4">{s.name}</h3>
                      <p className="max-w-md text-lg leading-relaxed text-(--text-mid) sm:col-span-6">{s.body}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section data-bg="#0a0a0b" data-chapter="dark" className="section">
          <div className="container-site grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="mono-label">Straight answers</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              {service.faqs.map((f, i) => (
                <details key={f.q} className={`group py-6 ${i > 0 ? "hairline-t" : ""}`}>
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 text-xl font-medium text-(--text-hi) [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span aria-hidden="true" className="text-(--text-low) transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="faq-a mt-4 max-w-xl leading-relaxed text-(--text-mid)">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" data-bg="#050505" data-chapter="dark" className="section relative overflow-hidden">
          <GlowField
            blobs={[
              { color: "#4d7cff", top: "-20%", left: "10%", size: 560 },
              { color: "#8b5cf6", bottom: "-30%", right: "5%", size: 600, delay: "-7s" },
            ]}
          />
          <div className="container-site relative text-center">
            <Reveal>
              <h2 className="type-display-l mx-auto max-w-3xl text-(--text-hi)">
                Let&rsquo;s map this system onto your business.
              </h2>
              <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-(--text-mid)">
                A 30-minute call. We find where{" "}
                {service.name
                  .replace("Vibe Coding — ", "")
                  .toLowerCase()
                  .replace(/\bai\b/g, "AI")
                  .replace(/\bseo\b/g, "SEO")
                  .replace(/\bgeo\b/g, "GEO")}{" "}
                pays for itself in your operation — no deck, no obligation.
              </p>
              <div className="mt-12">
                <a href="mailto:hello@geniclique.com" className="pill-primary magnetic !px-9 !py-4 text-base">
                  Book a strategy call
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="hairline-t">
        <div className="container-site flex flex-wrap items-center justify-between gap-4 py-8">
          <Link href="/" className="text-sm font-medium tracking-[0.14em] text-(--text-hi)">
            GENI CLIQUE
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="mono-label transition-colors hover:text-(--text-mid)">
                {s.name}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
