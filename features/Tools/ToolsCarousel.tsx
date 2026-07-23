import { tools } from "@/data/tool";
import ToolCard from "@/components/card/ToolCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ToolsCarousel = () => {
  const toolsSlice = tools.slice(0, 7);
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {toolsSlice.map((tool) => (
          <CarouselItem
            key={tool.id}
            className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <ToolCard tool={tool} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ToolsCarousel;
