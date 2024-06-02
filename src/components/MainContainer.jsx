import React from 'react'
import { useSelector } from 'react-redux'
import TrailerBackground from './TrailerBackground';
import TrailerTitle from './TrailerTitle';

const MainContainer = () => {
    const movies = useSelector(state => state.movies?.nowPlayingMovies);
    if (movies === null) {
        return ; // Show loading state
    }
    const Movie = movies[Math.floor(Math.random() * movies.length)] 
    const {original_title, overview,id} = Movie;
    
  return (
    <div className='w-screen md:h-screen'>
        <TrailerTitle title={original_title} overview={overview} />
        <TrailerBackground movie_id={id} />
    </div>
  )
}

export default MainContainer