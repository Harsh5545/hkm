import React from 'react'
import AboutHero from './AboutHero'
import AboutMiddle from './AboutMiddle'
import { Helmet } from 'react-helmet-async'

function Aboutus() {
  return (
    <div>
      <Helmet>
        <title>Harikrushna Multimedia Institute About</title>
        <meta
          name="description"
          content="Discover exciting and industry-relevant courses at Harikrushna Multimedia Institute. Transform your creative career with expert-led training in animation, VFX, gaming, and more. Pursue your passion by joining our courses after completing your 12th grade."
        />
        <meta
          name="keywords"
          content="Harikrushna Multimedia Institute, animation courses, VFX courses, gaming courses, media and entertainment courses, creative career, 12th grade courses, Surat"
        />
        <meta name="author" content="Harikrushna Multimedia Institute" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph meta tags for Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harikrushna Multimedia Institute - Explore Exciting Courses" />
        <meta
          name="twitter:description"
          content="Discover exciting and industry-relevant courses at Harikrushna Multimedia Institute. Transform your creative career with expert-led training in animation, VFX, gaming, and more. Pursue your passion by joining our courses after completing your 12th grade."
        />
        <meta name="twitter:image" content="URL_TO_YOUR_TWITTER_IMAGE" />

        {/* General Open Graph meta tags */}
        <meta property="og:title" content="Harikrushna Multimedia Institute - Explore Exciting Courses" />
        <meta
          property="og:description"
          content="Discover exciting and industry-relevant courses at Harikrushna Multimedia Institute. Transform your creative career with expert-led training in animation, VFX, gaming, and more. Pursue your passion by joining our courses after completing your 12th grade."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/course/A2.webp" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Harikrushna Multimedia Institute" />
      </Helmet>
      <AboutHero />
      <AboutMiddle />
      
    </div>
  )
}

export default Aboutus