import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";

interface Props {
  category: (typeof categories)[number];
}

const CategoryCard = ({ category }: Props) => {
  return (
    <Link
      href={category.href}
      className=" group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg "
    >
      <div className="mb-5 text-4xl">{category.icon}</div>

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{category.name}</h3>

        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        {category.description}
      </p>
    </Link>
  );
};

export default CategoryCard;
