import  { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import { Helmet } from 'react-helmet';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './homeStyles.css';
import { WhyChooseUs } from '../../helpers/Constant';


function HomeAbout() {
  const HomeAboutStyles = {
    background: 'linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)',
    color: 'white',
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const trail = useTrail(WhyChooseUs.length, {
    opacity: isScrolled ? 1 : 0,
    transform: isScrolled ? 'translateX(0)' : 'translateX(-50px)',
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150); // Change 100 to the desired scroll threshold
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Harikrushna Multimedia Institute - Why Choose Us?</title>
        <meta
          name="description"
          content="Discover the reasons to choose Harikrushna Multimedia Institute. Explore our industry-relevant courses and expert faculty. Shape your creative career in animation, VFX, gaming, and more."
        />
        {/* Add more meta tags as needed for SEO optimization */}
      </Helmet>

      <div className='mt-40 w-full md:p-10 p-2.5 h-[50]' style={HomeAboutStyles}>
        <h1 className='font-bold flex justify-center items-center font-poppins text-xl md:text-4xl'>
          WHY CHOOSE US ? . . .
        </h1>
        <div className='md:flex md:items-center flex-col-reverse md:flex-row'>
          <div className='flex-1 mt-10'>
            <ul className=''>
              {trail.map((style, index) => (
                <animated.li key={index} className='text-sm font-poppins md:text-lg' style={style}>
                  <KeyboardDoubleArrowRightIcon />
                  {` ${WhyChooseUs[index]}`}
                </animated.li>
              ))}
            </ul>
          </div>
          <div className='flex flex-1 justify-center'>
            <animated.img
              className='md:h-[40rem] h-[20rem]'
              src='/model/RoboAbout.webp'
              alt=''
              style={trail[WhyChooseUs.length - 1]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAbout;
