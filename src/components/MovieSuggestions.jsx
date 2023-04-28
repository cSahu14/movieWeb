import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Movie = styled.div`
  width: 90%;
  margin: 1rem;
  cursor: pointer;
  background-color: var(--secondary-color);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: 80px;
    height: 80px;

    object-fit: contain;
    @media (max-width: 768px) {
      width: 40px;
    }
  }
`;

const MovieInfo = styled.div`
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  letter-spacing: 0.5px;

  h3 {
    margin-top: 0;
  }
`;

const Img = styled.div`
  margin: 0.5rem;
  @media (max-width: 768px) {
    margin: auto;
  }
`;

const MovieDetails = styled.div``;
const MovieTitle = styled.div`
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  letter-spacing: 0.5px;
  margin: 0;
  h3 {
    font-size: 10px;
    margin: 0;
  }
`;

const Rating = styled.span`
  font-size: 10px;
  background-color: var(--primary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;
  color: ${(props) => (props.$primary ? "green" : "red")};
`;

const Date = styled.div`
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  letter-spacing: 0.5px;

  h3 {
    font-size: 10px;
    margin: 0;
  }
`;

const MovieSuggestions = ({ movie }) => {
  const navigate = useNavigate();
  const handleClickMovie = () => {
    navigate(`/movie/${movie?.id}`);
  };
  return (
    <Movie onClick={handleClickMovie}>
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
      </MovieDetails>
    </Movie>
  );
};

export default MovieSuggestions;
