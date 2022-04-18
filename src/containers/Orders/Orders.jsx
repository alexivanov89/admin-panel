import { Button, Card, Col, Row, Select, Space, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ApplyIcon,
  CheckboxOff,
  CheckboxOn,
  CloseIcon,
  DropdownIcon,
  EditIcon,
  NextIcon,
  PrevIcon,
} from '../../assets/icon';
import { fetchOrdersAsync } from '../../store/slices/tableSlice';
import format from 'date-fns/format';
import cn from 'classnames';
import { Image } from '../../components/UI/Image';
import NoFoto from '../../assets/img/noFoto.jpg';
import { numberWithSpaces } from '../../utils/numberWithSpaces';
import styles from './Orders.module.scss';

const Orders = () => {
  const { Title, Text } = Typography;
  const ButtonGroup = Button.Group;
  const { Option } = Select;
  const dispatch = useDispatch();
  const { order } = useSelector(({ table }) => table);
  const { orders, loading, error } = order;
  const [page, setPage] = useState(1);

  const data = orders.map((order) => {
    const {
      carId,
      cityId,
      color,
      dateFrom,
      dateTo,
      pointId,
      price,
      orderStatusId,
      isFullTank,
      isNeedChildChair,
      isRightWheel,
      id,
    } = order;

    const item = {
      key: id,
      carImg: {
        src: carId ? carId?.thumbnail?.path : null,
        name: carId ? carId?.name : null,
      },
      orderInfo: {
        pointId,
        cityId,
        dateFrom: dateFrom ? format(new Date(dateFrom), 'dd.MM.yyyy k:mm') : null,
        dateTo: dateTo ? format(new Date(dateTo), 'dd.MM.yyyy k:mm') : null,
        color,
      },
      orderOptions: {
        isFullTank,
        isRightWheel,
        isNeedChildChair,
      },
      price: price,
      orderActions: {
        apply: 'готово',
        delete: 'отмена',
        change: 'изменить',
      },
    };
    return item;
  });

  const columns = [
    {
      title: 'Car',
      dataIndex: 'carImg',
      key: 'carImg',
      render: (carImg) => (
        <div className={styles.carImage}>
          <Image src={carImg.src} alt={carImg.name} fallback={NoFoto} loading="lazy" />
        </div>
      ),
    },
    {
      title: 'Order Info',
      dataIndex: 'orderInfo',
      key: 'orderInfo',
      render: (orderInfo) => (
        <div className={styles.orderInfo}>
          <div>
            <Text className={styles.pointName}>{`${orderInfo?.pointId?.name}`}</Text>
            <Text className={styles.info}>{` в `}</Text>
            <Text className={styles.city}>{`${orderInfo?.cityId?.name}, `}</Text>
            <Text className={styles.pointAddress}>{`${orderInfo?.pointId?.address}`}</Text>
          </div>
          <Text className={styles.dates}>{`${orderInfo?.dateFrom} `}</Text>
          <Text className={styles.info}>&mdash;</Text>
          <Text className={styles.dates}>{` ${orderInfo?.dateTo}`}</Text>
          <div>
            <Text className={styles.info}>{`Цвет: `}</Text>
            <Text className={styles.color}>{`${orderInfo?.color}`}</Text>
          </div>
        </div>
      ),
    },
    {
      title: 'Order Options',
      dataIndex: 'orderOptions',
      key: 'orderOptions',
      render: (orderOptions) => (
        <div className={styles.orderOptions}>
          <div style={{ display: 'flex', textAlign: 'center' }}>
            {orderOptions?.isFullTank ? <CheckboxOn /> : <CheckboxOff />}
            <Text
              className={cn(styles.label, {
                [styles.active]: orderOptions?.isFullTank,
              })}
            >
              Полный бак
            </Text>
          </div>
          <div style={{ display: 'flex', textAlign: 'center' }}>
            {orderOptions?.isNeedChildChair ? <CheckboxOn /> : <CheckboxOff />}
            <Text
              className={cn(styles.label, {
                [styles.active]: orderOptions?.isFullTank,
              })}
            >
              Детское кресло
            </Text>
          </div>
          <div style={{ display: 'flex', textAlign: 'center' }}>
            {orderOptions?.isRightWheel ? <CheckboxOn /> : <CheckboxOff />}
            <Text
              className={cn(styles.label, {
                [styles.active]: orderOptions?.isFullTank,
              })}
            >
              Правый руль
            </Text>
          </div>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <div className={styles.price}>{`${numberWithSpaces(price)} ₽`}</div>,
    },
    {
      title: 'Order Actions',
      dataIndex: 'orderActions',
      key: 'orderActions',
      render: (orderActions) => (
        <div className={styles.orderActions}>
          <ButtonGroup>
            <Button icon={<ApplyIcon />} className={styles.apply}>
              {orderActions?.apply}
            </Button>
            <Button icon={<CloseIcon />} className={styles.delete}>
              {orderActions?.delete}
            </Button>
            <Button icon={<EditIcon />} className={styles.change}>
              {orderActions?.change}
            </Button>
          </ButtonGroup>
        </div>
      ),
    },
  ];

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <Button icon={<PrevIcon />} />;
    }
    if (type === 'next') {
      return <Button icon={<NextIcon />} />;
    }
    return originalElement;
  };

  useEffect(() => {
    dispatch(fetchOrdersAsync(`?offset=5000&page=${page}&limit=10`));
  }, []);

  const onChange = (page) => {
    setPage(page);
  };

  return (
    <>
      <Title className={styles.title}>Заказы</Title>
      <Card
        title={
          <div>
            <Row>
              <Col xs={18} sm={20}>
                <Space size={[15, 15]} wrap>
                  <Select
                    showSearch
                    placeholder="Период"
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
                    <Option value="1">За неделю</Option>
                    <Option value="2">За месяц</Option>
                  </Select>
                  <Select
                    showSearch
                    placeholder="Пункт выдачи"
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
                    <Option value="1">Elantra</Option>
                    <Option value="2">Магнит</Option>
                  </Select>
                  <Select
                    showSearch
                    placeholder="Город"
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
                    <Option value="1">Ульяновск</Option>
                    <Option value="2">Екатеринбург</Option>
                  </Select>
                  <Select
                    showSearch
                    placeholder="Статус"
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
                    <Option value="1">В процессе</Option>
                    <Option value="2">Завершенные</Option>
                    <Option value="3">Отмененные</Option>
                  </Select>
                </Space>
              </Col>
              <Col xs={6} sm={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type="primary" className={styles.filterBtn}>
                  Применить
                </Button>
              </Col>
            </Row>
          </div>
        }
        bordered={false}
        className={styles.card}
        bodyStyle={{ padding: '1px 0px 0px' }}
      >
        <Table
          showHeader={false}
          columns={columns}
          dataSource={data}
          pagination={{
            position: ['bottomCenter'],
            current: page,
            pageSize: 1,
            onChange: onChange,
            itemRender: itemRender,
          }}
          loading={loading}
          scroll={{ x: 980 }}
          className={styles.table}
        />
      </Card>
    </>
  );
};

export default Orders;
