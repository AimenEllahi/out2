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
    <div className='w-2/4  overflow-x-hidden'>
      <div className='relative h-screen w-full '>
        <img
          src='/images/5WQC.png'
          className=' absolute  top-[-10%] object-contain h-full w-full -right-20 '
        />
        <ImageObjects src='/images/L1.png' className={"top-20 left-48"} />
        <ImageObjects src='/images/L2.png' className={"top-60 left-[26.5%]"} />
        <ImageObjects src='/images/L3.png' className={"top-[43%] left-[34%]"} />
        <ImageObjects src='/images/L4.png' className={"top-[55%] left-[49%]"} />
        <ImageObjects src='/images/L5.png' className={"top-[58%] left-[75%]"} />
      </div>
    </div>
  );
}
