import React, { useEffect, useState } from 'react'
import * as ApiTmbService from '../../services/apiTmdb'
import List from '../../components/molecules/List'
import MovieInterface, { SimpleMovieInterface } from '../../models/interfaces/Movie'
import HighlightMovie from '../../components/molecules/HighlightMovie'
import Header from '../../components/molecules/Header'

function Catalog() {
  const [highlightMovie, setHighlightMovie] = useState<MovieInterface>()
  const [popularMovies, setPopularMovies] = useState<SimpleMovieInterface[]>([])
  const [topRatedMovies, setTopRatedMovies] = useState<SimpleMovieInterface[]>([])
  const [upcomingMovies, setUpcomingMovies] = useState<SimpleMovieInterface[]>([])


  const imgUrl = 'https://image.tmdb.org/t/p/w300'
  const originalImgUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    function searchPopular() {
      ApiTmbService.getPolular()
        .then((response) => {
          const movieImgs = response.results.map((result) => {
            return {
              ...result,
              backdrop_path: originalImgUrl + result.backdrop_path,
              poster_path: imgUrl + result.poster_path,
              title: result.title,
              id: result.id,
            }
          })
          setPopularMovies(movieImgs)
        })
    }

    function searchTopRated() {
      ApiTmbService.getTopRated()
        .then((response) => {
          const movieImgs = response.results.map((result) => {
            return {
              ...result,
              backdrop_path: originalImgUrl + result.backdrop_path,
              poster_path: imgUrl + result.poster_path,
              title: result.title,
              id: result.id,
            }
          })
          setTopRatedMovies(movieImgs)
        })
    }

    function searchUpcoming() {
      ApiTmbService.getUpcoming()
        .then((response) => {
          const movieImgs = response.results.map((result) => {
            return {
              ...result,
              backdrop_path: originalImgUrl + result.backdrop_path,
              poster_path: imgUrl + result.poster_path,
              title: result.title,
              id: result.id,
            }
          })
          setUpcomingMovies(movieImgs)
        })
    }

    searchPopular()
    searchTopRated()
    searchUpcoming()
  }, [])

  useEffect(() => {
    if (!popularMovies.length) return

    const movie = popularMovies[Math.floor(Math.random() * popularMovies.length)]
    movie.backdrop_path = originalImgUrl + movie.backdrop_path
    movie.poster_path = imgUrl + movie.poster_path

    setHighlightMovie(movie)

  }, [popularMovies])

  return <>
    <div className="spacing">
      <Header></Header>
      {highlightMovie && (<HighlightMovie movie={highlightMovie} />)}
      <List title='Populares' moviesImg={popularMovies} />
      <List title='Top visualizações' moviesImg={topRatedMovies} />
    </div>
  </>
}

export default Catalog