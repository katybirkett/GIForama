import React, { useState, useEffect, useRef } from "react";
import { getTrendingGifs } from "../api/getTrendingGifs";
import { Gif } from "../types/giphy";
import { getSearchedGifs } from "../api/getSearchedGifs";
import SearchBar from "../components/SearchBar";
import List from "../components/List";
import "./../styles/App.css";
import Skeleton from "../components/Skeleton";
import { toggleSaveGif } from "../utility/localStorageUtils";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  // flag to prevent duplicate fetches
  const isFetching = useRef(false);

  // Number of GIFs per page
  const perPage = 25;

  useEffect(() => {
    if (!isFetching.current) {
      isFetching.current = true;
      console.log("here");
      // Only fetch trending GIFs if there's no search query
      if (query === "") {
        fetchTrendingGifs();
      } else {
        // Fetch search results when the query changes
        fetchSearchGifs(query);
      }
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
      isFetching.current = false;
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
      isFetching.current = false;
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
    <>
      <h1>GIForama GIF Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <Link to="/my-favorite-gif" style={{ display: "none" }}>
        my favourite gif
      </Link>
      {loading ? (
        // Show 5 skeleton loaders while loading
        <Skeleton count={5} />
      ) : (
        <List gifs={gifs} onSave={toggleSaveGif} />
      )}
      {/* Only show "Show More" button when there are GIFs loaded, and it's not a search */}
      {!loading && gifs.length > 0 && (
        <button className="show-more" onClick={loadMore}>
          Show More
        </button>
      )}
      <Link to="/saved" style={{ marginTop: "20px", display: "block" }}>
        View Saved GIFs
      </Link>
    </>
  );
};

export default Home;
