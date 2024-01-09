import React from "react";
import img from '/course/pinkBG.webp'
import image from '/course/contactPagePng.webp'
function ContactHero() {
   
  return (
    <div className="flex justify-center items-center h-[100vh]" >
          <div ></div>
          <div className="grid md:grid-cols-2 grid-cols-1 ">
    
        <div className="container px-3 flex justify-center items-center mx-auto">
          <div className="text-center">
            <p className=" text-4xl font-bold text-blue-500 dark:text-blue-400">
              Contact us
            </p>

            <h1 className="mt-2 text-3xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              We'd love to hear from you
            </h1>

            <p className="mt-3 text-2xl text-gray-500 dark:text-gray-400">
              Chat to our friendly team.
            </p>
          </div>
        </div>
        
          
          <div className="flex justify-center items-end">
          <img src={image} width={550} alt=""/>
          </div>
          </div>
          </div>
  );
}

export default ContactHero;
