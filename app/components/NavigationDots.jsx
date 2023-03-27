import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='hidden sm:flex justify-center items-center flex-col sm:px-4 fixed right-0 bottom-0'>
        {['home', 'about', 'skills', 'work', 'blog', 'contact'].map((item, index) => (
            <a 
            key = {item + index} 
            href={`#${item}`} 
            className='w-2 h-2 rounded-full bg-gray-400 my-2 mx-1 transition duration-200 ease-in-out 
            hover:bg-secondarycolor'
            style = {active === item ? { backgroundColor: '#32a2a8'} : { }}

            />   
        
        ))}
    </div>
  )
}

export default NavigationDots