import React from 'react'
import AboutHero from './AboutHero'
import AboutMiddle from './AboutMiddle'
import usePageSeo from '../../components/Meta/Meta';
import Image from "/public/course/2dCourse.webp"

function Aboutus() {
    const seoDetails = {
        title: 'About Us - HKM Media',
        description: 'Learn about our mission, vision, and journey in providing quality 3D animation education. Join us and be part of our story!',
        keywords: ['about us', 'our story', 'mission and vision'],
        ogTitle: 'About Us - HKM Media',
        ogDescription: 'Discover the story behind HKM Media. Learn about our mission, vision, and commitment to providing top-notch 3D animation education.',
        ogImage: Image,
    };


    usePageSeo(seoDetails);

    return (
        <div>

            <AboutHero />
            <AboutMiddle />

        </div>
    )
}

export default Aboutus