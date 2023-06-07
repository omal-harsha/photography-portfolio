import React from 'react';

//import images
import WomenImg from '../img/home/woman.png'

//import Link
import { Link } from 'react-router-dom';

//import motion 
import { motion } from 'framer-motion';
//import transtion
import {transition1} from '../transitions'
//----------------------pana senehasa 
const Home = () => {
  return (
  <motion.div 
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
  transition={transition1}
  className='section'>
    <div className='container mx-auto h-full relative'>
      {/* text and image wrapper */}
      <div className='flex flex-col justify-center md:flex-row lg:flex-col md:h-screen'>
        {/* text */}
        <motion.div 
         initial={{opacity:0, y: '-50%'}}
         animate={{opacity:1, y:'0'}}
         exit={{opacity:0, y:'-50%'}}
         transition={transition1}
        className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center md:items-start'>
          <h1 className='h1'>
            photographer <br/> & film maker
          </h1>
          <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
            Los Angeles, USA
          </p>
          <Link to={'/contact'} className='btn mb-[30px]'>
            hire me
          </Link>
        </motion.div>
        {/* image */}
        <div className='flex justify-end max-h-96 md:max-h-max'>
          <motion.div 
          initial={{scale:0}}
          animate={{scale:1}}
          exit={{scale:0}}
          transition={transition1}
          className='relative  overflow-hidden'>
            <motion.img 
             whileHover={{scale: 1.1}}
             transition={transition1}
            src={WomenImg} alt='womenimage'/>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
  )
};

export default Home;
