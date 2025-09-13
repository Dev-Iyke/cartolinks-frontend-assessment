import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselData } from "@/lib/data";
import CarouselCard from "./CarouselCard";

export function HomeCarousel() {
  return (
    <Carousel
      className="w-full max-w-full"
      opts={{
        align: "start",
      
      }}
    >
      <CarouselContent className="flex flex-row gap-8">
        {carouselData.map((c, i) => (
          <CarouselItem key={i} className="basis-1/1 md:basis-2/3">
            <CarouselCard card={c} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-end">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
