import { MoviesFilterProps } from "../services/entities/movies.entity";
import PromoCard from "@/shared/components/promo-card";

const MoviesFilterComponent = ({
  genres,
  selectedGenre,
  onGenreChange,
}: MoviesFilterProps) => {
  return (
    <div className="mb-6">
      <PromoCard />
      <h2 className="text-lg font-medium mb-3">Filtrar por gênero</h2>

      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${
                      selectedGenre === null
                        ? "bg-gray-950 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
          onClick={() => onGenreChange(null)}
        >
          Todos
        </button>

        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${
                        selectedGenre === genre.id
                          ? "bg-gray-950 text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
            onClick={() => onGenreChange(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoviesFilterComponent;
