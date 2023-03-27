'use client';

import {React, useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { urlFor, client } from '../client'
import { AppWrap } from '../wrapper';
import { college, plant, render, webdev } from 'public'

const About = () => {
    const [abouts, setAbouts] = useState([]);

   

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
          });
    }, []);

  return (
    <div id='about' className='mt-20 flex flex-col items-center  justify-center font-poppins'>
        <h2  className=' text-center font-bold uppercase text-2xl'>About</h2>

        <div className='flex flex-col sm:flex-row  justify-center items-center gap-5 w-[80%] mt-5'>
            {abouts.map((about, index) => (
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween'}}
                    key={about.title + index}
                    className='flex  justify-start items-start w-full min-h-[350px] flex-col m-2 '>
                        <Image src={urlFor(about.imgUrl).url()} width='400' height='400' alt='about-picture' 
                        className='rounded-md object-cover w-full '/>
                        <h2 alt='about-title' className='font-bold' >{about.title}</h2>    
                        <p alt='about-p'className='text-sm   text-justify'>{about.description}</p>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default About