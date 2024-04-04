import React from "react";
import TagTitle from "../common/TagTitle";
import Headline from "../common/Headline";
import OverlayText from "../common/OverlayText";
import NewsCard from "../common/NewsCard";
import {
  NEWS_SECTION_IMG1_URL,
  NEWS_SECTION_IMG2_URL,
  NEWS_SECTION_IMG3_URL,
  NEWS_SECTION_IMG4_URL,
} from "@/app/constants";

const NewsSection = () => {
  return (
    <div className="w-full relative min-h-dvh">
      <div className="container mx-auto flex flex-col gap-24">
        <TagTitle title="News" />
        <div>
          <Headline title="Latest" subTitle="News" />
        </div>
        <div className="flex items-start -m-4">
          <NewsCard
            imgUrl={NEWS_SECTION_IMG1_URL}
            title="Where design becomes desire."
            date="01 Mar 2024"
          />
          <NewsCard
            imgUrl={NEWS_SECTION_IMG2_URL}
            title="Are you ready to embark on journey of design excellence?"
            date="01 Mar 2024"
            className="lg:h-72"
          />
          <NewsCard
            imgUrl={NEWS_SECTION_IMG3_URL}
            title="Submerge house under the ground in the nation"
            date="01 Mar 2024"
            className="lg:h-72"
          />
          <NewsCard
            imgUrl={NEWS_SECTION_IMG4_URL}
            title="Submerge house under the ground in the nation"
            date="01 Mar 2024"
            className="lg:h-72"
          />
        </div>
      </div>
      <div className="w-full text-end mt-20">
        <OverlayText text="New" className="relative leading-[13rem]" />
      </div>
    </div>
  );
};

export default NewsSection;
