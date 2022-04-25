import React, { useState } from 'react';
import Image from 'next/image';

function PostContainer({ imgUrl }: { imgUrl: string }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSponsored] = useState(false);

  const likeImageUrl = isLiked
    ? '/assets/images/post-interaction-icons/like-active.png'
    : '/assets/images/post-interaction-icons/like-inactive.png';

  return (
    <div className='py-5 px-3 flex flex-col rounded-3xl drop-shadow-lg bg-white'>
      <div className='flex mb-5 px-5'>
        <div className='flex items-center'>
          <Image
            src='https://randomuser.me/api/portraits/women/12.jpg'
            alt='avatar'
            width={54}
            height={54}
            layout='fixed'
            className='rounded-full'
          />
        </div>
        <div className='flex justify-between items-center w-full'>
          <div className='flex flex-col items-start pl-4'>
            <div className='font-bold text-lg m-0'>Anton Guinto</div>
            <div className='text-sm text-gray-500'>@antonguinto</div>
          </div>
          <div className='text-gray-500'>1hr ago</div>
        </div>
      </div>

      <div className='flex items-center justify-center w-full h-[30rem] relative'>
        <Image
          priority
          src={imgUrl}
          alt='avatar'
          layout='fill'
          objectFit='cover'
          blurDataURL={imgUrl}
          placeholder='blur'
          className='rounded-3xl bg-slate-50'
        />
      </div>
      <div className='flex flex-col px-4 pt-4'>
        <div className='flex items-center'>
          <button
            type='button'
            className='flex items-center'
            onClick={() => setIsLiked(!isLiked)}
          >
            <Image
              src={likeImageUrl}
              alt='like icon'
              width={28}
              height={28}
              layout='fixed'
              className='cursor-pointer'
            />
          </button>
          <div className='pl-3'>
            <span className='font-bold'>540 people</span> likes this
          </div>
        </div>
        <div className='pt-2'>
          ❝ Minting is now open. Proceed to the link given please give us 5-star
          rating. Thank you! Minting is now open. Proceed to the link given
          please give us 5-star rating.
        </div>
        <div className='pt-2 text-gray-500 font-bold text-sm'>
          Wed, April 24 2022
        </div>
        {isSponsored ? (
          <div className='mt-3 flex cursor-pointer'>
            <div className='bg-gray-200 px-2 py-1 text-gray-600 text-sm rounded'>
              Sponsored↗
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

function PostItem() {
  return (
    <div className='grid md:grid-cols-2 2xl:grid-cols-3 md:flex-row flex-wrap px-4 md:px-16 mt-10 gap-10'>
      <PostContainer imgUrl='https://images.wsj.net/im-472927?width=1920' />
      <PostContainer imgUrl='https://techcrunch.com/wp-content/uploads/2021/12/FC3_itGXEAA6z5g.jpg?w=730&crop=1' />
      <PostContainer imgUrl='https://larvalabs.com/cryptopunks/cryptopunk5116.png' />
    </div>
  );
}

export default PostItem;
