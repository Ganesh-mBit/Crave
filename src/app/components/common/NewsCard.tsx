import React from "react";
import { twMerge } from "tailwind-merge";

interface NewsCardProps {
  imgUrl: string;
  title: string;
  date: string;
  className?: string;
}

const NewsCard = (props: NewsCardProps) => {
  const { imgUrl, title, date, className } = props;

  return (
    <div className="p-5 md:w-1/3">
      <div className="h-full flex flex-col gap-12">
        <img
          className={twMerge(
            "lg:h-96 md:h-36 w-full object-cover object-center",
            className
          )}
          src={imgUrl}
          alt="blog"
        />
        <div>
          <h2 className="font-bold text-base uppercase text-wrap mb-3">
            {title}
          </h2>
          <p className="text-xs text-secondary-main">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
