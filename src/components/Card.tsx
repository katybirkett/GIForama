import React, { useState, useEffect } from "react";
import { Gif } from "../types/giphy";

interface CardProps {
  gif: Gif;
  onSave: (gif: Gif) => void;
}

const Card: React.FC<CardProps> = ({ gif, onSave }) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // Check if the GIF is saved when the component mounts
  useEffect(() => {
    const savedGifs = JSON.parse(localStorage.getItem("savedGifs") || "[]");
    const isGifSaved = savedGifs.some(
      (savedGif: Gif) => savedGif.id === gif.id
    );
    setIsSaved(isGifSaved);
  }, [gif.id]);

  const handleSaveClick = () => {
    onSave(gif); // Call the onSave function passed as a prop
    setIsSaved((prevState) => !prevState); // Toggle saved state
  };

  return (
    <div className="gif-card">
      <img src={gif.images.fixed_height.url} alt={gif.title} />
      <p>{gif.title}</p>
      <button
        onClick={handleSaveClick}
        className={`save-button ${isSaved ? "saved" : ""}`}
      >
        {isSaved ? "Unsave" : "Save"}
      </button>
    </div>
  );
};

export default Card;
