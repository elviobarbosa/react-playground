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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await fetchMovieGenres();
        setGenres(data);
      } catch (error) {
        console.error("Erro ao carregar gêneros:", error);
      }
    };

    loadGenres();
  }, []);

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      try {
        let data;
        if (selectedGenre) {
          data = await fetchMoviesByGenre(selectedGenre);
        } else {
          data = await fetchMoviesList();
        }
        setMovies(data);
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();
  }, [selectedGenre]);

  return (
    <>
      <MoviesFilter genres={genres} setSelectedGenre={setSelectedGenre} />

      {isLoading ? (
        <div className="flex justify-center p-8">
          <p>Carregando filmes...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
          ) : (
            <p>Nenhum filme encontrado.</p>
          )}
        </div>
      )}
    </>
  );
};

export default MoviesList;
