import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
import 'src/styles/globals.scss';

// optional - if you want to mock your api calls without having the api active
if (process.env.NODE_ENV === 'development') {
  require('../mocks/msw.ts');
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
