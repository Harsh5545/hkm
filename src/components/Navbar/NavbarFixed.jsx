import React from "react";
import { motion } from "framer-motion";

const navVariants = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      duration: 0.5, // Increase the duration to slow down the motion
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

function NavbarFixed() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={navVariants}
      className="fixed z-[999] top-2 left-1/2 -translate-x-1/2 rounded-full p-2 bg-black bg-opacity-[.8] backdrop-blur-lg border border-white border-opacity-[.08] flex"
      style={{ width: "80%" }} // Increase the width to your desired value
    >
      <div className="flex items-center justify-between w-full"> {/* Added justify-between and w-full */}
        <div>
          <h2 className="text-xl text-white font-semibold">Logo</h2>
        </div>
        <ul className="flex items-center gap-2 text-sm font-medium font-jakarta text-white">
          <li>
            <a href="#" className="p-4 hover:opacity-50">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="p-4 hover:opacity-50">
              AboutUs
            </a>
          </li>
          <li>
            <a href="#" className="p-4 hover:opacity-50">
              Course
            </a>
          </li>
          <li>
            <a href="#" className="p-4 hover:opacity-50">
              Student Project
            </a>
          </li>
          <li>
            <button className="font-jakarta text-sm px-4 py-2 rounded-3xl text-white font-medium bg-[#171719] border border-white border-opacity-[.08] hover:border-opacity-25">
              Login
            </button>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default NavbarFixed;
