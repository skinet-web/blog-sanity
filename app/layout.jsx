
import './globals.css'
import Link from 'next/link'
import Navbar from './components/Navbar'
import SocialMedia from './components/SocialMedia'
import Head from 'next/head'

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      
      <body>
        <Navbar /> 
        
        
        {children}
        
      </body>
    </html>
  )
}
