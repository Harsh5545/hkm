import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VerticalSlider = () => {
 const settings = {
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    centerPadding: '10px',
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 1000,
    autoplaySpeed: 2000,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
     adaptiveHeight: true,
     beforeChange: (current, next) => {
        // Apply custom styles to adjust the zoom and blur effects
        const slides = document.querySelectorAll('.slick-slide');
         slides.forEach((slide, index) => {
            const row = Math.floor(index / 3); 
          const scale = index === next  ? 1.2 : 0.8;        //   const blur = index === next  ? 0 : 2;
          slide.style.transform = `scale(${scale})`;
        //   slide.style.filter = `blur(${blur}px)`;
        });
      },    
 };

 return (
    <div className="h-64 w-16 mx-auto">
      <Slider {...settings}>
        <div className="bg-red-500 h-16 w-16 text-center text-white">1</div>
        <div className="bg-green-500 h-16 w-16 text-center text-white">2</div>
        <div className="bg-blue-500 h-16 w-16 text-center text-white">3</div>
        <div className="bg-yellow-500 h-16 w-16 text-center text-white">4</div>
        <div className="bg-purple-500 h-16 w-16 text-center text-white">5</div>
      </Slider>
    </div>
 );
};

export default VerticalSlider;
