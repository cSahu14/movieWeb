import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice ({
    name : "movie",
    initialState : {
        moviesList: [],
        movie : {},
        popularMovies : [],
        isLoading : true
    },

    reducers: {
        getPopularMovies(name){
            return name;
        },
        setPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
            state.isLoading = false;
        },
        getMovies(name) {
            return name
        },
        setMovies: (state, action) => {
            state.moviesList = action.payload
            state.isLoading = false;
        },
        getMovie(id){
            return id;
        },
        setMovie : (state, action) => {
            state.movie = action.payload
        }

    }
})

export const {getPopularMovies, setPopularMovies, getMovies, setMovies, getMovie, setMovie} = movieSlice.actions

export default movieSlice.reducer