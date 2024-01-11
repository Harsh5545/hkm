import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from '/course/contactPagePng.webp'
function ContactHero() {
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
    const maxRotation = -20;
    const rotation =
      (mousePosition[axis] / window.innerWidth - 1) * maxRotation;
    return rotation;
    };
    useEffect(() => {
      AOS.init({ duration: 200 });
    }, []);
  return (
    <div className="flex justify-center w-full md:items-end items-end  h-[90vh]" >
          
          <div className="grid md:grid-cols-2 grid-cols-1 ">
    
        <div  data-aos="fade-up" className="container px-3 flex justify-center items-center mx-auto">
          <div   className="text-center flex flex-col gap-10">
            <p   className=" text-2xl md:text-6xl font-bold text-[#e9414d] dark:text-blue-400">
              Contact us
            </p>

            <h1 className="mt-2 text-xl font-semibold text-gray-800 md:text-4xl dark:text-white">
              We'd love to hear from you
            </h1>

            <p   className="mt-3 text-2xl text-gray-500 dark:text-gray-400">
              Chat to our friendly team.
            </p>
          </div>
        </div>
        
          
          <div  data-aos="fade-down"  style={{
              transform: `rotateX(${calculateRotation(
                "y"
              )}deg) rotateY(${-calculateRotation("x")}deg)`,
            }} className="flex justify-center items-end">
          <img src={image} width={550} alt=""/>
          </div>
          </div>
          </div>
  );
}

export default ContactHero;
