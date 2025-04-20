export type MovieListResult = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  original_language: string;
  original_title: string;
  backdrop_path: string;
  genre_ids: number[];
};

export type Genre = {
  id: number;
  name: string;
};

export type MoviesState = {
  movies: MovieListResult[];
  genres: Genre[];
  selectedGenre: number | null;
  isLoading: boolean;

  fetchGenres: () => Promise<void>;
  fetchMovies: () => Promise<void>;
  setSelectedGenre: (genreId: number | null) => void;
};

export type MoviesFilterProps = {
  genres: Genre[];
  selectedGenre: number | null;
  onGenreChange: (genreId: number | null) => void;
};
