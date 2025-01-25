// Type for the image object
export interface GifImage {
  url: string;
  width: string;
  height: string;
}

// Type for the GIF object
export interface Gif {
  type: string;
  id: string;
  url: string;
  title: string;
  images: {
    original: GifImage;
    fixed_height: GifImage;
    [key: string]: GifImage;
  };
  username: string;
}

// Type for the response data (from API)
export interface GiphyApiResponse {
  data: Gif[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
}
