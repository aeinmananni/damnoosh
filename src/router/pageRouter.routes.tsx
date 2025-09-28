import { createBrowserRouter, type RouteObject } from 'react-router';
import { LandingPage, AboutUsPage, BlogPage, ContactUsPage, HomePage } from '../pages';
const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'contact-us',
        element: <ContactUsPage />,
      },
      {
        path: 'about-us',
        element: <AboutUsPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
