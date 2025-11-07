import { AppLayout } from '@app/layout';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
const Catalog = lazy(() => import('@/pages/Catalog'));
const Product = lazy(() => import('@/pages/Product'));
const Cart = lazy(() => import('@/pages/Cart'));
const About = lazy(() => import('@/pages/About'));

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
