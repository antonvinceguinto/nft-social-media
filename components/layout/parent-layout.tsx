import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Sidebar from '../sidebar';

function ParentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col md:flex-row md:h-screen md:overflow-auto bg-white'>
      <div className='sticky top-0 z-10 md:flex'>
        <Sidebar />
      </div>
      <div className='flex flex-col flex-1'>
        <nav className='flex flex-1 p-4 justify-end items-end bg-white bg-opacity-60'>
          <ConnectButton />
        </nav>
        <div className='w-full overflow-auto'>{children}</div>
      </div>
    </div>
  );
}

export default ParentLayout;
