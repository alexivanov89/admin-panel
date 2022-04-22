import { Button, Card, Col, Form, Row, Space, Typography } from 'antd';
import { Table } from '../UI/Table';
import styles from './ListEntities.module.scss';

const ListCars = (props) => {
  const { Title } = Typography;
  const { title, form, tableProps } = props;
  const { onChange, fields, filters, onReset, onApply } = form;

  return (
    <>
      <Title className={styles.title}>{title}</Title>
      <Card
        title={
          <Row>
            <Form
              name="filters"
              layout="inline"
              style={{ width: '100%' }}
              fields={fields}
              onFieldsChange={(_, allFields) => {
                onChange(allFields);
              }}
              requiredMark="optional"
              onFinish={onApply}
            >
              <Col xs={16} sm={17}>
                <Space size={[15, 15]} wrap style={{ width: '100%' }}>
                  {filters}
                </Space>
              </Col>
              <Col xs={8} sm={7} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Space size={[15, 15]} wrap>
                  <Form.Item style={{ margin: 0 }}>
                    <Button className={styles.resetBtn} onClick={onReset}>
                      Сбросить
                    </Button>
                  </Form.Item>
                  <Form.Item style={{ margin: 0 }}>
                    <Button type="primary" htmlType="submit" className={styles.filterBtn}>
                      Применить
                    </Button>
                  </Form.Item>
                </Space>
              </Col>
            </Form>
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
