import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="w-full max-w-xl">
      <label htmlFor="category-search" className="sr-only">
        Search categories
      </label>
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id="category-search"
          type="search"
          placeholder="Search categories or topics"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-11 rounded-2xl border-border/80 bg-background/80 pl-9 shadow-sm"
          aria-label="Search categories"
        />
      </div>
    </div>
  );
}
