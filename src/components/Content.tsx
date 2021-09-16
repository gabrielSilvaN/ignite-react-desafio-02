import React from "react";
import { MovieCard } from "../components/MovieCard";
import { useMovie } from "../hooks/useMovie";
import "../styles/content.scss";
import Header from "./Header";

export const Content: React.FC = () => {
  const { movies } = useMovie();

  return (
    <div className="container">
      <Header />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
