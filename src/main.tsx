import '@/app/globals.css';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import AppRouter from './app/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="auto">
      <Notifications />
      <AppRouter />
    </MantineProvider>
  </StrictMode>
);
