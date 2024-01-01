import React, { useState } from "react";

import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import SliderSection from "./SliderSection";
import PDFSection from "./PDFSection";
import About from "./About";
import ObjectsSlider from "./3dObjectsSlider";
import Up from "./Up";

function Home() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <>
      <div className="w-screen">
        <div className="flex text-white px-4 text-left mt-14 w-full">
          <HeaderLeft />
          <HeaderRight />
        </div>

        <div className="gradient">
          <SliderSection />
          <PDFSection />
        </div>
        <ObjectsSlider />
        <Up />
        <About />
        <div className="text-xl text-white pb-10 pt-5 font-light">
          THE PAGE WILL BE UPDATED EVERY MONTH -- PUBLISHED ON NOV 2023
        </div>
      </div>
    </>
  );
}

export default Home;
