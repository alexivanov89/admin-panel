import { lazy } from 'react';

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));

export const routePaths = {
  loginPage: '/',
  mainPage: '/admin',
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
  { path: routePaths.mainPage, exact: false, component: MainPage, label: 'Главная' },
];
