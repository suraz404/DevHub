import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Category } from "@/data/categories";

interface RelatedCategoriesProps {
  categories: Category[];
}

export function RelatedCategories({ categories }: RelatedCategoriesProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Related categories
        </h2>
        <p className="text-sm text-muted-foreground">
          Continue exploring nearby collections that match your workflow.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-[1.4rem] border border-border/70 bg-card/80 p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="rounded-2xl border border-border/70 bg-background/70 p-2 text-xl">
                {category.icon}
              </div>
              <div className="rounded-full border border-primary/15 bg-primary/5 p-2 text-primary">
                <Sparkles className="size-4" />
              </div>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{category.name}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {category.toolCount} tools
            </p>
            <Link
              href={category.href}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-input bg-background px-3 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              Explore
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
