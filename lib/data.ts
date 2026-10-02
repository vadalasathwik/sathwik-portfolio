/**
 * Content for the portfolio.
 */

export type CaseStudySection = {
  title: string;
  body?: string;
  items?: string[];
  flow?: string[];
};

export type PreviewKind = "spendtrack" | "career" | "hire" | "trade";

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  stack: string[];
  github: string;
  demo?: string | null;
  preview: PreviewKind;
  image?: { src: string; alt: string };
  size: "xl" | "lg" | "sm";
  caseStudy: CaseStudySection[];
};

export const careerFlow = [
  "Google Login",
  "Dashboard",
  "Upload Resume",
  "Enter Job Description",
  "AI Analysis",
  "ATS Score",
  "Skills Found",
  "Missing Skills",
  "Improvement Suggestions",
];

export const projects: Project[] = [
  {
    slug: "spendtrack-ai",
    name: "SpendTrack AI",
    category: "AI Finance / Personal Finance SaaS",
    description:
      "SpendTrack AI is a mobile-first, AI-powered personal finance platform where users record and understand their financial activity, manage budgets and upcoming commitments, and use AI-powered workflows to make financial information actionable.",
    features: [
      "Expense tracking & category intelligence",
      "AI-powered receipt OCR processing",
      "Budget management & spending limits",
      "Upcoming bill commitments & alerts",
      "Recurring expense forecasting",
      "AI financial assistant & insights",
      "Secure offline encrypted Vault",
      "Interactive data visualizations",
      "Mobile-first responsive UX",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Gemini AI / LLMs",
      "Tailwind CSS",
    ],
    github: "https://github.com/vadalasathwik",
    demo: "https://spend-track-ai.vercel.app/",
    preview: "spendtrack",
    size: "xl",
    caseStudy: [
      {
        title: "Problem",
        body: "Personal financial data is fragmented across receipts, bills, and accounts. Manual expense logging is tedious, making it difficult for users to extract actionable financial decisions.",
      },
      {
        title: "Solution",
        body: "A unified AI-powered web and mobile experience that automatically parses receipts, tracks commitments, forecasts recurring expenses, and provides intelligent financial insights.",
      },
      {
        title: "Product Workflow",
        flow: [
          "Record expenses",
          "Process receipts with AI",
          "Manage budgets",
          "Track upcoming commitments",
          "Plan recurring expenses",
          "Review insights",
        ],
      },
      {
        title: "AI Layer",
        body: "Leveraged Gemini and vision LLM pipelines to extract structured transaction data from unstructured receipt photos with high precision, converting receipts directly into categorized database records.",
      },
      {
        title: "Architecture",
        flow: [
          "Mobile-first client (Next.js, React, TypeScript)",
          "API layer (FastAPI & Python)",
          "Data layer (PostgreSQL & Prisma)",
          "AI Orchestration (Gemini & LLM Workflows)",
        ],
      },
      {
        title: "Outcome & Impact",
        body: "Delivered a full-stack financial SaaS template with sub-second receipt extraction, offline encrypted vault security, and seamless budget analytics.",
      },
    ],
  },
  {
    slug: "ai-career-copilot",
    name: "AI Career Copilot",
    category: "AI / CareerTech",
    description:
      "An intelligent career assistant that performs deep structural analysis on resumes against target job descriptions, delivering precise ATS compatibility scores, skill gap reports, and tailored optimization recommendations.",
    features: [
      "Automated resume analysis",
      "Job description parsing & matching",
      "ATS compatibility scoring algorithm",
      "Extracted skill taxonomy",
      "Missing critical skill gap alerts",
      "AI bullet point & section rewrite suggestions",
      "Multi-role job matching engine",
    ],
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Auth.js (Google OAuth)",
      "Google Gemini AI API",
    ],
    github: "https://github.com/vadalasathwik",
    demo: "https://github.com/vadalasathwik",
    preview: "career",
    size: "lg",
    caseStudy: [
      {
        title: "Problem",
        body: "Job seekers struggle to understand how modern Applicant Tracking Systems (ATS) evaluate their resumes, leading to high rejection rates despite possessing relevant skills.",
      },
      {
        title: "Solution",
        body: "Built an end-to-end AI assistant that compares resume content with specific job requisitions, identifying precise keyword gaps and generating tailored ATS enhancement suggestions.",
      },
      { title: "Product Workflow", flow: careerFlow },
      {
        title: "AI & Parsing Engine",
        body: "Utilized Gemini AI with structured schema constraints to parse complex PDF/DOCX layouts, scoring semantic relevance and surfacing high-value missing technical competencies.",
      },
      {
        title: "Outcome & Impact",
        body: "Created a production-ready application with full Google authentication, instant ATS reporting, and actionable guidance for job applicants.",
      },
    ],
  },
  {
    slug: "fasthire99",
    name: "FastHire99",
    category: "Recruitment / AI SaaS",
    description:
      "A modern recruitment platform designed to simplify candidate discovery, job pipeline management, and AI-assisted hiring workflows for talent acquisition teams.",
    features: [
      "Candidate discovery & talent pool search",
      "Interactive Kanban job pipeline management",
      "AI-assisted candidate skill matching",
      "Automated interview screening scorecards",
      "Recruiter collaboration workflows",
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
    demo: "https://github.com/vadalasathwik",
    preview: "hire",
    size: "sm",
    caseStudy: [
      {
        title: "Overview",
        body: "FastHire99 modernizes talent acquisition by organizing candidate profiles into interactive pipelines and leveraging AI to rank candidate fit against open role requisitions.",
      },
      {
        title: "Key Highlights",
        body: "Designed with a focus on speed, seamless recruiter UX, and high-throughput data processing across job requisitions.",
      },
    ],
  },
  {
    slug: "fasttrade99",
    name: "FastTrade99",
    category: "FinTech / Trading Analytics",
    description:
      "A high-performance financial and trading dashboard providing real-time market data visualization, interactive chart analytics, and portfolio tracking.",
    features: [
      "Real-time financial charts & market metrics",
      "Interactive portfolio tracking dashboard",
      "Order book & transaction history view",
      "Customizable watchlist & technical indicators",
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
    demo: "https://github.com/vadalasathwik",
    preview: "trade",
    size: "sm",
    caseStudy: [
      {
        title: "Overview",
        body: "FastTrade99 brings desktop-grade financial telemetry into a sleek web dashboard, allowing traders to monitor market movements and portfolio balances cleanly.",
      },
      {
        title: "Technical Execution",
        body: "Optimized component re-rendering and data fetching to handle dynamic financial data feeds smoothly across desktop and mobile screens.",
      },
    ],
  },
];

export const experience = [
  {
    company: "GenAI Lakes",
    role: "Software Engineer / Full-Stack AI Developer",
    location: "Hyderabad, India",
    period: "2024 – Present",
    responsibilities: [
      "Engineer end-to-end full-stack applications leveraging Next.js, React, TypeScript, Python, and FastAPI.",
      "Design and implement robust RESTful APIs, microservices, and database schemas with PostgreSQL.",
      "Integrate cutting-edge Generative AI & Large Language Model (LLM) capabilities directly into core business workflows.",
      "Architect structured AI prompt templates and validation pipelines ensuring reliable, type-safe AI outputs.",
      "Collaborate across frontend, backend, and cloud layers to deliver high-performance, production-ready software.",
      "Implement secure user authentication, role-based access control, and seamless third-party service integrations.",
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

export const aiWorkflow = [
  "User Problem",
  "Product Workflow",
  "Backend / API",
  "AI / LLM Layer",
  "Structured Output",
  "Business Logic",
  "User Experience",
];

export const aiAreas = [
  {
    title: "AI Product Development",
    text: "Building production-grade AI features integrated into real software products, not isolated notebook scripts.",
  },
  {
    title: "LLM Orchestration & APIs",
    text: "Connecting models like Gemini into FastAPI backends with strict request schemas and error handling.",
  },
  {
    title: "Structured Output Pipelines",
    text: "Transforming raw model outputs into strongly-typed JSON schemas validated by Pydantic and TypeScript.",
  },
  {
    title: "Prompt Engineering & Evaluation",
    text: "Designing robust prompt architectures tailored for precision, context optimization, and low latency.",
  },
  {
    title: "Intelligent Document Analysis",
    text: "Extracting key metadata and structured insights from resumes, receipts, and complex PDF documents.",
  },
  {
    title: "AI Workflow Automation",
    text: "Automating manual business tasks by combining deterministic backend logic with LLM decision steps.",
  },
  {
    title: "Personalized Recommendations",
    text: "Generating context-aware career and financial guidance based on user data.",
  },
];

export const featuredRepos: {
  name: string;
  description: string;
  href: string;
  language: string;
}[] = [
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
    description: "Recruitment SaaS platform for candidate discovery and AI-assisted screening.",
    href: "https://github.com/vadalasathwik",
    language: "React / Python",
  },
  {
    name: "FastTrade99",
    description: "FinTech dashboard for real-time market data visual analytics.",
    href: "https://github.com/vadalasathwik",
    language: "TypeScript / Next.js",
  },
  {
    name: "Dr. Ashwin Ortho",
    description: "Custom healthcare appointment management platform and digital portal.",
    href: "https://github.com/vadalasathwik",
    language: "TypeScript",
  },
];

export const layers = [
  { name: "Frontend", tech: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { name: "Backend / APIs", tech: ["Python 3.11+", "FastAPI", "RESTful APIs", "Pydantic", "Node.js"] },
  { name: "Data & Storage", tech: ["PostgreSQL", "Prisma ORM", "SQLAlchemy", "Vector Databases"] },
  { name: "AI & Intelligence", tech: ["Google Gemini API", "LLM Orchestration", "Structured Outputs", "OCR / Vision"] },
];
