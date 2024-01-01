import React from 'react';
import './HomeStyles.css';

function HomeAbout() {
  const HomeAboutStyles = {
    background: 'linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)',
    color: 'white',
  };

 
  return (
    <div className='mt-40 w-full p-10 h-[50]' style={HomeAboutStyles}>
      <h1 className='font-bold flex justify-center items-center text-4xl'>
              WHY CHOOSE US ? . . .
          </h1>
          <div className='flex-1'></div>
          <div className='flex-1'></div>
   
    </div>
  );
}

export default HomeAbout;
