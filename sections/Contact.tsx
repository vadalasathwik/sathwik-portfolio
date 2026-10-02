"use client";

import { useState } from "react";
import { FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const emailStr = "sathwik.vdl@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(emailStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-16 border-t border-line/60 py-20 md:py-32"
    >
      <div className="container-page">
        <Reveal>
          <div className="rounded-3xl border border-line bg-surface/60 p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            />

            <span className="rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-mono text-accent">
              Get In Touch
            </span>

            <h2
              id="contact-title"
              className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-fg"
            >
              Let&apos;s build intelligent software together.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
              I am actively looking for opportunities in <span className="font-semibold text-fg">Full-Stack AI Engineering, Python & FastAPI Development, and AI Product Engineering</span>. Whether you have a position open or a project to discuss, feel free to reach out.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href={`mailto:${emailStr}`}>
                <FiMail aria-hidden className="h-4 w-4" />
                Email Me Directly
              </ButtonLink>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-raised/80 px-4 py-3 text-sm font-semibold text-fg hover:border-accent/50 hover:bg-raised transition-all duration-200"
              >
                {copied ? (
                  <>
                    <FiCheck className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="h-4 w-4 text-muted" />
                    <span>Copy Email ({emailStr})</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 pt-8 border-t border-line/60">
              <a
                href="https://www.linkedin.com/in/sathwikvadala/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-line bg-ink/50 px-5 py-3 text-sm font-semibold text-fg hover:border-accent/40 hover:text-accent transition-colors"
              >
                <FiLinkedin className="h-5 w-5 text-accent" />
                <span>LinkedIn / sathwikvadala</span>
              </a>

              <a
                href="https://github.com/vadalasathwik"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-line bg-ink/50 px-5 py-3 text-sm font-semibold text-fg hover:border-accent/40 hover:text-accent transition-colors"
              >
                <FiGithub className="h-5 w-5 text-accent" />
                <span>GitHub / vadalasathwik</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
