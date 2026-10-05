"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 inset-x-0 z-50 h-[2px] bg-line/20 pointer-events-none"
    >
      <div
        className="h-full bg-accent transition-all duration-150 ease-out shadow-[0_0_8px_rgba(56,189,248,0.5)]"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
}

