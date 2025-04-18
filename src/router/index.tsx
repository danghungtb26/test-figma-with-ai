import Dashboard2Layout from '@layouts/dashboard-2-layout';
import MainLayout from '@layouts/main-layout';
import Dashboard from '@pages/dashboard';
import Dashboard2 from '@pages/dashboard-2';
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
    ],
  },
  {
    path: '/dashboard-2',
    element: <Dashboard2Layout />,
    children: [{ index: true, element: <Dashboard2 /> }],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
