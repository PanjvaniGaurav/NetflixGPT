import React from 'react'
import { LogoURL } from '../utils/constants'
const Header = () => {
  return (
    <div className='absolute px-10 py-3 bg-gradient-to-b from-black w-full z-10'>
        <img className='w-44' src={LogoURL} alt='Logo'/>
    </div>
  )
}

export default Header