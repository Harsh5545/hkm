import React from 'react';
import game from '/course/gamepng.webp'
import Gamer from '/course/game-design1.webp'
import BgGameDesign from '/course/BgGameDesign.webp'
import Gamemode from '/course/gaming.webp'
import modelGame from '/course/game-design-model.webp'
function GameDesign() {
  const CourseHighlights = [
    'Job-oriented, industry-centric curriculum',
    'Hands-on practical training using the latest tools and software',
    'Certified faculty ensuring quality education',
    'Exposure to industry interaction and engaging workshops',
    'Placement assistance for a successful career launch'
  ];

  const backgroundStyles = {
    backgroundImage: `url(${Gamemode})`, // Use backticks for string interpolation
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    position:'relative'
    // background:"blue "
  };
  const bgOverlayStyle = {
    content: '',
    position: 'absolute',
    background: 'linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)',
    opacity: 0.91,
    height: '100vh',
  };
  return (
      <div className=" mx-auto">
          
      <div className="" style={backgroundStyles}>
            
              <div className='mb-8y h-[100vh] flex md:flex-row flex-col-reverse justify-center items-center' style={bgOverlayStyle}>
              <div className='flex-1'>
                  <img src={game} className='opacity-1 ' alt=''/>
                  </div>

              <div className='flex-1 text-center'>
              <h1 className="text-5xl font-bold mb-4" style={{color:'white'}}>GAME DESIGN</h1>
        <p className='text-xl' style={{color:'white'}}>
          Game design is the process of creating and designing the rules, mechanics, gameplay, and overall experience of a video game or any interactive entertainment product. It is a multidisciplinary field that combines elements of art, storytelling, psychology, programming, and more to craft engaging and enjoyable player experiences.
        </p>
              </div>
              </div>
          </div>


{/* COURSE HIGHLIGHTS section */}

          <div className='flex flex-col md:flex-row '>
      <div className='m-10 flex-1' >
        <h1 className="text-5xl font-bold mb-4">COURSE HIGHLIGHTS</h1>
        <ul className="list-disc pl-6">
          {CourseHighlights.map((highlight, index) => (
            <li key={index} className="mb-2 text-2xl">
              {highlight}
            </li>
          ))}
        </ul>
          </div>
              <div className='flex-1 '>
                  <img src={Gamer}  className=' p-5' width='4000'  alt=''/>
              </div>
              
          </div>
    </div>
  );
}

export default GameDesign;
