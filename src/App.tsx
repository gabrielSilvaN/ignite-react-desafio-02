import React from "react";
import MovieContextProvider from "./contexts/MovieContext";
import { Home } from "./pages/Home";
import "./styles/global.scss";

export const App: React.FC = () => {
  return (
    <MovieContextProvider>
      <Home />
    </MovieContextProvider>
  );
};
