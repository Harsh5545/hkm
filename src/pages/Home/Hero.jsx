import React, { useState, useEffect } from "react";
import TyperWriter from "./TyperWriter";
import { Canvas } from "@react-three/fiber";
import Experience from "../../components/Experience/Experience";
import './homeStyles.css'
import Button  from "../../components/Button/Button";

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
      className="h-[100vh] opacity-1 w-full md:w-[95%] flex flex-col justify-center"
      style={{
        transform: `rotateX(${calculateRotation(
          "y"
        )}deg) rotateY(${-calculateRotation("x")}deg)`,
      }}
    >
      <div className="flex flex-col select-none md:flex-row justify-between h-full items-center left-container">
        <div className=" flex flex-col flex-1  items-start mt-24 md:mt-0 justify-end md:justify-start font-poppins text-white md:gap-8">
          <h2 className="flex text-xl md:text-4xl">Opportunity to Bring Your</h2>
          <h1 className="text-2xl md:text-5xl">Creative Passion to Life</h1>
          <div className="flex flex-col gap-8" >
            <h2 className="flex text-xl md:text-4xl">You Will Learn Here</h2>
            <TyperWriter />
          </div>
          <Button value={'Download'} className={'btn'}/>
            {/* <div className={'button pt-2 md:pt-2 '} >
              <span>Download Brochure</span>
              <b className="top">click to download</b>
              <b className="bottom">83MB .pdf</b>
            </div> */}
        </div>
        <div className="flex-1 h-full w-full text-white">
          <Canvas>
            <Experience/>
          </Canvas>
        </div>
      </div>
     </div>
  );
};

export default Hero;
