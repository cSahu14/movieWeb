import React from 'react'
import SearchComponent from '../components/SearchComponent'
import MovieList from '../components/MovieList'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        <Header/>
        <SearchComponent/>
        <MovieList/>  
    </div>
  )
}

export default Home