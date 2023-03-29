import React from 'react'
import styles from '../../style'
import { BsLinkedin, BsGithub, BsGlobe} from 'react-icons/bs'
import { AiFillRead} from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='hidden sm:flex justify-end items-center flex-col bottom-0 p-3 fixed '>
        {/* <div className={`${styles.socialIcon}`}>
            <BsGlobe />
        </div > */}
        <a href='https://github.com/skinet-web'className={`w-10 h-10 rounded-full  bg-white my-1 border border-gray-300 
        ${styles.socialIcon}`}>
           <BsGithub title='Github' />
        </a>
        <a href='https://www.linkedin.com/in/mihai-s%C4%83cuiu-2a1b29167/' className={styles.socialIcon}>
            <BsLinkedin title='Linkedin' />
        </a>
        <a href='/resume.pdf' className={styles.socialIcon}>
            <AiFillRead  title='Resume'/> 
        </a>
    </div>
  )
}

export default SocialMedia