import React from "react";
import "./About.css";
import Slider from "react-slick";

import about from "/course/AboutUs.webp";
function AboutMiddle() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold pb-10 text-[#e9414d] mb-8 text-center">
          About Our Institute
        </h1>
        <div className="grid grid-cols-1 px-4 md:pl-5 md:grid-cols-2 gap-12">
          <div className="md:col-span-1">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Welcome to{" "}
              <span className="font-bold">
                {" "}
                Harikrushna Multimedia Institute{" "}
              </span>
              , located in Surat, Gujarat. We take pride in offering a diverse
              range of creative courses that empower aspiring individuals in the
              fields of multimedia, animation, and design.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg mt-4">
              Our institute is equipped with state-of-the-art facilities and
              experienced instructors who are passionate about nurturing talent.
              Whether you are interested in 3D Architectural design, Video
              Editing, Game Design, 3D Animation, Visual Effects, 2D Animation,
              3D Jewellery Design, Graphics Design, or our specialized programs
              like the "Program in Graphics & Animation" and "Program in Game
              Design," we have a course tailored for you.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg">
              At Harikrushna Multimedia Institute, we believe in fostering
              creativity, innovation, and technical excellence. Our mission is
              to empower individuals to turn their passion for multimedia into a
              fulfilling and successful career. Join us on a journey of
              learning, collaboration, and skill development that will open
              doors to exciting opportunities in the multimedia industry.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg mt-4">
              Explore our courses, engage with our vibrant community, and embark
              on a rewarding educational experience. Feel free to reach out to
              us for any inquiries or assistance. We look forward to being part
              of your creative journey.
            </p>
          </div>
          <div className="md:col-span-1 flex justify-center items-center">
            <div class="card">
              <div class="bg">
                {" "}
                <img src={about} alt="" className="h-full" width={550}/>
              </div>
              <div class="blob"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMiddle;
