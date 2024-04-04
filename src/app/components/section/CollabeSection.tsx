import React from "react";
import TagTitle from "../common/TagTitle";
import Headline from "../common/Headline";
import { PlusIcon } from "lucide-react";

const CollabeSection = () => {
  return (
    <div className="w-full bg-secondary-main relative h-[80dvh] flex flex-col">
      <div className="container mx-auto flex gap-16 flex-1">
        <div className="invisible">
          <TagTitle title="Featured" />
        </div>
        <div className="flex-1 relative px-8 bg-collabe-section bg-center bg-cover">
          <Headline
            title="Lets"
            subTitle="Collaborate"
            className="absolute top-[60%] left-0 translate-x-[-30%]"
          />
          <div className="flex flex-col gap-10 max-w-48 absolute top-[50%] left-[50%] translate-y-[-50%]">
            <p className="tracking-wide uppercase text-1xl font-bold text-secondary-light">
              We Listen, we create, <br />
              you enjoy. Where <br />
              Dimension take <br />
              shape.
            </p>
            <button className="bg-neutral px-2 py-3 text-black uppercase font-bold text-xs flex justify-between items-center">
              Connect
              <PlusIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollabeSection;
