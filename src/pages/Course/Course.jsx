import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import imgvfx from "/model/course-bg.webp";
import CourseMiddle from "./CourseMiddle";
import AOS from "aos";
import "aos/dist/aos.css";
const CoursesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  const backgroundStyles = {
    backgroundImage: `url(${imgvfx})`, // Use backticks for string interpolation
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "relative",
    // background:"blue "
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
    opacity: 0.81,
  };

  return (
    <>
      <Helmet>
        <title>VFX Animation Course - Harikrushna Multimedia Institute</title>
        <meta
          name="description"
          content="Unlock the world of imagination with our VFX Animation Course at Harikrushna Multimedia Institute. Dive into the fascinating realm of visual effects and animation, mastering industry-relevant skills. Join us to turn your passion into a profession. Explore our comprehensive curriculum, hands-on training, and industry connections."
        />
        <meta
          name="keywords"
          content="VFX Animation Course, Visual Effects, Animation, Multimedia Institute, Creative Career, 12th Grade Courses, Surat, Industry-Relevant Skills, Hands-On Training, Animation Curriculum, VFX Techniques, Multimedia Education"
        />
        <meta name="author" content="Harikrushna Multimedia Institute" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="twitter:card" content="https://harikrushnamultimedia.com/model/Graphic-Design.webp" />
        <meta
          name="twitter:title"
          content="VFX Animation Course - Harikrushna Multimedia Institute"
        />
        <meta
          name="twitter:description"
          content="Unlock the world of imagination with our VFX Animation Course at Harikrushna Multimedia Institute. Dive into the fascinating realm of visual effects and animation, mastering industry-relevant skills. Join us to turn your passion into a profession. Explore our comprehensive curriculum, hands-on training, and industry connections."
        />
        <meta name="twitter:image" content="https://harikrushnamultimedia.com/model/Graphic-Design.webp" />

        <meta
          property="og:title"
          content="VFX Animation Course - Harikrushna Multimedia Institute"
        />
        <meta
          property="og:description"
          content="Unlock the world of imagination with our VFX Animation Course at Harikrushna Multimedia Institute. Dive into the fascinating realm of visual effects and animation, mastering industry-relevant skills. Join us to turn your passion into a profession. Explore our comprehensive curriculum, hands-on training, and industry connections."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://harikrushnamultimedia.com/model/Graphic-Design.webp" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:site_name"
          content="Harikrushna Multimedia Institute"
        />

        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div
        className="mx-auto flex justify-center text-center "
        style={backgroundStyles}
      >
        <div style={bgOverlayStyle}></div>
        <div className="flex flex-col  md:flex-row justify-end md:justify-center items-center">
          <div className=" w-[80%] relative">
            <img
              data-aos="fade-left"
              className="m-1 shadow-gray-800"
              src="./model/Graphic-Design.webp"
              alt="Graphic Design Course images"
            />
          </div>
          <div className="relative flex w-[80%] flex-col justify-end md:justify-center items-center">
            <h1
              data-aos="fade-down"
              className="text-5xl font-bold mb-6 text-white"
            >
              Courses
            </h1>
            <p data-aos="fade-right" className="text-xl mb-4 text-white">
              Welcome to Harikrushna Multimedia Institute, the best institute in
              Surat, offering dynamic courses to shape your creative career. Our
              expert faculty provides industry-relevant and employment-oriented
              training using the latest tools and technologies. Explore our
              exciting courses in animation, VFX, gaming, and more.
            </p>
            <p className="text-xl mb-6 text-white md:visible hidden ">
              Chase your dream career by enrolling in our courses after
              completing your 12th grade. Transform your passion into a
              profession with Harikrushna Multimedia Institute.
            </p>
          </div>
        </div>
      </div>
      <div>
        <CourseMiddle />
      </div>
    </>
  );
};

export default CoursesPage;
