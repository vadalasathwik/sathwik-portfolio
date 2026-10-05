"use client";

import { useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { allMarqueeRows } from "@/lib/skills";

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="stack"
      title="Tools I build with"
    >
      <div className="relative space-y-4 overflow-hidden rounded-2xl border border-line/70 bg-surface/30 p-6 backdrop-blur-md">
        {/* Edge Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 sm:w-28 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 sm:w-28 bg-gradient-to-l from-ink to-transparent" />

        {allMarqueeRows.map((row) => {
          return (
            <div
              key={row.id}
              className="group relative flex overflow-hidden py-1"
            >
              {reduceMotion ? (
                /* Static Grid for Reduced Motion */
                <div className="flex flex-wrap gap-3">
                  {row.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="flex items-center gap-2.5 rounded-xl border border-line/80 bg-surface/90 px-4 py-2 text-xs font-semibold text-fg"
                      >
                        <Icon className="h-4 w-4 text-accent" />
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Animated Marquee Row */
                <div
                  className={`flex w-max gap-4 ${
                    row.reverse ? "animate-marquee-reverse" : "animate-marquee"
                  } group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]`}
                  style={{ "--marquee-speed": row.speed } as React.CSSProperties}
                >
                  {[...row.items, ...row.items, ...row.items, ...row.items, ...row.items].map(
                    (item, i) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={`${item.name}-${i}`}
                          tabIndex={0}
                          className="flex shrink-0 items-center gap-2.5 rounded-xl border border-line/80 bg-surface/90 px-4 py-2.5 text-xs sm:text-sm font-semibold text-fg shadow-sm transition-all duration-200 hover:border-accent/60 hover:bg-raised hover:scale-105 focus:border-accent"
                        >
                          <Icon className="h-4 w-4 text-accent" />
                          <span>{item.name}</span>
                        </div>
                      );
                    }
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
