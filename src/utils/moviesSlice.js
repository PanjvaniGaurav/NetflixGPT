import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    trailer : null,
    horrorMovies : null,
    romanticMovies : null
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies   = action.payload;
    },
    addTrailer :(state,action) => {
        state.trailer = action.payload;
    },
    addRomanticMovies: (state, action) => {
      state.romanticMovies = action.payload;
    }
  }
});

export default moviesSlice.reducer;
export const { addNowPlaying,addTrailer,addHorrorMovies,addRomanticMovies } = moviesSlice.actions;
