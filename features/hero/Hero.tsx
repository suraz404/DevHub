import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

import HeroBadge from "./HeroBadge";

import HeroDescription from "./HeroDescription";
import HeroHeading from "./HeroHeading";
import HeroSearch from "./HeroSearch";

const Hero = () => {
  return (
    <Section className=" relative  flex items-center overflow-hidden">
      <Container>
        <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center text-center">
          <HeroBadge />

          <HeroHeading />

          <HeroDescription />

          <HeroSearch />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
