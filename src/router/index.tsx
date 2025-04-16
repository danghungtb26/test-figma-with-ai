import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/main-layout';
import Dashboard from '../pages/dashboard';
import Users from '../pages/users';
import NotFound from '../pages/not-found';

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
