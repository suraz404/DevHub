import { Sparkles } from "lucide-react";

export function CategoriesHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-background via-background to-muted/50 px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_45%)]" />
      <div className="relative max-w-3xl space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
          <Sparkles className="size-4" />
          Curated for modern builders
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Browse developer categories
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Explore carefully curated collections of frameworks, AI tools, APIs,
            design resources, databases, deployment platforms, testing tools,
            and more.
          </p>
        </div>
      </div>
    </section>
  );
}
