import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../redux/feature/movieSlice';

const Header = styled.header `
    padding : 1rem;
    display : flex;
    justify-content : flex-end;
    background-color : var(--secondary-color);
`;

const Input = styled.input `
    background-color : transparent;
    border : 2px solid var(--primary-color);
    border-radius : 50px;
    font-family : inherit;
    font-size : 1rem;
    padding : 0.5rem 1rem;
    color : #fff;
    ::placeholder {
        color : #7378c5;
    }
    :focus {
        outline : none;
        background-color : var(--primary-color);
    }
`;

const Submit = styled.button `
    margin-left : 0.2rem;
    background-color : transparent;
    border : 2px solid var(--primary-color);
    border-radius : 50px;
    font-family : inherit;
    font-size : 1rem;
    padding : 0.5rem 1rem;
    color : #fff;
    ::placeholder {
        color : #7378c5;
    }
    :focus {
        outline : none;
        background-color : var(--primary-color);
    }
`

const SearchComponent = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        console.log("submit")
        e.preventDefault();
        // dispatch(getMovies(name));
        dispatch(getMovies(name))
    }
    
  return (
    <Header>
        <form  onSubmit={handleSubmit}>
            <Input type="text" placeholder='Search' value={name} onChange={(e) => setName(e.target.value)}/>
            <Submit type="button" onClick={handleSubmit}>Search</Submit>
        </form>
    </Header>
  )
}

export default SearchComponent
