import { Button } from "@/components/ui/button";

type FilterOption =
  | "All"
  | "Featured"
  | "Framework"
  | "CSS"
  | "UI Library"
  | "Animation"
  | "Database"
  | "Backend"
  | "Authentication"
  | "AI"
  | "Deployment"
  | "Design"
  | "Icons"
  | "DevOps"
  | "API"
  | "Language"
  | "State Management"
  | "Testing"
  | "Payment"
  | "Productivity";

interface CategoryFilterProps {
  options: readonly FilterOption[];
  value: FilterOption;
  onChange: (value: FilterOption) => void;
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
            className={`rounded-full px-4 py-2 text-sm transition-all ${
              isActive
                ? "bg-primary text-primary-foreground shadow-md"
                : "hover:bg-muted"
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
