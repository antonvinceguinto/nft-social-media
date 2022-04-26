import React from 'react';
import ParentLayout from '../components/layout/parent-layout';
// import PostItem from './components/posts';

function Dashboard() {
  return (
    <ParentLayout>
      <div className='flex flex-col w-screen md:overflow-auto py-10'>
        {/* <LatestNftProjects /> */}
        {/* <PostItem /> */}
        <div className='flex items-center md:h-screen justify-center text-3xl md:text-4xl'>
          🚧 Under development
        </div>
      </div>
    </ParentLayout>
  );
}

export default Dashboard;
