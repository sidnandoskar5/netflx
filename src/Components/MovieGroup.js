import Movie from './Movie';

function MovieGroup({movies, genre, detailsHandler}) {
  return (
    <div>
        <h2 className='movie_genres'>{genre}</h2>
        <section className='movie_list'>
            <div className='row'>
            {movies.map((movie,index) => {
                if(movie.info.genres && movie.info.genres.includes(genre)){
                    return (
                        <div className='col' key={index}>
                            <Movie data={movie} detailsHandler={detailsHandler} />
                        </div>
                    )
                }
                return null
            })}
            </div>
        </section>
    </div>
  )
}

export default MovieGroup