import React from 'react';
import { useDispatch } from 'react-redux';
import MovieCard from './MovieCard';
import { setShowMovieModal, setSelectedMovie } from '../utils/moviesSlice';

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();

  const handleOpenModal = (movie) => {
    dispatch(setSelectedMovie(movie));
    dispatch(setShowMovieModal(true));
  };

  if (movies === null) return null;

  return (
    <div className='pt-6 px-3'>
      <h1 className='text-white font-bold text-2xl w-full py-2'>{title}</h1>
      <div className='flex py-1' style={{ overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className='flex'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onOpenModal={handleOpenModal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;