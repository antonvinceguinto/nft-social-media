import React from 'react';
import Sidebar from '../sidebar';

function ParentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen bg-white'>
      <div className='flex flex-col relative md:flex-row md:overflow-hidden'>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default ParentLayout;
