import React from 'react';
import { createRoot } from 'react-dom';
import App from './ReactApp';
import { Provider } from 'react-redux';
import store from './redux/store';
import { MantineProvider, Text } from '@mantine/core';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Provider store={store()}>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </Provider>
);
