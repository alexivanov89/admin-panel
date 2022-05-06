import { useCallback, useEffect, useState } from 'react';
import { Button, Form, InputNumber, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ListEntities } from '../../components/ListEntities';
import { Modal } from '../../components/UI/Modal';
import { DropdownIcon, NextIcon, PrevIcon } from '../../assets/icon';
import { fetchRateAsync, fetchRateTypeAsync } from '../../store/slices/tableSlice';
import { getRequestParams } from '../../utils/getRequestParams';
import { tableService } from '../../services/tableService';
import styles from './ListRates.module.scss';

const ListRates = () => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const {
    rate,
    rateType: { rateTypes },
  } = useSelector(({ table }) => table);
  const { rates, loading, fields } = rate;
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
        tableService.postRate(values);
        form.resetFields();
      })
      .then(() => {
        dispatch(fetchRateAsync());
        setIsModalVisible(false);
      })
      .catch(() => {});
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const initialState = [
    {
      name: ['rateType'],
      value: null,
    },
  ];

  const [fieldsForm, setFields] = useState(initialState);

  const options = rateTypes;

  useEffect(() => {
    dispatch(fetchRateAsync());
    dispatch(fetchRateTypeAsync());
  }, []);

  const dataSource = rates.map((item) => ({ ...item, key: item.id }));

  const columns = fields.map((field) => {
    switch (field) {
      case 'price':
        return {
          title: 'Цена',
          dataIndex: field,
          key: field,
          editable: true,
          width: '150px',
          render: (field) => (field ? <>{field}</> : null),
        };

      case 'rateTypeId':
        return {
          title: 'Тип тарифа',
          dataIndex: field,
          key: field,
          editable: true,
          width: '150px',
          render: (field) => (field ? <>{`${field?.name} (${field?.unit})`}</> : null),
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

  const filters = (
    <Form.Item name="rateType" style={{ margin: '0px 0px 0px 2px' }}>
      <Select
        showSearch
        placeholder="Тип тарифа"
        optionFilterProp="children"
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
        suffixIcon={<DropdownIcon />}
        className={styles.selectFilterRate}
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
    dispatch(fetchRateAsync());
  }, []);

  const onApply = useCallback(() => {
    dispatch(fetchRateAsync(getRequestParams(fieldsForm)));
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
    await tableService.putRateById(id, body);
    dispatch(fetchRateAsync());
  };

  const onDelete = async (id) => {
    await tableService.deleteRateById(id);
    dispatch(fetchRateAsync());
  };

  return (
    <>
      <ListEntities
        title="Список тарифов"
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
        title="Создать тариф"
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          name="formCreateEntitie"
          initialValues={{
            price: null,
          }}
        >
          <Form.Item
            name="price"
            label="Цена"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите цену!',
              },
            ]}
          >
            <InputNumber placeholder="Введите цену" className={styles.inputNumber} />
          </Form.Item>
          <Form.Item name="rateTypeId" label="Тип тарифа">
            <Select
              showSearch
              placeholder="Тип тарифа"
              optionFilterProp="children"
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }
              suffixIcon={<DropdownIcon />}
              className={styles.selectCreateRate}
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

export default ListRates;
