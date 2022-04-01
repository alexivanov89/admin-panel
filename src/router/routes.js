import { lazy } from 'react';

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const TablePage = lazy(() => import('../pages/TablePage/TablePage'));

export const routePaths = {
  loginPage: '/',
  tablePage: '/admin',
};

export const publicRoutes = [
  {
    path: routePaths.loginPage,
    exact: true,
    component: LoginPage,
    label: 'Логин',
  },
];

export const privateRoutes = [
  { path: routePaths.tablePage, exact: true, component: TablePage, label: 'Главная' },
];
