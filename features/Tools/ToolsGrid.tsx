import ToolCard from "@/components/card/ToolCard";
import type { Tool } from "@/data/tool";

interface Props {
  tools: Tool[];
}

export default function ToolsGrid({ tools }: Props) {
  if (tools.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-2xl font-bold">No tools found</h3>

        <p className="mt-3 text-muted-foreground">
          Try another search keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}
