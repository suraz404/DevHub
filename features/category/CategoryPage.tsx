"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";

import type { Category } from "@/data/categories";
import type { Tool } from "@/data/tool";
import { CategoryHero } from "./CategoryHero";
import { CategoryStats } from "./CategoryStats";
import { CategorySearch } from "./CategorySearch";
import { CategorySort, type CategorySortValue } from "./CategorySort";
import { CategoryToolsGrid } from "./CategoryToolsGrid";
import { RelatedCategories } from "./RelatedCategories";
import { EmptyState } from "./EmptyState";

interface CategoryPageProps {
  category: Category;
  tools: Tool[];
  relatedCategories: Category[];
}

export function CategoryPage({
  category,
  tools,
  relatedCategories,
}: CategoryPageProps) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<CategorySortValue>("featured");

  const filteredTools = useMemo(() => {
    const query = search.trim().toLowerCase();
    let nextTools = [...tools];

    if (query) {
      nextTools = nextTools.filter((tool) => {
        const haystack =
          `${tool.name} ${tool.description} ${tool.tags.join(" ")}`.toLowerCase();
        return haystack.includes(query);
      });
    }

    switch (sortBy) {
      case "trending":
        nextTools.sort((a, b) => Number(b.trending) - Number(a.trending));
        break;
      case "new":
        nextTools.sort((a, b) => Number(b.new) - Number(a.new));
        break;
      case "verified":
        nextTools.sort((a, b) => Number(b.verified) - Number(a.verified));
        break;
      case "az":
        nextTools.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        nextTools.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "featured":
      default:
        nextTools.sort((a, b) => Number(b.featured) - Number(a.featured));
        break;
    }

    return nextTools;
  }, [search, sortBy, tools]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8"
    >
      <CategoryHero
        icon={category.icon}
        name={category.name}
        description={category.description}
        toolCount={tools.length}
        categoryHref={category.href}
      />

      <CategoryStats
        totalTools={tools.length}
        featuredTools={tools.filter((tool) => tool.featured).length}
        trendingTools={tools.filter((tool) => tool.trending).length}
        verifiedTools={tools.filter((tool) => tool.verified).length}
      />

      <div className="rounded-3xl border border-border/70 bg-background/70 p-4 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <CategorySearch value={search} onChange={setSearch} />
          <CategorySort value={sortBy} onChange={setSortBy} />
        </div>
      </div>

      {filteredTools.length === 0 ? (
        <EmptyState onClear={() => setSearch("")} />
      ) : (
        <CategoryToolsGrid tools={filteredTools} />
      )}

      <RelatedCategories categories={relatedCategories} />
    </motion.div>
  );
}
