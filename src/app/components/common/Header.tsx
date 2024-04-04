import React from "react";

const Header = () => {
  return (
    <div className="w-full absolute z-50">
      <div className="container mx-auto py-8 flex justify-between">
        <h1 className="text-lg font-extrabold tracking-widest">CRAVE</h1>
        <div className="flex gap-5">
          <span className="text-base cursor-pointer text-neutral font-bold">
            How it works
          </span>
          <span className="text-base cursor-pointer text-secondary-light font-bold">
            Stories
          </span>
          <span className="text-base cursor-pointer text-secondary-light font-bold">
            Expoler
          </span>
          <span className="text-base cursor-pointer text-secondary-light font-bold">
            Designers
          </span>
          <span className="text-base cursor-pointer text-secondary-light font-bold">
            Shop
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
