"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Category } from "@/data/categories";

interface CategoriesGridProps {
  categories: Category[];
}

export default function CategoriesGrid({ categories }: CategoriesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {categories.map((category, index) => (
        <Link key={category.id} href={category.href} className="block h-full">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.04,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-2xl"
          >
            {/* Hover Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex h-full flex-col">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border bg-background text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {category.icon}
                </div>

                {category.featured && (
                  <Badge className="rounded-full">
                    <Sparkles className="mr-1 h-3 w-3" />
                    Featured
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-xl font-bold">{category.name}</h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {category.description}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between border-t pt-6">
                <Badge variant="secondary">{category.toolCount} Tools</Badge>

                <div className="flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                  Explore
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </motion.article>
        </Link>
      ))}
    </div>
  );
}
