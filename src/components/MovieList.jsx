import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios"
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getPopularMovies } from "../redux/feature/movieSlice";
const Container = styled.section`
    display : flex;
    flex-wrap : wrap;
    justify-content : center;
`;

const MovieList = () => {
  const dispatch = useDispatch()
  const {popularMovies} = useSelector((state) => ({...state.movie}))
  const {moviesList} = useSelector((state) => ({...state.movie}))
  const isLoad = useSelector((state) => state.movie.isLoading)
  useEffect(() => {
    dispatch(getPopularMovies())
  }, [dispatch])
  
  return <Container>
    {isLoad ? "Loading..." : (moviesList.length <= 0 ? popularMovies : moviesList)?.results?.map(movie => (
      <div key={movie.id}>
        <MovieCard movie={movie}/>
      </div>
    ))}
  </Container>;
};

export default MovieList;
