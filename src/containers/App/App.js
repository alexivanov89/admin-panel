import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { AppRouter } from '../AppRouter';
import { store } from '../../store';

const App = () => {
  return (
    <Provider store={store}>
      <Router basename="/admin-panel">
        <Suspense fallback={<div>Загрузка...</div>}>
          <ErrorBoundary fallback={<div>Что-то пошло не так...</div>}>
            <AppRouter />
          </ErrorBoundary>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
