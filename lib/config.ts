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
  title: "Sathwik Vadala — AI Product Engineer",
  description:
    "AI Product Engineer and Full-Stack Software Engineer building AI-powered applications with Python, FastAPI, React, Next.js, PostgreSQL and modern Generative AI technologies.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sathwik-portfolio-xi.vercel.app",
  resumePath: "/resume.pdf",
  githubUsername: "vadalasathwik",
  email,
  linkedin,
  github,
  socials: [
    { key: "github", label: "GitHub", href: github },
    { key: "linkedin", label: "LinkedIn", href: linkedin },
    { key: "email", label: "Email", href: `mailto:${email}` },
  ] satisfies Social[],
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export function getSocial(key: SocialKey): Social {
  return siteConfig.socials.find((s) => s.key === key) as Social;
}
