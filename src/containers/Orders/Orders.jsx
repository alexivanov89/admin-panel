import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import cn from 'classnames';
import format from 'date-fns/format';
import {
  Button,
  Card,
  Col,
  Form,
  message,
  Popconfirm,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from 'antd';
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
import {
  fetchCarAsync,
  fetchCityAsync,
  fetchOrdersAsync,
  fetchOrderStatusAsync,
} from '../../store/slices/tableSlice';
import { Image } from '../../components/UI/Image';
import NoFoto from '../../assets/img/noFoto.jpg';
import { tableService } from '../../services/tableService';
import { numberWithSpaces } from '../../utils/numberWithSpaces';
import { getRequestParams } from '../../utils/getRequestParams';
import styles from './Orders.module.scss';

const Orders = () => {
  const { Title, Text } = Typography;
  const ButtonGroup = Button.Group;
  const { Option } = Select;
  const dispatch = useDispatch();
  const {
    order,
    city: { cities },
    car: { cars },
    orderStatus: { values },
  } = useSelector(({ table }) => table);
  const { orders, loading } = order;
  const [page, setPage] = useState(1);
  let { url } = useRouteMatch();
  const history = useHistory();

  const dateDayAgo = new Date().getTime() - 1000 * 60 * 60 * 24;
  const dateWeekAgo = new Date().getTime() - 1000 * 60 * 60 * 24 * 7;
  const dateMonthAgo = new Date().getTime() - 1000 * 60 * 60 * 24 * 30;
  const dateYearAgo = new Date().getTime() - 1000 * 60 * 60 * 24 * 365;
  const optionsCities = cities;
  const optionsCars = Array.from(
    new Set(
      cars
        .filter(({ name, id, ...rest }) => Boolean(name))
        .map(({ name, id, ...rest }) => ({ name, id })),
    ),
  );
  const optionsOrderStatus = values;

  const initialState = [
    {
      name: ['period'],
      value: {
        label: 'За день',
        value: dateDayAgo,
      },
    },
    {
      name: ['car'],
      value: null,
    },
    {
      name: ['city'],
      value: null,
    },
    {
      name: ['orderStatus'],
      value: null,
    },
  ];

  const [fieldsForm, setFields] = useState(initialState);

  const data = orders.map((order) => {
    const {
      carId,
      cityId,
      color,
      dateFrom,
      dateTo,
      price,
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
        carId,
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
        order: order,
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
            <Text className={styles.carName}>
              {orderInfo?.carId ? `${orderInfo?.carId?.name}` : null}
            </Text>
            <Text className={styles.info}>{` в `}</Text>
            <Text className={styles.city}>
              {orderInfo?.cityId ? `${orderInfo?.cityId?.name}, ` : null}
            </Text>
            <Text className={styles.pointAddress}>
              {orderInfo?.pointId ? `${orderInfo?.pointId?.address}` : null}
            </Text>
          </div>
          <Text className={styles.dates}>
            {orderInfo?.dateFrom ? `${orderInfo?.dateFrom} ` : null}
          </Text>
          <Text className={styles.info}>&mdash;</Text>
          <Text className={styles.dates}>{orderInfo?.dateTo ? ` ${orderInfo?.dateTo}` : null}</Text>
          <div>
            <Text className={styles.info}>{`Цвет: `}</Text>
            <Text className={styles.color}>{orderInfo?.color ? `${orderInfo?.color}` : null}</Text>
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
            <Popconfirm
              placement="topRight"
              title="Уверены, что хотите подтвердить заказ?"
              onConfirm={() => {
                tableService
                  .putOrderById(orderActions?.order?.id, {
                    ...orderActions?.order,
                    orderStatusId: values.find(({ name }) => name === 'Подтвержденные'),
                  })
                  .then(() => {
                    message.success(`Заказ успешно подтверждён.`);
                  })
                  .catch(() => message.error(`При отправке данных  произошла ошибка.`));
              }}
              cancelText="Отмена"
            >
              <Button icon={<ApplyIcon />} className={styles.apply}>
                {orderActions?.apply}
              </Button>
            </Popconfirm>

            <Popconfirm
              placement="topRight"
              title="Уверены, что хотите отменить заказ?"
              onConfirm={() => {
                tableService
                  .putOrderById(orderActions?.order?.id, {
                    ...orderActions?.order,
                    orderStatusId: values.find(({ name }) => name === 'Отмененные'),
                  })
                  .then(() => {
                    message.success(`Заказ успешно отменён.`);
                  })
                  .catch(() => message.error(`При отправке данных  произошла ошибка.`));
              }}
              cancelText="Отмена"
            >
              <Button icon={<CloseIcon />} className={styles.delete}>
                {orderActions?.delete}
              </Button>
            </Popconfirm>

            <Popconfirm
              placement="topRight"
              title="Уверены, что хотите изменить заказ?"
              onConfirm={() => {
                history.push({
                  pathname: `${url}/${orderActions?.order?.id}`,
                  state: { order: orderActions?.order },
                });
              }}
              cancelText="Отмена"
            >
              <Button icon={<EditIcon />} className={styles.change}>
                {orderActions?.change}
              </Button>
            </Popconfirm>
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
    dispatch(fetchOrdersAsync(getRequestParams(fieldsForm)));
  }, []);

  useEffect(() => {
    dispatch(fetchCityAsync());
    dispatch(fetchOrderStatusAsync());
    dispatch(fetchCarAsync());
  }, []);

  const onChange = (page) => {
    setPage(page);
  };

  const onChangeField = (newFields) => {
    setFields(newFields);
  };

  return (
    <>
      <Title className={styles.title}>Заказы</Title>
      <Card
        title={
          <Row>
            <Form
              name="filters"
              layout="inline"
              style={{ width: '100%' }}
              fields={fieldsForm}
              onFieldsChange={(_, allFields) => {
                onChangeField(allFields);
              }}
              requiredMark="optional"
              onFinish={(values) => {
                dispatch(fetchOrdersAsync(getRequestParams(fieldsForm)));
              }}
            >
              <Col xs={18} sm={20}>
                <Space size={[15, 15]} wrap style={{ width: '100%' }}>
                  <Form.Item name="period" style={{ margin: '0px 0px 0px 2px' }}>
                    <Select
                      showSearch
                      placeholder="Период"
                      optionFilterProp="children"
                      filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                      }
                      suffixIcon={<DropdownIcon />}
                      className={styles.select}
                      optionLabelProp="label"
                      labelInValue={true}
                      allowClear
                    >
                      <Option value={dateDayAgo} label="За день">
                        За день
                      </Option>
                      <Option value={dateWeekAgo} label="За неделю">
                        За неделю
                      </Option>
                      <Option value={dateMonthAgo} label="За месяц">
                        За месяц
                      </Option>
                      <Option value={dateYearAgo} label="За год">
                        За год
                      </Option>
                      <Option value={null} label="За всё время">
                        За всё время
                      </Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="car" style={{ margin: 0 }}>
                    <Select
                      showSearch
                      placeholder="Авто"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                      filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                      }
                      suffixIcon={<DropdownIcon />}
                      className={styles.select}
                      allowClear
                    >
                      {optionsCars?.length > 0 &&
                        optionsCars.map((option) => (
                          <Option value={option?.id} key={option?.id}>
                            {option?.name}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                  <Form.Item name="city" style={{ margin: 0 }}>
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
                      allowClear
                    >
                      {optionsCities?.length > 0 &&
                        optionsCities.map((option) => (
                          <Option value={option?.id} key={option?.id}>
                            {option?.name}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                  <Form.Item name="orderStatus" style={{ margin: 0 }}>
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
                      allowClear
                    >
                      {optionsOrderStatus?.length > 0 &&
                        optionsOrderStatus.map((option) => (
                          <Option value={option?.id} key={option?.id}>
                            {option?.name}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                </Space>
              </Col>
              <Col xs={6} sm={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className={styles.filterBtn}>
                    Применить
                  </Button>
                </Form.Item>
              </Col>
            </Form>
          </Row>
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
            showSizeChanger: false,
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
