"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiDownload, FiMail, FiLinkedin, FiGithub, FiCpu, FiLayers, FiCode, FiCheckCircle } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/config";

const whatIBuild = [
  {
    title: "AI Products",
    description: "AI-powered applications and intelligent workflows.",
    icon: FiCpu,
  },
  {
    title: "Full-Stack Systems",
    description: "Modern web applications with scalable backend APIs.",
    icon: FiLayers,
  },
  {
    title: "AI / LLM Integration",
    description: "LLM-powered analysis, automation and structured outputs.",
    icon: FiCode,
  },
  {
    title: "Production Engineering",
    description: "Authentication, databases, APIs and deployment.",
    icon: FiCheckCircle,
  },
];

export function Hero() {
  const reduce = useReducedMotion();
  const instant = !!reduce;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-14 lg:pt-32 lg:pb-16">
      {/* Background glow - subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.12),transparent)]"
      />

      <div className="container-page relative grid gap-10 lg:grid-cols-12 lg:gap-8 items-start">
        {/* Left Column - Main Intro & Details */}
        <div className="lg:col-span-7">
          {/* 1. Small availability badge */}
          <motion.div
            initial={instant ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>Available for Full-Stack AI Developer & Engineer Roles</span>
          </motion.div>

          {/* 2. Main Headline */}
          <motion.h1
            id="hero-title"
            initial={instant ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-[650px] font-display text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-fg"
          >
            AI Product Engineer building intelligent, full-stack products.
          </motion.h1>

          {/* 3. Supporting Paragraph */}
          <motion.p
            initial={instant ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-[600px] text-base sm:text-lg leading-relaxed text-muted"
          >
            I&apos;m Sathwik Vadala, a Software Engineer focused on building AI-powered products with Python, FastAPI, React, Next.js, and modern LLM technologies.
          </motion.p>

          {/* 4. Primary Action Buttons */}
          <motion.div
            initial={instant ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <ButtonLink href="#projects">View Projects</ButtonLink>
            <ButtonLink href={siteConfig.resumePath} variant="secondary" download>
              <FiDownload aria-hidden className="h-4 w-4" />
              Download Resume
            </ButtonLink>
          </motion.div>

          {/* 5. Small Social Links */}
          <motion.div
            initial={instant ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted"
          >
            <a
              href="https://github.com/vadalasathwik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-fg font-medium"
            >
              <FiGithub className="h-3.5 w-3.5" />
              GitHub
            </a>
            <span className="text-line">·</span>
            <a
              href="https://www.linkedin.com/in/sathwikvadala/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-fg font-medium"
            >
              <FiLinkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <span className="text-line">·</span>
            <a
              href="mailto:sathwik.vdl@gmail.com"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-fg font-medium"
            >
              <FiMail className="h-3.5 w-3.5" />
              Email
            </a>
          </motion.div>

          {/* 6. Tech Stack Micro-Summary */}
          <motion.div
            initial={instant ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 pt-5 border-t border-line/50 text-xs text-muted/90 font-mono tracking-wide"
          >
            Python · FastAPI · Next.js · React · TypeScript · PostgreSQL · AI/LLMs
          </motion.div>
        </div>

        {/* Right Column - Product Engineering Overview Card ("What I build") */}
        <motion.div
          initial={instant ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="rounded-xl border border-line/70 bg-surface/50 p-5 sm:p-6 backdrop-blur-sm shadow-md">
            <h2 className="font-display text-base font-semibold text-fg tracking-tight mb-4">
              What I build
            </h2>
            <div className="space-y-4">
              {whatIBuild.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-line/80 bg-raised/80 text-accent">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-fg">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
