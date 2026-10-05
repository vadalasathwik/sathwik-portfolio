"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { FiArrowRight, FiCheck, FiChevronDown, FiExternalLink, FiGithub } from "react-icons/fi";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { Tag } from "@/components/ui/Tag";
import type { CaseStudySection, Project } from "@/lib/data";
import { ProjectVisual } from "./previews";

function CaseStudyBlock({ section }: { section: CaseStudySection }) {
  return (
    <div className="rounded-xl border border-line/70 bg-surface/90 p-4 shadow-sm">
      <h4 className="font-mono text-xs font-bold text-accent uppercase tracking-wider">{section.title}</h4>
      {section.body ? (
        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted">{section.body}</p>
      ) : null}
      {section.flow ? (
        <div className="mt-2.5">
          <FlowDiagram steps={section.flow} label={section.title} size="sm" />
        </div>
      ) : null}
      {section.items ? (
        <ul className="mt-2.5 flex flex-wrap gap-1.5">
          {section.items.map((item) => (
            <li key={item}>
              <Tag>{item}</Tag>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const reduce = useReducedMotion();
  const isEven = index % 2 === 0;

  return (
    <article
      aria-labelledby={`${project.slug}-name`}
      className="group/card relative w-full max-w-[1200px] mx-auto rounded-3xl border border-line/80 bg-surface/50 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-accent/60 shadow-xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Visual Column */}
        <div className={`w-full ${isEven ? "lg:order-1 lg:col-span-7" : "lg:order-2 lg:col-span-7"}`}>
          <div className="relative h-64 sm:h-72 lg:h-[26rem] w-full overflow-hidden rounded-2xl border border-line/60 bg-ink/90">
            <ProjectVisual project={project} />

            {/* Floating Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center rounded-full border border-accent/40 bg-ink/80 px-3 py-1 text-xs font-mono font-semibold text-accent backdrop-blur-md">
                {project.category}
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10 font-mono text-xs font-bold text-muted bg-ink/80 px-2.5 py-1 rounded-full border border-line/50 backdrop-blur-md">
              {project.number}
            </div>
          </div>
        </div>

        {/* Content Details Column */}
        <div className={`w-full flex flex-col justify-between space-y-4 ${isEven ? "lg:order-2 lg:col-span-5" : "lg:order-1 lg:col-span-5"}`}>
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
                {project.number} / {project.category}
              </span>
              <span className="text-xs font-mono text-muted">{project.role}</span>
            </div>

            <h3
              id={`${project.slug}-name`}
              className="mt-1.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-fg transition-colors group-hover/card:text-accent"
            >
              {project.name}
            </h3>

            <p className="mt-1 font-mono text-xs font-semibold text-accent/90">
              {project.tagline}
            </p>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            {/* Key Features List */}
            <div className="mt-4">
              <ul className="grid gap-1.5 sm:grid-cols-2 text-xs text-fg/90">
                {project.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-1.5">
                    <FiCheck aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    <span className="text-muted text-[11px] leading-tight">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack Chips */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line/70 bg-ink/60 px-2.5 py-1 font-mono text-[11px] font-medium text-fg transition-colors group-hover/card:border-accent/40 group-hover/card:text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons & Case Study Trigger */}
          <div className="pt-4 border-t border-line/40 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-3.5 py-2 text-xs font-semibold text-ink transition-all hover:bg-accent/90"
            >
              <span>{open ? "Close Details" : "View Architecture"}</span>
              <FiChevronDown
                aria-hidden
                className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>

            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-line/80 bg-surface px-3 py-2 text-xs font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <FiGithub aria-hidden className="h-3.5 w-3.5" />
                  Code
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-line/80 bg-surface px-3 py-2 text-xs font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <FiExternalLink aria-hidden className="h-3.5 w-3.5" />
                  Live
                  <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover/card:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Case Study Drawer */}
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-label={`${project.name} case study`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-3 border-t border-line/60 bg-ink/90 p-5 mt-6 rounded-2xl">
              {project.caseStudy.map((s) => (
                <div key={s.title}>
                  <CaseStudyBlock section={s} />
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}

