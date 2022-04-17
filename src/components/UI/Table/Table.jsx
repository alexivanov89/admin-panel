import { Table as AntdTable } from 'antd';
import styles from './Table.module.scss';

const Table = (props) => {
  return <AntdTable className={styles.table} {...props} />;
};

export default Table;
