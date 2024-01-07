import React from "react";
import Button from "../Button/Button";
import "./ContactForm.css"
function ContactForm() {
  return (
    <div className="mt-4">
    <div className="flex flex-col md:flex-row">
      <div className=" md:flex-1 rounded-start text-white py-3 px-4 column_1">
        <h2 className="h2 text-center font-bold">
          WE'D LOVE TO HEAR FROM YOU
        </h2>
        <div className="img_div">
          <img src="contact us.png" className="contact_img w-full" alt="" />
          <br />
          <br />
          <br />
        </div>
        <p className="text-justify">
          Feel free to get in touch with us through our "Contact Us" link for any inquiries, suggestions, or assistance you may need. We're here to help and always eager to hear from you!
        </p>
        <div className="icon flex justify-center items-center text-2xl">
          <a href="#" className="mx-1">
            <i className="bx bxl-twitter twitter p-1 rounded-full"></i>
          </a>
          <a href="#" className="mx-1">
            <i className="bx bxl-facebook facebook p-1 rounded-full"></i>
          </a>
          <a href="#" className="mx-1">
            <i className="bx bxl-instagram instagram p-1 rounded-full"></i>
          </a>
          <a href="#" className="mx-1">
            <i className="bx bxl-telegram telegram p-1 rounded-full"></i>
          </a>
        </div>
      </div>
      <div className=" md:flex-1 rounded-end p-4 column_2">
        <h3 className="h-3 text-white font-bold text-center">Contact us</h3>
        <br />
        <form className="text-white">
          <div className="mb-4">
            <input
              type="name"
              className="form-control shadow-none w-full p-3 rounded"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="form-control shadow-none w-full p-3 rounded"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              className="form-control shadow-none w-full p-3 rounded"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="Number"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              className="form-control shadow-none w-full p-3 h-40 rounded"
              placeholder="Leave a comment here"
              required
            ></textarea>
          </div>
          <button className="btn btn-primary px-3 py-2 text-lg w-full" type="submit">
            SEND
            <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
  
  );
}

export default ContactForm;
