import React, { useEffect, useState } from "react";
import img from "/course/About.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutHero() {
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
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex justify-center md:items-end items-center h-[90vh]">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex justify-center items-end">
          <img  style={{
              transform: `rotateX(${calculateRotation(
                "y"
              )}deg) rotateY(${-calculateRotation("x")}deg)`,
            }} src={img} width={550} alt="About PNG Image of www.HarikrushnaMultimedia.com" />
        </div>
        <div
          data-aos="fade-up"
          className="container px-3 flex justify-center items-center mx-auto"
        >
          <div className="text-center">
            <p
              className="text-2xl md:text-6xl font-bold text-[#e9414d] dark:text-blue-400"
              data-aos="fade-right"
            >
              About us
            </p>

            <h1
              className="mt-2 md:text-4xl text-2xl font-semibold text-gray-800  dark:text-white"
              data-aos="fade-left"
            >
              Explore the World of Creativity
            </h1>

            <p
              className="mt-3 text-2xl text-gray-500 dark:text-gray-400"
              data-aos="fade-up"
            >
              Join us on a creative adventure where your ideas come to life. Our
              team is passionate about turning imagination into reality, and we
              can't wait to share this journey with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
