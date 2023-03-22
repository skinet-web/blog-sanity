'use client';
import React from 'react'
import { logo, tailwind, javascript, git, figma, dev } from 'public'
import { motion } from 'framer-motion'
import Image from 'next/image';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'


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
    // <div id='home' className='font-poppins lg:h-[44em] md:h-[48em] h-[43em] w-full flex flex-col 
    // sm:flex-row flex-1 justify-center items-center bg-[#EDF2F8]' >
    //   <motion.div 
    //   whileInView={{ x: [-100, 0], opacity: [0, 1]}}
    //   transition={{ duration: 0.5}}
    //   className=''>
    //     <div className='flex bg-[white] bg-opacity-60 sm:mr-36 z-0 w-max p-10 rounded-xl justify-center 
    //     items-center mt-20 sm:mt-0 box--shadow ' >
    //             <span className='text-4xl'>👋</span>
    //             <div className='ml-2 font-sem'>
    //                 <p className=''>Hello, I am</p>
    //                 <h1 className ='text-4xl font-bold'>Michael</h1>
    //             </div>                
    //         </div>
    //   </motion.div>
    //   <motion.div 
    //     variants={scaleVariants}
    //     whileInView={scaleVariants.whileInView}
    //     transition={{duration: 1, ease: 'easeInOut'}}
    //     className='flex flex-col justify-evenly item-start app--header-circles h-[100%]'
    //     >
    //     {[git, tailwind, javascript].map((circle, index)  => (
    //       <div className='flex justify-center items-center w-[100px] h-[100px]
    //       rounded-full mt-10 bg-white ' key={`circle-${index}`}>
    //         <Image src={circle} className={`w-${80 - (index * 20)}`}alt='header-icons'/>
    //       </div>
    //     ))}
        

    //   </motion.div>
        
    // </div>
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
            <p className='text-center mt-10 sm:text-start leading-8 text-xl text-[#767676]'>
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

export default Header