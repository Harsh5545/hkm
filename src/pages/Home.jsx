  import React from "react";
  import Hero from "./Home/Hero";
  import img from "../assets/vfx.webp"
function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  };
    return <div style={backgroundStyle} >
      
      <Hero />
    </div>;
  }

  export default Home;
