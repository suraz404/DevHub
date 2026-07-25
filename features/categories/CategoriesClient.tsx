"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { SearchIcon } from "lucide-react";

import {
  categories as initialCategories,
  type CategoryGroup,
} from "@/data/categories";
import { CategoriesHero } from "./CategoriesHero";
import { CategoryFilter } from "./CategoryFilter";
import { SearchBar } from "./SearchBar";
import { SortDropdown } from "./SortDropdown";
import { Stats } from "./Stats";
import { FeaturedCategories } from "./FeaturedCategories";
import CategoriesGrid from "./CategoriesGrid";
import { Pagination } from "./Pagination";
import { EmptyState } from "./EmptyState";

const PAGE_SIZE = 12;
const FILTER_OPTIONS: ReadonlyArray<CategoryGroup | "All" | "Featured"> = [
  "All",
  "Featured",
  "Frontend",
  "Backend",
  "AI",
  "Database",
  "Design",
  "DevOps",
  "Hosting",
  "Mobile",
  "Testing",
];

type SortOption = "featured" | "name-asc" | "name-desc" | "tools-desc";

type FilterOption = (typeof FILTER_OPTIONS)[number];

export function CategoriesClient() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("All");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [page, setPage] = useState(1);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleFilterChange = (value: FilterOption) => {
    setSelectedFilter(value);
    setPage(1);
  };

  const handleSortChange = (value: SortOption) => {
    setSortBy(value);
    setPage(1);
  };

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    const normalized = initialCategories.filter((category) => {
      const matchesQuery =
        !query ||
        category.name.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query);

      const matchesFilter =
        selectedFilter === "All"
          ? true
          : selectedFilter === "Featured"
            ? category.featured
            : category.group === selectedFilter;

      return matchesQuery && matchesFilter;
    });

    return [...normalized].sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "tools-desc":
          return b.toolCount - a.toolCount;
        case "featured":
        default:
          return Number(b.featured) - Number(a.featured);
      }
    });
  }, [search, selectedFilter, sortBy]);

  const featuredCategories = useMemo(
    () =>
      filteredCategories.filter((category) => category.featured).slice(0, 3),
    [filteredCategories],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCategories.length / PAGE_SIZE),
  );
  const startIndex = (page - 1) * PAGE_SIZE;
  const paginatedCategories = filteredCategories.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );

  const stats = useMemo(
    () => [
      {
        label: "Categories",
        value: `${initialCategories.length}`,
        icon: SearchIcon,
      },
      {
        label: "Tools",
        value: `${initialCategories.reduce((sum, category) => sum + category.toolCount, 0)}+`,
        icon: SearchIcon,
      },
      {
        label: "Open Source",
        value: "50+",
        icon: SearchIcon,
      },
      {
        label: "Updated",
        value: "Weekly",
        icon: SearchIcon,
      },
    ],
    [],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8"
    >
      <CategoriesHero />

      <div className="rounded-3xl border border-border/70 bg-background/70 p-4 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SearchBar value={search} onChange={handleSearchChange} />
          <SortDropdown value={sortBy} onChange={handleSortChange} />
        </div>

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <CategoryFilter
            options={FILTER_OPTIONS}
            value={selectedFilter}
            onChange={handleFilterChange}
          />
          <p className="text-sm text-muted-foreground">
            Showing {filteredCategories.length}{" "}
            {filteredCategories.length === 1 ? "category" : "categories"}
          </p>
        </div>
      </div>

      <Stats items={stats} />

      {featuredCategories.length > 0 ? (
        <FeaturedCategories categories={featuredCategories} />
      ) : null}

      {filteredCategories.length > 0 ? (
        <>
          <CategoriesGrid categories={paginatedCategories} />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      ) : (
        <EmptyState onClear={() => setSearch("")} />
      )}
    </motion.div>
  );
}
