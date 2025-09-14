import React from "react";

export interface CarouselCardProps {
  url: string;
  title: string;
  header: string;
  desc: string;
  buttonText: string;
}

export interface GenerateCardProps {
  iconBg: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  isNew: boolean;
}