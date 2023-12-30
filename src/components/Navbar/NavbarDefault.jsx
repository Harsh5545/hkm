import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from'../../assets/logo.png'

function NavbarDefault() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className='flex z-[999] mx-auto flex-col md:flex-row bg-white md:justify-around items-center py-5'>
      <div className="flex justify-between items-center w-full md:w-0">
        <span className="text-xl">
          <img src={Logo} className="max-w-20"   alt="HarikrushnaMultimedia institue logo"/>
        </span>
        <div className="md:hidden">
          <button className="text-Black" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <ul
          className={`flex flex-col md:flex-row items-center gap-8 md:gap-4 h-[20rem] md:h-0 justify-center text-black font-medium font-jakarta ${
            isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
          }`}
        >
          <li>
            <a href="" className="p-3 font-bold hover:text-black">
              Home
            </a>
          </li>
          <li>
            <a href="" className="p-3 hover:text-black">
              AboutUs
            </a>
          </li>
          <li>
            <a href="" className="p-3 hover:text-black">
              Course
            </a>
          </li>
          <li>
            <a href="" className="p-3 hover:text-black">
              Student Project
            </a>
          </li>
        </ul>
      </div>

      <div className={`${
            isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
          }`}>
        <button className="font-jakarta text-sm px-4 py-2 rounded-full text-black font-medium bg-black  bg-opacity-[.08] border border-black border-opacity-[.08] hover:border-opacity-25">
        Contact Us</button>
      </div>
    </div>
  );
}

export default NavbarDefault;