export type CategoryGroup = "Featured";
("Framework");
("CSS");
("UI Library");
("Animation");
("Database");
("Backend");
("Authentication");
("AI");
("Deployment");
("Design");
("Icons");
("DevOps");
("API");
("Language");
("State Management");
("Testing");
("Payment");
("Productivity");

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  color: string;
  featured: boolean;
  toolCount: number;
  toolCategory: string;
}

export const categories: Category[] = [
  {
    id: "framework",
    slug: "framework",
    name: "Framework",
    description:
      "Modern frontend and full-stack frameworks for building web applications.",
    icon: "⚛️",
    href: "/categories/framework",
    color: "from-violet-500 to-purple-500",

    featured: true,
    toolCount: 18,
    toolCategory: "Framework",
  },
  {
    id: "css",
    slug: "css",
    name: "CSS",
    description:
      "CSS frameworks, preprocessors and utility-first styling libraries.",
    icon: "🎨",
    href: "/categories/css",
    color: "from-sky-500 to-cyan-500",

    featured: true,
    toolCount: 14,
    toolCategory: "CSS",
  },
  {
    id: "ui-library",
    slug: "ui-library",
    name: "UI Library",
    description:
      "Reusable UI components and design systems for modern applications.",
    icon: "🧩",
    href: "/categories/ui-library",
    color: "from-indigo-500 to-violet-500",

    featured: true,
    toolCount: 20,
    toolCategory: "UI Library",
  },
  {
    id: "animation",
    slug: "animation",
    name: "Animation",
    description:
      "Animation libraries for smooth interactions and delightful experiences.",
    icon: "✨",
    href: "/categories/animation",
    color: "from-pink-500 to-rose-500",

    featured: true,
    toolCount: 10,
    toolCategory: "Animation",
  },
  {
    id: "database",
    slug: "database",
    name: "Database",
    description:
      "Databases, ORMs and data platforms for scalable applications.",
    icon: "🗄️",
    href: "/categories/database",
    color: "from-emerald-500 to-teal-500",

    featured: true,
    toolCount: 15,
    toolCategory: "Database",
  },
  {
    id: "backend",
    slug: "backend",
    name: "Backend",
    description: "Server frameworks, APIs and backend development tools.",
    icon: "⚙️",
    href: "/categories/backend",
    color: "from-orange-500 to-red-500",

    featured: true,
    toolCount: 17,
    toolCategory: "Backend",
  },
  {
    id: "authentication",
    slug: "authentication",
    name: "Authentication",
    description:
      "Secure authentication, authorization and user management platforms.",
    icon: "🔐",
    href: "/categories/authentication",
    color: "from-green-500 to-emerald-500",

    featured: true,
    toolCount: 9,
    toolCategory: "Authentication",
  },
  {
    id: "ai",
    slug: "ai",
    name: "AI",
    description: "AI models, assistants and APIs that accelerate development.",
    icon: "🤖",
    href: "/categories/ai",
    color: "from-blue-500 to-indigo-500",

    featured: true,
    toolCount: 22,
    toolCategory: "AI",
  },
  {
    id: "deployment",
    slug: "deployment",
    name: "Deployment",
    description:
      "Deploy, host and scale applications with modern cloud platforms.",
    icon: "🚀",
    href: "/categories/deployment",
    color: "from-lime-500 to-green-500",

    featured: true,
    toolCount: 12,
    toolCategory: "Deployment",
  },
  {
    id: "design",
    slug: "design",
    name: "Design",
    description:
      "Design, prototyping and collaboration tools for product teams.",
    icon: "🎨",
    href: "/categories/design",
    color: "from-fuchsia-500 to-pink-500",

    featured: true,
    toolCount: 11,
    toolCategory: "Design",
  },
  {
    id: "icons",
    slug: "icons",
    name: "Icons",
    description:
      "Beautiful icon packs for web, mobile and desktop applications.",
    icon: "🖼️",
    href: "/categories/icons",
    color: "from-amber-500 to-orange-500",

    featured: false,
    toolCount: 8,
    toolCategory: "Icons",
  },
  {
    id: "devops",
    slug: "devops",
    name: "DevOps",
    description: "CI/CD, monitoring and infrastructure automation tools.",
    icon: "🛠️",
    href: "/categories/devops",
    color: "from-slate-500 to-zinc-700",

    featured: false,
    toolCount: 13,
    toolCategory: "DevOps",
  },
  {
    id: "api",
    slug: "api",
    name: "API",
    description:
      "Developer APIs that power payments, messaging, storage and more.",
    icon: "🔌",
    href: "/categories/api",
    color: "from-cyan-500 to-blue-500",

    featured: false,
    toolCount: 16,
    toolCategory: "API",
  },
  {
    id: "language",
    slug: "language",
    name: "Language",
    description:
      "Programming languages and runtimes for modern software development.",
    icon: "💻",
    href: "/categories/language",
    color: "from-purple-500 to-indigo-500",

    featured: false,
    toolCount: 7,
    toolCategory: "Language",
  },
  {
    id: "state-management",
    slug: "state-management",
    name: "State Management",
    description:
      "Libraries for managing client-side application state efficiently.",
    icon: "🧠",
    href: "/categories/state-management",
    color: "from-teal-500 to-cyan-500",

    featured: false,
    toolCount: 10,
    toolCategory: "State Management",
  },
  {
    id: "testing",
    slug: "testing",
    name: "Testing",
    description:
      "Testing frameworks and tools for building reliable applications.",
    icon: "🧪",
    href: "/categories/testing",
    color: "from-sky-500 to-cyan-500",

    featured: false,
    toolCount: 9,
    toolCategory: "Testing",
  },
  {
    id: "payment",
    slug: "payment",
    name: "Payment",
    description:
      "Payment gateways and billing platforms for modern applications.",
    icon: "💳",
    href: "/categories/payment",
    color: "from-green-500 to-lime-500",

    featured: false,
    toolCount: 6,
    toolCategory: "Payment",
  },
  {
    id: "productivity",
    slug: "productivity",
    name: "Productivity",
    description:
      "Tools that help developers collaborate, organize and ship faster.",
    icon: "📈",
    href: "/categories/productivity",
    color: "from-yellow-500 to-orange-500",

    featured: false,
    toolCount: 12,
    toolCategory: "Productivity",
  },
];
