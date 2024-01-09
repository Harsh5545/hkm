import React, { useState } from "react";
import model1 from "/course/Model1.webp";
import model2 from "/course/Model.webp";
import model3 from "/course/Model3.webp";
import A1 from "/course/A1.webp";
import A2 from "/course/A2.webp";
import A3 from "/course/A3.webp";
import A4 from "/course/A4.webp";
import A5 from "/course/A5.webp";
import A6 from "/course/A6.webp";
import  {testimonialsData}  from "../../helpers/Constant";
function StudentWork() {
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
    <div>
      <div className="flex flex-col my-5 justify-center items-center">
        <h1 className="md:text-4xl text-3xl font-poppins font-bold text-center">
          MODELLING - STUDENTS PROJECTS
        </h1>
        <div className="md:grid my-10 md:grid-cols-3 justify-center items-center gap-5 flex-col md:flex-row ">
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
        <h1 className="text-4xl font-poppins font-bold text-center">
          Student Project Videos
        </h1>
        <div className="flex gap-10 md:flex-row flex-col">
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
        <h1 className="text-4xl font-poppins font-bold"> Other Project</h1>
        <div>
          <ul className="grid my-10 md:grid-cols-3 grid-cols-1 gap-10  ">
            {StudentData.map((work) => (
              <li key={work.id}>
                <img
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

      <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
        What Students are saying
        </h1>

        <div class="flex justify-center mx-auto mt-6">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div class="flex items-start max-w-6xl mx-auto mt-16">
            <button title="left arrow" class="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100" onClick={() => handleNavigation("left")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div>
                <p class="flex items-center text-center text-gray-500 lg:mx-8">
                {currentTestimonial.content}
                </p>

                <div class="flex flex-col items-center justify-center mt-8">
                    <img class="object-cover rounded-full w-14 h-14" src={currentTestimonial.photo} alt=""/>

                    <div class="mt-4 text-center">
                        <h1 class="font-semibold text-gray-800 dark:text-white">{currentTestimonial.name}</h1>
                        
                    </div>
                </div>
            </div>

            <button title="right arrow" class="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100" onClick={() => handleNavigation("right")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</section>

      {/* before footer  */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Join us and get the update from anywhere
          </h2>

          <div className="mt-8 lg:mt-0">
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email Address"
              />

              <button className="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Get Started
              </button>
            </div>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
              Attention! Offer expires in 30 days. Make sure not to miss this
              opportunity
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudentWork;
