"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiDownload, FiMail, FiLinkedin, FiGithub, FiArrowUpRight, FiZap, FiCpu } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/config";

const orbitTech = [
  { name: "Python", top: "8%", left: "50%", duration: 4 },
  { name: "FastAPI", top: "24%", left: "84%", duration: 4.8 },
  { name: "React", top: "62%", left: "86%", duration: 4.2 },
  { name: "Next.js", top: "85%", left: "62%", duration: 5 },
  { name: "TypeScript", top: "85%", left: "20%", duration: 4.5 },
  { name: "PostgreSQL", top: "62%", left: "8%", duration: 4.9 },
  { name: "AI / LLM", top: "24%", left: "10%", duration: 4.3 },
];

export function Hero() {
  const reduce = useReducedMotion();
  const instant = !!reduce;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 min-h-[88vh] flex items-center">
      {/* Soft Radial Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_70%)] blur-3xl"
      />

      <div className="container-page relative grid gap-12 lg:grid-cols-12 lg:gap-8 items-center w-full">
        {/* Left Column: Editorial Introduction */}
        <div className="lg:col-span-7 space-y-5">
          {/* SMALL: Availability Badge */}
          <motion.div
            initial={instant ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 tracking-wide uppercase font-mono"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>AVAILABLE FOR FULL-STACK AI DEVELOPER & ENGINEER ROLES</span>
          </motion.div>

          {/* LARGE: Name */}
          <motion.h1
            id="hero-title"
            initial={instant ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fg leading-none"
          >
            Hi, I&apos;m Sathwik Vadala
          </motion.h1>

          {/* ACCENT: Subtitle */}
          <motion.p
            initial={instant ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="text-lg sm:text-xl font-semibold text-accent leading-snug"
          >
            AI Product Engineer building intelligent, full-stack products.
          </motion.p>

          {/* DESCRIPTION: Bio */}
          <motion.p
            initial={instant ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="max-w-xl text-sm sm:text-base leading-relaxed text-muted font-normal"
          >
            I&apos;m a Software Engineer focused on building AI-powered products with Python, FastAPI, React, Next.js, PostgreSQL, and modern LLM technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={instant ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="pt-2 flex flex-wrap items-center gap-3"
          >
            <ButtonLink href="#projects">View Projects</ButtonLink>
            <ButtonLink href={siteConfig.resumePath} variant="secondary" download>
              <FiDownload aria-hidden className="h-4 w-4" />
              Download Resume
            </ButtonLink>
          </motion.div>

          {/* Below Buttons: Social Links */}
          <motion.div
            initial={instant ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="pt-1 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-fg"
            >
              <FiGithub className="h-4 w-4 text-accent" />
              GitHub
              <FiArrowUpRight className="h-3 w-3 opacity-60" />
            </a>
            <span className="text-line">·</span>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-fg"
            >
              <FiLinkedin className="h-4 w-4 text-accent" />
              LinkedIn
              <FiArrowUpRight className="h-3 w-3 opacity-60" />
            </a>
            <span className="text-line">·</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-fg"
            >
              <FiMail className="h-4 w-4 text-accent" />
              Email
            </a>
          </motion.div>
        </div>

        {/* Right Column: "AI Product Orbit" Tech Ecosystem Visual */}
        <motion.div
          initial={instant ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
            {/* Subtle Orbital Background Rings */}
            <div className="absolute inset-0 rounded-full border border-line/30 bg-radial from-accent/5 to-transparent pointer-events-none" />
            <div className="absolute inset-8 rounded-full border border-line/20 pointer-events-none" />

            {/* Connecting Animated SVG Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Lines from Center (50, 50) to orbital tech nodes */}
              <line x1="50" y1="50" x2="50" y2="10" stroke="rgba(56,189,248,0.25)" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="50" y1="50" x2="84" y2="26" stroke="rgba(56,189,248,0.25)" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="50" y1="50" x2="86" y2="62" stroke="rgba(56,189,248,0.25)" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="50" y1="50" x2="62" y2="85" stroke="rgba(56,189,248,0.25)" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="50" y1="50" x2="20" y2="85" stroke="rgba(56,189,248,0.25)" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="50" y1="50" x2="8" y2="62" stroke="rgba(56,189,248,0.25)" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="50" y1="50" x2="10" y2="24" stroke="rgba(56,189,248,0.25)" strokeWidth="0.5" strokeDasharray="2 2" />
            </svg>

            {/* Central Core Badge */}
            <motion.div
              animate={instant ? {} : { scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="z-10 flex flex-col items-center justify-center rounded-2xl border border-accent/40 bg-surface/90 px-4 py-3 text-center shadow-lg shadow-accent/10 backdrop-blur-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent mb-1.5">
                <FiZap className="h-4 w-4" />
              </div>
              <span className="font-mono text-[10px] font-bold text-accent tracking-widest uppercase">
                AI PRODUCT ENGINEERING
              </span>
              <span className="text-[9px] text-muted font-mono mt-0.5">Tech Ecosystem</span>
            </motion.div>

            {/* Floating Technology Pills */}
            {orbitTech.map((tech) => (
              <motion.div
                key={tech.name}
                style={{ top: tech.top, left: tech.left }}
                animate={
                  instant
                    ? {}
                    : {
                        y: [0, -5, 0],
                      }
                }
                transition={{
                  duration: tech.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="flex items-center gap-1.5 rounded-full border border-line/80 bg-ink/90 px-3 py-1 text-xs font-semibold text-fg shadow-sm backdrop-blur-md transition-colors hover:border-accent/60 hover:text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
                  <span>{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

