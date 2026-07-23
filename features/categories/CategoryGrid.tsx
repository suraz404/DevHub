import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";

const CategoriesGrid = () => {
  return (
    <div className="mt-12 px-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesGrid;
