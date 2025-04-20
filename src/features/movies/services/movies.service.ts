import axios from "axios";
import { MovieListResult } from "./entities/movies.entity";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGE4OWUxMWEwNWRkMjg0OWI2MmU3ZTFkZDczNmU1MCIsIm5iZiI6MTc0MTUzNzI3MS42ODMsInN1YiI6IjY3Y2RiZmY3MmJkMjFjODA2ZjEwZjU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nIIUI3anqUokGqe4ARhutk73aiFi7Ds1pBVBYPHlIgs";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export async function fetchMoviesList() {
  try {
    const res = await axios.get(`${BASE_URL}/movie/now_playing`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "pt-BR",
        page: 1,
      },
    });

    const movies = res.data.results;
    const moviesWithImages = movies.map((movie: MovieListResult) => ({
      ...movie,
      poster_path: `${IMAGE_URL}${movie.poster_path}`,
    }));

    return moviesWithImages;
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    return [];
  }
}

export const fetchMovieGenres = async () => {
  const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: { language: "pt-BR" },
  });
  return response.data.genres;
};

export const fetchMoviesByGenre = async (genreId: number) => {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      with_genres: genreId,
      language: "pt-BR",
      sort_by: "popularity.desc",
    },
  });
  const moviesWithImages = response.data.results.map(
    (movie: MovieListResult) => ({
      ...movie,
      poster_path: `${IMAGE_URL}${movie.poster_path}`,
    })
  );

  return moviesWithImages;
  return response.data.results;
};
