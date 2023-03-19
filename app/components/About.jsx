'use client';

import {React, useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { urlFor, client } from '../client'

import { college, plant, render, webdev } from 'public'

// const abouts = [
//     { title: 'Learning', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', imgUrl: college},
//     { title: 'Fast', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', imgUrl:plant},
//     { title: 'Fast', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', imgUrl:render},
//     { title: 'Fast', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', imgUrl:webdev},
// ]



const About = () => {
    const [abouts, setAbouts] = useState([]);

   

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
          });
    }, []);

  return (
    <div id='about' className='flex-1 flex-col font-poppins'>
        <h2 className='mt-10 text-center font-bold uppercase text-2xl'>About</h2>

        <div className='flex flex-wrap justify-center items-center mt-10'>
            {abouts.map((about, index) => (
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween'}}
                    key={about.title + index}
                    className='flex justify-start  items-start flex-col m-2 w-[190px]'>
                        <Image src={urlFor(about.imgUrl).url()} width='500' height='500' alt='about-picture' className='w-[100%]
                         height-[170px] rounded-md object-cover'/>
                        <h2 alt='about-title' className='font-bold' >{about.title}</h2>    
                        <p alt='about-p'className='text-sm'>{about.description}</p>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default About