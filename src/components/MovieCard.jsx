import React from 'react'
import { poster_link } from '../utils/constants'

const MovieCard = ({movie}) => {
    if (movie === null) return;
  return (
    <div className='w-48 pr-4 hover:scale-105 transition-all duration-100'>
        <img src={poster_link + movie.poster_path} className='rounded-lg cursor-pointer' alt={movie.title} />
    </div>
  )
}

export default MovieCard