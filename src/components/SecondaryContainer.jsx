// SecondaryContainer.js
import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(state => state.movies);
  if (movies === null) return null;

  return (
    <div className='bg-black relative z-10'>
      <div className='absolute -top-24 left-0 w-full'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>

      <div className='pt-64'>  
        <MovieList title={"Horror"} movies={movies.horrorMovies} />
        <MovieList title={"Romantic"} movies={movies.romanticMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
