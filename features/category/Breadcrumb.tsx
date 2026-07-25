import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  categoryName: string;
  categoryHref: string;
}

export function Breadcrumb({ categoryName, categoryHref }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-sm text-muted-foreground"
    >
      <Link href="/" className="transition hover:text-foreground">
        Home
      </Link>
      <ChevronRight className="size-4" />
      <Link href="/categories" className="transition hover:text-foreground">
        Categories
      </Link>
      <ChevronRight className="size-4" />
      <Link href={categoryHref} className="font-medium text-foreground">
        {categoryName}
      </Link>
    </nav>
  );
}
