import { useEffect, useState } from 'react';
import { Button, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ListEntities } from '../ListEntities';
import { Image } from '../UI/Image';
import NoFoto from '../../assets/img/noFoto.jpg';
import { DropdownIcon, NextIcon, PrevIcon } from '../../assets/icon';
import { fetchPointAsync } from '../../store/slices/tableSlice';
import styles from './ListPoints.module.scss';

const ListPoints = () => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const { point } = useSelector(({ table }) => table);
  const { points, loading, count, fields } = point;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    dispatch(fetchPointAsync());
  }, []);

  const dataSource = points.map((item) => ({ ...item, key: item.id }));

  const columns = fields.map((field) => {
    switch (field) {
      case 'cityId':
        return {
          title: field,
          dataIndex: field,
          key: field?.name,
          render: (field) => <>{field?.name}</>,
        };

      case 'rateTypeId':
        return {
          title: field,
          dataIndex: field,
          key: field?.name,
          render: (field) => <>{field?.name}</>,
        };

      case 'categoryId':
        return {
          title: field,
          dataIndex: field,
          key: field?.name,
          render: (field) => (
            <>
              <p>{field?.name}</p>
              <p>{field?.description}</p>
            </>
          ),
        };

      case 'colors':
        return {
          title: field,
          dataIndex: field,
          key: field?.name,
          render: (colors) => {
            return colors?.map((color) => <p key={color}>{color}</p>);
          },
        };

      case 'thumbnail':
        return {
          title: field,
          dataIndex: field,
          key: field?.name,
          render: (thumbnail) => {
            return (
              <div className={styles.carImage}>
                <Image
                  src={thumbnail?.path}
                  alt={thumbnail?.originalname}
                  fallback={NoFoto}
                  loading="lazy"
                />
              </div>
            );
          },
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

  const tableProps = {
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
    scroll: { x: 980 },
  };

  const title = 'Список пунктов';

  const filters = (
    <>
      <Select
        showSearch
        placeholder="Field"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
        suffixIcon={<DropdownIcon />}
        className={styles.select}
      >
        <Option value="1">value1</Option>
        <Option value="2">value2</Option>
      </Select>
      <Select
        showSearch
        placeholder="Field"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
        suffixIcon={<DropdownIcon />}
        className={styles.select}
      >
        <Option value="1">value1</Option>
        <Option value="2">value2</Option>
      </Select>
      <Select
        showSearch
        placeholder="Field"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
        suffixIcon={<DropdownIcon />}
        className={styles.select}
      >
        <Option value="1">value1</Option>
        <Option value="2">value2</Option>
      </Select>
      <Select
        showSearch
        placeholder="Field"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
        suffixIcon={<DropdownIcon />}
        className={styles.select}
      >
        <Option value="1">value1</Option>
        <Option value="2">value2</Option>
      </Select>
    </>
  );

  const onReset = () => {};
  const onApply = () => {};

  return (
    <ListEntities
      title={title}
      filters={filters}
      tableProps={tableProps}
      onReset={onReset}
      onApply={onApply}
    />
  );
};

export default ListPoints;
