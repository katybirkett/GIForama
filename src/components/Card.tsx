import React from "react";
import { Gif } from "../types/giphy";

interface CardProps {
  gif: Gif;
}

const Card: React.FC<CardProps> = ({ gif }) => {
  return (
    <div className="gif-card">
      <img src={gif.images.fixed_height.url} alt={gif.title} />
      <p>{gif.title}</p>
    </div>
  );
};

export default Card;
