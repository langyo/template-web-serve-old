import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';

import Main from '../containers/views/main';
import store from '../configs/store';

export default () => (
  <div>
    <Head>
      <title>{'title'}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <Provider store={store}>
      <Main />
    </Provider>
  </div>
)