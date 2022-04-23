import Movie from './Movie';

function FavMovies({movies, detailsHandler}) {
  return (
    <div>
        <h2 className='movie_genres'>Favorites</h2>
        <section className='movie_list'>
            <div className='row'>
            {movies.map((movie,index) => {
                return (
                    <div className='col' key={index}>
                        <Movie data={movie} detailsHandler={detailsHandler} type='fav' />
                    </div>
                )
            })}
            </div>
        </section>
    </div>
  )
}

export default FavMovies