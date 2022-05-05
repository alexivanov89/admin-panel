import { useCallback, useEffect, useState } from 'react';
import { Button, Form, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ListEntities } from '../../components/ListEntities';
import { Image } from '../../components/UI/Image';
import NoFoto from '../../assets/img/noFoto.jpg';
import { DropdownIcon, NextIcon, PrevIcon } from '../../assets/icon';
import { fetchCarAsync, fetchCategoryAsync } from '../../store/slices/tableSlice';
import { nanoid } from '@reduxjs/toolkit';
import { numberWithSpaces } from '../../utils/numberWithSpaces';
import { getRequestParams } from '../../utils/getRequestParams';
import styles from './ListCars.module.scss';

const ListCars = () => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const {
    car,
    category: { categories },
  } = useSelector(({ table }) => table);
  const { cars, loading, fields } = car;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const initialState = [
    {
      name: ['nameCar'],
      value: null,
    },
    {
      name: ['category'],
      value: null,
    },
    {
      name: ['tank'],
      value: null,
    },
    {
      name: ['priceMin'],
      value: null,
    },
  ];

  const [fieldsForm, setFields] = useState(initialState);

  const optionsCategory = categories;

  const optionsName = Array.from(new Set(cars.map(({ name, ...rest }) => name).filter(Boolean)));

  useEffect(() => {
    dispatch(fetchCarAsync());
    dispatch(fetchCategoryAsync());
  }, []);

  const dataSource = cars.map((item) => ({ ...item, key: item.id }));

  const columns = fields.map((field) => {
    switch (field) {
      case 'priceMin':
        return {
          title: 'Цена минимальная',
          dataIndex: field,
          key: field,
          editable: true,
          render: (price) => (price ? <>{`${numberWithSpaces(price)} ₽`}</> : null),
        };

      case 'priceMax':
        return {
          title: 'Цена максимальная',
          dataIndex: field,
          key: field,
          editable: true,
          render: (price) => (price ? <>{`${numberWithSpaces(price)} ₽`}</> : null),
        };

      case 'name':
        return {
          title: 'Марка',
          dataIndex: field,
          key: field,
          render: (field) => (field ? <>{field}</> : null),
        };

      case 'thumbnail':
        return {
          title: 'Изображение',
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

      case 'description':
        return {
          title: 'Описание',
          dataIndex: field,
          key: field,
          render: (field) => (field ? <>{field}</> : null),
        };

      case 'categoryId':
        return {
          title: 'Категория',
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
          title: 'Цвета авто',
          dataIndex: field,
          key: field?.name,
          render: (colors) => {
            return colors?.map((color) => <p key={nanoid()}>{color}</p>);
          },
        };

      case 'tank':
        return {
          title: 'Топливо',
          dataIndex: field,
          key: field,
          editable: true,
          render: (tank) => (tank ? <>{`${tank}%`}</> : null),
        };

      case 'number':
        return {
          title: 'Номер машины',
          dataIndex: field,
          key: field,
          editable: true,
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

  const filters = (
    <>
      <Form.Item name="nameCar" style={{ margin: '0px 0px 0px 2px' }}>
        <Select
          showSearch
          placeholder="Марка"
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
          {optionsName?.length > 0 &&
            optionsName.map((option) => (
              <Option value={option} key={nanoid()}>
                {option}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item name="category" style={{ margin: 0 }}>
        <Select
          showSearch
          placeholder="Категория"
          optionFilterProp="children"
          filterSort={(optionA, optionB) =>
            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
          }
          suffixIcon={<DropdownIcon />}
          className={styles.select}
        >
          {optionsCategory?.length > 0 &&
            optionsCategory.map((option) => (
              <Option value={option?.id} key={option?.id}>
                {option?.name}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item name="tank" style={{ margin: 0 }}>
        <Select
          showSearch
          placeholder="Топливо"
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
          <Option value="[$gt]=50">больше 50%</Option>
          <Option value="[$lt]=50">меньше 50%</Option>
        </Select>
      </Form.Item>
      <Form.Item name="priceMin" style={{ margin: 0 }}>
        <Select
          showSearch
          placeholder="Цена мин"
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
          <Option value="[$gt]=10000">больше 10 тыс</Option>
          <Option value="[$lt]=10000">меньше 10 тыс</Option>
        </Select>
      </Form.Item>
    </>
  );

  const onReset = useCallback(() => {
    setFields(initialState);
    dispatch(fetchCarAsync());
  }, []);

  const onApply = useCallback(() => {
    dispatch(fetchCarAsync(getRequestParams(fieldsForm)));
  }, [fieldsForm]);

  const buttons = (
    <>
      <Form.Item style={{ margin: 0 }}>
        <Button className={styles.addBtn}>Создать</Button>
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

  return (
    <ListEntities
      title="Список авто"
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
        scroll: { x: 980 },
      }}
    />
  );
};

export default ListCars;
