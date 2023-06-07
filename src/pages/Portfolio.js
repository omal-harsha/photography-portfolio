import React from 'react';

//import images
import image1 from '../img/portfolio/1.png'
import image2 from '../img/portfolio/2.png'
import image3 from '../img/portfolio/3.png'
import image4 from '../img/portfolio/4.png'

import { Link } from 'react-router-dom';

//import motion 
import { motion } from 'framer-motion';
//import transtion
import {transition1} from '../transitions'

const Portfolio = () => {
  return (
  <motion.div 
  initial={{opacity:0, y:'100%'}}
  animate={{opacity:1, y:0}}
  exit={{opacity:0, y:'100%'}}
  transition={transition1}
  className='section '>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col md:flex-row h-full items-center justify-start gap-x-24 text-center md:text-left pt-24 md:pt-32 lg:pt-36 pb-8'>
        {/* text */}
         <motion.div 
         initial={{opacity:0, y:'-80%'}}
         animate={{opacity:1, y:0}}
         exit={{opacity:0, y:'-80%'}}
         transition={transition1}
         className='flex flex-col md:items-start'>
          <h1 className='h1'>Portfolio</h1>
         <p className='mb-12 max-w-sm'>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate Lorem ipsum may be used as a placeholder before final copy is available
            <br/>
            <br/>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Hire me</Link>
         </motion.div>
         {/* image */}
         <div className='grid grid-cols-2 md:gap-2'>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image1} alt='myimage'/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image2} alt='myimage'/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image3} alt='myimage'/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image4} alt='myimage'/>
            </div>
         </div>
      </div>
    </div>
  </motion.div>
  )
};

export default Portfolio;
