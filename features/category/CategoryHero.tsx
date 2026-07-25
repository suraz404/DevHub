import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "./Breadcrumb";

interface CategoryHeroProps {
  icon: string;
  name: string;
  description: string;
  toolCount: number;
  categoryHref: string;
}

export function CategoryHero({
  icon,
  name,
  description,
  toolCount,
  categoryHref,
}: CategoryHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-background via-background to-muted/40 px-6 py-10 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] sm:px-8 lg:px-12 lg:py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_40%)]" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-6">
          <Breadcrumb categoryName={name} categoryHref={categoryHref} />
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <Sparkles className="size-4" />
            Curated tools for modern builders
          </div>
          <div className="flex items-start gap-4">
            <div className="flex size-16 items-center justify-center rounded-3xl border border-border/70 bg-background/80 text-3xl shadow-sm sm:size-20">
              {icon}
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {name}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                {description}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm backdrop-blur">
          <p className="text-sm text-muted-foreground">Discover</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-semibold tracking-tight">
              {toolCount}
            </span>
            <span className="text-sm text-muted-foreground">tools</span>
          </div>
          <Badge className="mt-4 rounded-full">Ready to explore</Badge>
        </div>
      </div>
    </motion.section>
  );
}
