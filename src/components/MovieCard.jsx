import React from "react";
import styled from "styled-components";

const Movie = styled.div`

width : 300px;
margin : 1rem;
background-color : var(--secondary-color);
box-shadow : 0 4px 5px rgba(0, 0, 0, 0.2);
position : relative;
overflow : hidden;
border-radius : 3px;
    
img {
    width: 100%;
}

`;

const MovieInfo = styled.div`
color : #eee;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 0.5rem 1rem 1rem;
    letter-spacing : 0.5px;

    h3 {
        margin-top : 0;
    }

`;

const Rating = styled.span`
background-color : var(--primary-color);
padding : 0.25rem 0.5rem;
border-radius : 3px;
font-weight : bold;
color: ${props => props.$primary ? "green" : "red"};
 
`;

const Overview = styled.div`
  padding : 1rem;
  color : #fff;
  p {
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2;
   -webkit-box-orient: vertical;
  }
`;

const MovieCard = ({movie}) => {
  return (
    <Movie>
      <img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="" />
      <MovieInfo>
        <h3>{movie?.title}</h3>
        <Rating $primary={movie?.vote_average >= 5} $secondary={movie?.vote_average < 5}>{movie?.vote_average}</Rating>
      </MovieInfo>
      <Overview className="overview">
        <h3>Overview</h3>
        <p>
          {movie.overview}
        </p>
      </Overview>
    </Movie>
  );
};

export default MovieCard;
