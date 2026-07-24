import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Guitar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Tool } from "@/data/tool";

interface ToolCardProps {
  tool: Tool;
}

const pricingVariant = {
  Free: "bg-green-500/10 text-green-600 dark:text-green-400",
  Freemium: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Paid: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  "Open Source": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
};

const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <Card className="group h-full overflow-hidden rounded-3xl border bg-background transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl">
      <CardContent className="flex h-full flex-col p-6">
        {/* Logo + Pricing */}

        <div className="flex items-start justify-between">
          <Link href={`/tools/${tool.slug}`}>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border bg-muted transition-transform duration-300 group-hover:scale-110">
              <Image
                src={tool.logo}
                alt={tool.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </Link>

          <Badge
            className={`rounded-full border-0 ${pricingVariant[tool.pricing]}`}
          >
            {tool.pricing}
          </Badge>
        </div>
        <Link href={`/tools/${tool.slug}`}>
          {/* Header */}
          <div className="mt-6 flex items-center gap-2">
            <h3 className="text-xl font-bold">{tool.name}</h3>

            {tool.verified && (
              <CheckCircle2 className="h-5 w-5 fill-green-500 text-white" />
            )}
          </div>

          {/* Description */}
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
            {tool.description}
          </p>
        </Link>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between border-t pt-5">
            <Badge variant="outline" className="rounded-full">
              {tool.category}
            </Badge>

            <div className="flex items-center gap-3">
              {tool.github && (
                <Link
                  href={tool.github}
                  target="_blank"
                  className="text-muted-foreground transition hover:text-foreground"
                >
                  <Guitar className="h-5 w-5" />
                </Link>
              )}

              <Link
                href={tool.website}
                target="_blank"
                className="flex items-center gap-1 text-sm font-medium text-primary transition hover:gap-2"
              >
                Visit
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Status badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tool.featured && (
            <Badge className="rounded-full bg-yellow-500/10 text-yellow-600">
              ⭐ Featured
            </Badge>
          )}

          {tool.trending && (
            <Badge className="rounded-full bg-red-500/10 text-red-500">
              🔥 Trending
            </Badge>
          )}

          {tool.new && (
            <Badge className="rounded-full bg-blue-500/10 text-blue-500">
              ✨ New
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
