import { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ListEntities } from '../../components/ListEntities';
import { Modal } from '../../components/UI/Modal';
import { DropdownIcon, NextIcon, PrevIcon } from '../../assets/icon';
import { fetchCityAsync, fetchPointAsync } from '../../store/slices/tableSlice';
import { getRequestParams } from '../../utils/getRequestParams';
import { tableService } from '../../services/tableService';
import styles from './ListPoints.module.scss';

const ListPoints = () => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const {
    point,
    city: { cities },
  } = useSelector(({ table }) => table);
  const { points, loading, fields } = point;
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
        tableService.postPoint(values);
        form.resetFields();
      })
      .then(() => {
        dispatch(fetchPointAsync());
        setIsModalVisible(false);
      })
      .catch(() => {});
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const initialState = [
    {
      name: ['city'],
      value: null,
    },
  ];

  const [fieldsForm, setFields] = useState(initialState);

  const options = cities;

  useEffect(() => {
    dispatch(fetchPointAsync());
    dispatch(fetchCityAsync());
  }, []);

  const dataSource = points.map((item) => ({ ...item, key: item.id }));

  const columns = fields.map((field) => {
    switch (field) {
      case 'address':
        return {
          title: 'Адрес',
          dataIndex: field,
          key: field,
          editable: true,
          width: '200px',
        };

      case 'cityId':
        return {
          title: 'Город',
          dataIndex: field,
          key: field,
          editable: true,
          width: '150px',
          render: (field) => <>{field?.name}</>,
        };

      case 'name':
        return {
          title: 'Название пункта',
          dataIndex: field,
          key: field,
          editable: true,
          width: '200px',
        };

      default:
        return {
          title: field,
          dataIndex: field,
          key: field,
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

  const filters = (
    <Form.Item name="city" style={{ margin: '0px 0px 0px 2px' }}>
      <Select
        showSearch
        placeholder="Город"
        optionFilterProp="children"
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
        suffixIcon={<DropdownIcon />}
        className={styles.select}
      >
        {options?.length > 0 &&
          options.map((option) => (
            <Option value={option?.id} key={option?.id}>
              {option?.name}
            </Option>
          ))}
      </Select>
    </Form.Item>
  );

  const onReset = useCallback(() => {
    setFields(initialState);
    dispatch(fetchPointAsync());
  }, []);

  const onApply = useCallback(() => {
    dispatch(fetchPointAsync(getRequestParams(fieldsForm)));
  }, [fieldsForm]);

  const buttons = (
    <>
      <Form.Item style={{ margin: 0 }}>
        <Button className={styles.addBtn} onClick={showModal}>
          Создать
        </Button>
      </Form.Item>
      <Form.Item style={{ margin: 0 }}>
        <Button className={styles.resetBtn} onClick={onReset}>
          Сбросить
        </Button>
      </Form.Item>
      <Form.Item style={{ margin: 0 }}>
        <Button type="primary" htmlType="submit" className={styles.filterBtn} onClick={onApply}>
          Применить
        </Button>
      </Form.Item>
    </>
  );

  const onSave = async (id, body) => {
    await tableService.putPointById(id, body);
    dispatch(fetchPointAsync());
  };

  const onDelete = async (id) => {
    await tableService.deletePointById(id);
    dispatch(fetchPointAsync());
  };

  return (
    <>
      <ListEntities
        title="Список пунктов"
        form={{
          fields: fieldsForm,
          onChange: (newFields) => {
            setFields(newFields);
          },
          filters: filters,
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
          scroll: { x: 550 },
          onSave: onSave,
          onDelete: onDelete,
        }}
        isEditable={true}
      />
      <Modal
        title="Создать пункт выдачи"
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
            address: null,
          }}
        >
          <Form.Item
            name="name"
            label="Название"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите имя!',
              },
            ]}
          >
            <Input placeholder="Введите имя" className={styles.input} />
          </Form.Item>

          <Form.Item
            name="address"
            label="Адрес"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите адрес!',
              },
            ]}
          >
            <Input placeholder="Введите адрес" className={styles.input} />
          </Form.Item>

          <Form.Item name="cityId" label="Город">
            <Select
              showSearch
              placeholder="Город"
              optionFilterProp="children"
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }
              suffixIcon={<DropdownIcon />}
              className={styles.selectCreatePoint}
            >
              {options?.length > 0 &&
                options.map((option) => (
                  <Option value={option?.id} key={option?.id}>
                    {option?.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ListPoints;
