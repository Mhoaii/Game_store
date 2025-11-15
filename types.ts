
export interface Game {
  id: string;
  title: string;
  developer: string;
  publisher: string;
  releaseDate: string;
  price: string;
  description: string;
  longDescription: string;
  genres: string[];
  platforms: string[];
  rating: number;
  reviewCount: number;
  heroImage: string;
  coverImage: string;
  gallery: string[];
  trailerUrl?: string; 
  isFeatured?: boolean;
  isTrending?: boolean;
}

export interface Review {
  id: string;
  gameId: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
}

export interface User {
  username: string;
  avatar: string;
  memberSince: string;
  bio: string;
  library: string[]; // array of game IDs
  wishlist: string[]; // array of game IDs
  reviews: Review[];
}
