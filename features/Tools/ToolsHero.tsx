import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Props {
  search: string;
  onSearch: (value: string) => void;
}

export default function ToolsHero({ search, onSearch }: Props) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <h1 className="text-5xl font-bold">Browse Developer Tools</h1>

      <p className="mt-4 text-muted-foreground">
        Discover modern frameworks, libraries, APIs and AI tools.
      </p>

      <div className="relative mt-8">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search tools..."
          className="h-12 rounded-xl pl-12"
        />
      </div>
    </div>
  );
}
