import React from 'react';
import imgvfx from '../../assets/vfx.webp'
function Course() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url({imgvfx})' }}>
      <div className="text-center flex justify-center flex-col items-center text-black">
        <h1 className="text-4xl font-bold  mb-4">Courses</h1>
        <p className="text-lg w-[80%]">
          Explore our diverse range of courses tailored to provide a transformative learning experience. Our meticulously crafted programs are designed to ignite your creative passions and equip you with industry-leading skills.
          Whether you are a beginner or an experienced professional, our courses cover a wide spectrum of topics to meet your learning needs. Join us on a journey of continuous growth and skill development in the exciting world of creativity and innovation.
        </p>
      </div>
    </div>
  );
}

export default Course;
