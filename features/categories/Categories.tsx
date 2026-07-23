import { Section } from "@/components/common/Section";

import CategoriesGrid from "./CategoryGrid";

const Categories = () => {
  return (
    <Section>
      <div className=" mb-16 space-y-3 text-center">
        <h2 className="text-5xl mb-4 font-bold tracking-tight">
          Explore Categories
        </h2>

        <p className="mx-auto max-w-2xl text-muted-foreground">
          Discover the best developer resources organized into carefully curated
          categories.
        </p>
      </div>

      <CategoriesGrid />
    </Section>
  );
};

export default Categories;
