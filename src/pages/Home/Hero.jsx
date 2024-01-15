import React, { useState, useEffect } from "react";
import TyperWriter from "./TyperWriter";
import { Canvas } from "@react-three/fiber";
import Experience from "../../components/Experience/Experience";
import './homeStyles.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Button  from "../../components/Button/Button";
import Loader1 from "../../components/Loader/Loader1";

const Hero = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) that takes some time
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout to prevent a memory leak
    return () => clearTimeout(timeout);
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
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
      <div className="flex flex-col mt-6 md:mt-2 select-none md:flex-row justify-between h-full items-center left-container">
        <div className=" flex flex-col flex-1  items-start justify-end md:justify-start font-poppins text-white gap-1 md:gap-8">
          <h2 data-aos='fade-left' className="flex text-2xl md:text-4xl">Opportunity to Bring Your</h2>
          <h1 data-aos='fade-right' className="text-3xl md:text-5xl">Creative Passion to Life</h1>
          <div  className="flex flex-col gap-2 md:gap-8" >
            <h2 data-aos='fade-left' className="flex text-2xl md:text-4xl">You Will Learn Here</h2>
            <div data-aos='fade-right'>  <TyperWriter  /></div>
          
          </div>
          <Button value={'Download'} data-aos="flip-up" className={'btn'}/>
            {/* <div className={'button pt-2 md:pt-2 '} >
              <span>Download Brochure</span>
              <b className="top">click to download</b>
              <b className="bottom">83MB .pdf</b>
            </div> */}
        </div>
        <div className="flex-1 h-full w-full text-white">
        {loading ? (
        <Loader1 />
      ) : (
        <>
          <Canvas>
            <Experience/>
                </Canvas>
                </>
      )}
        </div>
      </div>
     </div>
  );
};

export default Hero;
