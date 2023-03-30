
import './globals.css'
import Link from 'next/link'
import Navbar from './components/Navbar'
import SocialMedia from './components/SocialMedia'
import Head from 'next/head'


export const metadata = {
  title: 'Mihai S | Front-end',
}


export default function RootLayout({ children }) {

 


  return (
    <html lang="en">
      <body>
        {children}
        
      </body>  
       
     
    </html>
  )
}

