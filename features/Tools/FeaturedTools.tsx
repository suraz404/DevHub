import { tools } from "@/data/tool";
import ToolCard from "@/components/card/ToolCard";

const FeaturedTools = () => {
  const featured = tools.filter((tool) => tool.featured);

  return (
    <div className="mb-20">
      <h2 className="mb-8 text-3xl font-bold">⭐ Featured Tools</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featured.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTools;
