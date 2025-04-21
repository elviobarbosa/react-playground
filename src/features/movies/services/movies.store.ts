import { create } from "zustand";

import { MoviesState } from "./entities/movies.entity";

export const useMoviesStore = create<MoviesState>((set) => ({
  movies: [],
  genres: [],
  selectedGenre: null,
  isLoading: false,

  setMovies: (movies) => set({ movies }),
  setGenres: (genres) => set({ genres }),
  setSelectedGenre: (genreId) => set({ selectedGenre: genreId }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));
