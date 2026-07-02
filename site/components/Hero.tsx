import Reveal from "./Reveal";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section data-bg="#050505" data-chapter="dark" className="relative flex min-h-svh flex-col justify-between pt-16">
      <div className="container-site grid flex-1 items-center gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mono-label">AI systems studio — est. 2024</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="type-display-xl mt-6 text-(--text-hi)">
              The work
              <br />
              runs itself.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-(--text-mid)">
              We design and build intelligent AI systems — agents, automations, and custom software — that take
              repetitive work off your team and run it around the clock, exactly to spec.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#cta" className="pill-primary">
                Book a strategy call
              </a>
              <a href="#services" className="pill-secondary">
                See what we build ↓
              </a>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
      <div className="container-site flex items-center justify-between pb-8">
        <p className="mono-data flex items-center gap-3 text-[13px] text-(--text-low)" aria-hidden="true">
          <span className="live-dot" />
          <span>09:41:07&nbsp;&nbsp;lead.captured → crm.updated&nbsp;&nbsp;✓</span>
          <span className="cursor-blink" />
        </p>
        <p className="mono-label hidden sm:block">Scroll ↓</p>
      </div>
    </section>
  );
}
