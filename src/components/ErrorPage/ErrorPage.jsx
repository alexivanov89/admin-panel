import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setIsError, setStatusCode } from '../../store/slices/errorSlice';
import { Result, Button } from 'antd';
import styles from './ErrorPage.module.scss';

const ErrorPage = ({ error, resetErrorBoundary }) => {
  const { statusCode } = useSelector(({ error }) => error);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = () => {
    dispatch(setIsError(false));
    dispatch(setStatusCode(null));
    resetErrorBoundary();
    history.goBack();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Result
        icon={<div className={styles.statusCode}>{statusCode}</div>}
        title="Что-то пошло не так"
        subTitle="Попробуйте перезагрузить страницу"
        extra={
          <Button onClick={onClick} className={styles.backBtn}>
            Назад
          </Button>
        }
        className={styles.result}
      />
    </div>
  );
};

export default ErrorPage;
