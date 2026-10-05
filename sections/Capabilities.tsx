"use client";

import { FiCpu, FiDatabase, FiLayers, FiZap } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { capabilityCards } from "@/lib/data";

const iconMap = {
  cpu: FiCpu,
  layers: FiLayers,
  zap: FiZap,
  database: FiDatabase,
};

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      title="What I build"
      intro="Visual map of core product capability domains and engineering implementations."
    >
      <div className="group/grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {capabilityCards.map((card, i) => {
          const Icon = iconMap[card.iconName as keyof typeof iconMap] || FiCpu;
          return (
            <Reveal key={card.id} delay={i * 0.08}>
              <div
                className="group/card relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line/80 bg-surface/60 p-6 backdrop-blur-md transition-all duration-300 hover:z-10 hover:scale-[1.03] hover:border-accent hover:bg-surface/90 hover:shadow-2xl hover:shadow-accent/10 group-hover/grid:opacity-60 hover:!opacity-100"
              >
                {/* Subtle Background Glow Graphic */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 opacity-0 group-hover/card:opacity-100"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-muted/80">0{i + 1}</span>
                  </div>

                  <h3 className="mt-4 font-mono text-xs font-bold text-fg tracking-wider uppercase">
                    {card.title}
                  </h3>
                  <p className="mt-1 font-display text-sm font-semibold text-accent leading-snug">
                    {card.subtitle}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {card.description}
                  </p>
                </div>

                {/* Related Technologies Surface on Hover */}
                <div className="mt-6 pt-4 border-t border-line/50">
                  <p className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2">
                    Core Technologies:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {card.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-line/70 bg-ink/60 px-2 py-0.5 font-mono text-[10px] text-fg transition-colors group-hover/card:border-accent/40 group-hover/card:text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
