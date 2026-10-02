import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { projects } from "@/lib/data";

export function Projects() {
  const [spend, career, ...rest] = projects;
  return (
    <Section
      id="projects"
      layout="stacked"
      title="Featured projects"
      intro="Four products across finance, careers, recruitment, and trading. Open a case study to see how each one works."
    >
      <div className="space-y-8">
        <Reveal>
          <ProjectCard project={spend} />
        </Reveal>
        <Reveal>
          <ProjectCard project={career} />
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {rest.map((p) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
