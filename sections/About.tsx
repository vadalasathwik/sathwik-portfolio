import { FiCpu, FiDatabase, FiLayers, FiZap, FiCheckCircle } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { aboutCards, aboutStats } from "@/lib/data";

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
      eyebrow="01 // ARCHITECTURAL FOCUS"
      title="Engineering Focus & Technical Depth"
      intro="I engineer AI-powered full-stack applications that integrate modern web interfaces, robust backend microservices, structured data pipelines, and practical LLM capabilities."
      layout="stacked"
    >
      <div className="space-y-8">
        {/* 4 Core Pillars Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card, i) => {
            const Icon = iconMap[card.iconName as keyof typeof iconMap] || FiCpu;
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <article className="group relative h-full rounded-2xl border border-line/70 bg-surface/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:bg-surface/80 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-muted/60">0{i + 1}</span>
                  </div>

                  <h3 className="mt-4 font-mono text-xs font-bold text-fg tracking-wider uppercase">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {card.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Verified Profile Credentials Strip */}
        <Reveal delay={0.25}>
          <div className="rounded-2xl border border-line/70 bg-surface/40 p-5 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-line/40">
              {aboutStats.map((stat, idx) => (
                <div key={stat.label} className={idx > 0 ? "pt-3 sm:pt-0 sm:pl-6" : ""}>
                  <div className="flex items-center gap-1.5 text-accent/80 mb-1">
                    <FiCheckCircle className="h-3.5 w-3.5" />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
                      {stat.label}
                    </span>
                  </div>
                  <p className="font-display text-sm font-semibold text-fg">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
