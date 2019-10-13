import React from 'react';

import { Head } from 'next';
import { Provider } from 'react-redux';

import store from './index/store';

import Button from './index/components/button';

export default () => (
  <div>
    <Head>
      <title>{'title'}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <Provider store={store}>
      <Button />
    </Provider>
  </div>
);