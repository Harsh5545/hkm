import React, { useState, useEffect } from "react";
import Constant from '../../helpers/Constant';
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
    <div className={`w-full flex justify-center ${isScrolled ? "sticky top-0" : ""}`}>
      <div className={`w-[80%] rounded-3xl flex shadow-2xl mt-[-3rem] bg-white z-10 ${isScrolled ? "animate-scroll-down" : "animate-scroll-up"}`}>
        {Constant.map((course, index) => (
          <div
            className={`flex-1 flex justify-center my-20 px-20 text-center gap-2 items-center flex-col transition-all duration-1000 transform ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            key={index}
          >
            <img
              src={course.image}
              alt={course.alt}
              style={{ height: '15rem' }}
              className="transition-transform transform hover:scale-95 hover:-translate-y-2 hover:rotate-x-12 hover:rotate-y-12"
            />
            <h1 className="text-">{course.course}</h1>
            <p>{course.description}</p>
            <Button value={course.buttonText} className="p-1" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeMiddle;
