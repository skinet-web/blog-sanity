'use client';


import {React, useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { urlFor, client } from '../client'
import Link from 'next/link';




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
    <div id='blog' className='h-[200px]'>
        {post.map((item) => (
            <Link key={item.slug.current} href={`/blog/${item.slug.current}`}>
                
                {item.title}
                {item.description} 
                
               
            </Link>
        ))}
    </div>
  )
}

export default Blog