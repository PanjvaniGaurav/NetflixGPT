import React from 'react';
import { poster_link } from '../utils/constants';
import { FaInfo } from "react-icons/fa";

const MovieCard = ({ movie, onOpenModal }) => {
  if (movie === null) return null;

  return (
    <div className='relative w-48 pr-4 hover:scale-105 transition-all duration-100'>
      <img
        src={poster_link + movie.poster_path}
        className='rounded-lg cursor-pointer'
        alt={movie.title}
        onClick={() => onOpenModal(movie)}
      />
      <FaInfo
        className='absolute bottom-5 right-5 text-2xl text-white bg-neutral-700-500 rounded-full border border-white p-1 mx-2 cursor-pointer hover:scale-110 hover:translate-y-[-5%] transition-all duration-300'
        onClick={(e) => {
          e.stopPropagation();
          onOpenModal(movie);
        }}
      />
    </div>
  );
};

export default MovieCard;
