import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(state => state.movies);
  if (movies === null) return null;

  return (
    <div className='bg-black'>
      <div className='relative pl-8'>
        <div className='absolute -top-24 w-full z-20'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>

        <div className='pt-64'>  
          <MovieList title={"Horror"} movies={movies.horrorMovies} />
          <MovieList title={"Romantic"} movies={movies.romanticMovies} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;