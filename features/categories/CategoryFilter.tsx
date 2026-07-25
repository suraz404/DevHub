import { Button } from "@/components/ui/button";
import { type CategoryGroup } from "@/data/categories";

interface CategoryFilterProps {
  options: ReadonlyArray<CategoryGroup | "All" | "Featured">;
  value: CategoryGroup | "All" | "Featured";
  onChange: (value: CategoryGroup | "All" | "Featured") => void;
}

export function CategoryFilter({
  options,
  value,
  onChange,
}: CategoryFilterProps) {
  return (
    <div
      className="flex flex-wrap items-center gap-2"
      role="tablist"
      aria-label="Category filters"
    >
      {options.map((option) => {
        const isActive = value === option;

        return (
          <Button
            key={option}
            type="button"
            variant={isActive ? "default" : "outline"}
            className={`rounded-full px-3 py-1.5 text-sm transition-all ${
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "hover:bg-muted hover:text-foreground"
            }`}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option)}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
}
