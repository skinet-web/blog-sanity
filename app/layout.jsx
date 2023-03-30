'use client'
import './globals.css'
import Link from 'next/link'
import Navbar from './components/Navbar'
import SocialMedia from './components/SocialMedia'
import Head from 'next/head'
import { useState, useEffect } from 'react'

export const metadata = {
  title: {
    default: 'Mihai S | Front-end',
  },
}


export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);


  return (
    <html lang="en">
      {loading ? (
      <body className="loader-container">
        <div className="spinner"></div>
      </body>
       ) : (
        <body>
        <Navbar /> 
        
        
        {children}
        
        </body>  
       )}
     
    </html>
  )
}

