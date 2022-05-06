import { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ListEntities } from '../../components/ListEntities';
import { Modal } from '../../components/UI/Modal';
import { NextIcon, PrevIcon } from '../../assets/icon';
import { fetchCategoryAsync } from '../../store/slices/tableSlice';
import { tableService } from '../../services/tableService';
import styles from './ListCategories.module.scss';

const ListCategories = () => {
  const dispatch = useDispatch();
  const { category } = useSelector(({ table }) => table);
  const { categories, loading, fields } = category;
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
        tableService.postCategory(values);
      })
      .then(() => {
        dispatch(fetchCategoryAsync());
        setIsModalVisible(false);
      })
      .catch(() => {});
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(fetchCategoryAsync());
  }, []);

  const dataSource = categories.map((item) => ({ ...item, key: item.id }));

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

      case 'description':
        return {
          title: 'Описание',
          dataIndex: field,
          key: field,
          editable: true,
          width: '250px',
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
    await tableService.putCategoryById(id, body);
    dispatch(fetchCategoryAsync());
  };

  const onDelete = async (id) => {
    await tableService.deleteCategoryById(id);
    dispatch(fetchCategoryAsync());
  };

  return (
    <>
      <ListEntities
        title="Список категорий"
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
        title="Создать категорию"
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
            name="description"
            label="Описание"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите описание!',
              },
            ]}
          >
            <Input placeholder="Введите описание" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ListCategories;
