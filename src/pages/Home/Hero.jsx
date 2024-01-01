import React, { useState, useEffect } from "react";
import TyperWriter from "./TyperWriter";
import Button from "../../components/Button/Button";
import { Canvas } from "@react-three/fiber";
import Experience from "../../components/Experience/Experience";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateRotation = (axis) => {
    const maxRotation = 1;
    const rotation =
      (mousePosition[axis] / window.innerWidth - 1) * maxRotation;
    return rotation;
  };

  return (
    <div
      className="h-[100vh] opacity-1 w-[95%] flex flex-col justify-center"
      style={{
        transform: `rotateX(${calculateRotation(
          "y"
        )}deg) rotateY(${-calculateRotation("x")}deg)`,
      }}
    >
      <div className="flex flex-col md:flex-row justify-between h-full items-center left-container">
        <div className=" flex flex-col flex-1 items-start justify-end md:justify-start font-poppins gap-4 text-white md:gap-12">
          <h2 className="flex text-xl md:text-5xl ">Opportunity to Bring Your</h2>
          <h1 className="text-2xl md:text-7xl">Creative Passion to Life</h1>
          <div  >
            <h2 className="flex  text-xl md:text-4xl">You Will Learn Here</h2>
            <TyperWriter />
          </div>
            <div className={'button pt-6'} >
              <span>Download Brochure</span>
              <b className="top">click to download</b>
              <b className="bottom">1.2MB .pdf</b>
            </div>
        </div>
        <div className=" flex-1 h-[100%] w-[100%] text-white ">
        <Canvas>
      <Experience/>
  </Canvas>
        </div>
      </div>
     </div>
  );
};

export default Hero;
