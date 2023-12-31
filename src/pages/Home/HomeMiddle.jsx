import React from "react";

import Constant from '../../helpers/Constant'

function HomeMiddle() {
  return (
    
    <div className=" w-full flex justify-center">
      <div className="w-[85%] rounded-t-2xl flex ">
        
      {Constant.map((course, index) => (
        <div className="flex-1 flex justify-center items-center h-[10]" key={index}>
          <img src={course.image} alt={course.alt} />
         <p> {course.course}</p>
          </div>
      ))}
      </div>

      </div>
  );
}

export default HomeMiddle;
