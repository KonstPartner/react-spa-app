import '@app/globals.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { StrictMode } from 'react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { AppRouter, store, theme } from '@app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <Notifications />
        <AppRouter />
      </MantineProvider>
    </Provider>
  </StrictMode>
);
