import React from "react";
import { twMerge } from "tailwind-merge";

const ImageObjects = ({ src, className }) => {
  return (
    <img
      src={src}
      className={twMerge(
        " absolute hover:scale-125 transition-transform duration-300 cursor-pointer  object-contain h-16   ",
        className
      )}
    />
  );
};

export default function HeaderRight() {
  return (
    <div className="w-2/4 overflow-x-hidden hidden md:block">
      <div className="relative h-screen w-full ">
        <img
          src="/images/5WQC.png"
          className=" absolute  top-[-10%] object-contain h-full w-full -right-20 "
        />
        <ImageObjects
          src="/images/L1.png"
          className={
            "md:top-10 md:left-[25%] lg:top-20 lg:left-[30%] xl:top-20 xl:left-[30%]"
          }
        />
        <ImageObjects
          src="/images/L2.png"
          className={
            "md:top-40 md:left-[25%] lg:top-60 lg:left-[30%] xl:top-60 xl:left-[30%]"
          }
        />
        <ImageObjects
          src="/images/L3.png"
          className={
            "md:top-[30%] md:left-[30%] lg:top-[46%] lg:left-[38%] xl:top-[46%] xl:left-[38%]"
          }
        />
        <ImageObjects
          src="/images/L4.png"
          className={
            "md:top-[40%] md:left-[40%] lg:top-[57%] lg:left-[52%] xl:top-[57%] xl:left-[52%]"
          }
        />
        <ImageObjects
          src="/images/L5.png"
          className={
            "md:top-[50%] md:left-[50%] lg:top-[58%] lg:left-[75%] xl:top-[58%] xl:left-[75%]"
          }
        />
      </div>
    </div>
  );
}
