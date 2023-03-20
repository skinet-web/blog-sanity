'use client';

import {React, useState} from 'react';
import {logo, coding} from 'public';
import Image from 'next/image';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {motion} from 'framer-motion'



const Navbar = () => {
  
 const [toggle, setToggle] = useState(false)

  return (
    <nav className='flex fixed w-full flex-row justify-between 
    pt-1 pb-2 items-center bg-[#F2F5FA]  z-50 '>
      <div className='flex justify-start items-center'>
        <Image src={coding} alt='logo' className='w-[90px] h-[40px] object-contain ml-3' />
        
      </div>
      <ul className='sm:flex hidden flex-1 uppercase justify-center items-center'>
        {['home', 'about', 'skills', 'work', 'blog', 'contact'].map((item) =>
        <li key={`link-${item}`}  className='flex-col sm:mx-4 mx-2 
        rounded-full mb-2 pointer font-bold bg-transparent'>
          <div className='w-[5px] h-[5px]'/>
          <a href={`#${item}`} className=''>{item}</a>
        </li>)}
      </ul>

      {/* Mobile menu */}
      <div className='w-[35px] h-[35px] relative  flex mr-5 sm:hidden justify-center 
      bg-secondarycolor items-center  rounded-full'>
        <HiMenuAlt4 className=' w-[70%] h-[70%] text-white' onClick={() => setToggle(true)}/>
       
       {toggle && (
        <motion.div 
        initial = {{ x: 300 }}
        whileInView={{ x: [300, 0]}}
        transition= {{duration: 0.85, ease: 'easeOut'}} 
        className='fixed top-0 bottom-0 right-0 p-4  w-[80%] h-[100vh] 
         flex justify-end items-end flex-col bg-white'>
          <HiX onClick={() => setToggle((prev) => !prev)}
          className='w-[30px] h-[30px]  text-secondarycolor '/>
          <ul className='list-none uppercase h-[100%] w-[100%] flex justify-start flex-col items-start'>
            {['home', 'about', 'skills', 'work', 'blog', 'contact'].map((item) =>
            <li key={item}  className='m-4  '>            
              <a href={`#${item}`} onClick={() => setToggle((prev) => !prev)}
              className='no-underline text-graycolor font-bold
               hover:text-secondarycolor'>{item}</a>
            </li>
            )}
          </ul>
          
        </motion.div>
       )}
      </div>
    </nav>
  )
}

export default Navbar