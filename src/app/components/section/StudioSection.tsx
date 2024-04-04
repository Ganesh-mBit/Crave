import React from "react";
import TagTitle from "../common/TagTitle";
import Image from "next/image";
import OverlayText from "../common/OverlayText";
import {
  STUDIO_SECTION_IMG1_URL,
  STUDIO_SECTION_IMG2_URL,
} from "@/app/constants";

const StudioSection = () => {
  return (
    <div className="w-full relative min-h-dvh">
      <div className="container mx-auto flex gap-10">
        <div>
          <TagTitle title="About the studio" />
        </div>
        <div className="flex-1 px-8 flex flex-col">
          <div className="flex justify-end">
            <Image
              alt="img"
              width={360}
              height={340}
              objectFit="cover"
              src={STUDIO_SECTION_IMG1_URL}
            />
          </div>
          <div className="flex justify-start">
            <p className="tracking-wide uppercase text-4xl font-bold">
              We Listen,
              <br />
              we create, <br />
              you enjoy. <br />
              Where Dimension take <br />
              shape.
            </p>
          </div>
          <div className="flex justify-end">
            <p className="w-96 text-sm text-secondary-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In illo
              ipsam quia beatae! Quod voluptas explicabo beatae sed quae
              nesciunt debitis assumenda voluptatibus maxime vero unde,
              quibusdam pariatur labore ullam culpa similique libero sint
              doloribus cupiditate magnam aperiam tempore possimus! Quas odio
              nobis consectetur eum sit? Esse quaerat quod natus iure reiciendis
              sapiente hic quos tenetur ex temporibus aspernatur quam minima
              officia sunt, ad illum.
            </p>
          </div>
          <div className="mt-28 relative flex justify-start">
            <OverlayText
              text="crave"
              className="translate-x-[-55%] translate-y-[-50%]"
            />
            <Image
              alt="img"
              width={320}
              height={260}
              objectFit="cover"
              className="z-20"
              src={STUDIO_SECTION_IMG2_URL}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioSection;
