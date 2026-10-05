"use client";

import Image from "next/image";
import { FiArrowRight, FiCheck, FiCpu, FiFileText, FiLock, FiPieChart, FiTrendingUp, FiUserCheck, FiZap } from "react-icons/fi";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { careerFlow, type Project } from "@/lib/data";

const frame = "relative flex h-full min-h-[22rem] sm:min-h-[26rem] w-full flex-col justify-center rounded-2xl border border-line/80 bg-ink/90 dot-grid p-5 sm:p-7 overflow-hidden";

function SpendTrackPreview() {
  return (
    <div className={frame}>
      {/* SpendTrack Conceptual Product Panels */}
      <div className="w-full space-y-3">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-line/60 pb-2">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-accent/20 text-accent font-bold text-xs">
              $
            </span>
            <span className="font-display text-xs font-bold text-fg">SpendTrack AI Interface</span>
          </div>
          <span className="flex items-center gap-1 rounded bg-surface px-2 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
            <FiLock className="h-3 w-3" /> Encrypted Vault
          </span>
        </div>

        {/* 6 Key Modules Grid */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="rounded-lg bg-surface/80 p-2 border border-line/50">
            <p className="text-[10px] font-mono text-muted">Monthly Budget</p>
            <p className="font-bold text-fg mt-0.5 text-xs">Budget Tracking</p>
          </div>

          <div className="rounded-lg bg-surface/80 p-2 border border-line/50">
            <p className="text-[10px] font-mono text-muted">Transactions</p>
            <p className="font-bold text-fg mt-0.5 text-xs">Auto-Categorized</p>
          </div>

          <div className="rounded-lg bg-surface/80 p-2 border border-line/50">
            <p className="text-[10px] font-mono text-muted">Planner</p>
            <p className="font-bold text-amber-400 mt-0.5 text-xs">Commitment Alerts</p>
          </div>

          <div className="rounded-lg bg-surface/80 p-2 border border-line/50">
            <p className="text-[10px] font-mono text-muted">Receipt AI</p>
            <p className="font-bold text-emerald-400 mt-0.5 text-xs">Vision OCR</p>
          </div>

          <div className="rounded-lg bg-surface/80 p-2 border border-line/50">
            <p className="text-[10px] font-mono text-muted">AI Copilot</p>
            <p className="font-bold text-accent mt-0.5 text-xs">Financial Insights</p>
          </div>

          <div className="rounded-lg bg-surface/80 p-2 border border-line/50">
            <p className="text-[10px] font-mono text-muted">Vault</p>
            <p className="font-bold text-fg mt-0.5 text-xs">Encrypted Storage</p>
          </div>
        </div>

        {/* Workflow Chain */}
        <div className="rounded-xl border border-accent/30 bg-surface/90 p-2.5 text-xs">
          <p className="font-mono text-[9px] font-bold text-accent uppercase tracking-wider mb-1">
            Product Workflow Chain:
          </p>
          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-muted">
            <span className="text-fg font-semibold">Transactions</span>
            <FiArrowRight className="h-3 w-3 text-accent" />
            <span className="text-fg font-semibold">Monthly Budget</span>
            <FiArrowRight className="h-3 w-3 text-accent" />
            <span className="text-amber-400 font-semibold">Planner</span>
            <FiArrowRight className="h-3 w-3 text-accent" />
            <span className="text-emerald-400 font-semibold">Receipt AI</span>
            <FiArrowRight className="h-3 w-3 text-accent" />
            <span className="text-accent font-semibold">AI Copilot</span>
            <FiArrowRight className="h-3 w-3 text-accent" />
            <span className="text-fg font-semibold">Encrypted Vault</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CareerPreview() {
  return (
    <div className={frame}>
      <div className="w-full space-y-3">
        <div className="flex items-center justify-between border-b border-line/60 pb-2">
          <span className="font-display text-xs font-bold text-fg flex items-center gap-2">
            <FiFileText className="h-4 w-4 text-accent" />
            AI Career Copilot Engine
          </span>
          <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
            ATS REASONING
          </span>
        </div>

        {/* Input Graphics */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono">
          <div className="rounded-lg border border-line bg-surface px-3 py-1 text-fg">
            Resume
          </div>
          <span className="text-accent font-bold">+</span>
          <div className="rounded-lg border border-line bg-surface px-3 py-1 text-fg">
            Job Description
          </div>
        </div>

        {/* Workflow Sequence */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 text-[10px] font-mono rounded-xl border border-line/60 bg-surface/80 p-3">
          <span className="text-fg font-semibold">Resume + Job Description</span>
          <FiArrowRight className="h-3 w-3 text-accent" />
          <span className="text-accent font-semibold">AI Analysis</span>
          <FiArrowRight className="h-3 w-3 text-accent" />
          <span className="text-emerald-400 font-semibold">ATS Score</span>
          <FiArrowRight className="h-3 w-3 text-accent" />
          <span className="text-fg font-semibold">Skills</span>
          <FiArrowRight className="h-3 w-3 text-accent" />
          <span className="text-amber-400 font-semibold">Missing Skills</span>
          <FiArrowRight className="h-3 w-3 text-accent" />
          <span className="text-accent font-semibold">Suggestions</span>
        </div>
      </div>
    </div>
  );
}

function HirePreview() {
  return (
    <div className={frame}>
      <div className="w-full space-y-3">
        <div className="flex items-center justify-between border-b border-line/60 pb-2">
          <span className="font-display text-xs font-bold text-fg flex items-center gap-1.5">
            <FiUserCheck className="h-4 w-4 text-accent" /> Candidate Screening Pipeline
          </span>
          <span className="text-[10px] font-mono text-muted">FastHire99</span>
        </div>

        {[
          { name: "Full-Stack Engineer Candidate", stage: "Pipeline Match", status: "AI Verified", color: "text-emerald-400" },
          { name: "Senior Backend Candidate", stage: "Technical Screen", status: "Evaluated", color: "text-accent" },
          { name: "AI Product Engineer Candidate", stage: "Top Requisition Fit", status: "Shortlisted", color: "text-emerald-400" },
        ].map((c) => (
          <div key={c.name} className="flex items-center justify-between rounded-xl border border-line/60 bg-surface/90 p-3 text-xs">
            <div>
              <p className="font-bold text-fg">{c.name}</p>
              <p className="text-[10px] text-muted mt-0.5">Automated Candidate Scorecard</p>
            </div>
            <div className="text-right">
              <span className={`font-mono font-bold ${c.color}`}>{c.stage}</span>
              <p className="text-[10px] text-muted">{c.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TradePreview() {
  return (
    <div className={frame}>
      <div className="w-full space-y-3">
        <div className="flex items-center justify-between border-b border-line/60 pb-2">
          <span className="font-display text-xs font-bold text-fg flex items-center gap-1.5">
            <FiTrendingUp className="h-4 w-4 text-accent" /> FastTrade99 Telemetry Dashboard
          </span>
          <span className="text-[10px] font-mono text-emerald-400">Live Stream</span>
        </div>

        <div className="rounded-xl border border-line/60 bg-surface/80 p-3">
          <svg viewBox="0 0 320 80" className="w-full h-20" aria-hidden>
            <defs>
              <linearGradient id="trade-grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0 60 Q40 40 80 50 T160 30 T240 45 T320 15 L320 80 L0 80 Z"
              fill="url(#trade-grad)"
            />
            <path
              d="M0 60 Q40 40 80 50 T160 30 T240 45 T320 15"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="rounded-lg bg-surface/80 p-2 border border-line/40">
            <p className="text-[10px] text-muted">Telemetry Data</p>
            <p className="font-bold text-fg mt-0.5">Market Data Feed</p>
          </div>
          <div className="rounded-lg bg-surface/80 p-2 border border-line/40">
            <p className="text-[10px] text-muted">Data Stream</p>
            <p className="font-bold text-emerald-400 mt-0.5">Real-time Stream</p>
          </div>
        </div>
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
        className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
      />
    );
  }
  const Preview = previews[project.preview];
  return (
    <figure
      className="relative h-full w-full transition-transform duration-500 group-hover/card:scale-[1.02]"
      role="img"
      aria-label={`Visual preview representing ${project.name}`}
    >
      <Preview />
    </figure>
  );
}
