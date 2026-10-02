"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { skillCategories } from "@/lib/skills";

export function Skills() {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = skillCategories[index];

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const last = skillCategories.length - 1;
    let next = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = i === last ? 0 : i + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setIndex(next);
    tabs.current[next]?.focus();
  };

  return (
    <Section id="skills" title="Tech stack">
      <div className="grid gap-8 md:grid-cols-[13rem_1fr]">
        <div
          role="tablist"
          aria-label="Skill categories"
          className="-mx-5 flex gap-1 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-col md:overflow-visible md:px-0 md:pb-0"
        >
          {skillCategories.map((c, i) => {
            const selected = i === index;
            return (
              <button
                key={c.name}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`tab-${i}`}
                aria-selected={selected}
                aria-controls="skills-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setIndex(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`shrink-0 rounded-md px-4 py-2.5 text-left text-sm transition-colors ${
                  selected ? "bg-raised text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>

        <div id="skills-panel" role="tabpanel" aria-labelledby={`tab-${index}`} className="min-h-[18rem]">
          <AnimatePresence mode="wait">
            <motion.ul
              key={current.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2"
            >
              {current.skills.map(({ name, icon: Icon }) => (
                <li key={name} className="flex items-center gap-4 bg-surface p-5">
                  <Icon aria-hidden className="h-6 w-6 shrink-0 text-accent" />
                  <span className="font-medium">{name}</span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
