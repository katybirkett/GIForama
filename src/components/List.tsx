import React from "react";
import { Gif } from "../types/giphy";
import Card from "./Card";

interface ListProps {
  gifs: Gif[];
}

const List: React.FC<ListProps> = ({ gifs }) => {
  return (
    <div className="gif-list">
      {gifs.map((gif) => (
        <Card key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

export default List;
