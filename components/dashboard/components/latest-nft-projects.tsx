import React from 'react';
import Image from 'next/image';

function LatestNftProjects() {
  const sampleImages = [
    'https://randomuser.me/api/portraits/women/50.jpg',
    'https://randomuser.me/api/portraits/women/12.jpg',
    'https://randomuser.me/api/portraits/women/13.jpg',
    'https://randomuser.me/api/portraits/women/14.jpg',
    'https://randomuser.me/api/portraits/women/15.jpg',
  ];
  return (
    <div className='flex flex-col'>
      <h1 className='pl-6 md:pl-16 text-xl font-bold'>Latest NFT Projects</h1>
      <div className='md:pl-16 px-6 w-auto overflow-hidden flex flex-wrap gap-2 mt-4 items-center'>
        {sampleImages.map((image) => (
          <div
            key={image}
            className='flex p-[0.1rem] border-2 border-blue-400 rounded-full cursor-pointer'
          >
            <Image
              src={image}
              alt='avatar'
              width={54}
              height={54}
              layout='fixed'
              className='rounded-full'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestNftProjects;
