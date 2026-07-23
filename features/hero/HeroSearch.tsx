"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import PopularTags from "@/features/hero/PopularTag";

const HeroSearch = () => {
  return (
    <div className="mx-auto mt-10 w-full max-w-2xl">
      <div className="relative">
        <Search className=" z-2 absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

        <Input
          type="text"
          placeholder="Search UI libraries, AI tools, APIs, icons..."
          className="h-14 rounded-full border-border/60 bg-background/80 pl-12 pr-4 text-base shadow-lg backdrop-blur-sm transition-all duration-300 focus-visible:ring-2"
        />
      </div>
      <PopularTags />
    </div>
  );
};

export default HeroSearch;
