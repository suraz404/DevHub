import { motion } from "motion/react";

import ToolCard from "@/components/card/ToolCard";
import type { Tool } from "@/data/tool";

interface CategoryToolsGridProps {
  tools: Tool[];
}

export function CategoryToolsGrid({ tools }: CategoryToolsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.04, duration: 0.25 }}
        >
          <ToolCard tool={tool} />
        </motion.div>
      ))}
    </div>
  );
}
