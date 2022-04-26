import React, { useEffect } from 'react';
import Head from 'next/head';
import TimeAgo from 'javascript-time-ago';
import Dashboard from './dashboard';

function Home() {
  useEffect(() => {
    TimeAgo.setDefaultLocale('en');

    return () => {};
  }, []);

  return (
    <div>
      <Head>
        <title>Decentralized NFTs 🇵🇭</title>
        <meta name='description' content='Generated by Anton Guinto' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default Home;
