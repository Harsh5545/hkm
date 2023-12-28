// Hero.js
import React, { useState, useEffect } from "react";


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
    // Adjust these values based on your desired rotation range
    const maxRotation = 10;
    const rotation = (mousePosition[axis] / window.innerWidth - 1) * maxRotation;
    return rotation;
  };

  return (
    <div className="min-h-100 mt-20 flex flex-col justify-center items-center bg-black " style={{ transform: `rotateX(${calculateRotation("y")}deg) rotateY(${-calculateRotation("x")}deg)` }}>
      <h1 className="text-4xl font-bold text-white">Your Hero Section</h1>
    </div>
  );
};

export default Hero;
