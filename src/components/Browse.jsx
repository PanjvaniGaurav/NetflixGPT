import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useHorroMovies from '../hooks/useHorroMovies';
import useRomanticMovies from '../hooks/useRomanticMovies';
import ModalContainer from './ModalContainer';

const Browse = () => {
  useNowPlaying(); 
  useHorroMovies();
  useRomanticMovies(); 
  return (
    <div className='overflow-x-hidden w-[100vw]'>
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
        <ModalContainer/>
    </div>
  )
}

export default Browse