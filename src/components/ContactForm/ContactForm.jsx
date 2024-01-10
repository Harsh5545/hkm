import React, { useState } from "react";
import Button from "../Button/Button";
import Contact from '/course/ContactUs.webp';
import "./ContactForm.css";

function ContactForm() {
  // Sample course names (replace it with your actual data)
  const sampleCourseNames = ["Game Design", "2D Animation", "3D Animation", "Graphic Desgin", "Video Editing", "3D ARCHITECTURAL","3D JEWELLERY DESIGN", "Visual Effect", "PROGRAM IN GRAPHICS & ANIMATION", "PROGRAM IN GAME DESIGN" ];

  const [course, setCourse] = useState(""); 
  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  return (
    <div className="mt-2" style={{ background: 'linear-gradient(to right, #353777 0%, #3b5998 50%, #0F406D 100%)' }}>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:flex-1 flex justify-evenly flex-col rounded-xl ">
          <h3 className="text-white p-5 text-5xl text-center font-bold ">Contact us</h3>
          
          <form className="text-white flex flex-col items-center">
            <div className="mb-4 w-full md:w-[60%]">
              <input
                type="name"
                className="form-control shadow-none w-full p-3 rounded-3xl"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-4 w-full md:w-[60%]">
              <input
                type="email"
                className="form-control shadow-none w-full p-3 rounded-3xl"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-4 w-full md:w-[60%]">
              <input
                type="tel"
                className="form-control shadow-none w-full p-3 rounded-3xl"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="Number"
                required
              />
            </div>
            <div className="mb-4 w-full md:w-[40%]">

              <select
                value={course}
                onChange={handleCourseChange}
                className="form-control-contact w-full p-2 rounded-3xl"
              >
                <option value="" disabled>Select a course</option>
                {sampleCourseNames.map((courseName, index) => (
                  <option key={index} className="bg-white black" value={courseName}>
                    {courseName}
                  </option>
                ))}
              </select>
            </div>
           
          </form>
          <div className="flex justify-center w-full">
              <button className="btn btn-primary px-3 py-2 text-lg md:w-[60%]" type="submit">
                SEND
                <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
              </button>
            </div>
        </div>
        <div className="md:flex-1 flex justify-center flex-col gap-10 items-center text-white py-3 px-4">
          <h2 className="h2 text-center md:text-3xl text-2xl font-bold">
            WE'D LOVE TO HEAR FROM YOU
          </h2>
          <p className="text-justify">
          Fill the form so we can get to know you and your needs better.    </p>
          <img src={Contact} width={400} alt="contact image of harikrushna Multimedia institute" />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
