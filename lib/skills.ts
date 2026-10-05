import type { IconType } from "react-icons";
import {
  FiCpu,
  FiGithub,
  FiServer,
  FiStar,
  FiZap,
} from "react-icons/fi";
import {
  SiDjango,
  SiFastapi,
  SiGit,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type SkillItem = { name: string; icon: IconType };

export const marqueeRow1: SkillItem[] = [
  { name: "Python", icon: SiPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Django", icon: SiDjango },
  { name: "REST APIs", icon: FiServer },
];

export const marqueeRow2: SkillItem[] = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

export const marqueeRow3: SkillItem[] = [
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: FiGithub },
  { name: "Linux", icon: SiLinux },
  { name: "Gemini", icon: FiStar },
  { name: "Generative AI", icon: FiZap },
  { name: "LLMs", icon: FiCpu },
];

export const allMarqueeRows = [
  { id: "row1", items: marqueeRow1, speed: "24s", reverse: false },
  { id: "row2", items: marqueeRow2, speed: "28s", reverse: true },
  { id: "row3", items: marqueeRow3, speed: "26s", reverse: false },
];

