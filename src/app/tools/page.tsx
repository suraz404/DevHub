import { Suspense } from "react";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import ToolsClient from "@/features/Tools/ToolsClient";

export default function ToolsPage() {
  return (
    <Section className="py-16">
      <Container>
        <Suspense
          fallback={
            <div className="py-10 text-center text-muted-foreground">
              Loading tools…
            </div>
          }
        >
          <ToolsClient />
        </Suspense>
      </Container>
    </Section>
  );
}
