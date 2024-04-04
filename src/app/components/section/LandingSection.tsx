import React from "react";
import CircularBadge from "../common/CircularBadge";
import Header from "../common/Header";

const LandingSection = () => {
  return (
    <div className="w-full relative min-h-dvh">
      <Header />
      <div className="flex min-h-[90dvh]">
        <div
          className={`w-[75%] relative bg-landing-section-left bg-cover bg-center`}
        >
          <CircularBadge />
        </div>
        <div className="w-[25%] bg-landing-section-right bg-center bg-cover" />
      </div>
      <div className="absolute w-full bottom-8">
        <div className="container mx-auto flex items-end">
          <div className="w-[60%]">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-neutral rounded-full" />
              <h1 className="tracking-tight text-8xl font-extrabold">
                BETTER LIVING
              </h1>
            </div>
            <h1 className="tracking-tight text-8xl font-extrabold">BEGINS</h1>
            <h1 className="tracking-tight text-center text-8xl font-extrabold text-neutral">
              AT HOME
            </h1>
          </div>
          <div>
            <p className="uppercase text-lg font-bold">
              We Listen,
              <br />
              we create, you enjoy. Where
              <br />
              Dimension take shape
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
