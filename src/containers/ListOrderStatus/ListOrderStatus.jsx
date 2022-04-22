import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ListEntities } from '../../components/ListEntities';
import { NextIcon, PrevIcon } from '../../assets/icon';
import { fetchOrderStatusAsync } from '../../store/slices/tableSlice';

const ListOrderStatus = () => {
  const dispatch = useDispatch();
  const { orderStatus } = useSelector(({ table }) => table);
  const { values, loading, count, fields } = orderStatus;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

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

  return (
    <ListEntities
      title="Список статусов заказа"
      form={{
        fields: null,
        onChange: null,
        filters: null,
        onReset: null,
        onApply: null,
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
      }}
    />
  );
};

export default ListOrderStatus;
