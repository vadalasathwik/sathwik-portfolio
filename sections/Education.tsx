import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Education() {
  return (
    <Section id="education" title="Education">
      <Reveal>
        <div className="border-y border-line py-6">
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            Master of Computer Applications (MCA)
          </h3>
          <p className="mt-2 text-muted">Completed December 2023</p>
        </div>
      </Reveal>
    </Section>
  );
}
