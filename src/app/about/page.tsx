import type { Metadata } from "next";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { AboutPage } from "@/features/about/AboutPage";

export const metadata: Metadata = {
  title: "About | DevHub",
  description:
    "Discover DevHub, a curated platform for developer tools, categories, and modern product resources.",
};

export default function AboutRoutePage() {
  return (
    <Section className="py-16 md:py-20">
      <Container>
        <AboutPage />
      </Container>
    </Section>
  );
}
