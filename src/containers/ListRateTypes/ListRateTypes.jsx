import { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ListEntities } from '../../components/ListEntities';
import { Modal } from '../../components/UI/Modal';
import { NextIcon, PrevIcon } from '../../assets/icon';
import { fetchRateTypeAsync } from '../../store/slices/tableSlice';
import { tableService } from '../../services/tableService';
import styles from './ListRateTypes.module.scss';

const ListRateTypes = () => {
  const dispatch = useDispatch();
  const { rateType } = useSelector(({ table }) => table);
  const { rateTypes, loading, fields } = rateType;
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
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
        tableService.postRateType(values);
      })
      .then(() => {
        dispatch(fetchRateTypeAsync());
        setIsModalVisible(false);
      })
      .catch((info) => {});
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(fetchRateTypeAsync());
  }, []);

  const dataSource = rateTypes.map((item) => ({ ...item, key: item.id }));

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

      case 'unit':
        return {
          title: 'Единица измерения',
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
    await tableService.putRateTypeById(id, body);
    dispatch(fetchRateTypeAsync());
  };

  const onDelete = async (id) => {
    await tableService.deleteRateTypeById(id);
    dispatch(fetchRateTypeAsync());
  };

  return (
    <>
      <ListEntities
        title="Список типов тарифа"
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
          scroll: { x: 350 },
          onSave: onSave,
          onDelete: onDelete,
        }}
        isEditable={true}
      />
      <Modal
        title="Создать тип тарифа"
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
            description: null,
          }}
        >
          <Form.Item
            name="name"
            label="Название"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите название!',
              },
            ]}
          >
            <Input placeholder="Введите название" />
          </Form.Item>
          <Form.Item
            name="unit"
            label="Ед.измерения"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите ед.измерения!',
              },
            ]}
          >
            <Input placeholder="Введите ед.измерения" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ListRateTypes;
