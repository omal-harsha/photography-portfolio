import React from 'react';

import WomanImg from '../img/about/woman.png'
import { Link } from 'react-router-dom';

//import motion 
import { motion } from 'framer-motion';
//import transtion
import {transition1} from '../transitions'

const About = () => {
  return (
  <motion.div 
  initial={{opacity:0, y:'100%'}}
  animate={{opacity:1, y:0}}
  exit={{opacity:0, y:'100%'}}
  transition={transition1}
  className='section '>
    <div className='container mx-auto h-full relative'>

        {/* text and image wrapper */}
        <div className='flex flex-col md:flex-row h-full items-center justify-center gap-x-24 text-center md:text-left lg:pt-16'>
          {/* image */}
          <div className='flex-1 max-h-96 md:max-h-[550px] lg:max-h-max order-2 md:order-none overflow-hidden '>
          <img src={WomanImg}/>
          </div>
          {/* text */}
          <motion.div 
          initial={{opacity:0, y:'-80%'}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:'-80%'}}
          transition={transition1}
          className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center md:items-start'>
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-sm'>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate Lorem ipsum may be used as a placeholder before final copy is available
            <br/>
            <br/>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>
            <Link to={'/portfolio'} className='btn'>View my work</Link>
          </motion.div>
        </div>
    </div>
  </motion.div>)
};

export default About;
