import { CarouselCardProps } from "@/lib/interface";
import React from "react";
import { Button } from "../ui/button";

const CarouselCard = ({ card }: { card: CarouselCardProps }) => {
  const { url, title, header, desc, buttonText } = card;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,.2)), url(${url})`,
      }}
      className="w-full h-[250px] sm:h-[350px] md:h-[400px] bg-cover bg-center rounded-lg md:rounded-3xl flex flex-col justify-between p-2 sm:p-4 md:p-6 text-white"
    >
      <div>
        <span className="font-light text-[12px] sm:text-sm md:text-base">
          NEW IMAGE MODEL
        </span>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold">
        {title}
      </h1>
      <div className="flex justify-between items-baseline-last gap-3 sm:gap-5 md:gap-8 flex-wrap">
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
            {header}
          </h3>
          <p className="text-sm font-light max-w-sm w-full">{desc}</p>
        </div>
        <Button
          variant={"carousel"}
          size={"carousel"}
          className=""
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CarouselCard;
