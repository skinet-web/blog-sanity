import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div>
        {['home', 'about', 'skills', 'work', 'blog', 'contact'].map((item, index) => (
            <a 
            key = {item + index} 
            href={`#${item}`} 
            className=''
            style = {active === item ? { backgroundColor: secondarycolor} : { }}

            />   
        
        ))}
    </div>
  )
}

export default NavigationDots