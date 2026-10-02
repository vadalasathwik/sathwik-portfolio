import { FiArrowRight } from "react-icons/fi";

type Props = {
  steps: string[];
  label: string;
  highlight?: string[];
  size?: "sm" | "md";
};

/** A wrapping left-to-right flow. Arrows are decorative; order is the list order. */
export function FlowDiagram({ steps, label, highlight = [], size = "md" }: Props) {
  const pad = size === "md" ? "px-4 py-2.5 text-sm" : "px-3 py-2 text-[13px]";
  return (
    <ol aria-label={label} className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => {
        const lit = highlight.includes(step);
        return (
          <li key={step} className="contents">
            <span
              className={`rounded-md border ${pad} ${
                lit
                  ? "border-accent/60 bg-accent/10 text-fg"
                  : "border-line bg-ink/60 text-muted"
              }`}
            >
              {step}
            </span>
            {i < steps.length - 1 ? (
              <FiArrowRight aria-hidden className="h-4 w-4 shrink-0 text-line" />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
