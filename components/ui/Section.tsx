import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  title: string;
  intro?: string;
  layout?: "split" | "stacked";
  children: ReactNode;
};

export function Section({ id, title, intro, layout = "split", children }: Props) {
  const stacked = layout === "stacked";
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-16 border-t border-line py-20 md:py-28"
    >
      <div
        className={
          stacked ? "container-page" : "container-page grid gap-10 lg:grid-cols-12 lg:gap-16"
        }
      >
        <div
          className={
            stacked ? "mb-12 max-w-3xl" : "lg:sticky lg:top-28 lg:col-span-4 lg:self-start"
          }
        >
          <Reveal>
            <h2
              id={`${id}-title`}
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl"
            >
              {title}
            </h2>
            {intro ? (
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{intro}</p>
            ) : null}
          </Reveal>
        </div>
        <div className={stacked ? undefined : "lg:col-span-8"}>{children}</div>
      </div>
    </section>
  );
}
