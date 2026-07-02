import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import GlowField from "@/components/GlowField";
import ChapterObserver from "@/components/ChapterObserver";
import PageFooter from "@/components/PageFooter";

export const metadata: Metadata = {
  title: "Let's find your first 20 hours. — Contact",
  description:
    "Book a 30-minute strategy call with Geni Clique. We map where AI pays for itself in your business — no deck, no obligation, no jargon.",
  alternates: { canonical: "/contact" },
};

const NEXT_STEPS = [
  { n: "01", line: "You write two sentences about your business. That's enough." },
  { n: "02", line: "We reply within one business day with three time slots." },
  { n: "03", line: "Thirty minutes later you have an automation map — keep it either way." },
];

export default function ContactPage() {
  return (
    <>
      <ChapterObserver />
      <Nav />
      <main id="main">
        <section data-bg="#050505" data-chapter="dark" className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-16">
          <GlowField
            blobs={[
              { color: "#4d7cff", top: "0%", right: "-8%", size: 620 },
              { color: "#8b5cf6", bottom: "-20%", left: "-6%", size: 580, delay: "-8s" },
            ]}
          />
          <div className="container-site relative py-24">
            <Reveal>
              <p className="mono-label">Contact</p>
              <h1 className="type-display-xl mt-8 max-w-4xl text-(--text-hi)">
                Let&rsquo;s find your first 20 hours.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-(--text-mid)">
                A 30-minute call. We map where AI pays for itself in your business — no deck, no obligation, no
                jargon. If we&rsquo;re not the right fit, we&rsquo;ll say so and point you somewhere better.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a href="mailto:hello@geniclique.com" className="pill-primary magnetic !px-9 !py-4 text-base">
                  hello@geniclique.com
                </a>
                <p className="mono-label">replies within one business day</p>
              </div>
            </Reveal>
            <div className="mt-20 max-w-xl">
              <Reveal>
                <p className="mono-label">What happens next</p>
              </Reveal>
              <ol className="mt-6">
                {NEXT_STEPS.map((s, i) => (
                  <li key={s.n} className={i > 0 ? "hairline-t" : ""}>
                    <Reveal delay={i * 60}>
                      <div className="flex gap-6 py-5">
                        <span className="mono-label shrink-0">{s.n}</span>
                        <p className="text-(--text-mid)">{s.line}</p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
            <p className="mono-data mt-16 flex items-center gap-2.5 text-[13px] text-(--text-low)" aria-hidden="true">
              <span className="live-dot" />
              SYD · systems running · humans replying
            </p>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
