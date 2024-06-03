import React from 'react'
import { useSelector } from 'react-redux';
import useTrailer from '../hooks/useTrailer';

const TrailerBackground = ({movie_id}) => {

  const trailer = useSelector(state => state.movies.trailer);
    useTrailer(movie_id);
    if(trailer === null) return ;
    
  return (
    <div className='w-full aspect-video -top-24'>
      <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&modestbranding=1&controls=0&loop=1&showinfo=0&iv_load_policy=3&rel=0&playlist=${trailer?.key}&disablekb=1&fs=0&playsinline=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default TrailerBackground