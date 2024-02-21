import React from "react";
import StudentHeroSection from "./StudentHeroSection";
import StudentWork from "./StudentWork";
import { Helmet } from "react-helmet-async";

function StudentProject() {
  return (
    <div>
      <Helmet>
        <title>Harikrushna Multimedia Institute Student Projects</title>
        <meta
          name="description"
          content="Explore the impressive student projects at Harikrushna Multimedia Institute. Witness the creativity and innovation of our students in animation, VFX, gaming, and more. Be inspired by their work and consider joining our courses to kickstart your creative journey."
        />
        <meta
          name="keywords"
          content="Harikrushna Multimedia Institute, student projects, animation, VFX, gaming, media and entertainment, creative career, 12th grade courses, Surat"
        />
        <meta name="author" content="Harikrushna Multimedia Institute" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph meta tags for Twitter */}
        <meta name="twitter:card" content="public/course/3d-animation.webp" />
        <meta
          name="twitter:title"
          content="Harikrushna Multimedia Institute Student Projects"
        />
        <meta
          name="twitter:description"
          content="Explore the impressive student projects at Harikrushna Multimedia Institute. Witness the creativity and innovation of our students in animation, VFX, gaming, and more. Be inspired by their work and consider joining our courses to kickstart your creative journey."
        />
        <meta name="twitter:image" content="/public/course/3d-animation.webp" />

        {/* General Open Graph meta tags */}
        <meta
          property="og:title"
          content="Harikrushna Multimedia Institute Student Projects"
        />
        <meta
          property="og:description"
          content="Explore the impressive student projects at Harikrushna Multimedia Institute. Witness the creativity and innovation of our students in animation, VFX, gaming, and more. Be inspired by their work and consider joining our courses to kickstart your creative journey."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/course/3d-animation.webp" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:site_name"
          content="Harikrushna Multimedia Institute"
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <StudentHeroSection />
      <StudentWork />
    </div>
  );
}

export default StudentProject;
