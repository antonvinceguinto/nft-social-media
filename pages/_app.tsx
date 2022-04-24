import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavigationProvider from '../services/contexts/navigation-context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigationProvider>
      <Component {...pageProps} />
    </NavigationProvider>
  );
}

export default MyApp;
