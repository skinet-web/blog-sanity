'use client';
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className=''>
        <div className='flex bg-[#edf2f8] z-0 w-max p-10 rounded-xl justify-center items-center' >
                <span className=''>👋</span>
                <div className='ml-2'>
                    <p className=''>Hello, I am</p>
                    <h1 className =''>Michael</h1>
                </div>                
            </div>
        <motion.div className=''>
            
        </motion.div>
        
    </div>
  )
}

export default Header