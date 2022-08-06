import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import * as ApiTmbService from '../../services/apiTmdb'
import MovieInterface from "../../models/interfaces/Movie";
import VideoFrame from "../../components/atoms/VideoFrame";
import Header from "../../components/molecules/Header";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieInterface>()
  const [videoKey, setVideoKey] = useState<string>()

  const imgUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    if (!id || movie) return
    ApiTmbService.getMovieDetails(+id)
      .then((response) => {
        setMovie(response)
        const video = response.videos && response.videos.results && response.videos.results[0]
        video && setVideoKey(video.key)
      })
  }, [id, movie])

  return <>
    <div className="spacing"></div>
    <Header></Header>
      <div className="movie-box">
        <h1 className="movie-title">{movie && movie.title}</h1>
        <h3 className="movie-desc">{movie && movie.overview}</h3>
        </div>
    {movie && movie.backdrop_path && (
      <img className="movie-img" src={imgUrl + movie.backdrop_path} alt="" />
    )}
    <div>
      {videoKey && <VideoFrame width="1920" height="1080" videoKey={videoKey + ''} />}
    </div>
    <br />
  </>
}

export default Movie