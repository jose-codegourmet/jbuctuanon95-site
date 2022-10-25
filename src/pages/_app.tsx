import type { AppProps } from 'next/app';
import React from 'react';
import 'src/styles/globals.scss';

// optional - if you want to mock your api calls without having the api active
if (process.env.NODE_ENV === 'development') {
  require('../mocks/msw.ts');
}

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
