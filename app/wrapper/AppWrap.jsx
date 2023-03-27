import React from 'react'
import NavigationDots from '../components/NavigationDots'
import SocialMedia from '../components/SocialMedia'

const AppWrap = ( Component, idName, classNames ) => function HOC() {
  return (
    <div id={idName} className={` flex flex-row  bg-[#EDF2F8] ${classNames}`}>
      <SocialMedia />

      {/* <div className='flex justify-center items-center flex-1 flex-col w-[100%]'>
        <Component />
      </div> */}
      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap