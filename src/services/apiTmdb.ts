import api from "../config/api";
import MovieInterface, { SimpleMovieInterface } from "../models/interfaces/Movie";

const params = {
  api_key: "abc6fb9a11e53f195adbbc71f199e0c4",
  language: 'pt-BR',
}

interface PaginationInterface {
  page: number
  results: SimpleMovieInterface[]
  total_results: number
  total_pages: number
}

async function getPolular() {
  return await api.get<PaginationInterface>('/movie/popular', { params })
      .then((response) => response.data)
}

async function getTopRated() {
  return await api.get<PaginationInterface>('/movie/top_rated', { params })
      .then((response) => response.data)
}

async function getUpcoming() {
  return await api.get<PaginationInterface>('/movie/upcoming', { params })
      .then((response) => response.data)
}

async function getMovieDetails(movieId: number) {
  const detailParams = { ...params, append_to_response: 'videos' }
  return await api.get<MovieInterface>('/movie/' + movieId, { params: detailParams })
      .then((response) => response.data)
}


export {
  getPolular,
  getTopRated,
  getUpcoming,
  getMovieDetails
}