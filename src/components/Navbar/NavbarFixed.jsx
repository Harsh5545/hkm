import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Logo from '../../assets/logo.png'
import Button from "../Button/Button";

const navVariants = {
  initial: {
    y: -50,
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
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
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
          <button className="text-black" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <ul
          className={`flex flex-col md:flex-row font-poppins items-center gap-8 md:gap-4 h-[20rem] md:h-0 justify-center text-black font-medium font-jakarta ${
            isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
          }`}
        >
          <li>
      
          </li>
          <li>
            <a href="" className="p-3 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="" className="p-3 hover:text-white">
              AboutUs
            </a>
          </li>
          <li>
            <a href="" className="p-3 hover:text-white">
              Courses
            </a>
          </li>
          <li>
            <a href="" className="p-3 hover:text-white">
              Student Project
            </a>
          </li>
        </ul>
      </div>

      <div className={`${
            isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
          }`}>
        <Button className={"font-jakarta text-sm px-4 py-2 rounded-full text-black font-medium bg-black bg-opacity-[.08] border border-black border-opacity-[.08] hover:border-opacity-25"}
         value={'Contact Us'}/>
      
      </div>
    </motion.div>
  );
}

export default NavbarFixed;
