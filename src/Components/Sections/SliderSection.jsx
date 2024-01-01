import React from "react";

import Slider from "react-slick";

// import s1 from "./qnbg.png";
// import s2 from "./amnbg.png";
// import l1 from "./Qhome.png";
// import l2 from "./Qc.png";
// import l3 from "./qcom.png";
// import l4 from "./Qt.png";
// import r1 from "./A1m.png";
// import r2 from "./Computers.png";
// import r3 from "./Electronics.png";
// import r4 from "./MR.png";

export default function SliderSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-auto md:h-[90vh] p-10 px-10 flex md:flex-row flex-col">
      <div className=" md:w-2/4 w-full h-full ">
        <Slider {...settings} className="h-[90%] custom-slider ">
          <img
            src={"/images/slider/qnbg.png"}
            alt="Slide 1"
            className=" !h-[90vh] w-full   object-cover "
          />

          <img
            src={"/images/slider/Qhome.png"}
            alt="Slide 2"
            className="!h-[90vh]  object-fit "
          />

          <img
            src={"/images/slider/Qhome.png"}
            alt="Slide 3"
            className="!h-[90vh]    object-fit "
          />

          <img
            src={"/images/slider/qcom.png"}
            alt="Slide 4"
            className="!h-[90vh]    object-fit "
          />

          <img
            src={"/images/slider/Qt.png"}
            alt="Slide 5"
            className="!h-[90vh]    object-fit "
          />
        </Slider>
      </div>
      <div className="md:w-2/4 w-full h-full ">
        <Slider {...settings} className="h-[90%] custom-slider ">
          <img
            src={"/images/slider/amnbg.png"}
            alt="Slide 1"
            className=" !h-[90vh] w-full   object-cover "
          />

          <img
            src={"/images/slider/A1m.png"}
            alt="Slide 2"
            className="!h-[90vh]   object-fit "
          />

          <img
            src={"/images/slider/Computers.png"}
            alt="Slide 3"
            className="!h-[90vh]    object-fit "
          />

          <img
            src={"/images/slider/Electronics.png"}
            alt="Slide 4"
            className="!h-[90vh]    object-fit "
          />

          <img
            src={"/images/slider/MR.png"}
            alt="Slide 5"
            className="!h-[90vh]    object-fit "
          />
        </Slider>
      </div>
    </div>
  );
}
