import Link from "next/link";

const popularTags = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "shadcn/ui",
  "AI",
  "Open Source",
  "Animations",
];

const PopularTags = () => {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
      <span className="text-sm font-medium text-muted-foreground">
        Popular:
      </span>

      {popularTags.map((tag) => (
        <Link
          key={tag}
          href={`/resources?tag=${encodeURIComponent(tag)}`}
          className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default PopularTags;
