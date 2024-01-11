import React, { useEffect, useState } from "react";
import model1 from "/course/Model1.webp";
import model2 from "/course/Model.webp";
import model3 from "/course/Model3.webp";
import A1 from "/course/A1.webp";
import A2 from "/course/A2.webp";
import A3 from "/course/A3.webp";
import A4 from "/course/A4.webp";
import A5 from "/course/A5.webp";
import A6 from "/course/A6.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { testimonialsData } from "../../helpers/Constant";
function StudentWork() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const StudentData = [
    {
      id: 1,
      path: A1,
      alt: "Harikrushna Multimedia Spiderman student work",
    },
    {
      id: 2,
      path: A2,
      alt: "Harikrushna Multimedia Shoes student work",
    },
    {
      id: 3,
      path: A3,
      alt: "Harikrushna Multimedia Jewellery student work",
    },
    {
      id: 4,
      path: A4,
      alt: "Harikrushna Multimedia Jewellery student work",
    },
    {
      id: 5,
      path: A5,
      alt: "Harikrushna Multimedia Jewellery student work",
    },
    {
      id: 6,
      path: A6,
      alt: "Harikrushna Multimedia Jewellery student work",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction) => {
    const totalTestimonials = testimonialsData.length;

    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col my-5 justify-center items-center">
        <h1
          data-aos="fade-down"
          className="md:text-4xl text-3xl font-poppins font-bold text-center"
        >
          MODELLING - STUDENTS PROJECTS
        </h1>
        <div
          data-aos="fade-left"
          className="md:grid my-10 md:grid-cols-3 justify-center items-center gap-5 flex-col md:flex-row "
        >
          <img
            src={model3}
            width={450}
            className="h-[20rem] p-1 shadow-2xl transition-transform transform hover:scale-105"
            alt="Harikrushna Multimedia Institute student Work Model"
          />
          <img
            src={model2}
            width={450}
            className="h-[20rem] p-1 shadow-2xl transition-transform transform hover:scale-105"
            alt="Harikrushna Multimedia Institute student Work Model"
          />
          <img
            src={model1}
            width={450}
            className="h-[20rem] p-1 shadow-2xl transition-transform transform hover:scale-105"
            alt="Harikrushna Multimedia Institute student Work Model"
          />
        </div>
      </div>

      {/* Video project */}
      <div className="my-10 mt-[10rem] flex gap-10 flex-col justify-center items-center">
        <h1
          data-aos="fade-up"
          className="text-4xl font-poppins font-bold text-center"
        >
          Student Project Videos
        </h1>
        <div data-aos="fade-right" className="flex gap-10 md:flex-row flex-col">
          <iframe
            className="w-full md:w-[40rem] h-[20rem] md:h-[25rem]"
            src="https://www.youtube.com/embed/hSNqVUOVLTg?si=L6pitCzW8QBpppMk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-[25rem] md:w-[40rem] h-[20rem] md:h-[25rem]"
            src="https://www.youtube.com/embed/LbjXb-0e7LU?si=LdK0onbjOXCr_PXY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* student Other Project */}
      <div className="flex justify-center mt-[8rem]  items-center flex-col ">
        <h1 data-aos="fade-left" className="text-4xl font-poppins font-bold">
          {" "}
          Other Project
        </h1>
        <div>
          <ul className="grid my-10 md:grid-cols-3 grid-cols-1 gap-10  ">
            {StudentData.map((work) => (
              <li key={work.id}>
                <img
                  data-aos="fade-right"
                  width={400}
                  className="h-[30rem] rounded-lg"
                  src={work.path}
                  alt={work.alt}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*Student review */}

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1
            data-aos="fade-left"
            className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white"
          >
            What Students are saying
          </h1>

          <div data-aos="fade-up" className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>

          <div
            data-aos="fade-right"
            className="flex items-start max-w-6xl mx-auto mt-16"
          >
            <button
              title="left arrow"
              className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
              onClick={() => handleNavigation("left")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div>
              <p className="flex items-center text-center text-gray-500 lg:mx-8">
                {currentTestimonial.content}
              </p>

              <div className="flex flex-col items-center justify-center mt-8">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src={currentTestimonial.photo}
                  alt=""
                />

                <div className="mt-4 text-center">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    {currentTestimonial.name}
                  </h1>
                </div>
              </div>
            </div>

            <button
              title="right arrow"
              className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
              onClick={() => handleNavigation("right")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* before footer  */}
    </div>
  );
}

export default StudentWork;
