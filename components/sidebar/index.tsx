import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationContext } from '../../services/contexts/navigation-context';
import { NavigationProps } from '../../utils/types';
import NavItem from './nav-item';

function Sidebar() {
  const { setCurrentIndex, isBurgerOpen, setIsBurgerOpen } =
    useContext<NavigationProps>(NavigationContext);

  const navItemHandler = (index: number) => {
    setCurrentIndex(index);
    setIsBurgerOpen(false);
  };

  const logo = (size: number = 68) => (
    <Link href='/dashboard' passHref>
      <div className='m-auto justify-center items-center md:flex md:flex-col mb-0 md:mb-10 mt-0 md:mt-5 cursor-pointer'>
        <div className='flex'>
          <Image
            priority
            src='/assets/images/logo.png'
            alt='logo'
            width={size}
            height={size}
            layout='fixed'
            className='pointer-events-none cursor-pointer'
          />
        </div>
        <div className='text-2xl mt-0 md:mt-1 font-extrabold hidden md:flex font-sans'>
          BullishPH
        </div>
      </div>
    </Link>
  );

  const mobileNavigation = () => (
    <div
      className={`${
        isBurgerOpen ? 'opacity-100 pt-4' : 'opacity-100 '
      } transition-all duration-100`}
    >
      <div
        className={`${
          isBurgerOpen ? 'visible' : 'hidden md:flex'
        } flex flex-col gap-4`}
      >
        <Link href='/dashboard' passHref>
          <div>
            <NavItem label='Dashboard' onClick={() => navItemHandler(1)} />
          </div>
        </Link>
        <NavItem label='Popular' onClick={() => navItemHandler(2)} />
        <NavItem label='Discover' onClick={() => navItemHandler(3)} />
        <Link href='/news' passHref>
          <div>
            <NavItem label='News' onClick={() => navItemHandler(4)} />
          </div>
        </Link>
        <div className='hidden md:visible' />
        <NavItem label='Profile' onClick={() => navItemHandler(5)} />
        <NavItem label='Settings' onClick={() => navItemHandler(6)} />
      </div>
    </div>
  );

  return (
    <aside
      className='py-3 flex-col items-center bg-white shadow-lg
	  w-screen md:w-[15rem] md:min-h-screen md:overflow-hidden'
    >
      <div className='hidden md:flex'>{logo()}</div>
      <div className='md:flex px-1 md:px-0 items-center md:justify-center md:overflow-auto'>
        <div className='flex flex-col'>
          <div className='flex w-full items-center justify-between md:hidden px-3'>
            <div className='md:hidden '>{logo(37)}</div>
            <button
              type='button'
              className={`${
                isBurgerOpen ? 'text-lg bg-red-100' : 'text-xl bg-blue-100'
              } font-bold py-1 px-4 rounded-md mx-2 transition-all flex items-center duration-200`}
              onClick={() => setIsBurgerOpen(!isBurgerOpen)}
            >
              {isBurgerOpen ? '✖' : '☰'}
            </button>
          </div>
          {mobileNavigation()}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
