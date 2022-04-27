import { Spin } from 'antd';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.spin}>
      <Spin tip="Загрузка..." />
    </div>
  );
};

export default Spinner;
