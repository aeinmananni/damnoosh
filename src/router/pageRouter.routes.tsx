import { createBrowserRouter, type RouteObject } from 'react-router';
import { LandingPage } from '../pages';
const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
