
import React, { useEffect} from 'react';
import Button from '../../components/Button/Button';
import { CourseDetails } from '../../helpers/Constant';
import "./Course.css"; 

import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';

const CourseMiddle = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 const toNavigate=useNavigate()
  return (
    <div className='flex justify-center bg-gray-100 overflow-x-hidden' >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {CourseDetails.map((course) => (
          <div key={course.id} className='flex m-5 flex-col items-center justify-center' data-aos={course.id % 2 ? 'fade-right' : 'fade-left'}>
            <img src={course.path} width={500}  className='rounded-lg aspect-video object-fill shadow-xl' alt={course.alt} />
            <h1 className='m-2 md:text-3xl text:2xl '>{course.course}</h1>
            <p className='p-1 md:w-[60%] text-center mb-5 md:text-lg text-sm'>{course.description}</p>
            <Button className="p-4 button-course"  onClick={()=>toNavigate(course.button.link)}>{course.button.text}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseMiddle;
