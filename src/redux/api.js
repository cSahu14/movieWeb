import axios from "axios";

const API_ENDPOINT = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`

const API_SEARCH_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`

export const fetchMovies = async (movieName) => {
    if(movieName == ""){
        return axios.get(API_ENDPOINT)
    }
    return axios.get(`${API_SEARCH_ENDPOINT}&query=${movieName}`)
}


