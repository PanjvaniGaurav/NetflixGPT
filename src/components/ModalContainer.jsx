import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClipsModal from './ClipsModal';
import MovieModal from './MovieModal';
import { setShowModal, setShowMovieModal, setSelectedMovie } from '../utils/moviesSlice';

const ModalContainer = () => {
  const dispatch = useDispatch();
  const showClipsModal = useSelector(state => state.movies.showModal);
  const showMovieModal = useSelector(state => state.movies.showMovieModal);
  const movieClips = useSelector(state => state.movies.movieClips);

  const handleCloseClipsModal = () => {
    dispatch(setShowModal(false));
  };

  const handleCloseMovieModal = () => {
    dispatch(setShowMovieModal(false));
    dispatch(setSelectedMovie(null));
  };

  return (
    <>
      {showClipsModal && (
        <ClipsModal clips={movieClips} onClose={handleCloseClipsModal} />
      )}
      {showMovieModal && (
        <MovieModal onClose={handleCloseMovieModal} />
      )}
    </>
  );
};

export default ModalContainer;