import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" title="Where I work">
      <div className="max-w-3xl">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <article className="rounded-2xl border border-line/60 bg-surface/40 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-accent/40">
              <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line/50 pb-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-fg">
                    {job.company}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold text-accent">
                    Software Engineer
                  </p>
                </div>
                <span className="font-mono text-xs text-muted/80">{job.location}</span>
              </header>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted">
                {job.summary}
              </p>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted">
                {job.responsibilities.slice(0, 4).map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-line/50 flex flex-wrap gap-1.5">
                {["React", "Next.js", "Python", "FastAPI", "PostgreSQL", "AI / LLM"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

