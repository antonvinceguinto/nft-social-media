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
}

export interface NavItemProps {
  label: NavLabel;
  onClick: () => void;
}

/* =================== ... TYPES ==================== */
