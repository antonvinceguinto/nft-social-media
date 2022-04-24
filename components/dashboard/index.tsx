import React from 'react';
import PostItem from './components/posts';

function Dashboard() {
  return (
    <div className='flex flex-col w-screen md:overflow-auto py-10'>
      {/* <LatestNftProjects /> */}
      <PostItem />
    </div>
  );
}

export default Dashboard;
