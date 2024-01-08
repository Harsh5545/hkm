import React from "react";
import Button from "../Button/Button";
import Contact from '/course/ContactUs.webp'
import "./ContactForm.css"
function ContactForm() {
  return (
    <div className="mt-5" style={{
      background: 'linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)'
    }} >

    <div className="flex flex-col md:flex-row">
      
      <div className=" md:flex-1 flex justify-center flex-col  rounded-xl p-4 ">
        <h3 className="h-3 text-white font-bold ">Contact us</h3>
        <br />
        <form className="text-white ">
          <div className="mb-4">
            <input
              type="name"
              className="form-control shadow-none w-[60%] p-3 rounded-lg"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="form-control shadow-none w-[60%] p-3 rounded-lg"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              className="form-control shadow-none w-[60%] p-3 rounded-lg"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="Number"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              className="form-control shadow-none w-[60%] p-3 h-40 rounded-lg"
              placeholder="Leave a comment here"
              required
            ></textarea>
          </div>
          <button className="btn btn-primary  px-3 py-2 text-lg w-[60%]" type="submit">
            SEND
            <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
          </button>
        </form>
        </div>
        <div className=" md:flex-1 flex justify-center flex-col gap-10 items-center text-white py-3 px-4">
        <h2 className="h2 text-center md:text-3xl text-xl font-bold">
          WE'D LOVE TO HEAR FROM YOU
        </h2>
      
      
            <p className="text-justify">
          Feel free to get in touch with us through our "Contact Us" link for any inquiries, suggestions, or assistance you may need. We're here to help and always eager to hear from you!
          </p>
        
          <img src={Contact} width={400} alt="contact image of harikrushna Multimedia institue"/></div>
    </div>
  </div>
  
  );
}

export default ContactForm;
