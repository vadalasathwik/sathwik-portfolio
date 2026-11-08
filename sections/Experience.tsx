import { FiBriefcase, FiCheckCircle, FiMapPin, FiCalendar } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 // PROFESSIONAL EXPERIENCE"
      title="Where I Work & Engineering Impact"
      intro="Professional engineering background designing and delivering production-grade AI platforms, resilient microservices, and modern web applications."
      layout="stacked"
    >
      <div className="space-y-8 max-w-4xl mx-auto">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <article className="group relative overflow-hidden rounded-3xl border border-line/80 bg-surface/50 p-6 sm:p-10 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5">
              {/* Subtle Ambient Glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/5 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Header: Company, Role & Live Status */}
              <div className="flex flex-col gap-4 border-b border-line/50 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                      <FiBriefcase className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-fg">
                      {job.company}
                    </h3>
                  </div>

                  <p className="mt-2 font-mono text-sm sm:text-base font-semibold text-accent">
                    {job.role}
                  </p>
                </div>

                {/* Status & Location Badges */}
                <div className="flex flex-wrap items-center gap-2.5 sm:flex-col sm:items-end">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Current Role
                  </span>

                  <div className="flex items-center gap-3 text-xs font-mono text-muted">
                    <span className="inline-flex items-center gap-1">
                      <FiMapPin className="h-3.5 w-3.5 text-accent/80" />
                      {job.location}
                    </span>
                    <span className="text-line">·</span>
                    <span className="inline-flex items-center gap-1">
                      <FiCalendar className="h-3.5 w-3.5 text-accent/80" />
                      Full-Time
                    </span>
                  </div>
                </div>
              </div>

              {/* Summary Highlight Callout */}
              <div className="mt-6 rounded-2xl border border-line/60 bg-ink/60 p-4 sm:p-5">
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-fg/90">
                  {job.summary}
                </p>
              </div>

              {/* Responsibilities & Architectural Impact */}
              <div className="mt-7">
                <h4 className="font-mono text-xs font-bold text-accent uppercase tracking-wider mb-4">
                  Key Responsibilities & Architectural Contributions
                </h4>
                <ul className="grid gap-3 text-xs sm:text-sm text-muted">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-3 leading-relaxed">
                      <FiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-muted group-hover:text-fg/90 transition-colors">
                        {r}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Technologies */}
              <div className="mt-8 pt-6 border-t border-line/50">
                <h4 className="font-mono text-xs font-bold text-muted uppercase tracking-wider mb-3">
                  Technologies & Core Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-line/70 bg-ink/70 px-3 py-1 font-mono text-xs font-medium text-fg shadow-sm transition-all duration-200 hover:border-accent/50 hover:bg-raised hover:text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
