export type CategoryGroup =
  | "Frontend"
  | "Backend"
  | "AI"
  | "Database"
  | "Design"
  | "DevOps"
  | "Hosting"
  | "Mobile"
  | "Testing";

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  color: string;
  group: CategoryGroup;
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
      "Build modern web applications using React, Next.js, Vue, Svelte and more.",
    icon: "⚛️",
    href: "/categories/framework",
    color: "from-violet-500 to-purple-500",
    group: "Frontend",
    featured: true,
    toolCount: 15,
    toolCategory: "Framework",
  },
  {
    id: "ai",
    slug: "ai",
    name: "AI",
    description:
      "Discover copilots, assistants, and automation workflows for modern teams.",
    icon: "🤖",
    href: "/categories/ai",
    color: "from-blue-500 to-cyan-500",
    group: "AI",
    featured: true,
    toolCount: 18,
    toolCategory: "AI",
  },
  {
    id: "database",
    slug: "database",
    name: "Database",
    description:
      "Managed databases, ORMs, and persistence tools for shipping reliable products.",
    icon: "🗄️",
    href: "/categories/database",
    color: "from-sky-500 to-indigo-500",
    group: "Database",
    featured: true,
    toolCount: 12,
    toolCategory: "Database",
  },
  {
    id: "design",
    slug: "design",
    name: "Design",
    description:
      "The best design systems, prototyping, and collaboration tools for builders.",
    icon: "🎨",
    href: "/categories/design",
    color: "from-fuchsia-500 to-pink-500",
    group: "Design",
    featured: true,
    toolCount: 9,
    toolCategory: "Design",
  },
  {
    id: "ui-libraries",
    slug: "ui-libraries",
    name: "UI Libraries",
    description:
      "Modern React and CSS component libraries for polished interfaces.",
    icon: "🎨",
    href: "/categories/ui-libraries",
    color: "from-violet-500 to-purple-500",
    group: "Frontend",
    featured: true,
    toolCount: 42,
    toolCategory: "UI Libraries",
  },
  {
    id: "ai-tools",
    slug: "ai-tools",
    name: "AI Tools",
    description:
      "Boost productivity with coding assistants, copilots, and research helpers.",
    icon: "🤖",
    href: "/categories/ai-tools",
    color: "from-blue-500 to-cyan-500",
    group: "AI",
    featured: true,
    toolCount: 88,
    toolCategory: "AI",
  },
  {
    id: "apis",
    slug: "apis",
    name: "APIs",
    description:
      "Reliable APIs that power everything from onboarding to analytics.",
    icon: "🔌",
    href: "/categories/apis",
    color: "from-green-500 to-emerald-500",
    group: "Backend",
    featured: true,
    toolCount: 64,
    toolCategory: "API",
  },
  {
    id: "design-systems",
    slug: "design-systems",
    name: "Design Systems",
    description:
      "Tokens, patterns, and libraries for product teams building consistently.",
    icon: "🧩",
    href: "/categories/design-systems",
    color: "from-fuchsia-500 to-pink-500",
    group: "Design",
    featured: true,
    toolCount: 39,
    toolCategory: "Design",
  },
  {
    id: "databases",
    slug: "databases",
    name: "Databases",
    description:
      "Managed data stores and ORMs for modern application backends.",
    icon: "🗄️",
    href: "/categories/databases",
    color: "from-sky-500 to-indigo-500",
    group: "Database",
    featured: true,
    toolCount: 57,
    toolCategory: "Database",
  },
  {
    id: "devops",
    slug: "devops",
    name: "DevOps",
    description: "Deployment automation, observability, and delivery tooling.",
    icon: "⚙️",
    href: "/categories/devops",
    color: "from-slate-500 to-zinc-600",
    group: "DevOps",
    featured: true,
    toolCount: 44,
    toolCategory: "DevOps",
  },
  {
    id: "hosting",
    slug: "hosting",
    name: "Hosting",
    description:
      "Fast, global hosting platforms for apps, APIs, and static content.",
    icon: "☁️",
    href: "/categories/hosting",
    color: "from-emerald-500 to-lime-500",
    group: "Hosting",
    featured: false,
    toolCount: 33,
    toolCategory: "Hosting",
  },
  {
    id: "mobile",
    slug: "mobile",
    name: "Mobile",
    description:
      "Cross-platform tooling for shipping beautiful mobile products.",
    icon: "📱",
    href: "/categories/mobile",
    color: "from-orange-500 to-amber-500",
    group: "Mobile",
    featured: false,
    toolCount: 26,
    toolCategory: "Mobile",
  },
  {
    id: "testing",
    slug: "testing",
    name: "Testing",
    description:
      "Automated quality gates for reliable releases and confident shipping.",
    icon: "🧪",
    href: "/categories/testing",
    color: "from-cyan-500 to-sky-500",
    group: "Testing",
    featured: false,
    toolCount: 18,
    toolCategory: "Testing",
  },
  {
    id: "backend-frameworks",
    slug: "backend-frameworks",
    name: "Backend Frameworks",
    description:
      "Scalable server frameworks for APIs, services, and full-stack products.",
    icon: "🛠️",
    href: "/categories/backend-frameworks",
    color: "from-rose-500 to-orange-500",
    group: "Backend",
    featured: false,
    toolCount: 21,
    toolCategory: "Backend",
  },
  {
    id: "frontend-frameworks",
    slug: "frontend-frameworks",
    name: "Frontend Frameworks",
    description:
      "High-performance stacks for modern interactive user experiences.",
    icon: "⚛️",
    href: "/categories/frontend-frameworks",
    color: "from-indigo-500 to-blue-500",
    group: "Frontend",
    featured: false,
    toolCount: 31,
    toolCategory: "Frontend",
  },
  {
    id: "open-source",
    slug: "open-source",
    name: "Open Source",
    description:
      "Popular GitHub projects that power modern developer workflows.",
    icon: "💻",
    href: "/categories/open-source",
    color: "from-orange-500 to-red-500",
    group: "Frontend",
    featured: false,
    toolCount: 27,
    toolCategory: "Open Source",
  },
];
