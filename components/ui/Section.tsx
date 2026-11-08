import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  layout?: "split" | "stacked";
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  layout = "split",
  className = "",
  children,
}: Props) {
  const stacked = layout === "stacked";
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-16 border-t border-line/60 py-20 md:py-28 ${className}`}
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
            {eyebrow && (
              <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase mb-2 block">
                {eyebrow}
              </span>
            )}
            <h2
              id={`${id}-title`}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fg leading-[1.12]"
            >
              {title}
            </h2>
            {intro ? (
              <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
                {intro}
              </p>
            ) : null}
          </Reveal>
        </div>
        <div className={stacked ? undefined : "lg:col-span-8"}>{children}</div>
      </div>
    </section>
  );
}
