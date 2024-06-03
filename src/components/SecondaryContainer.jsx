import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(state => state.movies);
  if (movies === null) return;

  return (
    <div className='bg-black'>
  <div className='relative pl-8'>
    <div className='-mt-24'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    </div>
    <div className='mt-2'>
      <MovieList title={"Horror"} movies={movies.horrorMovies}/>
      <MovieList title={"Romantic"} movies={movies.romanticMovies}/>
    </div>
  </div>

    </div>
  )
}

export default SecondaryContainer