import React from 'react';
import { useSelector } from 'react-redux';
import useTrailer from '../hooks/useTrailer';
import useRelatedClips from '../hooks/useRelatedClips';

const TrailerBackground = ({ movie_id }) => {
  useTrailer(movie_id);
  useRelatedClips(movie_id);
  const trailer = useSelector(state => state.movies.trailer);

  if (trailer === null) return null;

  return (
    <div className='absolute inset-0 overflow-hidden -top-24 z-0'>
      <iframe
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen aspect-video scale-150'
        src={`https://www.youtube-nocookie.com/embed/${trailer?.key}?autoplay=1&mute=1&modestbranding=1&controls=0&loop=1&showinfo=0&iv_load_policy=3&rel=0&playlist=${trailer?.key}&disablekb=1&fs=0&playsinline=1`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default TrailerBackground;