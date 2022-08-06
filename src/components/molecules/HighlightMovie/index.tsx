import React from "react"
import MovieInterface from '../../../models/interfaces/Movie'
import { useNavigate } from 'react-router-dom'
import Title from '../../atoms/Title'
import { Button } from "@mui/material"

interface HighlightMovieInterface {
  movie: MovieInterface
}

function HighlightMovie({ movie }: HighlightMovieInterface) {
  const navigate = useNavigate()

  function sendToMovie(id: number) {
    navigate('/filme/' + id)
  }

  return (
    <div style={{
      backgroundImage: `url(${movie.backdrop_path})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '94vh',
    }}>
      <div style={{
        background: 'linear-gradient(to top, #111 10%, transparent 60%)',
        height: 'inherit',
      }}>
        <div style={{
          backgroundImage: 'linear-gradient(to right, #111 10%, transparent 70%)',
          height: 'inherit',
        }}>
          <div id="highlight-box"> 
            <Title id="highlight-title">{movie.title}</Title>
            <h3 id="highlight-text">{movie.overview}</h3>
            <Button variant="contained" onClick={() => sendToMovie(movie.id)}>Assistir</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HighlightMovie