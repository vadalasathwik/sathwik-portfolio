"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { FiCheck, FiChevronDown, FiExternalLink, FiGithub } from "react-icons/fi";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { Tag } from "@/components/ui/Tag";
import type { CaseStudySection, Project } from "@/lib/data";
import { ProjectVisual } from "./previews";

function CaseStudyBlock({ section }: { section: CaseStudySection }) {
  return (
    <div className="rounded-xl border border-line bg-surface/80 p-5 shadow-sm">
      <h4 className="font-display text-base font-semibold text-fg">{section.title}</h4>
      {section.body ? (
        <p className="mt-2 text-sm leading-relaxed text-muted">{section.body}</p>
      ) : null}
      {section.flow ? (
        <div className="mt-3">
          <FlowDiagram steps={section.flow} label={section.title} size="sm" />
        </div>
      ) : null}
      {section.items ? (
        <ul className="mt-3 flex flex-wrap gap-2">
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

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const reduce = useReducedMotion();
  const split = project.size === "xl";
  const compact = project.size === "sm";

  return (
    <article
      aria-labelledby={`${project.slug}-name`}
      className="group overflow-hidden rounded-2xl border border-line/80 bg-surface/60 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
    >
      <div className={split ? "grid lg:grid-cols-12" : undefined}>
        <div className={split ? "lg:col-span-7" : undefined}>
          <ProjectVisual project={project} />
        </div>

        <div className={`p-6 sm:p-8 ${split ? "lg:col-span-5" : ""}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {project.category}
          </div>
          <h3
            id={`${project.slug}-name`}
            className={`mt-3 font-display font-bold tracking-tight text-fg ${
              compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl md:text-4xl"
            }`}
          >
            {project.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {project.description}
          </p>

          {project.features.length > 0 && (
            <ul
              className={`mt-6 grid gap-x-6 gap-y-2 text-sm text-fg/90 ${
                compact ? "" : "sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
              }`}
            >
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs sm:text-sm">
                  <FiCheck aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-1.5 sm:gap-2">
            {project.stack.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs sm:text-sm font-semibold text-ink transition-all duration-200 hover:bg-accent/90 hover:shadow-md hover:shadow-accent/20"
            >
              {open ? "Collapse Architecture" : "Case Study & Architecture"}
              <FiChevronDown
                aria-hidden
                className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-raised/80 px-4 py-2.5 text-xs sm:text-sm font-medium text-fg transition-colors hover:border-accent/40 hover:bg-raised hover:text-accent"
              >
                <FiGithub aria-hidden className="h-4 w-4" />
                GitHub Code
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-raised/80 px-4 py-2.5 text-xs sm:text-sm font-medium text-fg transition-colors hover:border-accent/40 hover:bg-raised hover:text-accent"
              >
                <FiExternalLink aria-hidden className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-label={`${project.name} case study`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 border-t border-line/60 bg-ink/40 p-6 md:grid-cols-2 md:p-8">
              {project.caseStudy.map((s) => (
                <div key={s.title} className={s.flow ? "md:col-span-2" : undefined}>
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
