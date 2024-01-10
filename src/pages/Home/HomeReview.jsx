import React, { useEffect, useState } from "react";
import { testimonialsData } from "../../helpers/Constant";
import AOS from "aos";
import "aos/dist/aos.css";
function HomeReview() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
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
      <section class="bg-white dark:bg-gray-900">
        <div class="relative flex">
          <div class="min-h-screen lg:w-1/3"></div>
          <div class="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

          <div class="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 data-aos='fade-up' class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              What our <span class="text-[#e9414d]">customers</span> are saying
            </h1>

              <div class="mt-10 lg:mt-20 lg:flex lg:items-center">
                <img data-aos='fade-left'
                  class="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
                  src={currentTestimonial.photo}
                  alt=""
                />

                <div class="mt-8 lg:px-10 lg:mt-0">
                  <h1 data-aos='fade-right' class="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                    {currentTestimonial.contentHeading}
                  </h1>

                  <p data-aos='fade-up' class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                    {currentTestimonial.content}
                  </p>

                  <h3 data-aos='fade-down' class="mt-6 text-lg font-medium text-[#e9414d]">
                    {currentTestimonial.name}
                  </h3>
                </div>
              </div>


            <div data-aos='fade-up' class="flex items-center justify-between mt-12 lg:justify-start">
              <button
                onClick={() => handleNavigation("left")}
                title="left arrow"
                class=" p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() => handleNavigation("right")}
                title="right arrow"
                class=" p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
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
        </div>
      </section>
    </div>
  );
}

export default HomeReview;
