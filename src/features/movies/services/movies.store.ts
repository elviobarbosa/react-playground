import { create } from "zustand";
import {
  fetchMoviesList,
  fetchMovieGenres,
  fetchMoviesByGenre,
} from "./movies.service";
import { MoviesState } from "./entities/movies.entity";
import { toast } from "sonner";

export const useMoviesStore = create<MoviesState>((set, get) => ({
  movies: [],
  genres: [],
  selectedGenre: null,
  isLoading: false,

  fetchGenres: async () => {
    try {
      const data = await fetchMovieGenres();
      set({ genres: data });
    } catch (error) {
      toast(`Erro ao carregar gêneros: ${error}`, {
        icon: "🚨",
      });
    }
  },

  fetchMovies: async () => {
    const { selectedGenre } = get();
    set({ isLoading: true });

    try {
      let data;
      if (selectedGenre) {
        data = await fetchMoviesByGenre(selectedGenre);
      } else {
        data = await fetchMoviesList();
      }
      set({ movies: data });
    } catch (error) {
      toast(`Erro ao carregar filmes: ${error}`, {
        icon: "🚨",
      });
    } finally {
      set({ isLoading: false });
    }
  },

  setSelectedGenre: (genreId) => {
    set({ selectedGenre: genreId });
    get().fetchMovies();
  },
}));
