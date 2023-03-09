'use client';

import {React, useState} from 'react';
import {logo, next} from 'public';
import Image from 'next/image';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {motion} from 'framer-motion'



const Navbar = () => {
  
 const [toggle, setToggle] = useState(false)

  return (
    <nav className='flex w-full flex-row justify-between 
    pt-1 pb-2 items-center bg-gray-200 backdrop-opacity-5 z-2'>
      <div className='flex justify-start items-center'>
        <Image src={logo} alt='logo' className='w-[90px] h-[20px]' />
        
      </div>
      <ul className='sm:flex hidden flex-1 uppercase justify-center items-center'>
        {['home', 'about', 'contact', 'work', 'skills'].map((item) =>
        <li key={`link-${item}`}  className='flex-col sm:mx-4 mx-2 
        rounded-full mb-2 pointer bg-transparent'>
          <div className='w-[5px] h-[5px]'/>
          <a href={`#${item}`} className=''>{item}</a>
        </li>)}
      </ul>

      {/* Mobile menu */}
      <div className='w-[35px] h-[35px] flex sm:hidden justify-center 
      bg-secondarycolor items-center relative rounded-full'>
        <HiMenuAlt4 className=' w-[70%] h-[70%]' onClick={() => setToggle(true)}/>
       
       {toggle && (
        <motion.div 
        whileInView={{ x: [200, 0]}}
        transition= {{duration: 0.85, ease: 'easeOut'}} 
        className='fixed top-0 bottom-0 right-0  p-4 w-[60%]  h-[100%] 
        flex justify-start items-start flex-col bg-whitecolor'>
          <HiX onClick={() => setToggle((prev) => !prev)}
          className='w-[70%] h-[70%]  text-secondarycolor '/>
          <ul className='list-none uppercase h-[100%] w-[100%] flex justify-start flex-col items-start'>
            {['home', 'about', 'contact', 'work', 'skills'].map((item) =>
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