import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
  className?: string;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-[0.98]";

const variants = {
  primary: "bg-accent text-ink hover:bg-accent/90 shadow-sm shadow-accent/20 hover:scale-[1.02]",
  secondary: "border border-line/80 bg-surface/80 text-fg hover:border-accent/50 hover:bg-raised hover:text-accent backdrop-blur-sm",
};

export function ButtonLink({
  href,
  variant = "primary",
  external,
  download,
  className = "",
  children,
}: Props) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
    >
      {children}
    </a>
  );
}
