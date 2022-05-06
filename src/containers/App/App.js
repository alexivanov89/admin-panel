import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { AppRouter } from '../AppRouter';
import { store } from '../../store';
import { Spinner } from '../../components/UI/Spinner';

const App = () => {
  return (
    <Provider store={store}>
      <Router basename="/admin-panel">
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary fallback={<div>Что-то пошло не так...</div>}>
            <AppRouter />
          </ErrorBoundary>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
