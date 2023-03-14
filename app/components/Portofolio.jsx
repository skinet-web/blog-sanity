'use client';

import {React, useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import { motion } from 'framer-motion';
import { urlFor, client } from '../client'
import Image from 'next/image';

const Portofolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);

    useEffect(() => {
        const query = '*[_type == "works"]';

        client.fetch(query)
            .then((data) => {
                setWorks(data);
                setFilterWork(data);
          });
    }, []);

  return (
    <div className='flex flex-col justify-center font-poppins items-center '>
          <h1 className='mt-10 text-center font-bold uppercase text-2xl'>Portofolio</h1>
          <p>Each project is a unique piece of development 🧩</p>  

          <div>
            {['React JS', 'Tailwind CSS', 'All'].map((item, index) => (
                <div 
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className=''>
                        {item}
                </div>
            ))}
          </div>
          <motion.div className='flex flex-col p-2 justify-center items-center '>
            {filterWork.map((work, index) => (
                <div key={index} className='flex flex-col justify-center items-center
                 rounded-xl w-[90%] box--shadow mt-10'>
                    <div className='flex justify-center m-5'>
                    <Image src={urlFor(work.imgUrl).url()} width='500' height='500' alt='work-name' 
                        className='box--shadow rounded-xl  object-contain'/>
                    </div>
                    <div className='flex flex-col  justify-center items-center'>
                        <h3 className='m-3 font-bold text-xl uppercase'>{work.title}</h3>
                        <p className='w-[70%] '>{work.description}</p>
                        <div>
                            <p className='mt-3'>{work.tags}</p>                            
                        </div>
                        <div className='flex m-3 gap-10 justify-center items-center'>
                            <a className='flex justify-center items-center hover:text-blue-600 
                            transition-colors duration-500 ease-in-out' 
                            href={work.codeLink}> 
                            Code <AiFillGithub className='ml-1 text-2xl'/> 
                            </a>       
                            <a className='flex justify-center items-center hover:text-blue-600 
                            transition-colors duration-500 ease-in-out' 
                            href={work.projectLink}> 
                            Live Demo <AiFillEye className='ml-1 text-2xl'/> 
                            </a>                               
                        </div>
                    </div>
                </div>
            ))}
          </motion.div>
    </div>
  )
}

export default Portofolio