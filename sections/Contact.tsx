"use client";

import { useState } from "react";
import { FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/config";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-16 border-t border-line/60 py-20 md:py-28"
    >
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line/80 bg-surface/60 p-8 sm:p-12 lg:p-14 backdrop-blur-md shadow-2xl">
            {/* Ambient Radial Lighting */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl"
            />

            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent tracking-wide uppercase font-mono">
              <FiSend className="h-3.5 w-3.5" />
              <span>{"05 // GET IN TOUCH"}</span>
            </div>

            <h2
              id="contact-title"
              className="mt-5 max-w-3xl font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fg leading-[1.12]"
            >
              Let&apos;s build something intelligent.
            </h2>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
              I am open to full-time engineering opportunities involving AI Product Engineering, Full-Stack Development, and intelligent LLM-driven applications.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href={`mailto:${siteConfig.email}`}>
                <FiMail aria-hidden className="h-4 w-4" />
                Email Sathwik
              </ButtonLink>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line/80 bg-raised/80 px-5 py-3 text-xs sm:text-sm font-semibold text-fg transition-all hover:border-accent/40 hover:bg-raised hover:text-accent shadow-sm"
              >
                <FiLinkedin className="h-4 w-4 text-accent" />
                LinkedIn
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line/80 bg-raised/80 px-5 py-3 text-xs sm:text-sm font-semibold text-fg transition-all hover:border-accent/40 hover:bg-raised hover:text-accent shadow-sm"
              >
                <FiGithub className="h-4 w-4 text-accent" />
                GitHub
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-line/80 bg-ink/60 px-5 py-3 text-xs sm:text-sm font-semibold text-fg transition-all hover:border-accent/40 hover:text-fg shadow-sm"
              >
                {copied ? (
                  <>
                    <FiCheck className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="h-4 w-4 text-muted" />
                    <span className="font-mono">Copy Email ({siteConfig.email})</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
