/**
 * Single place to edit personal details.
 */
export type SocialKey = "github" | "linkedin" | "email";

export type Social = { key: SocialKey; label: string; href: string };

const email = "sathwik.vdl@gmail.com";
const github = "https://github.com/vadalasathwik";
const linkedin = "https://www.linkedin.com/in/sathwikvadala/";

export const siteConfig = {
  name: "Sathwik Vadala",
  role: "AI Product Engineer / Full-Stack AI Developer",
  location: "Hyderabad, India",
  title: "Sathwik Vadala — AI Product Engineer | Full-Stack AI Developer",
  description:
    "Sathwik Vadala is a Full-Stack AI Developer and AI Product Engineer building intelligent products with Python, FastAPI, React, Next.js and modern AI technologies.",
  // Set NEXT_PUBLIC_SITE_URL in production.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sathwikvadala.dev",
  // Put your PDF at public/resume.pdf.
  resumePath: "/resume.pdf",
  githubUsername: "vadalasathwik",
  email,
  socials: [
    { key: "github", label: "GitHub", href: github },
    { key: "linkedin", label: "LinkedIn", href: linkedin },
    { key: "email", label: "Email", href: `mailto:${email}` },
  ] satisfies Social[],
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export function getSocial(key: SocialKey): Social {
  return siteConfig.socials.find((s) => s.key === key) as Social;
}

