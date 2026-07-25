"use client";

import { motion } from "motion/react";
import { ArrowRight, Compass, Layers3, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "Curated discovery",
    description:
      "Find polished developer tools without digging through noisy lists or stale directories.",
    icon: Compass,
  },
  {
    title: "Built for modern teams",
    description:
      "Organize resources by category, workflow, and product maturity so your stack stays clear.",
    icon: Layers3,
  },
  {
    title: "Fast decisions",
    description:
      "Surface the right tools with helpful metadata, search, and thoughtful design cues.",
    icon: Zap,
  },
];

export function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-background via-background to-muted/40 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] sm:p-10 lg:p-14"
      >
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <Badge className="rounded-full px-3 py-1">
              <Sparkles className="mr-2 size-3" />
              About DevHub
            </Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                A cleaner way to find the right developer tools.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                DevHub helps product builders, founders, and engineering teams
                discover modern tools through a thoughtful, premium browsing
                experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/categories"
                className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Explore categories
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                Browse tools
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08, duration: 0.35 }}
            className="rounded-[1.75rem] border border-border/70 bg-background/80 p-6 shadow-sm"
          >
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Why DevHub exists
              </p>
              <p className="text-lg leading-8 text-muted-foreground">
                We believe great tools should feel easy to discover. DevHub
                brings structure to the modern stack with curated categories,
                crisp search, and a scalable experience for growing teams.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div className="grid gap-4 lg:grid-cols-3">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;

          return (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-sm"
            >
              <div className="rounded-2xl border border-border/70 bg-background/70 p-3 text-primary">
                <Icon className="size-5" />
              </div>
              <h2 className="mt-5 text-xl font-semibold">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {pillar.description}
              </p>
            </motion.article>
          );
        })}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.3 }}
        className="rounded-[1.75rem] border border-border/70 bg-background/70 p-8 shadow-sm sm:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              What you can expect
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Discover faster, decide with confidence.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Whether you are exploring new stacks, comparing frameworks, or
              hunting for design tools, DevHub helps you move from curiosity to
              clarity with less friction.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6">
            <ul className="space-y-4 text-sm leading-7 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-primary" />
                Curated categories for frameworks, AI, design, databases, and
                more
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-primary" />
                Search and filtering designed for fast exploration
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-primary" />A
                premium, minimal interface built for developers and teams
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
