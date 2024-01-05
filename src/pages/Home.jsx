import React from "react";
import Hero from "./Home/Hero";
import img from "../assets/vfx.webp";
import HomeMiddle from "./Home/HomeMiddle";
import HomeAbout from "./Home/HomeAbout";

function Home() {
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
    opacity: 0.89,
  };

  return (
    <>
    <div  style={containerStyle}>
      <div style={bgOverlayStyle}></div>
      <Hero />
      </div>
      <HomeMiddle />
      <HomeAbout/>
      </>
    
  );
}

export default Home;
