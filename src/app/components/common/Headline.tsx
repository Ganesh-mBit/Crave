import React from "react";
import { twMerge } from "tailwind-merge";

interface HeadlineProps {
  title: string;
  subTitle: string;
  className?: string;
}

const Headline = ({ title, subTitle, className }: HeadlineProps) => {
  return (
    <div className={twMerge("flex flex-col gap-2", className)}>
      <div className="flex items-center gap-4">
        <div className="bg-secondary-light w-20 h-3"></div>
        <h1 className="text-7xl font-bold tracking-tight uppercase text-secondary-light">
          {title}
        </h1>
      </div>
      <h1 className="text-7xl ml-24 tracking-tight font-bold uppercase text-neutral">
        {subTitle}
      </h1>
    </div>
  );
};

export default Headline;
