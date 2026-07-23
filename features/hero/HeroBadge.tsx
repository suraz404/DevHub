import { Badge } from "@/components/ui/badge";

const badges = [
  "🚀 1000+ Developer Resources",
  "✨ Curated & Trusted",
  "🔥 Updated Weekly",
];

export default function HeroBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {badges.map((badge) => (
        <Badge
          key={badge}
          variant="secondary"
          className="rounded-full border  border-border/50 bg-background/60 px-4 py-1.5 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
        >
          {badge}
        </Badge>
      ))}
    </div>
  );
}
