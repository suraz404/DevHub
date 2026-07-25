import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SortOption = "featured" | "name-asc" | "name-desc" | "tools-desc";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="w-full max-w-55">
      <label
        htmlFor="sort-categories"
        className="mb-2 block text-sm font-medium text-foreground"
      >
        Sort by
      </label>
      <Select
        value={value}
        onValueChange={(nextValue) => {
          if (nextValue !== null) {
            onChange(nextValue as SortOption);
          }
        }}
      >
        <SelectTrigger id="sort-categories" className="w-full rounded-2xl">
          <SelectValue placeholder="Featured" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="featured">Featured</SelectItem>
          <SelectItem value="name-asc">A → Z</SelectItem>
          <SelectItem value="name-desc">Z → A</SelectItem>
          <SelectItem value="tools-desc">Most Tools</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
