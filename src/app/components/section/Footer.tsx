import { Footer_COL_TWO_DATA } from "@/app/constants";
import React from "react";
import OverlayText from "../common/OverlayText";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral">
      <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="size-20 border-[5px] border-black rounded-full flex justify-center items-center">
            <h1 className="text-6xl font-extrabold text-black">C</h1>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold text-black leading-7 mb-4 text-xs uppercase">
              Crave creation group hq
            </h2>
            <p className="text-primary-light tracking-tighter leading-5 text-xs mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates
            </p>
            <h2 className="font-bold text-black leading-7 mb-4 text-xs uppercase">
              Contact
            </h2>
            <p className="text-primary-light uppercase font-medium flex gap-10 tracking-tighter leading-5 text-xs">
              <span>Ph</span>
              <span>+63 324 3234</span>
            </p>
            <p className="text-primary-light font-medium flex gap-10 tracking-tighter leading-5 text-xs">
              <span className="uppercase">em</span>
              <span>hie@crave.com</span>
            </p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              {Footer_COL_TWO_DATA.map((text, index) => (
                <li key={index} className="mb-3">
                  <a className="uppercase text-sm text-primary-main font-bold">
                    {text}
                  </a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <li className="mb-2">
                <a className="uppercase text-sm text-primary-main/60 font-bold">
                  Term & condition
                </a>
              </li>
              <li className="mb-2">
                <a className="uppercase text-sm text-primary-main/60 font-bold">
                  Privacy & Policy
                </a>
              </li>
              <li className="mb-2">
                <a className="uppercase text-sm text-primary-main/60 font-bold">
                  Investor Privacy Notice
                </a>
              </li>
              <li className="mb-2">
                <a className="uppercase text-sm text-primary-main/60 font-bold">
                  Cookies policy
                </a>
              </li>
            </nav>
            <div>
              <h2 className="font-bold text-black leading-7 mb-4 text-sm uppercase">
                Newsletter signup
              </h2>
              <div className="border border-black p-3 flex justify-between itc">
                <p className="text-primary-light font-bold text-sm">
                  Email Address
                </p>
                <div className="size-7 bg-black flex justify-center items-center">
                  <ChevronRight className="size-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <div className="flex gap-5">
              <a className="ml-3 text-black">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
              <a className="text-black">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-black">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-black">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <OverlayText
        text="Crave"
        className="relative leading-[10rem] text-white"
      />
      <div className="container mx-auto py-10">
        <div className="flex justify-between">
          <p className="text-black flex-1 text-sm text-center sm:text-left">
            Design by -
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-primary-main font-semibold ml-1"
              target="_blank"
            >
              @Ganesh-mBit
            </a>
          </p>
          <div className="flex-1 flex text-black text-xs justify-evenly">
            <span>CRAVE Group. All Rights Reserved.</span>
            <span>@2024</span>
            <span className="font-bold">Austin, Texas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
