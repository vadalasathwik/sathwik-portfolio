"use client";

import { useState } from "react";
import { FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
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
          <div className="relative overflow-hidden rounded-3xl border border-line/80 bg-surface/60 p-8 sm:p-12 backdrop-blur-md">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            />

            <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-mono text-xs font-semibold text-accent">
              Get In Touch
            </span>

            <h2
              id="contact-title"
              className="mt-4 max-w-3xl font-display text-3xl sm:text-5xl font-bold tracking-tight text-fg leading-tight"
            >
              Let&apos;s build something intelligent.
            </h2>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
              I&apos;m open to opportunities involving AI engineering, full-stack development, and AI-powered product development.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href={`mailto:${siteConfig.email}`}>
                <FiMail aria-hidden className="h-4 w-4" />
                Email Me
              </ButtonLink>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line/80 bg-raised/80 px-4 py-3 text-xs sm:text-sm font-semibold text-fg transition-all hover:border-accent/40 hover:bg-raised hover:text-accent"
              >
                <FiLinkedin className="h-4 w-4 text-accent" />
                LinkedIn
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line/80 bg-raised/80 px-4 py-3 text-xs sm:text-sm font-semibold text-fg transition-all hover:border-accent/40 hover:bg-raised hover:text-accent"
              >
                <FiGithub className="h-4 w-4 text-accent" />
                GitHub
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-line/80 bg-ink/50 px-4 py-3 text-xs sm:text-sm font-semibold text-fg transition-all hover:border-accent/40"
              >
                {copied ? (
                  <>
                    <FiCheck className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="h-4 w-4 text-muted" />
                    <span>Copy Email ({siteConfig.email})</span>
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
