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
    <div className="relative h-auto w-screen">
      <div className="flex flex-col p-6">
        <h1 className="text-8xl text-white text-left font-medium">
          Tech - World Updates
        </h1>
        <div className="flex flex-col md:flex-row w-full justify-between">
          <div className="md:w-[70vw] w-[85vw]">
            <Slider {...settings}>
              <div>
                <img
                  src={up1}
                  className="h-80vh object-contain transition-all duration-1100 ease-in-out filter saturate-30"
                  alt="Overlay 1"
                />
              </div>
              <div>
                <img
                  src={up2}
                  className="h-80vh object-contain transition-all duration-1100 ease-in-out filter saturate-30"
                  alt="Overlay 2"
                />
              </div>
              <div>
                <img
                  src={up3}
                  className="h-80vh object-contain transition-all duration-1100 ease-in-out filter saturate-30"
                  alt="Overlay 3"
                />
              </div>
              <div>
                <img
                  src={up4}
                  className="h-80vh object-contain transition-all duration-1100 ease-in-out filter saturate-30"
                  alt="Overlay 4"
                />
              </div>
              <div>
                <img
                  src={up5}
                  className="h-80vh object-contain transition-all duration-1100 ease-in-out filter saturate-30"
                  alt="Overlay 5"
                />
              </div>
            </Slider>
          </div>
          <div className=" text-white hidden md:flex justify-around flex-col">
            <div className="text-6xl text-white font-medium">AND OUR</div>
            <div className="transform rotate-90 flex flex-col">
              <span className="text-[6rem] text-white font-medium">
                UPGRADES
              </span>
              <span
                className="text-[6rem] font-medium text-transparent"
                style={{
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.674)",
                }}
              >
                UPGRADES
              </span>
              <span
                className="text-[6rem] font-medium text-transparent"
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
    </div>
  );
}

export default Up;
