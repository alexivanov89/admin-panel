import { Table as AntdTable, Input, InputNumber, Popconfirm, Form, Typography, Select } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { DropdownIcon } from '../../../assets/icon';
import { setIsError, setStatusCode } from '../../../store/slices/errorSlice';
import styles from './EditableTable.module.scss';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const {
    rateType: { rateTypes },
    city: { cities },
  } = useSelector(({ table }) => table);
  const optionsRateType = rateTypes;
  const optionsCity = cities;

  const getInputNode = (type) => {
    switch (type) {
      case 'number':
        return <InputNumber />;
      case 'selectRateTypeId':
        return (
          <Select
            showSearch
            placeholder="Тип тарифа"
            optionFilterProp="children"
            filterSort={(optionA, optionB) =>
              optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
            suffixIcon={<DropdownIcon />}
            className={styles.select}
            optionLabelProp="label"
            allowClear
          >
            {optionsRateType?.length > 0 &&
              optionsRateType.map((option) => (
                <Select.Option value={option?.id} label={option?.name} key={option?.id}>
                  {option?.name}
                </Select.Option>
              ))}
          </Select>
        );
      case 'selectCityId':
        return (
          <Select
            showSearch
            placeholder="город"
            optionFilterProp="children"
            filterSort={(optionA, optionB) =>
              optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
            suffixIcon={<DropdownIcon />}
            className={styles.select}
            optionLabelProp="label"
            allowClear
          >
            {optionsCity?.length > 0 &&
              optionsCity.map((option) => (
                <Select.Option value={option?.id} label={option?.name} key={option?.id}>
                  {option?.name}
                </Select.Option>
              ))}
          </Select>
        );
      default:
        return <Input />;
    }
  };

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
            padding: 0,
          }}
          rules={[
            {
              required: true,
              message: `Введите ${title}!`,
            },
          ]}
        >
          {getInputNode(inputType)}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = ({ onSave, onDelete, dataSource, columns, ...restProps }) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const {
    rateType: { rateTypes },
    city: { cities },
  } = useSelector(({ table }) => table);
  const dispatch = useDispatch();

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      if (Object.keys(row).includes('rateTypeId')) {
        const prepareRow = {
          price: form.getFieldValue('price'),
          rateTypeId: rateTypes.find((item) => item.id === form.getFieldValue('rateTypeId')),
        };

        await onSave(key, prepareRow);
        setEditingKey('');
      } else if (Object.keys(row).includes('cityId')) {
        const prepareRow = {
          name: form.getFieldValue('name'),
          address: form.getFieldValue('address'),
          cityId: cities.find((item) => item.id === form.getFieldValue('cityId')),
        };

        await onSave(key, prepareRow);
        setEditingKey('');
      } else {
        await onSave(key, row);
        setEditingKey('');
      }
    } catch (error) {
      dispatch(setIsError(true));
      dispatch(setStatusCode(error.response.status));
      throw new Error(error);
    }
  };

  const handleDelete = async (key) => {
    await onDelete(key);
  };

  const columnsEdit = [
    ...columns,
    {
      title: 'Редактировать',
      dataIndex: 'operation1',
      width: '150px',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
                color: '#818ea3',
              }}
            >
              Сохранить
            </Typography.Link>
            <Popconfirm
              title="Уверены, что хотите Отменить?"
              onConfirm={cancel}
              cancelText="Отмена"
            >
              <a>Отменить</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
            style={{
              color: '#818ea3',
            }}
          >
            Редактировать
          </Typography.Link>
        );
      },
    },
    {
      title: 'Удалить',
      dataIndex: 'operation2',
      render: (_, record) => (
        <Popconfirm
          title="Уверены, что хотите Удалить?"
          onConfirm={() => handleDelete(record.key)}
          cancelText="Отмена"
        >
          <a>Удалить</a>
        </Popconfirm>
      ),
    },
  ];

  const getInputType = (index) => {
    switch (index) {
      case 'rateTypeId':
        return 'selectRateTypeId';
      case 'cityId':
        return 'selectCityId';
      case 'price':
        return 'number';
      default:
        return 'text';
    }
  };

  const mergedColumns = columnsEdit.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: getInputType(col.dataIndex),
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <AntdTable
        className={styles.table}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        dataSource={dataSource}
        columns={mergedColumns}
        rowClassName={styles.editableRow}
        {...restProps}
      />
    </Form>
  );
};

export default EditableTable;
