import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Logo from '../../assets/logo.png'
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
const navVariants = {
  initial: {
    y: "-50%",
    x: "-50%",
  },
  animate: {
    y: 0,
    x: "-50%",
    transition: {
      duration: 1.5, // Increase the duration to slow down the motion
    },
  },
  exit: {
    y: -50,
  },
};

function NavbarFixed() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navInput,setNavInput]=useState(false)
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setNavInput((prev) => !prev)
  };
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const toNavigate=useNavigate()
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={navVariants}
      className="fixed z-[999] top-2 left-1/2 -translate-x-1/2 rounded-xl p-2 flex-col bg-white  backdrop-blur-lg border border-balck justify-around flex md:flex-row items-center"
      style={{ width: "85%" }} // Increase the width to your desired value
    >
         <div className="flex justify-between items-center w-full md:w-0">
         <span className="text-xl">
          <img src={Logo} className="md:max-w-20 max-w-10"   alt="HarikrushnaMultimedia institue logo"/>
        </span>
        <div className="md:hidden">
            <label class="hamburger">
              <input type="checkbox" onChange={toggleMobileMenu} checked={navInput} />
              <svg viewBox="0 0 32 32">
                <path
                  class="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
      </div>

      <div className="flex flex-col items-start">
        <ul
          className={`flex flex-col md:flex-row font-poppins items-center gap-8 md:gap-4 h-[20rem] md:h-0 justify-center text-black font-medium font-jakarta ${
            isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
          }`}
        >
          <li>
              <Link to="/" className=" hover:text-black" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className=" hover:text-black" onClick={toggleMobileMenu}>
                AboutUs
              </Link>
            </li>
            <li>
              <Link to="/course" className="hover:text-black" onClick={toggleMobileMenu}>
                Course
              </Link>
            </li>
            <li>
              <Link to="/student-project" className=" hover:text-black" onClick={toggleMobileMenu}>
                Student Project
              </Link>
            </li>
        </ul>
      </div>

      <div className={`${
            isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
          }`}>
        <Button className={"font-jakarta text-sm px-4 py-2 rounded-full text-black font-medium bg-black bg-opacity-[.08] border border-black border-opacity-[.08] hover:border-opacity-25"}
         value={'Contact Us'} onClick={()=>{toNavigate('/contact')
          toggleMobileMenu}}/>
      
      </div>
    </motion.div>
  );
}

export default NavbarFixed;
