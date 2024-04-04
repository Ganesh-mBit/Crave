import React from "react";
import TagTitle from "../common/TagTitle";
import Headline from "../common/Headline";
import ProductCard from "../common/ProductCard";
import { PRODUCT_DATA } from "@/app/constants";

const ProductSection = () => {
  return (
    <div className="w-full relative min-h-dvh">
      <div className="container mx-auto flex flex-col gap-24">
        <TagTitle title="In numbers" />
        <div className="flex justify-end">
          <Headline title="Product" subTitle="In numbers" />
        </div>
        <div className="flex flex-wrap -m-4">
          {PRODUCT_DATA.map((item, idx) => (
            <ProductCard
              key={idx}
              imgUrl={item.imgUrl}
              number={item.number}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
