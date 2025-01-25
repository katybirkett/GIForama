import React, { useState, useEffect } from "react";
import { Gif } from "../types/giphy";
import { Link } from "react-router-dom";
import { toggleSaveGif } from "../utility/localStorageUtils";
import List from "../components/List";

const SavedGifs: React.FC = () => {
  const [savedGifs, setSavedGifs] = useState<Gif[]>([]);

  useEffect(() => {
    const gifs = JSON.parse(localStorage.getItem("savedGifs") || "[]");
    setSavedGifs(gifs);
  }, []);

  const handleSaveUnsave = (gif: Gif) => {
    setSavedGifs((prevGifs) => {
      return prevGifs.filter((prevGif: Gif) => {
        return prevGif.id !== gif.id;
      });
    });
    toggleSaveGif(gif);
  };

  return (
    <div className="App">
      <h1>Saved GIFs</h1>
      <>
        {savedGifs.length === 0 ? (
          <p>No saved GIFs yet!</p>
        ) : (
          <List gifs={savedGifs} onSave={handleSaveUnsave} />
        )}
      </>
      <Link to="/" style={{ marginTop: "20px", display: "block" }}>
        Go Back to Search
      </Link>
    </div>
  );
};

export default SavedGifs;
