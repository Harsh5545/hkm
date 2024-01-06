import React from "react";
import Button from "../Button/Button";

function ContactForm() {
  return (
    <div className="w-[100%] bg-slate-500 flex justify-center flex-col items-center h-[90vh]">
        <h5 className="font-poppins flex justify-center">JOIN HARI KRUSHNA MULTIMEDIA TO CREATE SUCH AMAZING WORKS</h5>
      My name is
      <input placeholder="Enter Your Name" className="border"/>
      . You can contact me on my
      <input placeholder="Enter Your Number" />
      &
      <input placeholder="Enter Your Email Id" />
      . I am interested in joining Harikrushna MultiMedia
      <select aria-placeholder="select" /> course.
      <Button value={"Submit"} className="btn"/>
    </div>
  );
}

export default ContactForm;
