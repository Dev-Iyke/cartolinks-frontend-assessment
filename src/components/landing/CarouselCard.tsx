import { CarouselCardProps } from "@/lib/interface";
import React from "react";
import { Button } from "../ui/button";

const CarouselCard = ({ card }: { card: CarouselCardProps }) => {
  const { url, header, desc, buttonText } = card;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,.2)), url(${url})`,
      }}
      className="w-full h-[250px] sm:h-[350] md:h-[500px] bg-cover bg-center rounded-lg md:rounded-3xl flex flex-col justify-end p-6 text-white"
    >
      <h3 className="text-lg font-semibold">{header}</h3>
      <p className="text-sm">{desc}</p>
      <Button className="mt-4">{buttonText}</Button>
    </div>
  );
};

export default CarouselCard;