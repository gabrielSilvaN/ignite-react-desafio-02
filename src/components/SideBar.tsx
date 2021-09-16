import React from "react";
import { useMovie } from "../hooks/useMovie";
import { Button } from "./Button";
import "../styles/sidebar.scss";

export const SideBar: React.FC = () => {
  const { genres, setSelectedGenreId, selectedGenreId } = useMovie();

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};
