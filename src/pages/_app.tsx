import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';
import { store } from 'src/redux/store';
import 'src/styles/globals.scss';
import PageWrapper from 'src/wrappers/PageWrapper';

// optional - if you want to mock your api calls without having the api active
if (process.env.NODE_ENV === 'development') {
  require('../mocks/msw.ts');
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ParallaxProvider>
      <Provider store={store}>
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </Provider>
    </ParallaxProvider>
  );
};

export default App;
