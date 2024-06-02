import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlaying();  
  return (
    <div className='overflow-x-hidden w-[100vw]'>
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse