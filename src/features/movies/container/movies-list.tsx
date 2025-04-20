import { usePageTitle } from "@/shared/lib/hooks/usePageTitle";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useMoviesStore } from "../services/movies.store";
import MovieCard from "../components/movies-card";
import MoviesFilter from "../components/movies-filter";

const MoviesList = () => {
  usePageTitle("Filmes");
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    movies,
    genres,
    isLoading,
    fetchGenres,
    fetchMovies,
    setSelectedGenre,
  } = useMoviesStore();

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  useEffect(() => {
    const genreParam = searchParams.get("genre");
    const genreId = genreParam ? parseInt(genreParam) : null;

    if (genreId !== null) {
      setSelectedGenre(genreId);
    } else {
      fetchMovies();
    }
  }, [searchParams, setSelectedGenre, fetchMovies]);

  const handleGenreChange = (genreId: number | null) => {
    if (genreId !== null) {
      setSearchParams({ genre: genreId.toString() });
    } else {
      setSearchParams({});
    }
    setSelectedGenre(genreId);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <MoviesFilter
        genres={genres}
        selectedGenre={
          searchParams.get("genre")
            ? parseInt(searchParams.get("genre")!)
            : null
        }
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
