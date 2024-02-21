import Hero from "./Hero";
import img from "../../assets/vfx.webp";
import HomeMiddle from "./HomeMiddle";
import HomeAbout from "./HomeAbout";
import HomeExplore from "./HomeExplore";
import HomeReview from "./HomeReview";
import { Helmet } from "react-helmet-async";
function Home() {
  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const bgOverlayStyle = {
    content: "",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background:
      "linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)",
    opacity: 0.89,
  };

  return (
    <>
      <Helmet>
        <title>
          Harikrushna Multimedia Institute - Explore Exciting Courses
        </title>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content="Discover exciting and industry-relevant courses at Harikrushna Multimedia Institute. Transform your creative career with expert-led training in animation, VFX, gaming, and more."
        />
        <meta
          name="keywords"
          content="Harikrushna Multimedia Institute, animation courses, VFX courses, gaming courses, media and entertainment courses, creative career, 12th grade courses, Surat"
        />
        <meta name="author" content="Harikrushna Multimedia Institute" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph meta tags for Twitter */}
        <meta name="twitter:card" content="https://harikrushnamultimedia.com/assets/logo-bRchjwO1.png" />
        <meta
          name="twitter:title"
          content="Harikrushna Multimedia Institute - Explore Exciting Courses"
        />
        <meta
          name="twitter:description"
          content="Discover exciting and industry-relevant courses at Harikrushna Multimedia Institute. Transform your creative career with expert-led training in animation, VFX, gaming, and more. Pursue your passion by joining our courses after completing your 12th grade."
        />
        <meta name="twitter:image" content="https://harikrushnamultimedia.com/assets/logo-bRchjwO1.png" />

        {/* General Open Graph meta tags */}
        <meta
          property="og:title"
          content="Harikrushna Multimedia Institute - Explore Exciting Courses"
        />
        <meta
          property="og:description"
          content="Discover exciting and industry-relevant courses at Harikrushna Multimedia Institute. Transform your creative career with expert-led training in animation, VFX, gaming, and more. Pursue your passion by joining our courses after completing your 12th grade."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://harikrushnamultimedia.com/assets/logo-bRchjwO1.png" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:site_name"
          content="Harikrushna Multimedia Institute"
        />
      </Helmet>
      <div style={containerStyle}>
        <div style={bgOverlayStyle}></div>
        <Hero />
      </div>
      <HomeMiddle />
      <HomeAbout />
      <HomeExplore />
      <HomeReview />
    </>
  );
}

export default Home;
