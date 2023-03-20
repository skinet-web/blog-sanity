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
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    useEffect(() => {
        const query = '*[_type == "works"]';

        client.fetch(query)
            .then((data) => {
                setWorks(data);
                setFilterWork(data);
          });
    }, []);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);
            if (item === 'All') {
              setFilterWork(works);
            } else {
              setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
          }, 500);
        };
  return (
    <div id='work' className='flex flex-col justify-center font-poppins items-center bg-[#EDF2F8] '>
          <h1 className='mt-20 mb-10 text-center font-bold uppercase text-2xl'>Portofolio</h1>
          <p className=''>Each project is a unique piece of development  🧩</p>  

          <div className='flex flex-wrap justify-center items-center gap-5 mt-10'>
            {['ReactJS', 'Tailwind CSS', 'JavaScript', 'Sass', 'All'].map((item, index) => (
                <div 
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={`bg-white px-2 rounded-md cursor-pointer  hover:bg-secondarycolor hover:text-white
                    ${activeFilter === item ? 'bg-[#32a2a8]' : ''}  `}>
                        {item}
                </div>
            ))}
          </div>
          <motion.div 
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='flex flex-col p-2 mb-20 justify-center items-center'>
            {filterWork.map((work, index) => (
                <div key={index} className='flex flex-col justify-center items-center
                 rounded-xl w-[90%] sm:w-[60%] transition-all box--shadow mt-10   bg-white'>
                    <div className='flex justify-center m-5'>
                    <Image src={urlFor(work.imgUrl).url()} width='500' height='500' alt='work-name' 
                        className='box--shadow rounded-xl  object-contain'/>
                    </div>
                    <div className='flex flex-col  justify-center items-center'>
                        <h3 className='m-3 font-bold text-xl uppercase'>{work.title}</h3>
                        <p className='w-[80%] text-justify text-[#767676] '>{work.description}</p>
                        <div className='flex font-medium gap-3'>
                            {work.tags.map((item, index) => (
                                <p key={index} className='mt-3 p-1 bg-white shadow-md 
                                text-[80%] font-semibold rounded-md'>{item} </p>     
                            ))}                       
                        </div>
                        <div className='flex mt-10 mb-5 gap-10 justify-center items-center'>
                            <a className='flex justify-center items-center hover:text-secondarycolor
                            transition-colors duration-500 ease-in-out' 
                            href={work.codeLink}> 
                            Code <AiFillGithub className='ml-1 text-2xl '/> 
                            </a>       
                            <a className='flex justify-center items-center hover:text-secondarycolor
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