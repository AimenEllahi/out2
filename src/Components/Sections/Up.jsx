import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nbg from "/nbg.png";
import up1 from "/up1.png";
import up2 from "/up2.png";
import up3 from "/up3.png";
import up4 from "/up4.png";
import up5 from "/up5.png";
// import "./Up.css";

const images = [up1, up2, up3, up4, up5];

function Up() {
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
      id='upgrade'
      className='relative h-full bg-black  px-5 py-10 w-screen font-commissioner'
    >
      <div className='flex flex-col p-6'>
        <div className='flex justify-between'>
          <h1 className='text-3xl md:text-8xl text-white text-left font-medium'>
            Tech - World Updates
          </h1>
          <div className='text-7xl mt-5 font-semibold text-gray-300 hidden lg:block'>
            AND OUR
          </div>
        </div>
        <div className='flex flex-col mt-10 md:flex-row w-full justify-between'>
          <div className=' w-full lg:w-2/3'>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    className='h-80vh object-contain transition-all duration-1100 ease-in-out filter saturate-30'
                    alt={`Overlay ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className='transform rotate-90 hidden flex-col justify-around m-auto tracking-tighter lg:flex'>
            <span className='text-[6rem] text-white font-bold items-center flex h-[12vh] text-center'>
              UPGRADES
            </span>
            <span
              className='text-[6rem] font-bold text-transparent items-center flex h-[12vh] text-center'
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.674)",
              }}
            >
              UPGRADES
            </span>
            <span
              className='text-[6rem] font-bold text-transparent items-center flex h-[12vh] text-center'
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.304)",
              }}
            >
              UPGRADES
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Up;
