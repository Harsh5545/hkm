import React, { useState, useEffect } from "react";
import { CourseData } from '../../helpers/Constant';
import Button from "../../components/Button/Button";

function HomeMiddle() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100;

      setIsScrolled(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full flex justify-center ${isScrolled ? " top-0" : ""}`}>
      <div className={`w-[80%] rounded-3xl flex flex-col md:flex-row shadow-2xl mt-[-3rem] bg-white z-10 ${isScrolled ? "animate-scroll-down" : "animate-scroll-up"}`}>
        {CourseData.map((course, index) => (
          <div
            className={`flex-1 flex justify-center my-5 md:my-20 px-2 md:px-16 text-center gap-6 items-center flex-col transition-all duration-1000 transform text-sm ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            key={index}
          >
            <img
              src={course.image}
              alt={course.alt}
              style={{ height: '15rem' }}
              className={`transition-transform duration-300 transform hover:scale-95 hover:-translate-y-2 hover:rotate-x-12 hover:rotate-y-12 homeMiddleImg${index}`}
            />
            <h3 className="font-semibold font-poppins">{course.course}</h3>
            <p className="font-poppins">{course.description}</p>
            <Button value={course.buttonText} className="p-1 btn" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeMiddle;
