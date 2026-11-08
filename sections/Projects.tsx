"use client";

import { useEffect, useState } from "react";
import { FiLayers } from "react-icons/fi";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export function Projects() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slug = entry.target.id.replace("project-", "");
            setActiveSlug(slug);
          }
        });
      },
      { rootMargin: "-20% 0px -40% 0px" }
    );

    projects.forEach((p) => {
      const el = document.getElementById(`project-${p.slug}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative scroll-mt-16 border-t border-line/60">
      {/* Prominent Section Introduction */}
      <div className="container-page pt-20 pb-8 md:pt-28 md:pb-12">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent tracking-wide uppercase font-mono mb-4">
              <FiLayers className="h-3.5 w-3.5" />
              <span>{"03 // FEATURED WORK"}</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fg leading-[1.08]">
              Projects I Have Built
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              A curated showcase of production-grade AI platforms, intelligent copilots, and full-stack software systems I have designed, engineered, and deployed.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Sticky Header Bar: Keeps "Projects I Have Built" Heading Visible & Prominent When Scrolling */}
      <div className="sticky top-14 sm:top-16 z-30 border-y border-line/60 bg-ink/90 backdrop-blur-xl shadow-lg shadow-black/20 transition-all">
        <div className="container-page flex flex-col sm:flex-row sm:items-center sm:justify-between py-3.5 gap-3">
          <div className="flex items-center gap-2.5">
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-fg">
              Projects I Have Built
            </span>
            <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-accent">
              {projects.length} Works
            </span>
          </div>

          {/* Interactive Project Jump Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {projects.map((p, idx) => {
              const isActive = activeSlug === p.slug;
              return (
                <a
                  key={p.slug}
                  href={`#project-${p.slug}`}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs transition-all duration-200 ${
                    isActive
                      ? "border border-accent/60 bg-accent/20 text-accent font-semibold shadow-sm scale-105"
                      : "border border-line/60 bg-surface/70 text-muted hover:border-accent/40 hover:text-fg"
                  }`}
                  aria-label={`Jump to ${p.name}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      isActive ? "bg-accent" : "bg-muted/50"
                    }`}
                  />
                  <span>
                    0{idx + 1} {p.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Clean Structured Card Stack */}
      <div className="container-page py-12 md:py-16">
        <div className="space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
