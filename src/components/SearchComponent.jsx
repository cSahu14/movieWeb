import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getDisplayMovie, getMovies } from "../redux/feature/movieSlice";
import MovieSuggestions from "./MovieSuggestions";

const Header = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  background-color: var(--secondary-color);
  position: relative;
  @media (max-width: 768px) {
    display : flex;
    justify-content : center;
  }
`;

const Input = styled.input`
  width: 300px;
  background-color: transparent;
  border: 2px solid var(--primary-color);
  border-radius: 50px;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
  ::placeholder {
    color: #7378c5;
  }
  :focus {
    outline: none;
    background-color: var(--primary-color);
  }
  @media (max-width: 768px) {
    width: 220px;
  }
`;

const Suggestion = styled.div`
  background-color: var(--primary-color);
  width: 300px;
  height: 300px;
  overflow-y: scroll;
  border: 2px solid var(--primary-color);
  font-family: inherit;
  font-size: 1rem;
  color: #fff;
  position: absolute;
  z-index: 1000;
  @media (max-width: 768px) {
    width: 220px;
  }
`;

const Submit = styled.button`
  margin-left: 0.2rem;
  background-color: transparent;
  border: 2px solid var(--primary-color);
  border-radius: 50px;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
  cursor: pointer;
  ::placeholder {
    color: #7378c5;
  }
  :focus {
    outline: none;
    background-color: var(--primary-color);
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const SearchComponent = () => {
  const [name, setName] = useState("");

  const [enter, setEnter] = useState(false);
  const { moviesList } = useSelector((state) => ({ ...state.movie }));
  const displaySerachedMovies = useSelector(
    (state) => state.movie.displaySerachedMovies
  );
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnter(true);
    dispatch(getMovies(name));
    dispatch(getDisplayMovie(true));
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      // this enter state use for display suggestion movies or not below the input field
      if (name !== "") {
        setEnter(true);
      } else {
        dispatch(getDisplayMovie(false));
        setEnter(false);
      }
      dispatch(getMovies(name));
    }, 1000);
    return () => clearTimeout(getData);
  }, [name]);

  return (
    <Header>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Submit type="button" onClick={handleSubmit}>
          Search
        </Submit>
        {enter && !displaySerachedMovies && (
          <Suggestion>
            <div>
              {moviesList?.results?.map((movie) => (
                // this component use for search result shown below the search input field
                <MovieSuggestions movie={movie} />
              ))}
            </div>
          </Suggestion>
        )}
      </form>
    </Header>
  );
};

export default SearchComponent;
