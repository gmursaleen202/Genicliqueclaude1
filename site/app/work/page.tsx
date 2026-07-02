import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Cases from "@/components/Cases";
import ChapterObserver from "@/components/ChapterObserver";
import PageFooter from "@/components/PageFooter";

export const metadata: Metadata = {
  title: "Proof, not promises. — Work",
  description:
    "Field notes from systems in production: the problems they replaced, how they were built, and the hours they return every week.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <ChapterObserver />
      <Nav />
      <main id="main">
        <section data-bg="#050505" data-chapter="dark" className="pt-40 pb-24">
          <div className="container-site">
            <Reveal>
              <p className="mono-label">Work</p>
              <h1 className="type-display-xl mt-8 max-w-4xl text-(--text-hi)">Proof, not promises.</h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-(--text-mid)">
                We measure every engagement in hours returned. These are field notes from systems in production —
                what they replaced, how they were built, and what the ledger says now.
              </p>
            </Reveal>
          </div>
        </section>
        <Cases />
        <section data-bg="#0a0a0b" data-chapter="dark" className="section">
          <div className="container-site text-center">
            <Reveal>
              <p className="mx-auto max-w-md text-lg text-(--text-mid)">
                More case studies are being written as systems ship. Want yours to be next?
              </p>
              <div className="mt-8">
                <a href="mailto:hello@geniclique.com" className="pill-primary">
                  Book a strategy call
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
