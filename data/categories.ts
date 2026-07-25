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
  name: string;
  description: string;
  icon: string;
  href: string;
  color: string;
  group: CategoryGroup;
  featured: boolean;
  toolCount: number;
}

export const categories: Category[] = [
  {
    id: "ui-libraries",
    name: "UI Libraries",
    description:
      "Modern React and CSS component libraries for polished interfaces.",
    icon: "🎨",
    href: "/categories/ui-libraries",
    color: "from-violet-500 to-purple-500",
    group: "Frontend",
    featured: true,
    toolCount: 42,
  },
  {
    id: "ai-tools",
    name: "AI Tools",
    description:
      "Boost productivity with coding assistants, copilots, and research helpers.",
    icon: "🤖",
    href: "/categories/ai-tools",
    color: "from-blue-500 to-cyan-500",
    group: "AI",
    featured: true,
    toolCount: 88,
  },
  {
    id: "apis",
    name: "APIs",
    description:
      "Reliable APIs that power everything from onboarding to analytics.",
    icon: "🔌",
    href: "/categories/apis",
    color: "from-green-500 to-emerald-500",
    group: "Backend",
    featured: true,
    toolCount: 64,
  },
  {
    id: "design-systems",
    name: "Design Systems",
    description:
      "Tokens, patterns, and libraries for product teams building consistently.",
    icon: "🧩",
    href: "/categories/design-systems",
    color: "from-fuchsia-500 to-pink-500",
    group: "Design",
    featured: true,
    toolCount: 39,
  },
  {
    id: "databases",
    name: "Databases",
    description:
      "Managed data stores and ORMs for modern application backends.",
    icon: "🗄️",
    href: "/categories/databases",
    color: "from-sky-500 to-indigo-500",
    group: "Database",
    featured: true,
    toolCount: 57,
  },
  {
    id: "devops",
    name: "DevOps",
    description: "Deployment automation, observability, and delivery tooling.",
    icon: "⚙️",
    href: "/categories/devops",
    color: "from-slate-500 to-zinc-600",
    group: "DevOps",
    featured: true,
    toolCount: 44,
  },
  {
    id: "hosting",
    name: "Hosting",
    description:
      "Fast, global hosting platforms for apps, APIs, and static content.",
    icon: "☁️",
    href: "/categories/hosting",
    color: "from-emerald-500 to-lime-500",
    group: "Hosting",
    featured: false,
    toolCount: 33,
  },
  {
    id: "mobile",
    name: "Mobile",
    description:
      "Cross-platform tooling for shipping beautiful mobile products.",
    icon: "📱",
    href: "/categories/mobile",
    color: "from-orange-500 to-amber-500",
    group: "Mobile",
    featured: false,
    toolCount: 26,
  },
  {
    id: "testing",
    name: "Testing",
    description:
      "Automated quality gates for reliable releases and confident shipping.",
    icon: "🧪",
    href: "/categories/testing",
    color: "from-cyan-500 to-sky-500",
    group: "Testing",
    featured: false,
    toolCount: 18,
  },
  {
    id: "backend-frameworks",
    name: "Backend Frameworks",
    description:
      "Scalable server frameworks for APIs, services, and full-stack products.",
    icon: "🛠️",
    href: "/categories/backend-frameworks",
    color: "from-rose-500 to-orange-500",
    group: "Backend",
    featured: false,
    toolCount: 21,
  },
  {
    id: "frontend-frameworks",
    name: "Frontend Frameworks",
    description:
      "High-performance stacks for modern interactive user experiences.",
    icon: "⚛️",
    href: "/categories/frontend-frameworks",
    color: "from-indigo-500 to-blue-500",
    group: "Frontend",
    featured: false,
    toolCount: 31,
  },
  {
    id: "open-source",
    name: "Open Source",
    description:
      "Popular GitHub projects that power modern developer workflows.",
    icon: "💻",
    href: "/categories/open-source",
    color: "from-orange-500 to-red-500",
    group: "Frontend",
    featured: false,
    toolCount: 27,
  },
];
