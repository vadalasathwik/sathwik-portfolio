import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { siteConfig, type SocialKey } from "@/lib/config";

const icons = { github: FiGithub, linkedin: FiLinkedin, email: FiMail } as const;

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${className}`}>
      {siteConfig.socials.map((s) => {
        const Icon = icons[s.key as SocialKey];
        const external = s.key !== "email";
        return (
          <li key={s.key}>
            <a
              href={s.href}
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon aria-hidden className="h-4 w-4" />
              {s.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
