import { Year } from "@/components/Year";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold">{siteConfig.name}</p>
          <p className="mt-1 text-muted">{siteConfig.role}</p>
          <p className="text-muted">{siteConfig.location}</p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <SocialLinks />
          <p className="text-sm text-muted">
            &copy; <Year /> {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
