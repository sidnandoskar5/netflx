import React, { useState } from 'react'
import { useFetch } from "../hooks/useFetch"
import MovieGroup from "./MovieGroup"
import FavMovies from "./FavMovies"
import MovieDetail from './MovieDetail'
import { useApp } from '../hooks/useApp'

const myGenres = ['Action','Comedy','Sci-Fi'];

function Movies() {
    const { favMovies } = useApp()

    const {data:movies, isPending, error} = useFetch('http://localhost:3000/movies')

    const [selectedMovie, setSelectedMovie] = useState(null)
    const [sectionType, setSectionType] = useState(null)

    const detailsHandler = (movie, type) => {
        setSelectedMovie(movie)
        setSectionType(type)
    }

    const detailCloseHandler = () => {
        setSelectedMovie(null)
    }

    if(!error && !isPending && !movies){
        return (
            <h2>Movies not available.</h2>
        )
    }

    return (
        <div>
            {isPending && <p>Loading Movies...</p>}
            {error && <p> {error} </p>}
            {favMovies.length > 0 && <FavMovies movies={favMovies} detailsHandler={detailsHandler} />}
            {movies &&  
                <div className='movie_section'>
                    {myGenres.map(myGenre => {
                        return <MovieGroup movies={movies} genre={myGenre} detailsHandler={detailsHandler} />
                    })}
                </div>
            }
            {selectedMovie && <MovieDetail movie={selectedMovie} sectionType={sectionType} detailCloseHandler={detailCloseHandler} />}
        </div>
    )
}

export default Movies