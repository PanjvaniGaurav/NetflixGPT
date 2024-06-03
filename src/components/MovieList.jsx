import React, { useState } from 'react';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';

const MovieList = ({ title, movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
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
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={handleCloseModal} />}
    </div>
  );
};

export default MovieList;
