import { Badge } from "@/components/ui/badge";

interface Props {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: Props) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <Badge
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`cursor-pointer rounded-full px-5 py-2 transition

            ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary hover:text-primary-foreground"
            }
          `}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
}
