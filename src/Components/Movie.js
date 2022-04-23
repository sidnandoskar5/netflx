import React from 'react'
import { useApp } from '../hooks/useApp'

function Movie({data, detailsHandler, type}) {
const { addFavMovies, removeFavMovies} = useApp()

const secondsToHM = (sec) => {
    var hours = Math.floor(sec / 60 / 60);
    var minutes = Math.floor(sec / 60) - (hours * 60);
    return {hours, minutes}
}

  return (
    <div className='movie_card'>
        <figure className='movie_image_wrapper'>
            {data.info.image_url && <img className='movie_image' loading="lazy" src={data.info.image_url} alt={data.title} />}
        </figure>
        <div className='movie_data'>
            <h3 className='movie_title'>{data.title}</h3>
            <p className='movie_rating'>Rating: {data.info.rating ? data.info.rating : '-'}</p>
            <p className='movie_duration'>Duration: {data.info.running_time_secs ? `${secondsToHM(data.info.running_time_secs).hours}h ${secondsToHM(data.info.running_time_secs).minutes}m` : '-'}</p>
            <div className='movie_actions_btns'>
                <button className='movie_btn' onClick={() => detailsHandler(data, type)} >View More</button>
                {
                    (type!=='fav') 
                        ? <button className='movie_btn' onClick={() => addFavMovies(data)}>Add to Favorites</button>
                        : <button className='movie_btn' onClick={() => removeFavMovies(data)}>Remove Favorites</button>
                }
                
            </div>
        </div>
    </div>
  )
}

export default Movie
