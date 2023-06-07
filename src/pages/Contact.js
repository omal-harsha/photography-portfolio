import React from 'react';
import WomenImg from '../img/contact/woman.png'

//import motion 
import { motion } from 'framer-motion';
//import transtion
import {transition1} from '../transitions'

const Contact = () => {
  return (
  <motion.div 
  initial={{opacity:0, y:'100%'}}
  animate={{opacity:1, y:0}}
  exit={{opacity:0, y:'100%'}}
  transition={transition1}
  className='section '>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col md:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
        {/* bg */}
        <motion.div 
        initial={{opacity:0, y:'100%'}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:'100%'}}
        transition={transition1}
        className='hidden md:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-44 lg:top-72 -z-10'>
        </motion.div>
        {/* text and form */}
        <div className='md:flex-1 lg:pt-32 px-4'>
          <h1 className='h1'>Contact me</h1>
          <p className='mb-12'>I Would love to get suggestions from you.</p>
          {/* form */}
          <form className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10'>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your name'/>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your email address'/>
            </div>
            <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your message'/>
            <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send it</button>
          </form>
        </div>
        {/* image */}
        <motion.div
        initial={{opacity:0, y:'100%'}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:'100%'}}
        transition={{transition: transition1, duration:1.5}}
        className='md:max-h-[680px] lg:max-h-max'
        >
          <img src={WomenImg}/>
        </motion.div>
      </div>
    </div>
  </motion.div>
  )
};

export default Contact;
