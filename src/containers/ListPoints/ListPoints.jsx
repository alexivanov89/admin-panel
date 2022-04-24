import { useEffect, useState } from 'react';
import { Button, Form, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ListEntities } from '../../components/ListEntities';
import { DropdownIcon, NextIcon, PrevIcon } from '../../assets/icon';
import { fetchCityAsync, fetchPointAsync } from '../../store/slices/tableSlice';
import { getRequestParams } from '../../utils/getRequestParams';
import styles from './ListPoints.module.scss';

const ListPoints = () => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const {
    point,
    city: { cities },
  } = useSelector(({ table }) => table);
  const { points, loading, count, fields } = point;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

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
      case 'cityId':
        return {
          title: 'Город',
          dataIndex: field,
          key: field?.name,
          render: (field) => <>{field?.name}</>,
        };
      case 'address':
        return {
          title: 'Адрес',
          dataIndex: field,
          key: field,
        };

      case 'name':
        return {
          title: 'Название пункта',
          dataIndex: field,
          key: field,
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
    <Form.Item name="city" style={{ margin: 0 }}>
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

  const onReset = () => {
    setFields(initialState);
    dispatch(fetchPointAsync());
  };
  const onApply = () => {
    dispatch(fetchPointAsync(getRequestParams(fieldsForm)));
  };

  return (
    <ListEntities
      title="Список пунктов"
      form={{
        fields: fieldsForm,
        onChange: (newFields) => {
          setFields(newFields);
        },
        filters: filters,
        onReset: onReset,
        onApply: onApply,
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
      }}
    />
  );
};

export default ListPoints;