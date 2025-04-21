import { usePageTitle } from "@/shared/lib/hooks/usePageTitle";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useMoviesStore } from "../services/movies.store";
import MovieCard from "../components/movies-card";
import MoviesFilter from "../components/movies-filter";
import { toast } from "sonner";
import {
  fetchMovieGenres,
  fetchMoviesByGenre,
  fetchMoviesList,
} from "../services/movies.service";

const MoviesList = () => {
  usePageTitle("Filmes");
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    movies,
    genres,
    isLoading,
    setMovies,
    setGenres,
    setIsLoading,
    setSelectedGenre,
    selectedGenre,
  } = useMoviesStore();

  const fetchGenres = useCallback(async () => {
    try {
      const data = await fetchMovieGenres();
      setGenres(data);
    } catch (error) {
      toast(`Erro ao carregar gêneros: ${error}`, {
        icon: "🚨",
      });
    }
  }, [setGenres]);

  const fetchMovies = useCallback(async () => {
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
      toast(`Erro ao carregar gêneros: ${error}`, {
        icon: "🚨",
      });
    } finally {
      setIsLoading(false);
    }
  }, [selectedGenre, setMovies, setIsLoading]);

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies, selectedGenre]);

  useEffect(() => {
    const genreParam = searchParams.get("genre");
    const genreId = genreParam ? parseInt(genreParam) : null;

    if (genreId !== selectedGenre) {
      setSelectedGenre(genreId);
    }
  }, [searchParams, setSelectedGenre, selectedGenre]);

  const handleGenreChange = useCallback(
    (genreId: number | null) => {
      if (genreId !== null) {
        setSearchParams({ genre: genreId.toString() });
      } else {
        setSearchParams({});
      }
      setSelectedGenre(genreId);
    },
    [setSearchParams, setSelectedGenre]
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <MoviesFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={handleGenreChange}
      />

      {isLoading ? (
        <div className="flex justify-center p-8">
          <p className="text-lg">Carregando filmes...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
          ) : (
            <p className="col-span-full text-center text-gray-600">
              Nenhum filme encontrado.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MoviesList;
