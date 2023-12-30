import React from 'react';
import TyperWriteComponent from 'typewriter-effect';

function TyperWriter() {
  return (
    <div className=''>
      <TyperWriteComponent
        className='xxxx-large'
        options={{
          autoStart: true,
          loop: true,
          delay: 30,
          strings: [
            "Game Design",
            "3D Modeling",
            "Graphics Design",
            "3D Architecture"
          ],
        }}
        
      />
    </div>
  );
}

export default TyperWriter;
