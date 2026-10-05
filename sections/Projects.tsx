"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { projects } from "@/lib/data";

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Calculate translation distance: 4 slides of 100% width each => translate 0% to -300%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 100}%`]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      projects.length - 1,
      Math.max(0, Math.floor(latest * projects.length))
    );
    setCurrentIndex(idx);
  });

  return (
    <section id="projects" className="relative">
      {/* Desktop Sticky Horizontal Scroll Showcase */}
      <div ref={targetRef} className="hidden lg:block relative h-[260vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden py-6 lg:py-8">
          {/* Section Header & Progress Indicator */}
          <div className="container-page flex items-end justify-between border-b border-line/40 pb-4">
            <div>
              <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
                FEATURED PRODUCTS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-fg">
                Things I&apos;ve built
              </h2>
              <p className="mt-0.5 text-xs text-muted">
                Selected AI and full-stack products.
              </p>
            </div>

            {/* Top-Right Progress Indicator */}
            <div className="flex items-center gap-3 rounded-full border border-line/60 bg-surface/80 px-4 py-1.5 backdrop-blur-md">
              <span className="font-mono text-xs font-bold text-accent">
                0{currentIndex + 1} / 0{projects.length}
              </span>
              <span className="text-xs font-semibold text-fg">
                {projects[currentIndex].name}
              </span>
              <div className="flex items-center gap-1.5">
                {projects.map((p, idx) => (
                  <div
                    key={p.slug}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-6 bg-accent" : "w-2 bg-line/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Track Viewport */}
          <div className="w-full flex-1 flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex w-full h-full">
              {projects.map((project, index) => (
                <div
                  key={project.slug}
                  className="w-full flex-shrink-0 flex items-center justify-center px-6 lg:px-12"
                >
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Fallback Showcase */}
      <div className="lg:hidden">
        <Section
          id="projects-mobile"
          title="Things I've built"
          intro="Selected AI and full-stack products."
        >
          <div className="space-y-10">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.1}>
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>
        </Section>
      </div>
    </section>
  );
}


