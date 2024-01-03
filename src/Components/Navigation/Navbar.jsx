import React, { useState, useEffect, useRef } from "react";
import logo1 from "/Quantum.png";
import logo2 from "/Automatons.png";
import logo3 from "/PP.png";
import logo4 from "/Objects.png";
import logo5 from "/Upgrade.png";
import menuIcon from "/Home.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleScrollToContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Your existing useEffect code...
  }, []);

  return (
    <nav className='bg-black text-white fixed top-0 w-screen flex items-center justify-between p-2 z-10'>
      <img
        src={menuIcon}
        alt='Menu'
        className='text-white cursor-pointer text-2xl w-10 h-10'
        onClick={handleMenuClick}
      />
      <div
        className={`dropdown-menu ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } absolute top-[100%] left-0 bg-[#121212] text-white flex flex-col p-4 transition-transform duration-300`}
      >
        <button className='menu-button flex items-center bg-transparent hover:bg-[#171616] outline-none border border-none'>
          <img src={logo1} alt='Logo' className='menu-logo h-8 w-8 mr-2' />
          Quantum
        </button>
        <button className='menu-button flex items-center bg-transparent hover:bg-[#171616] outline-none border border-none'>
          <img src={logo2} alt='Logo' className='menu-logo h-8 w-8 mr-2' />
          Automatons
        </button>
        <button className='menu-button flex items-center bg-transparent hover:bg-[#171616] outline-none border border-none'>
          <img src={logo3} alt='Logo' className='menu-logo h-8 w-8 mr-2' />
          Perspective Pice
        </button>
        <button
          onClick={() => {
            const section = document.getElementById("objects");
            section.scrollIntoView({ behavior: "smooth" });
          }}
          className='menu-button flex items-center bg-transparent hover:bg-[#171616] outline-none border border-none'
        >
          <img src={logo4} alt='Logo' className='menu-logo h-8 w-8 mr-2' />
          Objects
        </button>
        <button className='menu-button flex items-center bg-transparent hover:bg-[#171616] outline-none border border-none'>
          <img src={logo5} alt='Logo' className='menu-logo h-8 w-8 mr-2' />
          Upgrades
        </button>
      </div>
      <div className=' flex items-center'>
        <button className='company-button text-black bg-white border-solid border p-2 cursor-pointer transition duration-200 hover:bg-transparent hover:text-white'>
          5 WEB
        </button>
        <button
          className='contact-button text-white bg-transparent border-solid border p-2 cursor-pointer transition duration-200 hover:bg-white hover:text-black ml-2'
          onClick={handleScrollToContact}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
