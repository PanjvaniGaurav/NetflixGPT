import React from 'react'
import { poster_link } from '../utils/constants'

const MovieCard = ({movie}) => {
    if (movie === null) return;
  return (
    <div className='w-48 pr-4'>
        <img src={poster_link+ movie.poster_path} alt={movie.title} />
    </div>
  )
}

export default MovieCard