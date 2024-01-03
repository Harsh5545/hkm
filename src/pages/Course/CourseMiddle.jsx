import React from 'react'
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

  return (
      <div className='h-full w-full'>
          <div className='grid grid-cols-2'>
                  {details.map((course, index) =>
                      <div key={index} className=''>
                          <img src={course.image} alt='' />
                          <h1 >
                              {course.title}
                          </h1>
                          <p>
                              {course.description}
                          </p>
                          </div>
                  )}
              </div>
          
    </div>
  )
}

export default CourseMiddle