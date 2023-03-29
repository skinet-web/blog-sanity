'use client';

import {React, useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { urlFor, client } from '../client'
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {

    const [post, setPost] = useState([])

    useEffect(() => {
        const query = '*[_type == "post"]';

        client.fetch(query)
            .then((data) => {
                setPost(data);
          });
    }, []);

    

  return (
    <div id='blog' className='flex flex-col justify-center items-center font-poppins '>
        <h2 className='mt-20 mb-10 text-center font-bold uppercase text-2xl'>BLOG</h2>
        {post.map((item) => (
            <div key={item.slug.current}  className='flex flex-col justify-center items-center
            rounded-xl w-[90%] sm:w-[60%] transition-all box--shadow mt-10   bg-white'>
                
                        <div className='flex justify-center m-5'>
                        <Image src={urlFor(item.coverImage).url()} width='400' height='400' alt='work-name' 
                            className='box--shadow rounded-xl h-max-[80%] object-contain'/>
                        </div>
                        <div className='flex flex-col mb-10 justify-center items-center'>
                            <h3 className='m-3 font-bold text-xl uppercase w-[80%] text-center'>{item.title}</h3>
                            <p className='w-[80%] text-justify text-[#767676] '>{item.postDescription}</p>
                                                    
                        </div>
                        <Link href={`/blog/${item.slug.current}`}>
                            <button className='rounded p-2 mb-10   transition-all text-white bg-[#32a2a8]'>Learn more</button>
                        </Link>                    
               
            </div>
        ))}
    </div>
  )
}

export default Blog