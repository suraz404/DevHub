import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { categories } from "@/data/categories";
import { tools } from "@/data/tool";
import { CategoryPage } from "@/features/category/CategoryPage";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const currentCategory = categories.find((item) => item.slug === category);

  if (!currentCategory) {
    return {
      title: "Category Not Found | DevHub",
      description: "The requested developer category could not be found.",
    };
  }

  return {
    title: `${currentCategory.name} | DevHub`,
    description: `Explore the best ${currentCategory.name} developer tools, libraries and resources.`,
  };
}

export default async function CategoryDetailsPage({ params }: PageProps) {
  const { category } = await params;
  const currentCategory = categories.find((item) => item.slug === category);

  if (!currentCategory) {
    notFound();
  }

  const categoryTools = tools.filter(
    (tool) =>
      tool.category.toLowerCase() ===
      currentCategory.toolCategory.toLowerCase(),
  );

  const relatedCategories = categories
    .filter((item) => item.slug !== currentCategory.slug)
    .sort((a, b) => b.toolCount - a.toolCount)
    .slice(0, 4);

  return (
    <Section className="py-12 md:py-16">
      <Container>
        <CategoryPage
          category={currentCategory}
          tools={categoryTools}
          relatedCategories={relatedCategories}
        />
      </Container>
    </Section>
  );
}
