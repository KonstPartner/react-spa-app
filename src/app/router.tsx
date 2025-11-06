import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './layout/AppLayout';

const Home = lazy(() => import('@/pages/Home'));
const Product = lazy(() => import('@/pages/Product'));

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'products/:id', element: <Product /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
