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

/* =================== ... TYPES ==================== */
