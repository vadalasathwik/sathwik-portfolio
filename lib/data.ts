/**
 * Centralized Portfolio Data for Sathwik Vadala
 * Verified facts only — No fabricated metrics or timeline claims.
 */

export type CaseStudySection = {
  title: string;
  body?: string;
  items?: string[];
  flow?: string[];
};

export type PreviewKind = "spendtrack" | "career" | "hire" | "trade";

export type Project = {
  number: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  role: string;
  features: string[];
  stack: string[];
  github: string;
  demo?: string | null;
  preview: PreviewKind;
  image?: { src: string; alt: string };
  caseStudy: CaseStudySection[];
};

export const aboutCards = [
  {
    title: "AI PRODUCTS",
    description: "Designing and building AI-powered products that solve practical domain problems.",
    iconName: "cpu",
  },
  {
    title: "FULL-STACK APPLICATIONS",
    description: "Combining React & Next.js interfaces with Python & FastAPI backends.",
    iconName: "layers",
  },
  {
    title: "AI / LLM INTEGRATION",
    description: "Integrating structured LLM capabilities directly into core user workflows.",
    iconName: "zap",
  },
  {
    title: "BACKEND & DATA",
    description: "Architecting REST APIs, PostgreSQL schemas, and authentication logic.",
    iconName: "database",
  },
] as const;

export const aboutStats = [
  { label: "MCA", value: "Completed in 2023" },
  { label: "Based in", value: "Hyderabad, India" },
  { label: "Focus", value: "AI + Full Stack" },
  { label: "Current Role", value: "Software Engineer" },
] as const;

export const careerFlow = [
  "Google Login",
  "Dashboard",
  "Resume Upload",
  "Job Description",
  "AI Analysis",
  "ATS Score",
  "Skills Found",
  "Missing Skills",
  "Suggestions",
];

export const capabilityCards = [
  {
    id: "ai-products",
    title: "AI PRODUCTS",
    subtitle: "AI-powered applications and intelligent workflows.",
    description: "Combining user interfaces with large language model workflows to automate complex manual processes.",
    technologies: ["Gemini API", "Vision OCR", "Prompt Templates", "Structured Outputs"],
    iconName: "cpu",
  },
  {
    id: "full-stack",
    title: "FULL-STACK APPLICATIONS",
    subtitle: "Modern web applications using React / Next.js and Python.",
    description: "Architecting responsive client interfaces and high-performance backend microservices.",
    technologies: ["Next.js 14", "React 18", "TypeScript", "FastAPI", "Python"],
    iconName: "layers",
  },
  {
    id: "ai-copilots",
    title: "AI COPILOTS",
    subtitle: "Applications where users interact with real data using AI.",
    description: "Empowering users to query, analyze, and transform financial and career data with contextual AI assistants.",
    technologies: ["Context Optimization", "JSON Schemas", "Pydantic", "PWA / Offline"],
    iconName: "zap",
  },
  {
    id: "data-products",
    title: "DATA-DRIVEN PRODUCTS",
    subtitle: "Applications backed by PostgreSQL, APIs and business logic.",
    description: "Building robust data storage models, secure user authentication, and reliable API endpoints.",
    technologies: ["PostgreSQL", "Prisma ORM", "Auth.js", "REST APIs"],
    iconName: "database",
  },
] as const;

