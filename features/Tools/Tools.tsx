import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

import ToolsCarousel from "./ToolsCarousel";

const Tools = () => {
  return (
    <Section>
      <Container>
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">
              Featured Tools
            </h2>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Discover the best tools, frameworks, APIs, libraries and platforms
              used by modern developers.
            </p>
          </div>

          <Link
            href="/tools"
            className="group inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground"
          >
            View All
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ToolsCarousel />
      </Container>
    </Section>
  );
};

export default Tools;
