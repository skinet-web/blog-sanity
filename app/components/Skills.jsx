'use client';

import {React, useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { urlFor, client } from '../client'
import Image from 'next/image';

const Skills = () => {

   
    const [skills, setSkills] = useState([])

    const scaleVariants = {
        whileInView:{
          scale: [0, 1],
          opacity: [0, 1],
          transition: {
            duration: 0.8,
            ease: 'easeInOut'
          }
        }
      }

    useEffect(() => {
        const query = '*[_type == "skills"]';

        client.fetch(query)
            .then((data) => {
                setSkills(data);
          });
    }, []);

  return (
    <div  id='skills' className='flex  flex-col justify-center items-center font-poppins my-10 scroll-mt-20'>
        <h1 className=' font-bold text-2xl uppercase'>
        Tech Stack 
        </h1>
        <motion.div 
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
       
        className='flex  flex-wrap my-5 gap-5 justify-center items-center'>
            {skills.map((item, index) => (
                <div key={index} className='flex bg-[#EDF2F8]  xs:w-[10%] w-[15%] 
                min-h-[55px] rounded-xl justify-center items-center '>
                    <Image src={urlFor(item.imgUrl).url()} width='100' height='100' alt={item.title} title={item.title}
                    className='object-contain p-2 cursor-pointer'/> 
                </div>
                
            ))}
        </motion.div>
    </div>
  )
}

export default Skills