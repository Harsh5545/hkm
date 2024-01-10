import React, { useEffect } from "react";
import img from '/course/About.webp';
import AOS from "aos";
import "aos/dist/aos.css";

function AboutHero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex justify-center items-end">
          <img src={img} width={550} alt="" />
        </div>
        <div
          data-aos="fade-up"
          className="container px-3 flex justify-center items-center mx-auto"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-500 dark:text-blue-400" data-aos="fade-right">
              About us
            </p>

            <h1 className="mt-2 text-3xl font-semibold text-gray-800 md:text-3xl dark:text-white" data-aos="fade-left">
            Explore the World of Creativity
            </h1>

            <p className="mt-3 text-2xl text-gray-500 dark:text-gray-400" data-aos="fade-up">
            Join us on a creative adventure where your ideas come to life. Our team is passionate about turning imagination into reality, and we can't wait to share this journey with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
