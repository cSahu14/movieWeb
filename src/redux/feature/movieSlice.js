import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    movie: {},
    popularMovies: [],
    displaySerachedMovies: false,
    isLoading: true,
  },

  reducers: {
    // for popular movies
    getPopularMovies(name) {
      return name;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
      state.isLoading = false;
    },

    // for searched movies
    getMovies(name) {
      return name;
    },
    setMovies: (state, action) => {
      state.moviesList = action.payload;
      state.isLoading = false;
    },

    // for perticular movie
    getMovie(id) {
      return id;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },

    // boolean value for displaying or not searched result on the homepage
    getDisplayMovie: (state, action) => {
      state.displaySerachedMovies = action.payload;
    },
  },
});

export const {
  getPopularMovies,
  setPopularMovies,
  getMovies,
  setMovies,
  getMovie,
  setMovie,
  getDisplayMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
