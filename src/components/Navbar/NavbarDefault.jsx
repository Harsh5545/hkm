import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

function NavbarDefault() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className='flex flex-col justify-start md:flex-row bg-black md:justify-between items-center px-6 py-4'>
      <div className="flex justify-between items-center w-full md:w-0">
        <h2 className="text-xl text-white font-semibold">Logo</h2>
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <ul
          className={`flex flex-col md:flex-row items-center gap-8 md:gap-4 h-[20rem] md:h-0 justify-center text-[#bdbdc0] font-medium font-jakarta ${
            isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
          }`}
        >
          <li>
            <a href="" className="p-3 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="" className="p-3 hover:text-white">
              Features
            </a>
          </li>
          <li>
            <a href="" className="p-3 hover:text-white">
              Pricing
            </a>
          </li>
          <li>
            <a href="" className="p-3 hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className={`${
            isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
          }`}>
        <button className="font-jakarta text-sm px-4 py-2 rounded-full text-white font-medium bg-white bg-opacity-[.08] border border-white border-opacity-[.08] hover:border-opacity-25">
          Log in
        </button>
      </div>
    </div>
  );
}

export default NavbarDefault;