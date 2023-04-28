import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice ({
    name : "movie",
    initialState : {
        moviesList: [],
        movie : {},
        isLoading : true
    },

    reducers: {
        getMovies(name) {
            return name
        },
        setMovies: (state, action) => {
            state.moviesList = action.payload
            state.isLoading = false;
        },

    }
})

export const {getMovies, setMovies} = movieSlice.actions

export default movieSlice.reducer