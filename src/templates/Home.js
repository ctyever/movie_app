import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { movieList } from 'api/index'
import 'templates/Home.css'


const Home = () => {

  const [ movies, setMovie ] = useState([])
  
  useEffect(() => {
    movieList()
      .then(res => {        
        setMovie(res.data.data.movies)
      })
      .catch(err => {
        console.log(err.data)
      })      
  }, [])
  return (<>
    <section className="container">
			<div className="movies">
				{movies.length != 0
					? movies.map((movies) => (
              <div key={movies.id} className="movie">
                <Link to={{
                  pathname:`/movie/${movies.id}`,
                  state: {
                    id: movies.id,
                    title: movies.title,
                  }
                }}>
                  <div>
                    <img src={movies.medium_cover_image}></img>
                    <div className="movie_data">
                      <h3 className="movie_title">{movies.title}</h3>
                      <h5 className="movie_year">{movies.year}</h5>
                      <ul className="genres">
                        {movies.genres.map((genre, index) => (
                          <li key={index} className="genres_genre">{genre}</li>
                        ))}
                      </ul>
                      <p className="movie_summary">{movies.summary.slice(0, 140)}...</p>
                      
                    </div>
                  </div>
                </Link>
              </div>
					))
					: <h4 className="loader">Loding...</h4>
				}
			</div>
    </section>
    </>)
}

export default Home