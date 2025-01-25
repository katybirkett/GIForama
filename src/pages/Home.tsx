import React, { useState, useEffect } from "react";
import { getTrendingGifs } from "../api/getTrendingGifs";
import { Gif } from "../types/giphy";
import { getSearchedGifs } from "../api/getSearchedGifs";
import SearchBar from "../components/SearchBar";
import List from "../components/List";
import "./../styles/App.css";
import Footer from "../components/Footer";
import Skeleton from "../components/Skeleton";

// DID NOT GET TIME
// if I would do the save functionality using local storage
// routing with react router dom
// I would also add my own page of my favourite gif but you'd only be able to find it through the code
// it would just be the gif of "It's Illegal for you to ask me that" from I Think You Should Leave
// I fully intended on adding a "helpful" chat bot to this that would only respond in that gif

const Home: React.FC = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  // Number of GIFs per page
  const perPage = 25;

  useEffect(() => {
    // Only fetch trending GIFs if there's no search query
    if (query === "") {
      // this dumb line fixes the strictmode calling useEffect twice 'bug' because it was annoying me but it isnt necessary
      // this wouldnt cause issues in prod
      if (gifs.length < page * perPage) {
        fetchTrendingGifs();
      }
    } else {
      // Fetch search results when the query changes
      fetchSearchGifs(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  const fetchTrendingGifs = async () => {
    setLoading(true);
    try {
      const data = await getTrendingGifs(page, perPage);
      setGifs((prevGifs) => [...prevGifs, ...data.data]);
    } catch (error) {
      console.error("Error fetching trending GIFs", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchGifs = async (searchQuery: string) => {
    setLoading(true);
    try {
      const data = await getSearchedGifs(searchQuery, page, perPage);
      // Append new GIFs to existing ones
      setGifs((prevGifs) => [...prevGifs, ...data.data]);
    } catch (error) {
      console.error("Error searching for GIFs", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    setQuery(query);
    setPage(1);
    setGifs([]);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="App">
      <h1>GIForama GIF Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        // Show 5 skeleton loaders while loading
        <Skeleton count={5} />
      ) : (
        <List gifs={gifs} />
      )}
      {/* Only show "Show More" button when there are GIFs loaded, and it's not a search */}
      {!loading && gifs.length > 0 && (
        <button className="show-more" onClick={loadMore}>
          Show More
        </button>
      )}
      <Footer />
    </div>
  );
};

export default Home;
