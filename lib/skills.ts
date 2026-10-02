import type { IconType } from "react-icons";
import { FaCss3Alt, FaGoogle, FaHtml5 } from "react-icons/fa";
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiGithub,
  FiKey,
  FiLayers,
  FiLock,
  FiServer,
  FiStar,
  FiTerminal,
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

export type Skill = { name: string; icon: IconType };
export type SkillCategory = { name: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: FiDatabase },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Django", icon: SiDjango },
      { name: "REST APIs", icon: FiServer },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    name: "AI",
    skills: [
      { name: "Generative AI", icon: FiZap },
      { name: "LLM Integration", icon: FiCpu },
      { name: "Gemini", icon: FiStar },
      { name: "Prompt Engineering", icon: FiTerminal },
      { name: "AI Application Development", icon: FiLayers },
    ],
  },
  {
    name: "Authentication",
    skills: [
      { name: "Auth.js", icon: FiLock },
      { name: "Google OAuth", icon: FaGoogle },
      { name: "JWT", icon: FiKey },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: FiGithub },
      { name: "VS Code", icon: FiCode },
      { name: "Linux", icon: SiLinux },
    ],
  },
];
