'use client';
import React from 'react'
import { logo, next, javascript, git, figma, flutter } from 'public'
import { motion } from 'framer-motion'
import Image from 'next/image';

const scaleVariants = {
  whileInView:{
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='font-poppins absolute w-full flex flex-col md:flex-row flex-1 justify-center items-center bg-[#EDF2F8]' >
      <motion.div 
      whileInView={{ x: [-100, 0], opacity: [0, 1]}}
      transition={{ duration: 0.5}}
      className=''>
        <div className='flex bg-[white] bg-opacity-60 z-0 w-max p-10 rounded-xl justify-center 
        items-center mt-10  box--shadow ' >
                <span className='text-4xl'>👋</span>
                <div className='ml-2 font-sem'>
                    <p className=''>Hello, I am</p>
                    <h1 className ='text-4xl font-bold'>Michael</h1>
                </div>                
            </div>
      </motion.div>
      <motion.div 
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        transition={{duration: 1, ease: 'easeInOut'}}
        className='flex flex-col justify-evenly item-start app--header-circles h-[100%]'
        >
        {[git, flutter, javascript].map((circle, index)  => (
          <div className='flex justify-center items-center w-[100px] h-[100px]
          rounded-full mt-10 bg-white ' key={`circle-${index}`}>
            <Image src={circle} className={`w-${80 - (index * 20)}`}alt='header-icons'/>
          </div>
        ))}
        

      </motion.div>
        
    </div>
  )
}

export default Header