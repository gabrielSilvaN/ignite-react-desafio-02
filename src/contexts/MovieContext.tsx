import { createContext, useEffect, useState } from "react";
import { GenreResponseProps } from "../models/GenderModel";
import { MovieProps } from "../models/MovieModel";
import { api } from "../services/api";

interface MovieContextProps {
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
  genres: GenreResponseProps[];
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export const MovieContext = createContext({} as MovieContextProps);

const MovieContextProvider: React.FC = ({ children }) => {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  return (
    <MovieContext.Provider
      value={{
        selectedGenreId,
        setSelectedGenreId,
        genres,
        selectedGenre,
        movies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
