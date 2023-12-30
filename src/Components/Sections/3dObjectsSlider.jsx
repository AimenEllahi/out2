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
    <div className=' text-white w-full py-10 relative h-full px-10'>
      <img
        src='/images/3dObjects/obg.jpg'
        className='absolute top-0 left-0 h-full w-full object-cover z-[-1]'
      />

      <div className='flex items-center w-[55%]  z-[5]'>
        <span className='text-[5rem]'> OBJECTS</span>
        <hr className='w-[12rem] border-[.1rem] rotate-90' />
        <span className='text-left'>
          {" "}
          The Moulton models from our perspectives, currently there are 3d
          models of our ideas. Soon we will be adding the prototypes.
        </span>
      </div>
      <Slider {...settings} className='unique-slider'>
        <img src='/images/3dObjects/p1.png' />
        <img src='/images/3dObjects/p2.png' />
        <img src='/images/3dObjects/p3.png' />
      </Slider>
    </div>
  );
}
