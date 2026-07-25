import { Button } from "@/components/ui/button";
import { SearchX } from "lucide-react";

interface EmptyStateProps {
  onClear: () => void;
}

export function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-border/80 bg-background/70 px-6 py-16 text-center shadow-sm">
      <div className="rounded-full border border-border/70 bg-muted/50 p-4">
        <SearchX className="size-8 text-muted-foreground" />
      </div>
      <h2 className="mt-6 text-2xl font-semibold tracking-tight">
        No tools match this category yet
      </h2>
      <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
        Try a broader term like “React”, “API”, or “open source” to discover
        more matching tools.
      </p>
      <Button onClick={onClear} className="mt-8 rounded-full">
        Clear search
      </Button>
    </div>
  );
}
