import React from 'react';
import { poster_link } from '../utils/constants';

const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg max-w-3xl">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">{movie.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex">
          <img 
            src={poster_link + movie.poster_path} 
            className="w-36 h-auto max-h-64 rounded-lg object-cover" 
            alt={movie.title} 
          />
          <div className="ml-4 flex-1 overflow-y-auto max-h-64">
            <p className="text-gray-700">{movie.overview}</p>
            <p className="text-gray-500 mt-2">Release Date: {movie.release_date}</p>
            <p className="text-gray-500">Rating: {movie.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;