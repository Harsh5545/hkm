import React from "react";
import game from "/course/gamepng.webp";
import Gamer from "/course/game-design1.webp";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import GamePage from "/course/GamePage.webp";
// import modelGame from "/course/game-design-model.webp";
import Job from "/course/Job.webp";
import certificate from '/course/certificate.webp'
import Like from "/course/like.webp";
import Time from "/course/time.webp";
import WUL from "/course/WhatULearn.webp";

import VerticalCarousel from "../../../components/slider/VerticalCarousel";
import ContactForm from "../../../components/ContactForm/ContactForm";
import Button from "../../../components/Button/Button";



function GameDesign() {
  const CourseHighlights = [
    "Job-oriented, industry-centric curriculum",
    "Hands-on practical training using the latest tools and software",
    "Certified faculty ensuring quality education",
    "Exposure to industry interaction and engaging workshops",
    "Placement assistance for a successful career launch",
    "Knowledge of AI",
  ];

  const whatULearn = [
    "3D Modeling",
    "Texturing and Materials",
    "Lighting and Rendering",
    "Visualization Techniques",
    "Level Design",
    "Design Visualization",
    "Understand Game Design",
    "3D Environment",
  ];

  const backgroundStyles = {
    backgroundImage: `url(${GamePage})`, // Use backticks for string interpolation
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "relative",
    // background:"blue "
  };
  const bgOverlayStyle = {
    content: "",
    position: "absolute",
    background:
      "linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)",
    opacity: 0.94,
    height: "100vh",
  };

  const bgOverWhatULearn = {
    backgroundImage: `url(${whatULearn})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "relative",
  };
  return (
    <div className=" font-poppins mx-auto">
      <div className="" style={backgroundStyles}>
        <div
          className="mb-8y h-[100vh] flex md:flex-row flex-col-reverse justify-center items-center"
          style={bgOverlayStyle}
        >
          <div className="flex-1">
            <img src={game} className="opacity-1 " alt="" />
          </div>

          <div className="flex-1 flex justify-center flex-col items-center  text-center">
            <h1
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "white" }}
            >
              GAME DESIGN
            </h1>
            <p
              className="text-md md:text-xl w-[90%]"
              style={{ color: "white" }}
            >
              Game design is the process of creating and designing the rules,
              mechanics, gameplay, and overall experience of a video game or any
              interactive entertainment product. It is a multidisciplinary field
              that combines elements of art, storytelling, psychology,
              programming, and more to craft engaging and enjoyable player
              experiences.
            </p>
          </div>
        </div>
      </div>

      {/* COURSE HIGHLIGHTS section */}

      <div className="flex md:h-[80vh] flex-col md:flex-row items-center justify-center">
        <div className="m-10 flex-1 flex justify-between flex-col">
          <h1 className="md:text-5xl text-3xl text-center font-bold mb-4">
            COURSE HIGHLIGHTS
          </h1>
          <ul className="list-disc pl-6">
            {CourseHighlights.map((highlight, index) => (
              <li key={index} className="mb-2 md:text-2xl text-xl">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src={Gamer} className=" p-5" width="600" alt="" />
        </div>
      </div>
      {/* WHAT YOU'LL LEARN */}
      <div className="flex  md:flex-row flex-col-reverse justify-center items-center h-full bg-[#001321]">
        <div className="flex w-[60%]">
          <img src={WUL} className="w-full md:h-[100vh] h-[50vh]" alt="" />
        </div>
        <div
          className="flex flex-1 flex-col gap-10 justify-center "
          style={{ color: "white" }}
        >
          <h1 className="md:text-5xl text-3xl text-center">
            WHAT YOU'LL LEARN HERE
          </h1>
          <ul className=" items-start md:text-3xl text-xl">
            {whatULearn.map((learn, index) => (
              <li className="mt-1 flex items-center gap-2" key={index}>
                <ArrowRightIcon />
                {learn}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Vertical Caorousel */}
      <div className="flex h-[60vh] justify-center items-center">
        <div className="flex-1 items-center flex justify-center flex-col">
          <h1 className="text-5xl ">TOOLS & SOFTWARE</h1>
          <VerticalCarousel />
        </div>
        <div className="flex-1 items-center flex justify-center flex-col ">
          <h1 className="text-5xl">CERTIFICATIONS</h1>
          <img
            src={certificate}
            width={240}
            alt="Certifiacte image from Harikrushnamultimedia.com"
          />
          <p className="text-2xl ">
            Harikrushna Multimedia Certified Expert in Game Design
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex justify-center ">
        <ContactForm />
      </div>

      {/* critera */}
      
      <div className="flex justify-evenly md:flex-row flex-col md:gap-1 gap-14 items-center m-10">
    {/* <!-- ELIGIBILITY CRITERIA --> */}
    <div className="flex-grow flex gap-5 justify-center items-center flex-col animate-fadeIn">
        <h1 className="text-4xl">
            ELIGIBILITY CRITERIA
        </h1>
        <img className="h-[14rem] transition-transform transform hover:scale-110" width={250} src={Like} alt="" />
        <p className="w-[60%] text-md md:text-xl text-center">
            Graduates and undergraduates are welcome to apply after successfully completing their 10 + 2 education.
        </p>
    </div>

    {/* <!-- COURSE DURATION --> */}
    <div className="flex-grow flex gap-5 justify-center items-center flex-col animate-fadeIn">
        <h1 className="text-4xl">
            COURSE DURATION
        </h1>
        <img className="h-[14rem] transition-transform transform hover:scale-110" width={250} src={Time} alt="" />
        <p className="w-[60%] text-md md:text-xl text-center">
            Experience a 36-month program with 2 hours of daily classes for 3 days a week, providing practical assignments in every session.
        </p>
    </div>

    {/* <!-- PLACEMENT GUARANTEE --> */}
    <div className="flex-grow flex gap-5 justify-center items-center flex-col animate-fadeIn">
        <h1 className="text-4xl">
            PLACEMENT GUARANTEE
        </h1>
        <img className="h-[14rem] transition-transform transform hover:scale-110" width={250} src={Job} alt="" />
        <p className="w-[60%] text-md md:text-xl text-center">
            Secure your future with our Placement Guarantee, connecting you with industry leaders for exciting career opportunities after program completion.
        </p>
        </div>
       
</div>
      {/* SIMILAR COURSE  */}
      
      <div className="h-[25rem] flex flex-col justify-center items-center ">
        <h1 className="text-5xl text-center m-5">
        SIMILAR COURSES
        </h1>
        <div className="flex w-[80%] items-center justify-between">
        <div>
          <h1 className="text-2xl">
          3D JEWELLERY DESIGN
          </h1>
          <Button className='p-4 text-xl bg-slate-500 rounded-3xl' value='Explore'/>
        </div>
        <div>
          <h1 className="text-2xl">
          3D JEWELLERY DESIGN
          </h1>
          <Button className='p-4 text-xl bg-slate-500 rounded-3xl' value='Explore' />
                </div>
        </div>
        </div>

    </div>
  );
}

export default GameDesign;
