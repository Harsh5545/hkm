import React from 'react';
import Button from '../../components/Button/Button';
import studentImage from '/course/StudentProject.webp';

function StudentHeroSection() {
  return (
    <div>
      <header className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  Student <span className="text-blue-500">Project</span>
                </h1>

                <p className="mt-4 text-gray-400 dark:text-gray-400">
                  Explore the innovative projects created by students at Harikrushna Multimedia Institute. Our students showcase their skills and creativity through a diverse range of projects, spanning graphic design, web development, multimedia production, and more.

                  Ready to embark on your own creative journey? Explore now and be inspired!
                </p>

                <div className="mx-auto mt-6">
                  <Button
                    className="btn text-2xl p-1"
                    onClick={() => toNavigate("/contact")} 
                    value={"Explore Now"}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img className="w-full h-full lg:max-w-3xl" src={studentImage} alt="Harikrushna Multimedia Institute Student IMAGE" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default StudentHeroSection;
