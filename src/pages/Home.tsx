import React, { useState, useEffect } from "react";
import { getTrendingGifs } from "../api/getTrendingGifs";
import { Gif } from "../types/giphy";
import { getSearchedGifs } from "../api/getSearchedGifs";
import SearchBar from "../components/SearchBar";
import List from "../components/List";
import "./../styles/App.css";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchInitialGifs = async () => {
      setLoading(true);
      try {
        const data = await getTrendingGifs();
        setGifs(data.data);
      } catch (error) {
        console.error("Error fetching trending GIFs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialGifs();
  }, []);

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const data = await getSearchedGifs(query);
      setGifs(data.data);
    } catch (error) {
      console.error("Error searching for GIFs", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>GIF Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <List gifs={gifs} />}
      <Footer />
    </div>
  );
};

export default Home;
