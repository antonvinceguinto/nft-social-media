import React from 'react';
import Sidebar from '../sidebar';

function ParentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col md:flex-row md:h-screen md:overflow-auto bg-white'>
      <div className='sticky top-0 z-10 md:flex'>
        <Sidebar />
      </div>
      <div className='w-full overflow-auto'>{children}</div>
    </div>
  );
}

export default ParentLayout;
