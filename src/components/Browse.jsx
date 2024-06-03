import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useHorroMovies from '../hooks/useHorroMovies';

const Browse = () => {
  useNowPlaying(); 
  useHorroMovies(); 
  return (
    <div className='overflow-x-hidden w-[100vw]'>
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse