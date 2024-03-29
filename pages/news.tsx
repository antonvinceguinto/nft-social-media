import Image from 'next/image';
import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import TimeAgo from 'javascript-time-ago';
import ParentLayout from '../components/layout/parent-layout';
import { Headlines, Article } from '../utils/types';

TimeAgo.addDefaultLocale(en);

function timeAgo({ article }: { article: Article }) {
  return article.publishedAt === null ? (
    <div />
  ) : (
    <div className='text-sm text-gray-500 pt-8 pb-1'>
      updated: <ReactTimeAgo date={article.publishedAt} locale='en-US' />{' '}
    </div>
  );
}

function NewsItem({ article }: { article: Article }) {
  const { content, description } = article;
  let newsDetails = '';

  if (content === null) newsDetails = description;
  if (description === null) newsDetails = content;
  if (description === null && content === null)
    return <div className='hidden' />;

  return (
    <div className='p-2 mt-2 hover:underline flex border-b-2'>
      <div className='flex flex-col truncate whitespace-pre-wrap'>
        <div className='text-blue-500 font-bold text-sm'>{article.author}</div>
        <a href={article.url} target='_blank' rel='noreferrer'>
          <div className='font-bold text-lg'>{article.title}</div>
          {newsDetails}
        </a>
        {timeAgo({ article })}
      </div>
    </div>
  );
}

function HeadlineItem({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target='_blank'
      rel='noreferrer'
      className='hover:underline'
    >
      <div className='grid lg:grid-cols-3 p-2 mt-2 cursor-pointer border-b-2'>
        <div className='w-full h-80 md:h-80 md:w-full lg:col-span-1 relative'>
          <Image
            priority
            src={article.urlToImage}
            alt='Article image'
            layout='fill'
            objectFit='cover'
            className='rounded hover:'
          />
        </div>
        <div className='flex flex-col justify-center md:pl-4 pt-2 lg:col-span-2'>
          <div className='font-bold text-2xl'>{article.title}</div>
          <div className='text-sm md:text-md pt-3 md:pt-5'>
            {article.description}
          </div>
          {timeAgo({ article })}
        </div>
      </div>
    </a>
  );
}

function News({ articles }: { articles: Article[] }) {
  return (
    <ParentLayout>
      {!articles ? (
        <>Loading...</>
      ) : (
        <div className='p-5 md:p-10 flex flex-col w-full'>
          <HeadlineItem article={articles[0]} />
          <div className='font-bold text-3xl md:text-4xl mt-8 mb-2'>
            Tech News
          </div>
          <div className='flex-col grid md:grid-cols-2 lg:grid-cols-3'>
            {articles.slice(1, articles.length).map((article) => (
              <NewsItem key={article.title} article={article} />
            ))}
          </div>
          <footer className='flex mt-10 items-center justify-center text-sm text-gray-500'>
            Powered by NewsAPI
          </footer>
        </div>
      )}
    </ParentLayout>
  );
}

export async function getServerSideProps() {
  const authorization = `Bearer ${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;

  const techologyRes = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch`,
    {
      headers: {
        Authorization: authorization,
      },
    }
  );
  const businessRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=ph&category=business`,
    {
      headers: {
        Authorization: authorization,
      },
    }
  );

  const techResults: Headlines = await techologyRes.json();
  const busResults: Headlines = await businessRes.json();

  const articles: Article[] = [...techResults.articles, ...busResults.articles];

  return { props: { articles } };
}

export default News;
