import { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ListEntities } from '../../components/ListEntities';
import { Modal } from '../../components/UI/Modal';
import { NextIcon, PrevIcon } from '../../assets/icon';
import { fetchOrderStatusAsync } from '../../store/slices/tableSlice';
import { tableService } from '../../services/tableService';
import styles from './ListOrderStatus.module.scss';

const ListOrderStatus = () => {
  const dispatch = useDispatch();
  const { orderStatus } = useSelector(({ table }) => table);
  const { values, loading, count, fields } = orderStatus;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        tableService.postOrderStatus(values);
      })
      .then(() => {
        dispatch(fetchOrderStatusAsync());
        setIsModalVisible(false);
      })
      .catch((info) => {});
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(fetchOrderStatusAsync());
  }, []);

  const dataSource = values.map((item) => ({ ...item, key: item.id }));

  const columns = fields.map((field) => {
    switch (field) {
      case 'name':
        return {
          title: 'Название',
          dataIndex: field,
          key: field,
          editable: true,
          width: '150px',
          render: (field) => (field ? <>{field}</> : null),
        };

      default:
        return {
          title: field,
          dataIndex: field,
          key: field,
          render: (field) => (field ? <>{field}</> : null),
        };
    }
  });

  const onChange = (page) => {
    setPage(page);
  };

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <Button icon={<PrevIcon />} />;
    }
    if (type === 'next') {
      return <Button icon={<NextIcon />} />;
    }
    return originalElement;
  };

  const buttons = (
    <Form.Item style={{ margin: 0 }}>
      <Button className={styles.addBtn} onClick={showModal}>
        Создать
      </Button>
    </Form.Item>
  );

  const onSave = async (id, body) => {
    await tableService.putOrderStatusById(id, body);
    dispatch(fetchOrderStatusAsync());
  };

  const onDelete = async (id) => {
    await tableService.deleteOrderStatusById(id);
    dispatch(fetchOrderStatusAsync());
  };

  return (
    <>
      <ListEntities
        title="Список статусов заказа"
        form={{
          fields: null,
          onChange: null,
          filters: null,
          buttons: buttons,
        }}
        tableProps={{
          pagination: {
            position: ['bottomCenter'],
            current: page,
            pageSize: limit,
            onChange: onChange,
            itemRender: itemRender,
            showSizeChanger: false,
          },
          showHeader: true,
          columns: columns,
          dataSource: dataSource,
          loading: loading,
          scroll: { x: 200 },
          onSave: onSave,
          onDelete: onDelete,
        }}
        isEditable={true}
      />
      <Modal
        title="Создать статус заказа"
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          name="formCreateEntitie"
          initialValues={{
            name: null,
          }}
        >
          <Form.Item
            name="name"
            label="Статус заказа"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите статус заказа!',
              },
            ]}
          >
            <Input placeholder="Введите статус заказа" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ListOrderStatus;
