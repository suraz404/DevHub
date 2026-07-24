import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

import ToolCard from "@/components/card/ToolCard";

import { tools } from "@/data/tool";

interface PageProps {
  params: Promise<{
    slugs: string;
  }>;
}

export default async function ToolDetailsPage({ params }: PageProps) {
  const { slugs } = await params;
  console.log("params:", params);

  const tool = tools.find((item) => item.slug === slugs);

  if (!tool) {
    notFound();
  }

  const recommendedTools = tools
    .filter((item) => item.slug !== slugs)
    .slice(0, 4);

  return (
    <Section className="py-16">
      <Container>
        {/* Back Button */}

        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* BIG CARD */}

        <div className="rounded-3xl border bg-card p-8 shadow-sm transition-all">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Logo */}

            <div className="flex h-28 w-28 items-center justify-center rounded-3xl border bg-muted shrink-0">
              <Image src={tool.logo} alt={tool.name} width={70} height={70} />
            </div>

            {/* Content */}

            <div className="flex-1">
              {/* Header */}

              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-bold">{tool.name}</h1>

                {tool.verified && (
                  <CheckCircle2 className="h-6 w-6 fill-green-500 text-white" />
                )}

                {tool.featured && <Badge>⭐ Featured</Badge>}

                {tool.trending && (
                  <Badge variant="secondary">🔥 Trending</Badge>
                )}

                {tool.new && <Badge variant="outline">✨ New</Badge>}
              </div>

              {/* Description */}

              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                {tool.description}
              </p>

              {/* Tags */}

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="outline">{tool.category}</Badge>

                <Badge>{tool.pricing}</Badge>

                {tool.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={tool.website}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  Visit Website
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>

                {tool.github && (
                  <Link
                    href={tool.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:bg-muted"
                  >
                    <FolderGit2 className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recommended */}

        <div className="mt-20">
          <h2 className="mb-8 text-3xl font-bold">More Developer Tools</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recommendedTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
