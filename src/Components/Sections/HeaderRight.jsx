import React from "react";
import { twMerge } from "tailwind-merge";

const ImageObjects = ({ src, className }) => {
  return (
    <img
      src={src}
      className={twMerge(
        " absolute hover:scale-125 transition-transform duration-300 cursor-pointer object-contain h-16 lg:h-20   ",
        className
      )}
    />
  );
};

export default function HeaderRight() {
  return (
    <div className=' w-[65%] xl:w-[50%]   overflow-x-hidden hidden md:block'>
      <div className='relative   h-screen w-full'>
        <img
          src='/images/5WQC.png'
          className=' absolute  top-[-10%] object-contain lg:object-cover  h-full w-full -right-20 '
        />
        <ImageObjects
          src='/images/L1.png'
          className={
            "md:top-28 md:left-[25%] lg:top-20 lg:left-[18%] xl:top-20 xl:left-[15%]"
          }
        />
        <ImageObjects
          src='/images/L2.png'
          className={
            "md:top-60 md:left-[25%] lg:top-60 lg:left-[19%] xl:top-60 xl:left-[18%]"
          }
        />
        <ImageObjects
          src='/images/L3.png'
          className={
            "md:top-[40%] md:left-[32%] lg:top-[46%] lg:left-[30%] xl:top-[46%] xl:left-[28%]"
          }
        />
        <ImageObjects
          src='/images/L4.png'
          className={
            "md:top-[50%] md:left-[50%] lg:top-[57%] lg:left-[50%] xl:top-[57%] xl:left-[45%]"
          }
        />
        <ImageObjects
          src='/images/L5.png'
          className={
            "md:top-[53%] md:left-[80%] lg:top-[58%] lg:left-[75%] xl:top-[62%] xl:left-[75%]"
          }
        />
      </div>
    </div>
  );
}
