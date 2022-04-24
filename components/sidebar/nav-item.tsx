import React, { useContext } from 'react';
import Image from 'next/image';
import { NavigationContext } from '../../services/contexts/navigation-context';
import { NavigationProps, NavItemProps } from '../../utils/types';

function NavItem({ label, onClick }: NavItemProps) {
  const { currentIndex } = useContext<NavigationProps>(NavigationContext);

  let currNavLabel = 'Dashboard';
  let imageUrl = '/assets/images/navigation-icons/dashboard.png';

  if (label === 'Popular')
    imageUrl = '/assets/images/navigation-icons/popular.png';
  if (label === 'Discover')
    imageUrl = '/assets/images/navigation-icons/discover.png';
  if (label === 'News') imageUrl = '/assets/images/navigation-icons/news.png';
  if (label === 'Profile')
    imageUrl = '/assets/images/navigation-icons/profile.png';
  if (label === 'Settings')
    imageUrl = '/assets/images/navigation-icons/settings.png';

  if (currentIndex === 2) currNavLabel = 'Popular';
  if (currentIndex === 3) currNavLabel = 'Discover';
  if (currentIndex === 4) currNavLabel = 'News';
  if (currentIndex === 5) currNavLabel = 'Profile';
  if (currentIndex === 6) currNavLabel = 'Settings';

  return (
    <button
      type='button'
      className={`${
        currNavLabel === label ? 'text-blue-500' : 'text-gray-400'
      } px-4 py-3 cursor-pointer w-full rounded-lg hover:bg-blue-100 hover:bg-opacity-70`}
      onClick={onClick}
    >
      <div className='flex items-center'>
        <div className='p-1 items-center flex mr-0 md:mr-5'>
          <Image
            src={imageUrl}
            alt={currNavLabel}
            width={15}
            height={15}
            layout='fixed'
          />
        </div>
        <div>{label}</div>
      </div>
    </button>
  );
}

export default NavItem;
