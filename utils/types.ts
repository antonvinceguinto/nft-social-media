/* =================== NAVIGATION TYPES ==================== */
export type NavLabel =
  | 'Dashboard'
  | 'Popular'
  | 'Discover'
  | 'News'
  | 'Profile'
  | 'Settings';

export interface NavigationProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  isBurgerOpen: boolean;
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavItemProps {
  label: NavLabel;
  onClick: () => void;
}

/* =================== NEWS TYPES ==================== */

export interface Headlines {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface Source {
  id: string;
  name: string;
}
