import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import imgvfx from "/model/course-bg.webp";
import CourseMiddle from "./CourseMiddle";
import AOS from "aos";
import "aos/dist/aos.css";
const CoursesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  const backgroundStyles = {
    backgroundImage: `url(${imgvfx})`, // Use backticks for string interpolation
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "relative",
    // background:"blue "
  };
  const bgOverlayStyle = {
    content: "",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background:
      "linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)",
    opacity: 0.81,
  };

  return (
    <>
      <Helmet>
        <title>
          Harikrushna Multimedia Institute - Explore Exciting Courses
        </title>
        <meta
          name="description"
          content="Discover exciting and industry-relevant courses at Harikrushna Multimedia Institute. Transform your creative career with expert-led training in animation, VFX, gaming, and more. Pursue your passion by joining our courses after completing your 12th grade."
        />
        <meta
          name="keywords"
          content="Harikrushna Multimedia Institute, animation courses, VFX courses, gaming courses, media and entertainment courses, creative career, 12th grade courses, Surat"
        />
        <meta name="author" content="Harikrushna Multimedia Institute" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div
        className="mx-auto flex justify-center text-center "
        style={backgroundStyles}
      >
        <div style={bgOverlayStyle}></div>
        <div className="flex flex-col  md:flex-row justify-end md:justify-center items-center">
          <div className=" w-[80%] relative">
            <img
              data-aos="fade-left"
              className="m-1 shadow-gray-800"
              src="./model/Graphic-Design.webp"
              alt="Graphic Design Course images"
            />
          </div>
          <div className="relative flex w-[80%] flex-col justify-end md:justify-center items-center">
            <h1
              data-aos="fade-down"
              className="text-5xl font-bold mb-6 text-white"
            >
              Courses
            </h1>
            <p data-aos="fade-right" className="text-xl mb-4 text-white">
              Welcome to Harikrushna Multimedia Institute, the best institute in
              Surat, offering dynamic courses to shape your creative career. Our
              expert faculty provides industry-relevant and employment-oriented
              training using the latest tools and technologies. Explore our
              exciting courses in animation, VFX, gaming, and more.
            </p>
            <p className="text-xl mb-6 text-white md:visible hidden ">
              Chase your dream career by enrolling in our courses after
              completing your 12th grade. Transform your passion into a
              profession with Harikrushna Multimedia Institute.
            </p>
          </div>
        </div>
      </div>
      <div>
        <CourseMiddle />
      </div>
    </>
  );
};

export default CoursesPage;
