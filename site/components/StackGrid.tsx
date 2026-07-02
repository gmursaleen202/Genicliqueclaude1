import Reveal from "./Reveal";
import GlowField from "./GlowField";

const STACK = [
  "OpenAI", "Anthropic", "Google", "Llama", "n8n", "LangGraph", "Supabase",
  "Postgres", "Next.js", "React Native", "Twilio", "ElevenLabs", "pgvector", "Stripe",
];

export default function StackGrid() {
  return (
    <section data-bg="#0a0a0b" data-chapter="dark" className="section relative overflow-hidden">
      <GlowField
        blobs={[
          { color: "#4d7cff", top: "-10%", right: "-8%", size: 620 },
          { color: "#8b5cf6", bottom: "-18%", left: "-6%", size: 560, delay: "-7s" },
        ]}
      />
      <div className="container-site relative">
        <Reveal>
          <p className="mono-label">Technology</p>
          <h2 className="type-display-l mt-6 text-(--text-hi)">Built on the frontier.</h2>
        </Reveal>
        <ul data-fx="cells" className="mt-16 grid grid-cols-2 border-l border-t border-(--hairline) sm:grid-cols-4 lg:grid-cols-7">
          {STACK.map((t) => (
            <li
              key={t}
              className="mono-data border-b border-r border-(--hairline) px-4 py-6 text-center text-sm text-(--text-mid) transition-[background,color,box-shadow] duration-200 hover:bg-paper-0 hover:text-ink-1 hover:shadow-[0_0_36px_rgba(77,124,255,0.28)]"
            >
              {t}
            </li>
          ))}
        </ul>
        <Reveal>
          <p className="mt-8 max-w-lg text-(--text-mid)">
            Model-agnostic by design — we choose what&rsquo;s best for the job, and swap it when something better
            ships.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
