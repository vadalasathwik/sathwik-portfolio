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
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-200";

const variants = {
  primary: "bg-accent text-ink hover:bg-fg",
  secondary: "border border-line text-fg hover:border-muted hover:bg-raised",
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
