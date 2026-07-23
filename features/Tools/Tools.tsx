import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

import ToolsCarousel from "./ToolsCarousel";

const Tools = () => {
  return (
    <Section>
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Featured Tools
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Discover the best tools, frameworks, APIs, libraries, and platforms
            used by modern developers.
          </p>
        </div>

        {/* View All */}
        <div className="mt-1 mb-3 flex justify-end">
          <Link
            href="/tools"
            className="group inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground"
          >
            View All
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Carousel */}
        <ToolsCarousel />
      </Container>
    </Section>
  );
};

export default Tools;
