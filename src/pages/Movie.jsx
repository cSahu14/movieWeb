import React, { useEffect } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import { getMovie } from '../redux/feature/movieSlice';
import MovieCard from '../components/MovieCard';
import MoviePage from '../components/MoviePage';

const Movie = () => {
    const dispatch = useDispatch();
    const {movie} = useSelector((state) => ({...state.movie}))
    const {id} = useParams();

    const navigate = useNavigate();
    useEffect(() => {
        if(id) {
            dispatch(getMovie(id))
        }
    }, [id])
    
  return (
    <div>
        <MoviePage movie={movie}/>
    </div>
  )
}

export default Movie