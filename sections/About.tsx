import { FiCpu, FiDatabase, FiLayers, FiZap } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { aboutCards } from "@/lib/data";

const iconMap = {
  cpu: FiCpu,
  layers: FiLayers,
  zap: FiZap,
  database: FiDatabase,
};

export function About() {
  return (
    <Section
      id="about"
      title="Building products, not just features."
      intro="I build AI-powered full-stack applications that combine modern web interfaces, backend systems, structured data, and practical AI capabilities."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aboutCards.map((card, i) => {
          const Icon = iconMap[card.iconName as keyof typeof iconMap] || FiCpu;
          return (
            <Reveal key={card.title} delay={i * 0.08}>
              <article className="group h-full rounded-2xl border border-line/60 bg-surface/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-surface/70">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent transition-transform group-hover:scale-105">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3.5 font-mono text-xs font-bold text-fg tracking-wider uppercase">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {card.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

