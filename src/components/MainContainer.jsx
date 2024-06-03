import React from 'react';
import { useSelector } from 'react-redux';
import TrailerBackground from './TrailerBackground';
import TrailerTitle from './TrailerTitle';

const MainContainer = () => {
  const movies = useSelector(state => state.movies?.nowPlayingMovies);
  
  if(movies === null) return;

  const Movie = movies[Math.floor(Math.random() * movies.length)];
  const { original_title, overview, id } = Movie;

  return (
    <div className='relative w-screen md:h-screen overflow-hidden'>
      <TrailerBackground movie_id={id} />
      <div className='absolute inset-0 z-10 bg-gradient-to-t from-black'></div>
      <div className='absolute inset-0 z-20'>
        <TrailerTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;