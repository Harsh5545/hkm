import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Element } from 'react-scroll';
import './Course.css';

import vfx from '../../../public/model/3D-ARCHITECTURAL.webp';
import game from '../../../public/model/Game-Design.webp';
import graphic from '../../../public/model/Graphic-Design.webp';

function CourseMiddle() {
  const images = [vfx, game, graphic];

  const details = [
    { title: 'Title 1', description: 'Description 1', image: images[0] },
    { title: 'Title 2', description: 'Description 2', image: images[1] },
    { title: 'Title 3', description: 'Description 3', image: images[2] },
   
  ];

  useEffect(() => {
    gsap.from('.scroll-detail', {
      opacity: 0,
      x: '-100%',
      duration: 1,
      stagger: 0.5,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.left-container',
        start: 'top center',
      },
    });

    gsap.from('.scroll-image', {
    //   opacity: 0,
      x: '100%',
      duration: 1,
      stagger: 0.5,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.right',
        start: 'top center',
      },
    });
  }, []);

  return (
    <div className='w-full h-full'>
      <div className='flex flex-col'>
        {details.map((detail, index) => (
          <React.Fragment key={index}>
            
            <div className='flex justify-center items-center '>
        
              <div className='left-container flex-1'>
                <Element name={`detail-${index}`} key={index}>
                  <div className='scroll-detail '>
                    <h2>{detail.title}</h2>
                    <p>{detail.description}</p>
                  </div>
                </Element>
              </div>

              {/* Right Container */}
              <div className='right flex-1 bg-red-600'>
                <img src={detail.image} alt={`Image ${index}`} className='scroll-image' />
              </div>
            </div>

            {/* Separator Line (if not the last item) */}
            {index < details.length - 1 && (
              <hr className='separator' />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default CourseMiddle;
