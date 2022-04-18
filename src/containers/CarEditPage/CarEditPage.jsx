import { useState } from 'react';
import {
  Row,
  Col,
  Button,
  Space,
  Typography,
  Progress,
  Result,
  Upload,
  message,
  Form,
  Input,
  Checkbox,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { EditPage } from '../../components/EditPage';
import { Image } from '../../components/UI/Image';
import NoFoto from '../../assets/img/noFoto.jpg';
import styles from './CarEditPage.module.scss';

const CarEditPage = () => {
  const { Text } = Typography;
  const { TextArea } = Input;

  const [fileList, setFileList] = useState([]);

  const propsUpload = {
    onRemove: (file) => {
      setFileList((prev) => {
        const index = prev.indexOf(file);
        const newFileList = prev.slice();
        newFileList.splice(index, 1);
        return newFileList;
      });
    },
    beforeUpload: (file) => {
      const isIMG = file.type.includes('image');
      if (!isIMG) {
        message.error(`${file.name} не img-файл.`);
        return isIMG || Upload.LIST_IGNORE;
      }
      setFileList([file]);
      return false;
    },
    fileList,
  };

  const description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae quod dolorum sint alias, possimus illum assumenda eligendi cumque?';

  const modelCar = 'Hyndai, i30 N';
  const typeCar = 'Компакт-кар';

  const options = [
    { label: 'Красный', value: 'Красный' },
    { label: 'Белый', value: 'Белый' },
    { label: 'Черный', value: 'Черный' },
  ];

  return (
    <EditPage
      title={`Карточка автомобиля`}
      cardInfo={{
        header: (
          <Result
            icon={
              <div className={styles.carImage}>
                <Image src={''} alt={''} fallback={NoFoto} loading="lazy" />
              </div>
            }
            title={modelCar}
            subTitle={typeCar}
            extra={
              <div className={styles.wrapperUpload}>
                {fileList.length === 0 && <p className={styles.placeholder}>Выберите файл...</p>}
                <Upload className={styles.upload} {...propsUpload}>
                  <Button className={styles.uploadBtn}>Обзор</Button>
                </Upload>
              </div>
            }
            className={styles.cardInfoResult}
          />
        ),
        body: (
          <Progress
            percent={74}
            format={(percent) => (
              <>
                <p className={styles.progressTitle}>Заполнено</p>
                <p className={styles.progressValue}>{percent}%</p>
              </>
            )}
            className={styles.cardInfoProgress}
          />
        ),
        footer: (
          <Space direction="vertical" size={13.5} className={styles.cardInfoSpace}>
            <Text className={styles.cardInfoTitle}>Описание</Text>
            <Form.Item
              name="description"
              rules={[
                {
                  required: false,
                },
              ]}
              className={styles.formItem}
            >
              <TextArea
                name="description"
                className={styles.cardInfoDescription}
                bordered={false}
                defaultValue={description}
                value={description}
              />
            </Form.Item>
          </Space>
        ),
      }}
      cardSettings={{
        header: <h2 className={styles.cardSettingsHeader}>Настройки автомобиля</h2>,
        body: (
          <>
            <Row gutter={[21, 8]}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Модель автомобиля"
                  name="modelCar"
                  rules={[
                    {
                      required: true,
                      message: 'Введите модель!',
                    },
                  ]}
                  className={styles.formItem}
                >
                  <Input className={styles.input} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Тип автомобиля"
                  name="typeCar"
                  rules={[
                    {
                      required: true,
                      message: 'Введите тип!',
                    },
                  ]}
                  className={styles.formItem}
                >
                  <Input className={styles.input} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Доступные цвета"
                  name="colorCar"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                  className={styles.formItem}
                >
                  <Input.Group>
                    <Row gutter={8}>
                      <Col flex="auto">
                        <Input className={styles.input} />
                      </Col>
                      <Col flex="30px">
                        <Button icon={<PlusOutlined />} className={styles.plusBtn} />
                      </Col>
                    </Row>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col xs={0} sm={12}></Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="colorCar"
                  rules={[
                    {
                      required: true,
                      message: 'Выберите цвет!',
                    },
                  ]}
                  className={styles.formItem}
                >
                  <Checkbox.Group
                    options={options}
                    defaultValue={['Красный', 'Белый', 'Черный']}
                    className={styles.checkboxGroup}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item>
                  <Space size={12.5} wrap>
                    <Button type="primary" htmlType="submit" className={styles.saveBtn}>
                      Сохранить
                    </Button>
                    <Button className={styles.cancelBtn}>Отменить</Button>
                  </Space>
                </Form.Item>
              </Col>
              <Col span={12} className={styles.groupBtnRight}>
                <Form.Item>
                  <Button className={styles.deleteBtn}>Удалить</Button>
                </Form.Item>
              </Col>
            </Row>
          </>
        ),
      }}
    />
  );
};

export default CarEditPage;
