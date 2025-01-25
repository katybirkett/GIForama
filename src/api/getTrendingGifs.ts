import axios from "axios";
import { GiphyApiResponse } from "../types/giphy";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const GIPHY_API_URL = "https://api.giphy.com/v1/gifs";

export const getTrendingGifs = async (
  page: number,
  perPage: number
): Promise<GiphyApiResponse> => {
  // only load the gifs not already loaded
  const offset = (page - 1) * perPage;
  try {
    const response = await axios.get<GiphyApiResponse>(
      `${GIPHY_API_URL}/trending`,
      {
        params: {
          api_key: API_KEY,
          limit: perPage,
          offset,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    throw error;
  }
};
