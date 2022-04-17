import { Button, Card, Col, Row, Space, Typography } from 'antd';
import { Table } from '../UI/Table';
import styles from './ListEntities.module.scss';

const ListCars = (props) => {
  const { Title } = Typography;
  const { title, filters, tableProps, onReset, onApply } = props;

  return (
    <>
      <Title className={styles.title}>{title}</Title>
      <Card
        title={
          <Row>
            <Col xs={16} sm={17}>
              <Space size={[15, 15]} wrap>
                {filters}
              </Space>
            </Col>
            <Col xs={8} sm={7} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Space size={[15, 15]} wrap>
                <Button className={styles.resetBtn} onClick={onReset}>
                  Reset
                </Button>
                <Button type="primary" className={styles.filterBtn} onClick={onApply}>
                  Apply
                </Button>
              </Space>
            </Col>
          </Row>
        }
        bordered={false}
        className={styles.card}
        bodyStyle={{ padding: '1px 0px 0px' }}
      >
        <Table {...tableProps} />
      </Card>
    </>
  );
};

export default ListCars;
