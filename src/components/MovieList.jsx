import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    if(movies === null) return;

  return (
    <div className='pt-6 px-3'>
    <h1 className='text-white font-bold text-2xl w-full py-2'>{title}</h1>
    <div className='flex py-1' style={{ overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className='flex'>
        {movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
      </div>
    </div>
  </div>
  
  )
}

export default MovieList