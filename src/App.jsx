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
     
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
