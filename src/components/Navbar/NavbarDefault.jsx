import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../../assets/logo.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import './Navbar.css'

function NavbarDefault() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="flex z-[999]  absolute w-full md:justify-center items-center ">
      <div className="flex-col md:flex-row flex md:justify-around rounded-md w-[90%]  items-center backdrop-filter backdrop-blur-md bg-white py-3 m-4">
        <div className="flex justify-between px-4 items-center w-full md:w-0">
          <span className="text-xl">
            <img
              src={Logo}
              className="md:max-w-20 max-w-10"
              alt="HarikrushnaMultimedia institue logo"
            />
          </span>
          <div className="md:hidden">
            {/* <button className="text-black" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? "✕" : "☰"}
            </button> */}
          
                {isMobileMenuOpen ?
                       <label class="hamburger">
                       <input type="checkbox"/>
                       <svg viewBox="0 0 32 32" onClick={toggleMobileMenu}>
      <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
    </svg>
</label>
                      :
                      <label className="hamburger">
                      <input type="checkbox" />
                      <svg viewBox="0 0 32 32" onClick={toggleMobileMenu}>
                        <path className="line line-top" d="M7 10L20 10"></path>
                        <path className="line line-middle" d="M7 16L25 16"></path>
                        <path className="line line-bottom" d="M7 22L25 22"></path>
                      </svg>
                    </label>
                    
                }

          </div>
        </div>

        <div className="flex flex-col items-start">
          <ul
            className={`flex flex-col font-poppins md:flex-row items-center gap-8 md:gap-10 h-[20rem] md:h-0 justify-center text-black ${
              isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
            }`}
          >
            <li>
              <Link to="/" className=" hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className=" hover:text-black">
                AboutUs
              </Link>
            </li>
            <li>
              <Link to="/course" className="hover:text-black">
                Course
              </Link>
            </li>
            <li>
              <Link to="/student-project" className=" hover:text-black">
                Student Project
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`${
            isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
          }`}
        >
           <Link to="/contact">
          <Button
            value={"Contact Us"}
            className={
              "font-jakarta text-sm px-4 py-2 rounded-full text-black font-medium bg-black  bg-opacity-[.08] border border-black border-opacity-[.08] hover:border-opacity-25"
            }
          />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarDefault;
