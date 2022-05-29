import React from "react";
import { useMovie } from "../hooks/useMovie";
import "../styles/sidebar.scss";
import { ButtonsContainer } from "./ButtonsContainer";

export const SideBar: React.FC = () => {
  const { genres, setSelectedGenreId, selectedGenreId } = useMovie();

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <ButtonsContainer />
    </nav>
  );
};
