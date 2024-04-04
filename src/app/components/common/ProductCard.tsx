import React from "react";

interface ProductCardProps {
  imgUrl: string;
  number: number;
  category: string;
}

const ProductCard = ({ imgUrl, number, category }: ProductCardProps) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full relative">
        <img
          className="lg:h-56 md:h-36 w-full object-cover object-center"
          src={imgUrl}
          alt="blog"
        />
        <div className="flex flex-col gap-3 max-w-40 absolute z-30 bottom-0 translate-y-[75%] left-[10%]">
          <h1 className="text-7xl font-bold text-neutral">{number}</h1>
          <p className="text-lg font-bold text-wrap uppercase text-secondary-light">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
