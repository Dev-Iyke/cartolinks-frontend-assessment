import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselData } from "@/lib/data";
import CarouselCard from "./CarouselCard";

export function HomeCarousel() {
  return (
    <Carousel
      className="w-full max-w-full flex flex-col gap-2"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="flex flex-row gap-8">
        {carouselData.map((c, i) => (
          <CarouselItem key={i} className="basis-1/1 lg:basis-2/3">
            <CarouselCard card={c} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-between gap-4 mx-8">
        <div></div>
        <CarouselDots />

        {/* prev/next controls on the right */}
        <div className="flex items-center gap-2">
          <CarouselPrevious className="rounded-full bg-gray-200" />
          <CarouselNext className="rounded-full bg-gray-200" />
        </div>
      </div>
    </Carousel>
  );
}
