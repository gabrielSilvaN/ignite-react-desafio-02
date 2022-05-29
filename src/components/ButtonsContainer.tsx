import { useCallback } from "react";
import { useMovie } from "../hooks/useMovie";
import { Button } from "./Button";

interface ButtonsContainerProps {}

export function ButtonsContainer({ ...rest }: ButtonsContainerProps) {
  const { genres, setSelectedGenreId, selectedGenreId } = useMovie();

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, []);

  return (
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
  );
}
