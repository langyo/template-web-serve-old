import React from 'react';

import Head from 'next/head';
import { Provider } from 'react-redux';

import store from '../configs/pages/index/store';
import Main from '../containers/pages/index/main';

export default () => (
  <div>
    <Head>
      <title>{'title'}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <Provider store={store('index')}>
      <Main />
    </Provider>
  </div>
);