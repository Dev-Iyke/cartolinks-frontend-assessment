import React from "react";
import { Button } from "../ui/button";
import { GenerateCardProps } from "@/lib/interface";

const GenerateCard = ({ card }: { card: GenerateCardProps }) => {
  const { iconBg, icon, title, desc, isNew } = card;
  return (
    <div className="flex justify-start items-start gap-2 p-4 sm:max-w-90 w-full">
      <div
        className={`flex justify-center items-center rounded-lg h-9 min-w-9 text-white ${iconBg}`}
      >
        {icon}
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <div className="flex gap-2 items-start justify-start flex-wrap">
            <h2 className="text-sm font-medium">{title}</h2>
            {isNew && (
              <span className="bg-blue-500 rounded-full text-foreground py-0.5 px-3 text-[10px]">
                New
              </span>
            )}
          </div>
          <p className="text-[10px] md:text-[11px] max-w-[150px] font-light">{desc}</p>
        </div>
        <Button className="bg-gray-200 text-black px-3 rounded-full text-[12px] font-normal hover:bg-gray-300 hover:scale-105 h-6 md:h-8">
          Open
        </Button>
      </div>
    </div>
  );
};

export default GenerateCard;
