  import React from "react";
  import Hero from "./Home/Hero";

function Home() {
  const backgroundStyle = {
    backgroundImage: 'url("../../assets/homeBg.webp")', 
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
      
      <Hero/>
    </div>;
  }

  export default Home;
