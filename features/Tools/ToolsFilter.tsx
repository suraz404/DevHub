import { Badge } from "@/components/ui/badge";

const filters = [
  "All",
  "Framework",
  "AI",
  "Database",
  "Authentication",
  "Hosting",
  "Design",
  "Icons",
];

const ToolsFilter = () => {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      {filters.map((filter) => (
        <Badge
          key={filter}
          variant={filter === "All" ? "default" : "secondary"}
          className="cursor-pointer rounded-full px-5 py-2 text-sm transition hover:scale-105"
        >
          {filter}
        </Badge>
      ))}
    </div>
  );
};

export default ToolsFilter;
