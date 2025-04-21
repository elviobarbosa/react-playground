import { MovieListResult } from "../services/entities/movies.entity";
import MovieCardComponent from "./movies-card";

function MoviesListComponent({
  movies: movies,
}: {
  movies: MovieListResult[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCardComponent key={movie.id} {...movie} />)
      ) : (
        <p className="col-span-full text-center text-gray-600">
          Nenhum filme encontrado.
        </p>
      )}
    </div>
  );
}

export default MoviesListComponent;
