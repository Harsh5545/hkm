import React, { useState, useEffect } from 'react';
import './About.css'; // Create a CSS file for styling

const VerticalSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    <div key={1} className={currentIndex === 0 ? 'active' : ''}>Content 1</div>,
    <div key={2} className={currentIndex === 1 ? 'active' : ''}>Content 2</div>,
    <div key={3} className={currentIndex === 2 ? 'active' : ''}>Content 3</div>,
    // Add more slides as needed
  ];

  return (
    <div className="vertical-slider">
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          {slide}
        </div>
      ))}
    </div>
  );
};

export default VerticalSlider;
