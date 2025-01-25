import React from "react";
import { Gif } from "../types/giphy";
import Card from "./Card";

interface ListProps {
  gifs: Gif[];
  onSave: (gif: Gif) => void;
}

const List: React.FC<ListProps> = ({ gifs, onSave }) => {
  return (
    <div className="gif-list">
      {gifs.map((gif) => (
        <Card key={gif.id} gif={gif} onSave={onSave} />
      ))}
    </div>
  );
};

export default List;
