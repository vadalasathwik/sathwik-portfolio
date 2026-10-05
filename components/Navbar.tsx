"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, siteConfig } from "@/lib/config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-line/40 bg-ink/85 backdrop-blur-md shadow-md py-0"
          : "border-transparent bg-ink/40 backdrop-blur-sm py-1"
      }`}
    >
      <nav aria-label="Primary" className="container-page flex h-14 sm:h-16 items-center justify-between transition-all duration-300">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="font-display text-base sm:text-lg font-bold tracking-tight text-fg transition-colors group-hover:text-accent">
            {siteConfig.name}
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href.slice(1) ? "true" : undefined}
                className={`text-xs sm:text-sm font-medium transition-colors hover:text-fg ${
                  active === l.href.slice(1) ? "text-accent font-semibold" : "text-muted"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.resumePath}
            download
            className="hidden rounded-full border border-line/80 bg-surface/60 px-4 py-1.5 text-xs font-semibold text-fg transition-all hover:border-accent/50 hover:bg-raised hover:text-accent md:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-line/80 bg-surface/70 px-3 py-1.5 text-xs font-semibold text-fg hover:border-accent/50 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            {open ? <FiX aria-hidden className="h-4 w-4" /> : <FiMenu aria-hidden className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-line/60 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-page flex flex-col py-4 gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-display text-base font-medium text-fg hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-line/50 mt-2">
                <a
                  href={siteConfig.resumePath}
                  download
                  className="inline-flex w-full justify-center rounded-full border border-accent/40 bg-accent/10 py-2.5 text-xs font-semibold text-accent"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
