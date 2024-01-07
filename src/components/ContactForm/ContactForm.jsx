import React from "react";
import Button from "../Button/Button";

function ContactForm() {
  return (
    <div className="w-[100%] bg-slate-500 flex justify-center flex-col items-center h-[90vh]">
        <h5 className="font-poppins flex justify-center text-4xl flex-1 mt-8 items-start">JOIN HARIKRUSHNA MULTIMEDIA TO CREATE SUCH AMAZING WORKS</h5>
     <div className="flex-auto items-start">
      
     <p> My name is
      <input placeholder="Enter Your Name" className="border"/></p><p>
      . You can contact me on my
      <input placeholder="Enter Your Number" />
      &
      <input placeholder="Enter Your Email Id" /></p>
      . I am interested in joining Harikrushna MultiMedia
      <select selected-value={'Select Course '} placeholder="select" /> course.
      <Button value={"Submit"} className="btn"/>
      </div> 
    </div>
  );
}

export default ContactForm;
