"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type CategorySortValue =
  | "featured"
  | "trending"
  | "new"
  | "verified"
  | "az"
  | "za";

interface CategorySortProps {
  value: CategorySortValue;
  onChange: (value: CategorySortValue) => void;
}

export function CategorySort({ value, onChange }: CategorySortProps) {
  return (
    <div className="w-full max-w-56">
      <label
        htmlFor="category-sort"
        className="mb-2 block text-sm font-medium text-foreground"
      >
        Sort by
      </label>
      <Select
        value={value}
        onValueChange={(nextValue) => {
          if (nextValue !== null) {
            onChange(nextValue as CategorySortValue);
          }
        }}
      >
        <SelectTrigger id="category-sort" className="w-full rounded-2xl">
          <SelectValue placeholder="Featured" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="featured">Featured</SelectItem>
          <SelectItem value="trending">Trending</SelectItem>
          <SelectItem value="new">New</SelectItem>
          <SelectItem value="verified">Verified</SelectItem>
          <SelectItem value="az">A → Z</SelectItem>
          <SelectItem value="za">Z → A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
