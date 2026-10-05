import { Year } from "@/components/Year";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-ink py-10">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-fg">{siteConfig.name}</p>
          <p className="mt-0.5 text-xs text-accent font-mono">{siteConfig.role}</p>
          <p className="text-xs text-muted mt-0.5">{siteConfig.location}</p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <SocialLinks />
          <p className="font-mono text-xs text-muted">
            &copy; <Year /> {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
