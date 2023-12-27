import React, { useState } from "react";
import "./Home.css";
import mainImage from "/5WQC.png";
import mainVideo from "/main.mp4";
import L1 from "/L1.png";
import L2 from "/L2.png";
import L3 from "/L3.png";
import L4 from "/L4.png";
import L5 from "/L5.png";

function Home() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <>
      {/* {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="modal-close-button"
              onClick={() => setModalVisible(false)}
            >
              OK
            </button>
            <div className="modal-text">
              <p>This Page is best viewd in the resolution of 1920 x 1080 </p>
            </div>
          </div>
        </div>
      )} */}
      <div className="home">
        <video autoPlay="autoplay" loop="loop" muted className="video">
          <source src={mainVideo} type="video/mp4" />
        </video>

        <div className="main-content">
          <img src={mainImage} alt="Main" className="main-image h-screen" />
          <div className="text-content">
            <h1>
              The interface<br></br>Between the<br></br>Present<br></br>and
              <br></br>Future
            </h1>
            <h4>
              {" "}
              ▽<br></br> Learn from blogs ▽<br></br> Precise your perception ▽
              <br></br> Explore the objects ▽<br></br> Be involved and updated ▽
            </h4>
            <h3>
              Here you drift through the blogs that guide you from <br></br>
              mechanisms to machines. And our ideologies are the <br></br>
              connections between the two terminals of <br></br>present and
              future, our Perspective Papers<br></br>check the posabilities and
              our <br></br>Objects makes them reality.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>Explore the world by upgrading yourself.
            </h3>
          </div>
        </div>
        <a href="#qu">
          <img src={L1} alt="Overlay 1" className="overlay-image L1" />
        </a>

        <a href="#qu">
          <img src={L2} alt="Overlay 2" className="overlay-image L2" />
        </a>
        <a href="#pp">
          <img src={L3} alt="Overlay 3" className="overlay-image L3" />
        </a>
        <a href="#os">
          <img src={L4} alt="Overlay 4" className="overlay-image L4" />
        </a>
        <a href="#up">
          <img src={L5} alt="Overlay 5" className="overlay-image L5" />
        </a>
      </div>
    </>
  );
}

export default Home;
