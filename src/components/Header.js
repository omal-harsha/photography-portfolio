import React from 'react';

//import component

import Social from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav'

//import Link
import { Link} from 'react-router-dom';

const Header = () => {
  return (
  <div className='fixed w-full px-[30px] md:px-[100px] z-30 h-[100px] md:h-[140px] flex items-center'>
    <div className='flex flex-col md:flex-row lg:items-center w-full justify-between'>
      <Link to={'/'} className='max-w-[200px]'>
        <img src={Logo} alt='Logo'/>
      </Link>

      {/* nav - initially hidden - show on desktop mode */}
      <div className='hidden xl:flex gap-x-12 font-semibold'> 
        <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'> Home</Link>
        <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'> About</Link>
        <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'> Contact</Link>
        <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'> Portfolio</Link>
      </div>

    </div>
      <Social/>
      <MobileNav/>
  </div>
  )
};

export default Header;
