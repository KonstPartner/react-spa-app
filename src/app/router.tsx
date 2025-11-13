import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppLayout } from '@app/layout';

const Home = lazy(() => import('@pages/Home'));
const Catalog = lazy(() => import('@pages/Catalog'));
const Product = lazy(() => import('@pages/Product'));
const Cart = lazy(() => import('@pages/Cart'));
const About = lazy(() => import('@pages/About'));
const NotFound = lazy(() => import('@pages/NotFound'));

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'products', element: <Catalog /> },
        { path: 'products/:id', element: <Product /> },
        { path: 'cart', element: <Cart /> },
        { path: 'about', element: <About /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
