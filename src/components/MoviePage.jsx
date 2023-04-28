import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Movie = styled.div`
  width: 90%;
  margin: 1rem;
  background-color: var(--secondary-color);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: 400px;
    height: 400px;

    object-fit: contain;
    @media (max-width: 768px) {
        width: 250px;
    }
  }
`;

const MovieInfo = styled.div`
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;

  h3 {
    margin-top: 0;
  }
`;

const Img = styled.div`
@media (max-width: 768px) {
    margin : auto;
}
`;

const MovieDetails = styled.div``;
const MovieTitle = styled.div`
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;
  h3 {
    margin-top: 0;
  }
`;

const Rating = styled.span`
  background-color: var(--primary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;
  color: ${(props) => (props.$primary ? "green" : "red")};
`;

const Overview = styled.div`
  padding: 1rem;
  color: #fff;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const Date = styled.div `
color : #eee;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 0.5rem 1rem 1rem;
    letter-spacing : 0.5px;

    h3 {
        margin-top : 0;
    }
`

const MoviePage = ({ movie }) => {
  return (
    <Movie>
      <Img>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt=""
        />
      </Img>
      <MovieDetails>
        <MovieTitle>
          <h3>{movie?.title}</h3>
        </MovieTitle>
        <MovieInfo>
          <Rating
            $primary={movie?.vote_average >= 5}
            $secondary={movie?.vote_average < 5}
          >
            {movie?.vote_average}
          </Rating>
        </MovieInfo>
        <Date>
          <h3>{movie?.release_date}</h3>
        </Date>
        <Overview className="overview">
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </Overview>
      </MovieDetails>
    </Movie>
  );
};

export default MoviePage;
