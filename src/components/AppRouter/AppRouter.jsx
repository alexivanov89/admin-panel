import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { privateRoutes, publicRoutes, routePaths } from '../../router/routes';

const AppRouter = () => {
  const { isAuth } = useSelector(({ auth }) => auth);

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
      ))}
      <Redirect to={routePaths.tablePage} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
      ))}
      <Redirect to={routePaths.loginPage} />
    </Switch>
  );
};

export default AppRouter;
