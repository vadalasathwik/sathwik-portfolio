import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { aiAreas, aiWorkflow } from "@/lib/data";

export function AIEngineering() {
  return (
    <Section
      id="ai-engineering"
      layout="stacked"
      title="More than calling an API."
      intro="I focus on integrating AI into real product workflows rather than treating an LLM as a standalone chatbot."
    >
      <Reveal>
        <ol
          aria-label="AI product workflow"
          className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-7"
        >
          {aiWorkflow.map((step) => {
            const ai = step === "AI / LLM Layer";
            return (
              <li
                key={step}
                className={`flex min-h-[5.5rem] items-end p-4 font-display text-lg font-medium leading-tight ${
                  ai ? "bg-accent text-ink" : "bg-surface"
                }`}
              >
                {step}
              </li>
            );
          })}
        </ol>
      </Reveal>

      <Reveal className="mt-14" delay={0.1}>
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {aiAreas.map((a) => (
            <li key={a.title} className="border-t border-line pt-4">
              <h3 className="font-display text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{a.text}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
