import axios from "axios";
import { GiphyApiResponse } from "../types/giphy";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const GIPHY_API_URL = "https://api.giphy.com/v1/gifs";

export const getSearchedGifs = async (
  query: string,
  page: number,
  perPage: number
): Promise<GiphyApiResponse> => {
  const offset = (page - 1) * perPage;
  try {
    const response = await axios.get<GiphyApiResponse>(
      `${GIPHY_API_URL}/search`,
      {
        params: {
          api_key: API_KEY,
          q: query,
          limit: 25,
          offset,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error searching for GIFs with query "${query}":`, error);
    throw error;
  }
};
