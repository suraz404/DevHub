"use client";

import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

interface CategorySearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function CategorySearch({ value, onChange }: CategorySearchProps) {
  return (
    <div className="w-full max-w-xl">
      <label htmlFor="category-tool-search" className="sr-only">
        Search tools in this category
      </label>
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id="category-tool-search"
          type="search"
          placeholder="Search within this category"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-11 rounded-2xl border-border/80 bg-background/80 pl-9 shadow-sm"
          aria-label="Search tools in this category"
        />
      </div>
    </div>
  );
}
