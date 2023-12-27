import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const navVariants = {
  initial: {
    y: -50,
    x: "-50%",
  },
  animate: {
    y: 0,
    x: "-50%",
    transition: {
      duration: 0.5, // Increase the duration to slow down the motion
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
      className="fixed z-[999] top-2 left-1/2 -translate-x-1/2 rounded-xl p-2 flex-col bg-black  backdrop-blur-lg border border-white  flex md:flex-row md:justify-between items-center"
      style={{ width: "80%" }} // Increase the width to your desired value
    >
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
    </motion.div>
  );
}

export default NavbarFixed;
