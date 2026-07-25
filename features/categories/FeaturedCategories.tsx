import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

import type { Category } from "@/data/categories";

interface FeaturedCategoriesProps {
  categories: Category[];
}

export function FeaturedCategories({ categories }: FeaturedCategoriesProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Featured collections
          </h2>
          <p className="text-sm text-muted-foreground">
            Highlights from the most popular developer ecosystems.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {categories.map((category, index) => (
          <motion.article
            key={category.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.25 }}
            className="group relative overflow-hidden rounded-[1.6rem] border border-border/70 bg-card p-6 shadow-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
            <div className="relative flex h-full flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="rounded-full border border-primary/15 bg-primary/5 p-2 text-primary">
                  <Sparkles className="size-4" />
                </div>
                <span className="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  Featured
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-border/70 pt-4">
                <span className="text-sm font-medium text-muted-foreground">
                  {category.toolCount} tools
                </span>
                <Link
                  href={category.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-transform group-hover:translate-x-1"
                >
                  Explore
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
