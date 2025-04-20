type MoviesFilterProps = {
  genres: { id: number; name: string }[];
  setSelectedGenre: React.Dispatch<React.SetStateAction<number | null>>;
};

const MoviesFilter = ({ genres, setSelectedGenre }: MoviesFilterProps) => {
  return (
    <select
      onChange={(e) => setSelectedGenre(Number(e.target.value))}
      className="mb-4 p-2 border rounded"
    >
      <option value="">Selecione um gênero</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};
export default MoviesFilter;
