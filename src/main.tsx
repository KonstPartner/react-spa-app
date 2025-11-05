import '@/app/globals.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import AppRouter from './app/router';
import { theme } from './app/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Notifications />
      <AppRouter />
    </MantineProvider>
  </StrictMode>
);
