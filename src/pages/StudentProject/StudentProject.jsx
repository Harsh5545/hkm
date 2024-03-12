import React from "react";
import StudentHeroSection from "./StudentHeroSection";
import StudentWork from "./StudentWork";
import usePageSeo from "../../components/Meta/Meta";
import image from '/public/course/StudentProject.webp';
function StudentProject() {
    usePageSeo({
        title: 'Student Project - HKM Media',
        description: 'Explore student projects and learn from their creativity and innovation.',
        keywords: ['student project', 'innovation', 'creative learning'],
        ogTitle: 'Student Project - HKM Media',
        ogDescription: 'Discover amazing student projects and gain insights into their creative process.',
        ogImage: image,
    })
    return (
        <div>


            <StudentHeroSection />
            <StudentWork />
        </div>
    );
}

export default StudentProject;
