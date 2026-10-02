"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiCpu, FiDownload, FiLayers, FiCode, FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/config";

const headline = "Building Intelligent Full-Stack AI Products & Automated Systems.".split(" ");

const stages = [
  { name: "Product Strategy", text: "Identify user pain points, define architecture, and scope AI features." },
  { name: "Full-Stack Development", text: "Build responsive interfaces with Next.js & robust APIs with FastAPI." },
  { name: "AI & LLM Integration", text: "Orchestrate Gemini & LLMs to produce structured, type-safe data." },
  { name: "Data & Security", text: "Design PostgreSQL schemas, handle authentication & encrypted storage." },
  { name: "Production Deployment", text: "Deliver high-performance, production-ready SaaS applications." },
];

const pillars = [
  { icon: FiCpu, label: "AI & LLM Orchestration" },
  { icon: FiLayers, label: "Full-Stack Engineering" },
  { icon: FiCode, label: "FastAPI & Next.js Expert" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const instant = !!reduce;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Glow effect background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(65%_65%_at_50%_-10%,rgba(56,189,248,0.18),transparent)]"
      />

      <div className="container-page relative grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          {/* Recruiter Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Full-Stack AI Developer & Engineer Roles</span>
          </div>

          <h1
            id="hero-title"
            className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-fg"
          >
            {headline.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={instant ? false : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted"
            initial={instant ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Hi, I&apos;m <span className="font-semibold text-fg">{siteConfig.name}</span> — a Software Engineer & Full-Stack AI Developer based in <span className="inline-flex items-center gap-1 font-medium text-fg"><FiMapPin className="h-4 w-4 text-accent inline" />Hyderabad, India</span>. I build production-grade AI web applications using <span className="font-semibold text-fg">Python, FastAPI, React, Next.js, and LLMs</span>.
          </motion.p>

          <motion.div
            initial={instant ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#projects">Explore Featured Projects</ButtonLink>
              <ButtonLink href={siteConfig.resumePath} variant="secondary" download>
                <FiDownload aria-hidden className="h-4 w-4" />
                Download Resume
              </ButtonLink>
            </div>

            {/* Quick Contact Links for Recruiters */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <a
                href="mailto:sathwik.vdl@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-line/80 bg-surface/60 px-3.5 py-2 text-xs font-medium text-fg hover:border-accent/50 hover:text-accent transition-colors"
              >
                <FiMail className="h-4 w-4 text-accent" />
                sathwik.vdl@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/sathwikvadala/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line/80 bg-surface/60 px-3.5 py-2 text-xs font-medium text-fg hover:border-accent/50 hover:text-accent transition-colors"
              >
                <FiLinkedin className="h-4 w-4 text-accent" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/vadalasathwik"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line/80 bg-surface/60 px-3.5 py-2 text-xs font-medium text-fg hover:border-accent/50 hover:text-accent transition-colors"
              >
                <FiGithub className="h-4 w-4 text-accent" />
                GitHub (@vadalasathwik)
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-line/60 pt-5 text-xs font-medium text-muted">
              {pillars.map(({ icon: Icon, label }) => (
                <li key={label} className="inline-flex items-center gap-2">
                  <Icon aria-hidden className="h-4 w-4 text-accent" />
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-line/80 bg-surface/80 p-6 sm:p-7 shadow-xl backdrop-blur-md">
            <p className="font-display text-lg font-bold text-fg">AI Product Engineering Pipeline</p>
            <p className="mt-1 text-xs text-muted">How I deliver software from concept to deployment.</p>
            <ol className="relative mt-7 space-y-6">
              <motion.span
                aria-hidden
                className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-accent/60"
                initial={instant ? false : { scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.8, duration: 0.45 * stages.length, ease: "linear" }}
              />
              <span aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
              {stages.map((s, i) => (
                <motion.li
                  key={s.name}
                  className="relative flex gap-4"
                  initial={instant ? false : { opacity: 0.35 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.35, duration: 0.4 }}
                >
                  <motion.span
                    aria-hidden
                    className="relative z-10 mt-1 h-[15px] w-[15px] shrink-0 rounded-full border border-line bg-ink"
                    initial={instant ? false : { backgroundColor: "#080c14" }}
                    animate={{ backgroundColor: "#38bdf8", borderColor: "#38bdf8" }}
                    transition={{ delay: 0.8 + i * 0.35, duration: 0.3 }}
                  />
                  <div>
                    <p className="font-semibold text-xs sm:text-sm text-fg">{s.name}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{s.text}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
