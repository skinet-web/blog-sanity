import React from 'react'
import {logo, next} from 'public'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image src={logo} alt='logo' width='200px' />
      </div>
      <ul>
        {['home', 'about', 'contact', 'work', 'skills', 'contact']}
      </ul>
    </nav>
  )
}

export default Navbar