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
    <div className="relative h-screen w-screen " id="up">
      <div
        className="relative w-full h-full bg-cover "
        style={{ backgroundImage: `url(${nbg})`, backgroundPosition: "center" }}
      >
        <div className="Uo">
          <h1 className="text-8xl text-white font-medium text-left p-4">
            Tech - World Updates
          </h1>
          <h1
            className="text-5xl text-white font-medium"
            style={{ marginTop: "-10vh", marginLeft: "170vh" }}
          >
            AND OUR
          </h1>
          <h1
            className="text-8xl text-white font-semibold"
            style={{
              marginTop: "10vh",
              marginLeft: "180vh",
              transform: "rotate(90deg)",
              letterSpacing: "8px",
            }}
          >
            UPGRADES
          </h1>
          <h1
            className="text-8xl text-white font-semibold text-transparent"
            style={{
              marginTop: "-2vh",
              marginLeft: "155vh",
              transform: "rotate(90deg)",
              letterSpacing: "8px",
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.674)",
            }}
          >
            UPGRADES
          </h1>
          <h1
            className="text-8xl text-transparent font-semibold"
            style={{
              marginTop: "-5vh",
              marginLeft: "130vh",
              transform: "rotate(90deg)",
              letterSpacing: "8px",
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.304)",
            }}
          >
            UPGRADES
          </h1>
        </div>
        <div className="md:w-[70vw] w-[90vw] relative top-[-45vh] left-5">
          <Slider {...settings} className="uniqueSlider1">
            <div>
              <img
                src={up1}
                className="h-80vh w-auto object-contain scale-98 transition-all duration-1100 ease-in-out filter saturate-30"
                alt="Overlay 1"
              />
            </div>
            <div>
              <img
                src={up2}
                className="h-80vh w-auto object-contain scale-98 transition-all duration-1100 ease-in-out filter saturate-30"
                alt="Overlay 2"
              />
            </div>
            <div>
              <img
                src={up3}
                className="h-80vh w-auto object-contain scale-98 transition-all duration-1100 ease-in-out filter saturate-30"
                alt="Overlay 3"
              />
            </div>
            <div>
              <img
                src={up4}
                className="h-80vh w-auto object-contain scale-98 transition-all duration-1100 ease-in-out filter saturate-30"
                alt="Overlay 4"
              />
            </div>
            <div>
              <img
                src={up5}
                className="h-80vh w-auto object-contain scale-98 transition-all duration-1100 ease-in-out filter saturate-30"
                alt="Overlay 5"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Up;
