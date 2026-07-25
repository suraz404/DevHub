"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { tools } from "@/data/tool";

import CategoryFilter from "./CategoryFilter";
import SortDropdown from "./SortDropdown";
import ToolsGrid from "./ToolsGrid";
import ToolsHero from "./ToolsHero";

export default function ToolsClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // URL Values
  const urlSearch = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "All";
  const sort = searchParams.get("sort") ?? "featured";

  // Local Search State
  const [search, setSearch] = useState(() => urlSearch);

  // Update URL Params
  const updateParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value === "" || value === "All") {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      router.replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  // Debounce Search
  useEffect(() => {
    const timer = setTimeout(() => {
      updateParams("search", search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, updateParams]);

  // Categories
  const categories = useMemo(() => {
    return ["All", ...new Set(tools.map((tool) => tool.category))];
  }, []);

  // Filter + Sort
  const filteredTools = useMemo(() => {
    let filtered = [...tools];

    if (search.trim()) {
      const query = search.toLowerCase();

      filtered = filtered.filter((tool) => {
        return (
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      });
    }

    if (category !== "All") {
      filtered = filtered.filter((tool) => tool.category === category);
    }

    switch (sort) {
      case "az":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "za":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case "trending":
        filtered.sort((a, b) => Number(b.trending) - Number(a.trending));
        break;

      case "new":
        filtered.sort((a, b) => Number(b.new) - Number(a.new));
        break;

      default:
        filtered.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return filtered;
  }, [search, category, sort]);

  return (
    <>
      <ToolsHero search={search} onSearch={setSearch} />

      <CategoryFilter
        categories={categories}
        selectedCategory={category}
        onCategoryChange={(value) => updateParams("category", value)}
      />

      <SortDropdown
        value={sort}
        onChange={(value) => updateParams("sort", value)}
      />

      <ToolsGrid tools={filteredTools} />
    </>
  );
}
