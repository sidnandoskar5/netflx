import React from 'react'
import { useApp } from '../hooks/useApp'

function MovieDetail({movie,detailCloseHandler,sectionType}) {
  const { addFavMovies, removeFavMovies} = useApp()

  return (
    <div className='detail_card'>
        <span className='detail_card-close' onClick={detailCloseHandler}>X</span>
        <figure className='detail_card_img-wrapper'>
            <img className='img-responsive' src={movie.info.image_url} alt={movie.info.title} />
        </figure>
        <div className='detail_card_info-wrapper'>
            <h2 className='detail_card-title'>Title: {movie.title}</h2>
            <div className='detail_card-genres'>Genres: {movie.info.genres.join(', ')}</div>
            <div className='detail_card-plot'>Plot: {movie.info.plot}</div>
            <div className='detail_card-actors'>Actors: {movie.info.actors.join(', ')}</div>
            <div className='detail_card-directors'>Directors: {movie.info.directors.join(', ')}</div>
            {
              (sectionType !== 'fav')
                ? <button className='detail_card-fav-btn movie_btn' onClick={() => addFavMovies(movie)}>Add to Favorites</button>
                : <button className='detail_card-fav-btn movie_btn' onClick={() => removeFavMovies(movie)}>Remove Favorites</button>
            }
        </div>
    </div>
  )
}

export default MovieDetail
