import React from 'react';
import ParentLayout from '../components/layout/parent-layout';
// import PostItem from './components/posts';

function Dashboard() {
  return (
    <ParentLayout>
      <div className='flex flex-col h-screen py-10'>
        {/* <LatestNftProjects /> */}
        {/* <PostItem /> */}
        <div className='flex items-center md:h-screen justify-center text-3xl md:text-4xl'>
          <div>🚧 Under development</div>
        </div>
      </div>
    </ParentLayout>
  );
}

export default Dashboard;
