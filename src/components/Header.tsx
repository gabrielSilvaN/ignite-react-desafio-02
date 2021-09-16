import React from "react";
import { useMovie } from "../hooks/useMovie";

const Header: React.FC = () => {
  const { selectedGenre } = useMovie();

  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
};

export default Header;
