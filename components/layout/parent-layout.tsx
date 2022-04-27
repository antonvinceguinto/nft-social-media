import React from 'react';
import Sidebar from '../sidebar';

function ParentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen bg-white'>
      <div className='flex flex-col overflow-hidden md:flex-row md:overflow-hidden'>
        <div>
          <Sidebar />
        </div>
        {children}
      </div>
    </div>
  );
}

export default ParentLayout;
