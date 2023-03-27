'use client';
import React from 'react'
import { logo, tailwind, javascript, git, figma, dev } from 'public'
import { motion } from 'framer-motion'
import Image from 'next/image';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { AppWrap } from '../wrapper';


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

  const waveVariants = {
    wave: {
      rotate: [0, 0, 0, 0, 0, ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return ( 
    <section className='w-[100%] bg-[#EDF2F8]'>
      <div className='max-w-[107rem] mx-auto'>
        <div id='home'        
        className='flex flex-col-reverse sm:flex-row relative h-[58rem] 
      justify-center items-center gap-20 font-poppins '>        
          <motion.div 
           initial={{ opacity: 0 } }
           whileInView={{ x: [-300, 0], opacity: [0, 1]}}
           transition={{ duration: 0.8}}
          className='flex flex-col sm:ml-20 justify-center  items-center text-center sm:text-start sm:items-start max-w-[30rem]'>
            <h1 className='text-[40px] sm:text-[50px] font-bold'>
              Front-End React Developer  <span      
              className='text-4xl'>👋</span>
            </h1>            
            <p className=' mt-10 sm:text-start w-[80%] sm:w-full text-justify leading-8 text-xl text-[#767676]'>
              Hi, I'm Mihai. I am responsible for creating and 
              maintaining web applications and websites using a variety of programming languages, frameworks, and tools.
            </p>
            <div className='flex mt-10 justify-center items-center'>
              <a href='https://github.com/skinet-web'><AiFillGithub className=' text-3xl '/></a>
              <a href='https://www.linkedin.com/in/mihai-s%C4%83cuiu-2a1b29167/'>
                <AiFillLinkedin className='ml-10 text-3xl'/>
              </a>
              
            </div>
          </motion.div>
          <motion.div
             initial={{ opacity: 0 } }
             variants={scaleVariants}
             whileInView={scaleVariants.whileInView}
             transition={{duration: 1, ease: 'easeInOut'}}
          >
            <Image src={dev} className='w-[40rem] object-contain' />
          </motion.div>
        </div>
      </div>
    </section>
   
    
  )
}

// export default AppWrap(Header, 'home')
export default Header