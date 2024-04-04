import React from "react";
import Headline from "../common/Headline";
import TagTitle from "../common/TagTitle";
import OverlayText from "../common/OverlayText";

const FeatureSection = () => {
  return (
    <>
      <div className="w-full relative h-[80dvh] flex flex-col">
        <div className="container mx-auto flex gap-16 flex-1">
          <div>
            <TagTitle title="Featured" />
          </div>
          <div className="flex-1 relative px-8 bg-product-section bg-center bg-cover">
            <Headline
              title="House (of)"
              subTitle="Highland"
              className="absolute top-[60%] left-0 translate-x-[-50%]"
            />
          </div>
        </div>
      </div>
      <div className="w-full text-end mt-20">
        <OverlayText text="House" className="relative leading-[10rem]" />
      </div>
    </>
  );
};

export default FeatureSection;