export const projects: Project[] = [
  {
    number: "01",
    slug: "spendtrack-ai",
    name: "SpendTrack AI",
    category: "AI Finance / Personal Finance",
    tagline: "Mobile-first, AI-powered personal finance platform.",
    description:
      "SpendTrack AI helps users record, understand and manage their financial activity, budgets, and upcoming commitments using AI-powered receipt parsing and financial copilot insights.",
    role: "Full-Stack AI Developer & Architect",
    features: [
      "Expense tracking & category intelligence",
      "Budget management & spending limits",
      "Planner & commitment alerts",
      "Recurring expense forecasting",
      "Receipt AI OCR processing with Gemini",
      "AI Copilot & financial insights assistant",
      "Secure offline encrypted Vault",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js / Express",
      "Prisma",
      "PostgreSQL / Neon",
      "Gemini AI",
      "Google OAuth",
      "IndexedDB",
      "WebCrypto",
      "Service Worker",
    ],
    github: "https://github.com/vadalasathwik",
    demo: "https://spend-track-ai.vercel.app/",
    preview: "spendtrack",
    caseStudy: [
      {
        title: "Overview & Goal",
        body: "Unified mobile-first financial platform that automatically parses unstructured receipts into categorized database records, forecasts recurring bill commitments, and provides encrypted vault storage.",
      },
      {
        title: "Key Product Workflow",
        flow: [
          "Record Transaction",
          "Process Receipt with AI",
          "Update Budget Limits",
          "Track Commitments",
          "AI Copilot Insights",
        ],
      },
    ],
  },
  {
    number: "02",
    slug: "ai-career-copilot",
    name: "AI Career Copilot",
    category: "AI / CareerTech",
    tagline: "Intelligent career assistant for resume ATS compatibility.",
    description:
      "AI Career Copilot analyzes resumes and job descriptions using structured Gemini LLM reasoning to calculate ATS compatibility scores, extract matching skills, and highlight missing critical competencies.",
    role: "Lead Full-Stack AI Engineer",
    features: [
      "Automated resume parsing & structure analysis",
      "Job description parsing & semantic matching",
      "ATS compatibility scoring algorithm",
      "Extracted skills taxonomy breakdown",
      "Missing critical skill gap alerts",
      "AI bullet point & section rewrite suggestions",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Auth.js",
      "Google OAuth",
      "Gemini",
    ],
    github: "https://github.com/vadalasathwik",
    demo: "https://github.com/vadalasathwik",
    preview: "career",
    caseStudy: [
      {
        title: "Overview & Goal",
        body: "Enables candidates to evaluate their resume against target job postings, generating actionable scorecards and pinpointing exact keyword gaps.",
      },
      {
        title: "9-Step ATS Workflow",
        flow: [
          "Google Login",
          "Dashboard",
          "Upload Resume",
          "Job Description",
          "AI Analysis",
          "ATS Score",
          "Skills Found",
          "Missing Skills",
          "Suggestions",
        ],
      },
    ],
  },
  {
    number: "03",
    slug: "fasthire99",
    name: "FastHire99",
    category: "Recruitment / AI",
    tagline: "Recruitment-focused platform for candidate discovery.",
    description:
      "A recruitment-focused application designed to simplify candidate discovery, job requisition management, and AI-assisted candidate screening scorecards.",
    role: "Full-Stack Engineer",
    features: [
      "Candidate discovery & talent search",
      "Interactive candidate pipeline management",
      "AI-assisted candidate screening scorecards",
      "Job requisition management",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Tailwind CSS",
      "Generative AI",
    ],
    github: "https://github.com/vadalasathwik",
    demo: "https://www.fasthire99.com/",
    preview: "hire",
    caseStudy: [
      {
        title: "Overview",
        body: "Organizes candidate profiles into interactive pipelines and leverages AI to score candidate fit against job requisitions.",
      },
    ],
  },
  {
    number: "04",
    slug: "fasttrade99",
    name: "FastTrade99",
    category: "FinTech",
    tagline: "Financial telemetry & real-time market data web dashboard.",
    description:
      "A modern financial and trading-oriented web application focused on presenting financial information and portfolio telemetry through an interactive user experience.",
    role: "Frontend & Full-Stack Developer",
    features: [
      "Real-time financial charts & market metrics",
      "Interactive portfolio tracking view",
      "Order telemetry and financial summary",
      "Responsive financial data layout",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "ChartJS / Recharts",
    ],
    github: "https://github.com/vadalasathwik",
    demo: "https://www.fasttrade99.com/",
    preview: "trade",
    caseStudy: [
      {
        title: "Overview",
        body: "Presents market data telemetry and real-time financial metrics in a high-contrast web dashboard.",
      },
    ],
  },
];

export const experience = [
  {
    company: "GenAI Lakes",
    role: "Software Engineer / Full-Stack AI Developer",
    location: "Hyderabad, India",
    period: "Verified Role",
    summary: "Building full-stack applications with React, Next.js, Python, FastAPI and AI technologies.",
    responsibilities: [
      "Engineer end-to-end full-stack applications leveraging Next.js, React, TypeScript, Python, and FastAPI.",
      "Design and implement RESTful APIs, microservices, and database schemas with PostgreSQL.",
      "Integrate Generative AI & Large Language Model (LLM) capabilities directly into core business workflows.",
      "Architect structured AI prompt templates and validation pipelines ensuring reliable, type-safe AI outputs.",
      "Collaborate across frontend, backend, and cloud layers to deliver high-performance software.",
      "Implement user authentication, role-based access control, and third-party service integrations.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Generative AI",
      "LLMs / Gemini API",
      "Tailwind CSS",
    ],
  },
];

export const featuredRepos = [
  {
    name: "SpendTrack AI",
    description: "AI-powered personal finance platform with receipt OCR and budget analytics.",
    href: "https://github.com/vadalasathwik",
    language: "TypeScript / Python",
  },
  {
    name: "AI Career Copilot",
    description: "Intelligent resume and job description analyzer with ATS scoring powered by Gemini.",
    href: "https://github.com/vadalasathwik",
    language: "Next.js / FastAPI",
  },
  {
    name: "FastHire99",
    description: "Recruitment platform for candidate discovery and AI-assisted screening.",
    href: "https://github.com/vadalasathwik",
    language: "React / Python",
  },
  {
    name: "FastTrade99",
    description: "FinTech dashboard for real-time market data visual analytics.",
    href: "https://github.com/vadalasathwik",
    language: "TypeScript / Next.js",
  },
];
