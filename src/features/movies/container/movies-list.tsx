import { useEffect, useState } from "react";
import {
  fetchMovieGenres,
  fetchMoviesByGenre,
  fetchMoviesList,
} from "../services/movies.service";
import { MovieListResult } from "../services/entities/movies.entitie";
import { usePageTitle } from "@/shared/lib/hooks/usePageTitle";
import MoviesFilter from "../components/movies-filter";
import MovieCard from "../components/movies-card";

const MoviesList = () => {
  usePageTitle("Filmes");
  const [movies, setMovies] = useState<MovieListResult[]>([]);
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchMoviesList();
      setMovies(data);
    };

    const loadGenres = async () => {
      const data = await fetchMovieGenres();
      setGenres(data);
    };

    const loadFilteredMovies = async () => {
      if (!selectedGenre) return;

      const filtered = await fetchMoviesByGenre(selectedGenre);
      setMovies(filtered);
    };
    if (selectedGenre) loadFilteredMovies();
    loadGenres();
    if (!selectedGenre) load();
  }, [selectedGenre]);

  return (
    <>
      <MoviesFilter genres={genres} setSelectedGenre={setSelectedGenre} />

      <div className="grid grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default MoviesList;
