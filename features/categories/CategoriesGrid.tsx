import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

import type { Category } from "@/data/categories";

interface CategoriesGridProps {
  categories: Category[];
}

export function CategoriesGrid({ categories }: CategoriesGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {categories.map((category, index) => (
        <motion.article
          key={category.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.03, duration: 0.25 }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="group flex h-full flex-col rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-sm transition-shadow hover:shadow-lg"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="rounded-2xl border border-border/70 bg-background/70 p-3 text-xl">
              {category.icon}
            </div>
            {category.featured ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                <Sparkles className="size-3" />
                Featured
              </span>
            ) : null}
          </div>

          <div className="mt-6 space-y-2">
            <h3 className="text-lg font-semibold tracking-tight">
              {category.name}
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              {category.description}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
            <span className="text-sm font-medium text-muted-foreground">
              {category.toolCount} tools
            </span>
            <Link
              href={category.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3"
            >
              Explore
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
