import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { layers } from "@/lib/data";

export function About() {
  return (
    <Section id="about" title="Building products, not just features.">
      <Reveal className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
        <p>
          I&apos;m Sathwik Vadala, a Full-Stack AI Developer based in Hyderabad, India. I build
          AI-powered products that combine modern web applications with intelligent automation.
        </p>
        <p>
          My primary stack includes Python, FastAPI, React, Next.js, TypeScript, PostgreSQL, and
          AI/LLM technologies.
        </p>
        <p>
          I enjoy taking ideas from product concept and architecture through development, AI
          integration, database design, and deployment.
        </p>
        <p>
          I&apos;m particularly interested in AI products, intelligent automation, developer tools,
          and AI-powered SaaS applications.
        </p>
      </Reveal>

      <Reveal className="mt-14" delay={0.1}>
        <p className="mb-4 text-sm text-muted">The layers I work across</p>
        <dl className="border-y border-line">
          {layers.map((l) => (
            <div
              key={l.name}
              className="grid gap-2 border-b border-line py-4 last:border-b-0 sm:grid-cols-[9rem_1fr] sm:items-center"
            >
              <dt className="font-display text-lg font-medium">{l.name}</dt>
              <dd className="flex flex-wrap gap-x-5 gap-y-1 text-muted">
                {l.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
