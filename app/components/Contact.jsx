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
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
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
       <h2 className='my-20 font-bold uppercase'>Let's talk % COFFEE LOREM IPSUM</h2>
       <div className='flex flex-wrap gap-10 justify-center items-center'>
            <div className='flex justify-center items-center gap-3 min-w-[290px] min-h-[100px] p-6 rounded-2xl bg-[#FEF4F5]'>
                    <Image src={emailIcon} width='40px' height='40px'  alt='email-icon' 
                    className='w-[40px] object-contain'/>
                    <p>hello@test.com</p>
            </div>
            <div className='flex  justify-center items-center gap-3 min-w-[290px] min-h-[100px] p-6 rounded-2xl bg-[#FEF4F5]'>
                    <Image src={location} width='40px' height='40px'  alt='email-icon' 
                    className='max-w-[100px]   ml-[-69px] object-contain'/>
                    <p className='flex  ml-[-29px] '>Bucharest</p>
            </div>
       </div>

       <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
       
    </div>
  )
}

export default Contact