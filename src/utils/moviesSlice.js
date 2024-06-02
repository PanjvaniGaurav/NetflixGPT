import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    trailer : null
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer :(state,action) => {
        state.trailer = action.payload;
    }
  }
});

export default moviesSlice.reducer;
export const { addNowPlaying,addTrailer } = moviesSlice.actions;
