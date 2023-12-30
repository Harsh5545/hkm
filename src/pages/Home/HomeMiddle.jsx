import React from 'react'
import { courseData } from '../../helpers/Constant'
function HomeMiddle() {
  return (
      <div className='w-full flex  justify-center '>
          <div className='w-[90%] bg-emerald-500'>
              {courseData.map((item)=>{
                return(
                  <div>
                    {item.course}
                  </div>
                )
              })}
          </div>
    </div>
  )
}

export default HomeMiddle