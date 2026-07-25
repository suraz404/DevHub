import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface StatsProps {
  items: StatItem[];
}

export function Stats({ items }: StatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.25 }}
            className="rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <div className="rounded-full border border-border/70 bg-background/70 p-2">
                <Icon className="size-4 text-primary" />
              </div>
            </div>
            <p className="mt-4 text-2xl font-semibold tracking-tight">
              {item.value}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
