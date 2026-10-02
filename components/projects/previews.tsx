import Image from "next/image";
import { FiLock } from "react-icons/fi";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { careerFlow, type Project } from "@/lib/data";

const frame = "relative flex h-full min-h-[18rem] items-center justify-center bg-raised dot-grid p-6 sm:p-8";

function SpendTrackPreview() {
  const budgets = ["72%", "46%", "88%"];
  return (
    <div className={`${frame} gap-10 sm:min-h-[26rem]`}>
      <div className="w-52 rounded-[1.6rem] border border-line bg-ink p-3 shadow-2xl shadow-black/40">
        <div className="h-2 w-16 rounded bg-fg/25" />
        <div className="mt-5 space-y-3">
          {budgets.map((w, i) => (
            <div key={i}>
              <div className="mb-1.5 h-1.5 w-14 rounded bg-fg/15" />
              <div className="h-1.5 rounded bg-line">
                <div className="h-full rounded bg-accent" style={{ width: w }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 space-y-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-full bg-fg/10" />
              <div className="flex-1 space-y-1.5">
                <div className="h-1.5 w-4/5 rounded bg-fg/20" />
                <div className="h-1.5 w-1/2 rounded bg-fg/10" />
              </div>
              <div className="h-1.5 w-8 rounded bg-fg/20" />
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 rounded-md border border-line px-3 py-2 text-xs text-muted">
          <FiLock aria-hidden className="h-3.5 w-3.5" /> Vault
        </div>
        <div className="mt-4 flex justify-between px-2 pb-1">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-accent" : "bg-line"}`} />
          ))}
        </div>
      </div>
      <ul className="hidden space-y-5 text-sm text-muted sm:block">
        {["Receipt processing", "Budgets", "Upcoming commitments", "Insights"].map((t) => (
          <li key={t} className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-line" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CareerPreview() {
  return (
    <div className={`${frame} items-start sm:items-center`}>
      <div className="w-full max-w-4xl">
        <p className="mb-4 text-sm text-muted">Product workflow</p>
        <FlowDiagram
          steps={careerFlow}
          label="AI Career Copilot workflow"
          highlight={["ATS Score", "Skills Found", "Missing Skills", "Improvement Suggestions"]}
        />
      </div>
    </div>
  );
}

function HirePreview() {
  return (
    <div className={`${frame} flex-col items-stretch gap-3`}>
      <div className="flex gap-2">
        {["Jobs", "Candidates"].map((t, i) => (
          <span
            key={t}
            className={`rounded-full border px-3 py-1 text-xs ${
              i === 1 ? "border-accent/60 text-fg" : "border-line text-muted"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      {["64%", "48%", "81%"].map((w, i) => (
        <div key={i} className="flex items-center gap-3 rounded-md border border-line bg-ink/70 p-3">
          <div className="h-8 w-8 rounded-full bg-fg/10" />
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 w-2/5 rounded bg-fg/25" />
            <div className="h-1.5 w-3/5 rounded bg-fg/10" />
          </div>
          <div className="h-1.5 w-16 rounded bg-line">
            <div className="h-full rounded bg-accent" style={{ width: w }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function TradePreview() {
  return (
    <div className={`${frame} flex-col items-stretch gap-4`}>
      <svg viewBox="0 0 320 110" className="w-full" aria-hidden>
        <defs>
          <linearGradient id="trade-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#7FD1BE" stopOpacity="0.25" />
            <stop offset="1" stopColor="#7FD1BE" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 80 L30 70 L60 76 L90 52 L120 58 L150 38 L180 46 L210 28 L240 36 L270 18 L320 24 L320 110 L0 110 Z"
          fill="url(#trade-fill)"
        />
        <path
          d="M0 80 L30 70 L60 76 L90 52 L120 58 L150 38 L180 46 L210 28 L240 36 L270 18 L320 24"
          fill="none"
          stroke="#7FD1BE"
          strokeWidth="1.5"
        />
      </svg>
      <div className="space-y-2.5">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center justify-between rounded-md border border-line bg-ink/70 px-3 py-2.5">
            <div className="h-1.5 w-20 rounded bg-fg/25" />
            <div className="h-1.5 w-10 rounded bg-fg/15" />
          </div>
        ))}
      </div>
    </div>
  );
}

const previews = {
  spendtrack: SpendTrackPreview,
  career: CareerPreview,
  hire: HirePreview,
  trade: TradePreview,
} as const;

export function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={1600}
        height={1000}
        className="h-full w-full object-cover"
      />
    );
  }
  const Preview = previews[project.preview];
  return (
    <figure
      className="relative h-full"
      role="img"
      aria-label={`Illustrative preview of ${project.name}. Not a real screenshot.`}
    >
      <Preview />
      <figcaption className="absolute bottom-3 left-4 text-xs text-muted/80">
        Illustrative preview, not a screenshot
      </figcaption>
    </figure>
  );
}
