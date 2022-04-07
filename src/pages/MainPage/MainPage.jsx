import { lazy, useState } from 'react';
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
import {
  AvatarIcon,
  CardCar,
  ListCars,
  Logo,
  Menu4,
  Menu5,
  Menu6,
  Menu7,
  OrdersIcon,
} from '../../assets/icon';
import { BellFilled, SearchOutlined, CaretDownOutlined } from '@ant-design/icons';
import styles from './MainPage.module.scss';

const Orders = lazy(() => import('../../components/Orders/Orders'));
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

          <Menu.Item key={`${url}/listCars`} icon={<ListCars />} className={styles.menuItem}>
            <LinkRouter to={`${url}/listCars`}>Список авто</LinkRouter>
          </Menu.Item>
          <Menu.Divider style={{ margin: 0 }} />

          <Menu.Item key={`${url}/orders`} icon={<OrdersIcon />} className={styles.menuItem}>
            <LinkRouter to={`${url}/orders`}>Заказы</LinkRouter>
          </Menu.Item>
          <Menu.Divider style={{ margin: 0 }} />

          <Menu.Item key={`${url}/menu4`} icon={<Menu4 />} className={styles.menuItem}>
            <LinkRouter to={`${url}/menu4`}>Menu 4</LinkRouter>
          </Menu.Item>
          <Menu.Divider style={{ margin: 0 }} />

          <Menu.Item key={`${url}/menu5`} icon={<Menu5 />} className={styles.menuItem}>
            <LinkRouter to={`${url}/menu5`}>Menu 5</LinkRouter>
          </Menu.Item>
          <Menu.Divider style={{ margin: 0 }} />

          <Menu.Item key={`${url}/menu6`} icon={<Menu6 />} className={styles.menuItem}>
            <LinkRouter to={`${url}/menu6`}>Menu 6</LinkRouter>
          </Menu.Item>
          <Menu.Divider style={{ margin: 0 }} />

          <Menu.Item key={`${url}/menu7`} icon={<Menu7 />} className={styles.menuItem}>
            <LinkRouter to={`${url}/menu7`}>Menu 7</LinkRouter>
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
          <ErrorBoundary fallback={<div>Что-то пошло не так...</div>}>
            <Switch>
              <Route path={`${path}/cardCar`}>Карточка авто</Route>
              <Route path={`${path}/listCars`}>Список авто</Route>
              <Route path={`${path}/orders`}>
                <Orders />
              </Route>
              <Route path={`${path}/menu4`}>Menu 4</Route>
              <Route path={`${path}/menu5`}>Menu 5</Route>
              <Route path={`${path}/menu6`}>Menu 6</Route>
              <Route path={`${path}/menu7`}>Menu 7</Route>

              <Redirect to={`${path}/cardCar`} />
            </Switch>
          </ErrorBoundary>
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
