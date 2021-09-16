import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

export const useMovie = () => {
  const movieContext = useContext(MovieContext);
  return movieContext;
};
