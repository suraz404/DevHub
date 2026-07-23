import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";
import Link from "next/link";

const CategoriesGrid = () => {
  return (
    <div
      className=" 
     mt-8 px-6 py-6   "
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      <div className="mb-8 flex items-center justify-end">
        <Link
          href="/categories"
          className="rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          View All →
        </Link>
      </div>
    </div>
  );
};

export default CategoriesGrid;
