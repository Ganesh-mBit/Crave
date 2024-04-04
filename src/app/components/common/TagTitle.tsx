import React from "react";

interface TagTitleProps {
  title: string;
}

const TagTitle = ({ title }: TagTitleProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="size-4 bg-neutral rounded-full" />
      <h1 className="tracking-wide uppercase text-neutral text-lg font-extrabold">
        {title}
      </h1>
    </div>
  );
};

export default TagTitle;
