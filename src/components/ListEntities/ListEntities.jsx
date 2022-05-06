import { Card, Col, Form, Row, Space, Typography } from 'antd';
import { EditableTable } from '../UI/EditableTable';
import { Table } from '../UI/Table';
import styles from './ListEntities.module.scss';

const ListEntities = (props) => {
  const { Title } = Typography;
  const { title, form, tableProps, isEditable = false } = props;
  const { onChange, fields, filters, buttons } = form;

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
            >
              <Col xs={12} sm={14}>
                <Space size={[15, 15]} wrap style={{ width: '100%' }}>
                  {filters}
                </Space>
              </Col>
              <Col xs={12} sm={10} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Space size={[15, 15]} wrap>
                  {buttons}
                </Space>
              </Col>
            </Form>
          </Row>
        }
        bordered={false}
        className={styles.card}
        bodyStyle={{ padding: '1px 0px 0px' }}
      >
        {isEditable ? <EditableTable {...tableProps} /> : <Table {...tableProps} />}
      </Card>
    </>
  );
};

export default ListEntities;
