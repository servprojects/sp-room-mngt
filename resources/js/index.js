import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './ReactApp';
import { Provider } from 'react-redux'
import store from './redux/store'
import { MantineProvider } from '@mantine/core';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Provider store={store()}>
   <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        breakpoints: {
          xs: '30em',
          sm: '48em',
          md: '64em',
          lg: '74em',
          xl: '90em',
        },
      }}
    >
      <App />
    </MantineProvider>
  </Provider>,
);
