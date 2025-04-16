import MainLayout from '@layouts/main-layout';
import Dashboard from '@pages/dashboard';
import NotFound from '@pages/not-found';
import Users from '@pages/users';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'users', element: <Users /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
