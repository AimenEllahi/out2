import Navbar from "./Components/Navigation/Navbar";
import Home from "./Components/Sections/Home";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// <Navbar />
//     <Home />
//     <Qu />
//     <Pp />
//     <Os />
//     <Up />
//     <Call />

function App() {
  return (
    <div className='h-full relative'>
      <video
        className='absolute top-0 h-full object-cover z-[-1]'
        autoPlay
        muted
        loop
      >
        <source src='/videos/main.mp4' type='video/mp4' />
      </video>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
