import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getPopularMovies } from "../redux/feature/movieSlice";
const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieList = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movie?.popularMovies);
  const { moviesList } = useSelector((state) => ({ ...state.movie }));
  const isLoad = useSelector((state) => state.movie.isLoading);
  const displaySerachedMovies = useSelector(
    (state) => state.movie.displaySerachedMovies
  );

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  return (
    <Container>
      {/* If user serach for by search button or enter keyboard button then only the search result displing in the page  */}
      {isLoad
        ? "Loading..."
        : (!displaySerachedMovies ? popularMovies : moviesList)?.results?.map(
            (movie) => (
              <div key={movie.id}>
                {/* This below component for individual movies */}
                <MovieCard movie={movie} />
              </div>
            )
          )}
    </Container>
  );
};

export default MovieList;
