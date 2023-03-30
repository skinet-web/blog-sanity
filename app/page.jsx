'use client'
import About from "./components/About"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Portofolio from "./components/Portofolio"
import Skills from "./components/Skills"
import Blog from "./components/Blog"
import NavigationDots from "./components/NavigationDots"
import SocialMedia from "./components/SocialMedia"
import Navbar from "./components/Navbar"
import { useState, useEffect } from 'react'

export default function Home() {
   const [loading, setLoading] = useState(true);
      useEffect(() => {
         
         setTimeout(() => {
            setLoading(false);
         }, 700);
      }, []);
 
   return (
    <body> 
    {loading ? (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
       ) : ( 
         <div>
            <Navbar />        
            <Header />     
            <SocialMedia />
            <About />
            <Skills />
            <Portofolio />
            <Blog />
            <Contact />       
         </div>
       )}    
    </body>
  )
}
