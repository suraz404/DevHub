import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import ToolsClient from "@/features/Tools/ToolsClient";

export default function ToolsPage() {
  return (
    <Section className="py-16">
      <Container>
        <ToolsClient />
      </Container>
    </Section>
  );
}
