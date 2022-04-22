import { lazy, Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Dropdown,
  Layout,
  Menu,
  Typography,
  Row,
  Col,
  Space,
  Input,
  Grid,
} from 'antd';
import {
  Link as LinkRouter,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import { ErrorPage } from '../../components/ErrorPage';
import {
  AvatarIcon,
  CardCar,
  ListCarsIcon,
  Logo,
  Menu4,
  Menu5,
  Menu6,
  Menu7,
  OrdersIcon,
} from '../../assets/icon';
import { BellFilled, SearchOutlined, CaretDownOutlined } from '@ant-design/icons';
import styles from './MainPage.module.scss';

const CarEditPage = lazy(() => import('../../containers/CarEditPage/CarEditPage'));
const Orders = lazy(() => import('../../containers/Orders/Orders'));
const ListCars = lazy(() => import('../../containers/ListCars/ListCars'));
const ListPoints = lazy(() => import('../../containers/ListPoints/ListPoints'));
const ListCategories = lazy(() => import('../../containers/ListCategories/ListCategories'));
const ListCities = lazy(() => import('../../containers/ListCities/ListCities'));
const ListRates = lazy(() => import('../../containers/ListRates/ListRates'));
const ListRateTypes = lazy(() => import('../../containers/ListRateTypes/ListRateTypes'));
const ListOrderStatus = lazy(() => import('../../containers/ListOrderStatus/ListOrderStatus'));

const { useBreakpoint } = Grid;
const { Header, Footer, Sider, Content } = Layout;
const { Text, Link } = Typography;

const MainPage = () => {
  let { path, url } = useRouteMatch();
  let location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const screens = useBreakpoint();

  return (
    <Layout className={styles.root}>
      <Sider
        width={285}
        breakpoint="xl"
        collapsedWidth="0"
        collapsed={isCollapsed}
        onCollapse={() => setIsCollapsed(!isCollapsed)}
      >
        <div className={styles.logo}>
          <Logo className={styles.logoImg} />
          <Text className={styles.logoText}>Need for car</Text>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['cardCar']}
          selectedKeys={[location.pathname]}
          onClick={() => {
            if (!screens.xl) {
              setIsCollapsed(true);
            }
          }}
        >
          <Menu.Divider style={{ margin: 0 }} />
          <Menu.Item key={`${url}/cardCar`} icon={<CardCar />} className={styles.menuItem}>
            <LinkRouter to={`${url}/cardCar`}>Карточка автомобиля</LinkRouter>
          </Menu.Item>
          <Menu.Divider style={{ margin: 0 }} />

          <Menu.Item key={`${url}/listCars`} icon={<ListCarsIcon />} className={styles.menuItem}>
            <LinkRouter to={`${url}/listCars`}>Список авто</LinkRouter>
          </Menu.Item>
          <Menu.Divider style={{ margin: 0 }} />

          <Menu.Item key={`${url}/orders`} icon={<OrdersIcon />} className={styles.menuItem}>
            <LinkRouter to={`${url}/orders`}>Заказы</LinkRouter>
          </Menu.Item>
          <Menu.Divider style={{ margin: 0 }} />

          <Menu.Item key={`${url}/listPoints`} icon={<Menu4 />} className={styles.menuItem}>
            <LinkRouter to={`${url}/listPoints`}>Список пунктов</LinkRouter>
          </Menu.Item>
          <Menu.Divider style={{ margin: 0 }} />

          <Menu.Item key={`${url}/listCategories`} icon={<Menu5 />} className={styles.menuItem}>
            <LinkRouter to={`${url}/listCategories`}>Список категорий</LinkRouter>
          </Menu.Item>
          <Menu.Divider style={{ margin: 0 }} />

          <Menu.Item key={`${url}/listCities`} icon={<Menu6 />} className={styles.menuItem}>
            <LinkRouter to={`${url}/listCities`}>Список городов</LinkRouter>
          </Menu.Item>
          <Menu.Divider style={{ margin: 0 }} />

          <Menu.Item key={`${url}/listRates`} icon={<Menu7 />} className={styles.menuItem}>
            <LinkRouter to={`${url}/listRates`}>Список тарифов</LinkRouter>
          </Menu.Item>
          <Menu.Divider style={{ margin: 0 }} />

          <Menu.Item key={`${url}/listRateTypes`} icon={<Menu7 />} className={styles.menuItem}>
            <LinkRouter to={`${url}/listRateTypes`}>Список типов тарифа</LinkRouter>
          </Menu.Item>
          <Menu.Divider style={{ margin: 0 }} />

          <Menu.Item key={`${url}/listOrderStatus`} icon={<Menu7 />} className={styles.menuItem}>
            <LinkRouter to={`${url}/listOrderStatus`}>Список статусов заказа</LinkRouter>
          </Menu.Item>
          <Menu.Divider style={{ margin: 0 }} />
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <Row align="middle" style={{ height: '100%' }}>
            <Col
              xs={{ span: 8, offset: 2 }}
              sm={{ span: 11, offset: 1 }}
              xl={{ span: 12, offset: 0 }}
              style={{ height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <Input
                placeholder="Поиск ..."
                addonBefore={<SearchOutlined />}
                className={styles.search}
                bordered={false}
                style={{ maxWidth: 250 }}
              />
            </Col>
            <Col
              xs={14}
              sm={12}
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <Space size={27} style={{ height: '100%' }}>
                <Divider type="vertical" className={styles.verticalDivider} />
                <Badge count={2} className={styles.badge} offset={[2, 14]}>
                  <BellFilled style={{ color: '#818EA3' }} />
                </Badge>
                <Divider type="vertical" className={styles.verticalDivider} />
              </Space>
              <Space size={14} style={{ height: '100%' }}>
                <Avatar size={40} icon={<AvatarIcon />} style={{ marginLeft: 26.5 }} />
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="1">
                        <Button type="text">LogOut</Button>
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <Button type="text" className={styles.profile}>
                    Admin <CaretDownOutlined />
                  </Button>
                </Dropdown>
              </Space>
            </Col>
          </Row>
        </Header>
        <Content>
          <Suspense fallback={<div>Загрузка...</div>}>
            <Switch>
              <Route path={`${path}/cardCar`}>
                <CarEditPage />
              </Route>
              <Route path={`${path}/listCars`}>
                <ErrorBoundary FallbackComponent={ErrorPage}>
                  <ListCars />
                </ErrorBoundary>
              </Route>
              <Route path={`${path}/orders`}>
                <ErrorBoundary FallbackComponent={ErrorPage}>
                  <Orders />
                </ErrorBoundary>
              </Route>
              <Route path={`${path}/listPoints`}>
                <ListPoints />
              </Route>
              <Route path={`${path}/listCategories`}>
                <ListCategories />
              </Route>
              <Route path={`${path}/listCities`}>
                <ListCities />
              </Route>
              <Route path={`${path}/listRates`}>
                <ListRates />
              </Route>
              <Route path={`${path}/listRateTypes`}>
                <ListRateTypes />
              </Route>
              <Route path={`${path}/listOrderStatus`}>
                <ListOrderStatus />
              </Route>

              <Redirect to={`${path}/cardCar`} />
            </Switch>
          </Suspense>
        </Content>
        <Footer className={styles.footer}>
          <Row align="middle" style={{ height: '100%' }}>
            <Col xs={12} sm={16}>
              <Space size={16}>
                <Link
                  href="https://alexivanov89.github.io/carsharing-app/"
                  target="_blank"
                  className={styles.link}
                >
                  Главная страница
                </Link>
                <Link href="#" target="_blank" className={styles.link}>
                  Ссылка
                </Link>
              </Space>
            </Col>
            <Col xs={12} sm={8} style={{ textAlign: 'end' }} className={styles.copyright}>
              Copyright © 2020 Simbirsoft
            </Col>
          </Row>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainPage;
