'use client';

import {React, useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { urlFor, client } from '../client'
import { PortableText } from '@portabletext/react';

const About = () => {
    const [abouts, setAbouts] = useState([]);

    
    useEffect(() => {
        const query = '*[_type == "abouts"] | order(description asc)';

        client.fetch(query).then((data) => {
            setAbouts(data);
          });
    }, []);

  return (
    <div id='about' className=' flex flex-col items-center mt-20 justify-center font-poppins scroll-mt-20'>
        <h2  className=' text-center font-bold uppercase text-2xl'>About</h2>

        <div className='flex flex-col lg:flex-row w-[80%] sm:w-1/2 justify-center items-center gap-5 mt-10'>
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
                        <p alt='about-p'className='text-sm mt-3  text-justify'>
                            <PortableText value={about.content} /> 
                        </p>
                        
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default About