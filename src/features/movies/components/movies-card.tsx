import { MovieListResult } from "../services/entities/movies.entity";

const MovieCard = (movie: MovieListResult) => {
  return (
    <div key={movie.id} className="bg-white shadow rounded-lg overflow-hidden">
      <img
        src={movie.poster_path}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{movie.title} </h2>
        <p className="text-sm text-gray-700 mt-2">{movie.overview}</p>
        <p className="text-sm text-gray-600 mt-3"></p>
      </div>
    </div>
  );
};

export default MovieCard;
