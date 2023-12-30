import React, { useState, useEffect } from "react";
import TyperWriter from "./TyperWriter";
import Button from "../../components/Button/Button";

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
      className=" h-[100vh] opacity-1 w-[95%] flex flex-col justify-center"
      style={{
        transform: `rotateX(${calculateRotation(
          "y"
        )}deg) rotateY(${-calculateRotation("x")}deg)`,
      }}
    >
      <div className="flex justify-between items-center left-container">
        <div className=" flex flex-col items-start font-poppins  text-white gap-12">
          <h2 className="flex text-5xl ">Opportunity to Bring Your</h2>
          <h1 className="text-7xl">Creative Passion to Life</h1>
          <div  >
            <h2 className="flex text-4xl">You Will Learn Here</h2>
            <TyperWriter />
            <Button value={'Download Brochure'} className={''}/>
          </div>
        </div>
        <div className="justify-start text-white right-container">zero</div>
      </div>
     </div>
  );
};

export default Hero;
