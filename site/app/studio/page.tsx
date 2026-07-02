import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Why from "@/components/Why";
import StackGrid from "@/components/StackGrid";
import ChapterObserver from "@/components/ChapterObserver";
import PageFooter from "@/components/PageFooter";

export const metadata: Metadata = {
  title: "An AI systems studio. — Studio",
  description:
    "Geni Clique is an AI systems studio: senior builders who design, build, and run the AI agents, automations, and software that do a business's repetitive work.",
  alternates: { canonical: "/studio" },
};

export default function StudioPage() {
  return (
    <>
      <ChapterObserver />
      <Nav />
      <main id="main">
        <section data-bg="#050505" data-chapter="dark" className="pt-40 pb-24">
          <div className="container-site">
            <Reveal>
              <p className="mono-label">Studio</p>
              <h1 className="type-display-xl mt-8 max-w-4xl text-(--text-hi)">
                An AI systems studio.
              </h1>
              <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-(--text-mid)">
                <p>
                  Geni Clique exists because most teams spend half their week on work that doesn&rsquo;t need a
                  human. We design, build, and run the systems that take it — AI agents, automation, and custom
                  software, delivered by senior builders in weeks, not quarters.
                </p>
                <p>
                  We&rsquo;re not an agency that talks about AI. We&rsquo;re a studio that ships it, owns nothing of
                  yours, and measures itself in hours returned.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
        <Why />
        <StackGrid />
        <section data-bg="#050505" data-chapter="dark" className="section hairline-t">
          <div className="container-site text-center">
            <Reveal>
              <h2 className="type-display-m mx-auto max-w-2xl text-(--text-hi)">
                The best systems are the ones you stop noticing.
              </h2>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="pill-primary">
                  Work with us
                </Link>
                <Link href="/#process" className="pill-secondary">
                  See how we build
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
