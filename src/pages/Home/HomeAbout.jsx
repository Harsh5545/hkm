import React from 'react';
import './HomeStyles.css';
import {WhyChooseUs} from '../../helpers/Constant'

function HomeAbout() {
  const HomeAboutStyles = {
    background: 'linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)',
    color: 'white',
  };

 
  return (
    <div className='mt-40 w-full p-10 h-[50]' style={HomeAboutStyles}>
      <h1 className='font-bold flex justify-center items-center font-poppins text-xl md:text-4xl'>
              WHY CHOOSE US ? . . .
          </h1>
          <div className='md:flex' >
          <div className='flex-1 mt-10'>
              <ul className='gap-5'>
                  {WhyChooseUs.map((item, index) => {
                      return(
                      <li key={index} className='text-sm font-poppins md:text-xl'>
                          {` ${item}`}
                      </li>)
                  })}
              </ul>
          </div>
          <div className='flex-1'>
          </div>
          </div>
   
    </div>
  );
}

export default HomeAbout;
