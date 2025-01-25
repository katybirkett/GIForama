import { Gif } from "../types/giphy";

// Save or unsave a GIF to/from localStorage
export const toggleSaveGif = (gif: Gif) => {
  // Retrieve the saved GIFs from localStorage, or start with an empty array if none are saved
  const savedGifs = JSON.parse(localStorage.getItem("savedGifs") || "[]");

  // Check if the GIF is already saved
  const isSaved = savedGifs.some((savedGif: Gif) => savedGif.id === gif.id);

  if (isSaved) {
    // If already saved, unsave (remove it from savedGifs)
    const updatedSavedGifs = savedGifs.filter(
      (savedGif: Gif) => savedGif.id !== gif.id
    );
    localStorage.setItem("savedGifs", JSON.stringify(updatedSavedGifs));
  } else {
    // If not saved, save it
    savedGifs.push(gif);
    localStorage.setItem("savedGifs", JSON.stringify(savedGifs));
  }
};
