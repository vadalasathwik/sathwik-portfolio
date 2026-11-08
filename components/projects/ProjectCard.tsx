"use client";

import { FiCheck } from "react-icons/fi";
import type { Project } from "@/lib/data";
import { ProjectVisual } from "./previews";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article
      id={`project-${project.slug}`}
      aria-labelledby={`${project.slug}-name`}
      className="group/card relative w-full scroll-mt-36 rounded-3xl border border-line/80 bg-surface/50 p-6 sm:p-8 lg:p-9 backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Visual Column */}
        <div className={`w-full ${isEven ? "lg:order-1 lg:col-span-7" : "lg:order-2 lg:col-span-7"}`}>
          <div className="relative h-64 sm:h-72 lg:h-[26rem] w-full overflow-hidden rounded-2xl border border-line/70 bg-ink/90 shadow-inner">
            <ProjectVisual project={project} />

            {/* Floating Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center rounded-full border border-accent/40 bg-ink/90 px-3 py-1 text-xs font-mono font-semibold text-accent backdrop-blur-md shadow-sm">
                {project.category}
              </span>
            </div>

            {/* Project Number */}
            <div className="absolute top-4 right-4 z-10 font-mono text-xs font-bold text-muted bg-ink/90 px-3 py-1 rounded-full border border-line/60 backdrop-blur-md">
              {project.number}
            </div>
          </div>
        </div>

        {/* Content Details Column */}
        <div className={`w-full flex flex-col justify-center space-y-5 ${isEven ? "lg:order-2 lg:col-span-5" : "lg:order-1 lg:col-span-5"}`}>
          <div>
            <div className="flex items-center justify-between gap-2 border-b border-line/40 pb-3">
              <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
                {project.number} &bull; {project.category}
              </span>
              <span className="text-xs font-mono text-muted/80">{project.role}</span>
            </div>

            <h3
              id={`${project.slug}-name`}
              className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-fg transition-colors group-hover/card:text-accent"
            >
              {project.name}
            </h3>

            <p className="mt-1 font-mono text-xs font-semibold text-accent/90">
              {project.tagline}
            </p>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted font-normal">
              {project.description}
            </p>

            {/* Key Features List */}
            <div className="mt-4 pt-3 border-t border-line/30">
              <p className="font-mono text-[10px] font-bold text-muted uppercase tracking-wider mb-2">
                Key Capabilities:
              </p>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-fg/90">
                {project.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <FiCheck aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    <span className="text-muted text-[11px] leading-tight group-hover/card:text-fg/90 transition-colors">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack Chips */}
            <div className="mt-5 pt-3 border-t border-line/30">
              <p className="font-mono text-[10px] font-bold text-muted uppercase tracking-wider mb-2">
                Technologies:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line/70 bg-ink/70 px-2.5 py-1 font-mono text-[11px] font-medium text-fg transition-colors group-hover/card:border-accent/40 group-hover/card:text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
