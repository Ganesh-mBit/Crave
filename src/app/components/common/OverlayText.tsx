import React from "react";
import { twMerge } from "tailwind-merge";

interface OverlayTextProps {
  text: string;
  className?: string;
}

const OverlayText = ({ text, className }: OverlayTextProps) => {
  return (
    <h1
      className={twMerge(
        "absolute text-[14rem] uppercase text-primary-light tracking-tighter font-extrabold top-0 left-0 transform",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default OverlayText;
