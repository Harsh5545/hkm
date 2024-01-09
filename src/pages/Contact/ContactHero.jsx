import React from "react";
import img from '/course/BgGameDesign.webp'
function ContactHero() {
    const containerStyle = {
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
      };
    
      const bgOverlayStyle = {
        content: '',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)',
        opacity: 0.1,
      };
  return (
    <div className="flex justify-center items-center" style={containerStyle}>
    <div style={bgOverlayStyle}></div>
      <section className=" dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center ">
            <p className="font-medium text-2xl text-blue-500 dark:text-blue-400">
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
      </section>
    </div>
  );
}

export default ContactHero;
