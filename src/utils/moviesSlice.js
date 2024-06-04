import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    horrorMovies: null,
    romanticMovies: null,
    movieClips: null,
    showModal: false,
    currentMovie: null,
    showMovieModal: false,
    selectedMovie: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addRomanticMovies: (state, action) => {
      state.romanticMovies = action.payload;
    },
    addMovieClips: (state, action) => {
      state.movieClips = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    addCurrentMovie: (state, action) => {
      state.currentMovie = action.payload;
    },
    setShowMovieModal: (state, action) => {
      state.showMovieModal = action.payload;
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  }
});

export const {
  addNowPlaying,
  addTrailer,
  addHorrorMovies,
  addRomanticMovies,
  addMovieClips,
  setShowModal,
  addCurrentMovie,
  setSelectedMovie,
  setShowMovieModal
} = moviesSlice.actions;

export default moviesSlice.reducer;