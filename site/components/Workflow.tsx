import Reveal from "./Reveal";
import Counter from "./Counter";

const STEPS = ["Trigger — report due", "Collect — pull the numbers", "Summarise — AI drafts the story", "Format — branded, every time", "Approve — one human click", "Deliver — inboxes, 6:00 am"];

export default function Workflow() {
  return (
    <section data-bg="#0a0a0b" data-chapter="dark" className="section hairline-t">
      <div className="container-site grid gap-16 lg:grid-cols-2">
        <div>
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="mono-label">Workflow automation</p>
              <h2 className="type-display-l mt-6 text-(--text-hi)">14 hours of Mondays, returned.</h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-(--text-mid)">
                A weekly reporting ritual — gather, copy, format, chase, send — rebuilt as a system that runs in four
                minutes, every Monday, before anyone is awake.
              </p>
              <div className="mt-10 flex gap-4">
                <div className="rounded-lg border border-(--hairline) px-6 py-4">
                  <p className="mono-data text-2xl text-(--text-hi)">
                    <Counter value="14 h/wk" />
                  </p>
                  <p className="mono-label mt-1">manual, before</p>
                </div>
                <div className="rounded-lg border border-(--hairline) px-6 py-4">
                  <p className="mono-data text-2xl text-(--text-hi)">
                    <Counter value="4 min/run" />
                  </p>
                  <p className="mono-label mt-1">automated [verify]</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <ol className="relative ml-3 border-l border-(--hairline)">
          {STEPS.map((s, i) => (
            <li key={s} className="relative pb-12 pl-10 last:pb-0">
              <Reveal delay={i * 60}>
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-1.5 h-2.5 w-2.5 rounded-full border border-(--hairline) bg-ink-3"
                />
                <p className="mono-label">step {String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-xl font-medium text-(--text-hi)">{s.split(" — ")[0]}</p>
                <p className="mt-1 text-(--text-mid)">{s.split(" — ")[1]}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
