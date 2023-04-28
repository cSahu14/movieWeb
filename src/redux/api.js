import axios from "axios";

const API_ENDPOINT = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

const API_SEARCH_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

const API_SEARCH_MOVIE = `https://api.themoviedb.org/3/movie/`;

// For searched movie
export const fetchMovies = async (movieName) => {
  return axios.get(`${API_SEARCH_ENDPOINT}&query=${movieName}`);
};

// for popular movies
export const fetchPopularMovies = async () => {
  return axios.get(API_ENDPOINT);
};

// For single movie
export const fetchMovie = async (movieId) => {
  if (movieId) {
    return axios.get(
      `${API_SEARCH_MOVIE}${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
    );
  }
};
