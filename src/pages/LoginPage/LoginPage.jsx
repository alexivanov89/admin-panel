import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { Logo } from '../../assets/img';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const { Text, Title } = Typography;
  const onFinish = (values) => {};

  const onFinishFailed = (errorInfo) => {};

  return (
    <div className={styles.login}>
      <Row gutter={[0, 16.5]} justify="center">
        <Col span={24} flex="376.5px" className={styles.logo}>
          <Logo />
          <Text className={styles.logoText}>Need for drive</Text>
        </Col>
        <Col span={24} className={styles.form}>
          <Title level={5} className={styles.title}>
            Вход
          </Title>
          <Form
            name="login"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark="optional"
          >
            <Form.Item
              label="Почта"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Введите почту!',
                },
              ]}
              className={styles.formItem}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Пароль"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Введите пароль!',
                },
              ]}
              className={styles.formItem}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item style={{ marginBottom: '0px' }}>
              <Form.Item style={{ marginBottom: '0px' }} className={styles.accessBtn}>
                <Button type="link" htmlType="submit">
                  Запросить доступ
                </Button>
              </Form.Item>

              <Button type="primary" htmlType="submit" className={styles.exitBtn}>
                Войти
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
