import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { toast } from "sonner";
import {
  fetchMovieGenres,
  fetchMoviesByGenre,
  fetchMoviesList,
} from "../services/movies.service";
import MoviesFilterComponent from "../components/movies-filter";
import { MovieListResult } from "../services/entities/movies.entity";
import MoviesListComponent from "../components/movies-list";
import MoviesPromoComponent from "../components/movies-promo-card";

const MoviesIndexComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const genreParam = searchParams.get("genre");
  const selectedGenre = genreParam ? parseInt(genreParam) : null;

  const {
    data: genres = [],
    isLoading: isGenresLoading,
    isError: isGenresError,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: async () => {
      try {
        return await fetchMovieGenres();
      } catch (error) {
        if (error instanceof Error) {
          toast(`Erro ao carregar gêneros: ${error.message}`, {
            icon: "🚨",
          });
        }
        throw error;
      }
    },
  });

  const {
    data: movies = [],
    isLoading: isMoviesLoading,
    error,
  } = useQuery<MovieListResult[]>({
    queryKey: ["movies", selectedGenre],
    queryFn: () =>
      selectedGenre ? fetchMoviesByGenre(selectedGenre) : fetchMoviesList(),
    enabled: !isGenresError,
    retry: false,
  });

  if (error) {
    toast(`Erro ao carregar filmes: ${error.message}`, { icon: "🚨" });
  }

  const handleGenreChange = useCallback(
    (genreId: number | null) => {
      if (genreId !== null) {
        setSearchParams({ genre: genreId.toString() });
      } else {
        setSearchParams({});
      }
    },
    [setSearchParams]
  );

  const isLoading = isGenresLoading || isMoviesLoading;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <MoviesPromoComponent />

        <MoviesFilterComponent
          genres={genres}
          selectedGenre={selectedGenre}
          onGenreChange={handleGenreChange}
        />
      </div>
      {isLoading ? (
        <div className="flex justify-center p-8">
          <p className="text-lg">Carregando filmes...</p>
        </div>
      ) : (
        <MoviesListComponent movies={movies} />
      )}
    </div>
  );
};
export default MoviesIndexComponent;
