import { useEffect, useState } from 'react';
import { Button, Form, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ListEntities } from '../../components/ListEntities';
import { DropdownIcon, NextIcon, PrevIcon } from '../../assets/icon';
import { fetchRateAsync, fetchRateTypeAsync } from '../../store/slices/tableSlice';
import { getRequestParams } from '../../utils/getRequestParams';
import styles from './ListRates.module.scss';

const ListRates = () => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const {
    rate,
    rateType: { rateTypes },
  } = useSelector(({ table }) => table);
  const { rates, loading, count, fields } = rate;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

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
          render: (field) => (field ? <>{field}</> : null),
        };

      case 'rateTypeId':
        return {
          title: 'Тип тарифа',
          dataIndex: field,
          key: field,
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
    <Form.Item name="rateType" style={{ margin: 0 }}>
      <Select
        showSearch
        placeholder="Тип тарифа"
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
    dispatch(fetchRateAsync());
  };
  const onApply = () => {
    dispatch(fetchRateAsync(getRequestParams(fieldsForm)));
  };

  return (
    <ListEntities
      title="Список тарифов"
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

export default ListRates;
