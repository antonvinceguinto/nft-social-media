import React, { useContext } from 'react';
import Image from 'next/image';
import { NavigationContext } from '../../services/contexts/navigation-context';
import { NavigationProps } from '../../utils/types';
import NavItem from './nav-item';

function Sidebar() {
  const { setCurrentIndex } = useContext<NavigationProps>(NavigationContext);

  return (
    <aside
      className='py-3 flex-col items-center bg-white drop-shadow-lg
	  w-screen md:w-64 h-auto md:min-h-screen sticky md:relative md:left-0 md:overflow-auto'
    >
      <h1 className='font-bold m-auto justify-center hidden md:items-center md:flex md:flex-col text-2xl mb-10 mt-5'>
        <Image
          src='/assets/images/logo.png'
          alt='avatar'
          width={68}
          height={68}
          layout='fixed'
          className='pointer-events-none'
        />
        <span className='mt-1'>Bullish PH</span>
      </h1>
      <div className='px-5 md:px-0 items-center flex md:justify-center overflow-x-scroll md:overflow-auto'>
        <div className='flex flex-row md:flex-col gap-4'>
          <NavItem label='Dashboard' onClick={() => setCurrentIndex(1)} />
          <NavItem label='Popular' onClick={() => setCurrentIndex(2)} />
          <NavItem label='Discover' onClick={() => setCurrentIndex(3)} />
          <NavItem label='News' onClick={() => setCurrentIndex(4)} />
          <div />
          <NavItem label='Profile' onClick={() => setCurrentIndex(5)} />
          <NavItem label='Settings' onClick={() => setCurrentIndex(6)} />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
