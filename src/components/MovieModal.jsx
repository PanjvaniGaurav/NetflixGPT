import React, { useEffect, useRef } from 'react';
import { poster_link } from '../utils/constants';
import { useSelector } from 'react-redux';

const MovieModal = ({ onClose }) => {
  const movie = useSelector(state => state.movies.selectedMovie);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75">
      <div ref={modalRef} className="bg-[#141414] p-8 rounded-lg max-w-3xl w-full mx-4 relative text-white">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-400 hover:text-white focus:outline-none transition-colors p-2 rounded-full hover:bg-gray-700 z-[10000]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          <img 
            src={poster_link + movie.poster_path} 
            className="w-full md:w-64 h-auto rounded-lg object-cover mb-4 md:mb-0 md:mr-6 transition-opacity duration-300 ease-in-out" 
            alt={movie.title} 
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">{movie.overview}</p>
            <div className="space-y-2">
              <p className="text-gray-400">Release Date: <span className="text-white">{movie.release_date}</span></p>
              <p className="text-gray-400">Rating: <span className="text-white">{movie.vote_average} / 10</span></p>
              <p className="text-gray-400">Popularity: <span className="text-white">{movie.popularity}</span></p>
              <p className="text-gray-400">Language: <span className="text-white">{movie.original_language.toUpperCase()}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
