'use client';

import {React, useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { urlFor, client } from '../client'
import Image from 'next/image';
import {emailIcon, location} from 'public';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!username || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }
    setLoading(true);
    
    const contact = {
      _type: 'contact',
      name: username,
      email: email,
      message: message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };


  return (
    <div id='contact' className='flex flex-col justify-center items-center font-poppins'>
       <h2 className='flex flex-wrap my-20 text-2xl w-[200px] sm:w-auto font-bold uppercase'>
        Take A ☕ & Chat With Me</h2>
       <div className='flex flex-wrap gap-10 justify-center items-center'>
            <div className='flex  items-center gap-3 min-w-[290px] min-h-[100px] 
            p-6 rounded-2xl bg-[#FEF4F5]'>
                    <Image src={emailIcon} width='40px' height='40px'  alt='email-icon' 
                    className='w-[40px] object-contain'/>
                    <a href='mailto:mihaisacuiu@gmail.com' className='min-w-[80%]'>mihaisacuiu@gmail.com</a>
                    
            </div>
            <div className='flex  items-center  gap-3 min-w-[290px] min-h-[100px] 
            p-6 rounded-2xl bg-[#EDF2F8]'>
                    <Image src={location} width='40px' height='40px'  alt='email-location' 
                    className='max-w-[50px]  object-contain'/>
                    <p className=''>Bucharest</p>
                    
                    
            </div>
       </div>
        {!isFormSubmitted ? ( 
            <div className="flex flex-col justify-center items-center gap-10 mt-10 sm:w-[50%] ">
                <div className="w-full">
                    <input className="w-full min-w-[290px]  rounded-2xl  p-3 bg-[#EDF2F8]" 
                    type="text" placeholder="Your Name" name="username" value={username} 
                    required  onChange={handleChangeInput} />
                </div>
                <div className="w-full ">
                    <input className="w-full p-3 min-w-[290px]  rounded-2xl bg-[#EDF2F8]" type="email" placeholder="Your Email" name="email" 
                    required  value={email} onChange={handleChangeInput} />
                </div>
                <div  className="w-full ">
                    <textarea
                        className="w-full h-[200px] min-w-[290px] p-3  rounded-2xl bg-[#EDF2F8]"
                        placeholder="Your Message"
                        value={message}
                        required 
                        name="message"
                        onChange={handleChangeInput}
                    />
                </div>
                <button type="button" className="bg-secondarycolor p-3 sm:p-5 rounded-2xl font-bold text-white mb-20" 
                onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
            </div>
        ) : (
        <div className='text-2xl font-bold my-20 w-[80%] xs:w-auto bg-[#FEF4F5]  p-3 rounded-2xl'>
            <h3 className="">
            Thank you for getting in touch! 👌
            </h3>
         </div>
      )}
       
       
    </div>
  )
}

export default Contact