"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { tools } from "@/data/tool";

import ToolsHero from "./ToolsHero";
import CategoryFilter from "./CategoryFilter";
import SortDropdown from "./SortDropdown";
import ToolsGrid from "./ToolsGrid";
import ToolsPagination from "./Pagination";
import NotFound from "@/src/app/not-found";

const ITEMS_PER_PAGE = 8;

export default function ToolsClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlSearch = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "All";
  const sort = searchParams.get("sort") ?? "featured";
  const page = Number(searchParams.get("page") ?? "1");

  const [search, setSearch] = useState(urlSearch);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setSearch((prev) => (prev === urlSearch ? prev : urlSearch));
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [urlSearch]);

  const updateParams = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === "" || value === "All") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

      router.replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  // Debounced search
  useEffect(() => {
    if (search === urlSearch) return;

    const timer = setTimeout(() => {
      updateParams({
        search,
        page: "1",
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [search, urlSearch, updateParams]);

  const categories = useMemo(
    () => ["All", ...new Set(tools.map((tool) => tool.category))],
    [],
  );

  const filteredTools = useMemo(() => {
    let filtered = [...tools];

    const query = search.trim().toLowerCase();

    if (query) {
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

  const totalPages = Math.max(
    1,
    Math.ceil(filteredTools.length / ITEMS_PER_PAGE),
  );

  const currentPage = Math.min(page, totalPages);

  const paginatedTools = filteredTools.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <>
      <ToolsHero search={search} onSearch={setSearch} />

      <CategoryFilter
        categories={categories}
        selectedCategory={category}
        onCategoryChange={(value) =>
          updateParams({
            category: value,
            page: "1",
          })
        }
      />

      <SortDropdown
        value={sort}
        onChange={(value) =>
          updateParams({
            sort: value,
            page: "1",
          })
        }
      />

      {paginatedTools.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <ToolsGrid tools={paginatedTools} />

          <ToolsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(newPage) =>
              updateParams({
                page: String(newPage),
              })
            }
          />
        </>
      )}
    </>
  );
}
