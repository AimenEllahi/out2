import React from "react";
import Slider from "react-slick";

export default function ObjectsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div
      id="objects"
      className=" text-white w-full py-10 relative h-full px-10"
    >
      <img
        src="/images/3dObjects/obg.jpg"
        className="absolute top-0 left-0 h-full w-full object-cover z-[-1]"
      />

      <div className="flex md:flex-row flex-col items-start md:items-center justify-between md:w-[55%] w-full z-[5]">
        <span className="text-3xl md:text-[5rem] font-commissioner">
          {" "}
          OBJECTS
        </span>
        <hr className="w-[12rem] border-[.1rem] rotate-90 hidden md:block" />
        <span className=" text-sm mt-3 md:mt-0 md:text-base text-left">
          {" "}
          The Moulton models from our perspectives, currently there are 3d
          models of our ideas. Soon we will be adding the prototypes.
        </span>
      </div>
      <Slider {...settings} className="unique-slider">
        <img src="/images/3dObjects/p1.png" />
        <img src="/images/3dObjects/p2.png" />
        <img src="/images/3dObjects/p3.png" />
      </Slider>
    </div>
  );
}
