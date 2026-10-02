import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experience.map((job) => (
          <Reveal key={`${job.company}-${job.role}`}>
            <article className="rounded-md border border-line bg-surface/50 p-6 md:p-8">
              <header>
                <h3 className="font-display text-2xl font-semibold tracking-tight">{job.role}</h3>
                <p className="mt-2 text-muted">
                  {job.company}, {job.location}
                  {job.period ? `, ${job.period}` : ""}
                </p>
              </header>
              <ul className="mt-6 space-y-3">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 leading-relaxed text-muted">
                    <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-accent" />
                    {r}
                  </li>
                ))}
              </ul>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies">
                {job.technologies.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
