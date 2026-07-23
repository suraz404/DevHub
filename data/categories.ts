interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: "ui-libraries",
    name: "UI Libraries",
    description: "Modern React & CSS component libraries",
    icon: "🎨",
    href: "/categories/ui-libraries",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "ai-tools",
    name: "AI Tools",
    description: "Boost productivity with AI",
    icon: "🤖",
    href: "/categories/ai-tools",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "apis",
    name: "APIs",
    description: "Powerful APIs for every project",
    icon: "🔌",
    href: "/categories/apis",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "open-source",
    name: "Open Source",
    description: "Popular GitHub projects",
    icon: "💻",
    href: "/categories/open-source",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "icons",
    name: "Icons",
    description: "Beautiful icon collections",
    icon: "✨",
    href: "/categories/icons",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "fonts",
    name: "Fonts",
    description: "Modern typography resources",
    icon: "🔤",
    href: "/categories/fonts",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: "animations",
    name: "Animations",
    description: "Motion libraries & effects",
    icon: "🎬",
    href: "/categories/animations",
    color: "from-cyan-500 to-sky-500",
  },
  {
    id: "color-palettes",
    name: "Color Palettes",
    description: "Beautiful color inspiration",
    icon: "🎨",
    href: "/categories/color-palettes",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "design-tools",
    name: "Design Tools",
    description: "Tools for UI & UX designers",
    icon: "🖌️",
    href: "/categories/design-tools",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    id: "developer-tools",
    name: "Developer Tools",
    description: "Utilities to improve your workflow",
    icon: "🛠️",
    href: "/categories/developer-tools",
    color: "from-slate-500 to-gray-600",
  },
];
