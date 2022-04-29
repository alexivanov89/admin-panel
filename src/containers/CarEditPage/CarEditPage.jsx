import { useEffect, useMemo, useRef, useState } from 'react';
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
  InputNumber,
  Select,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { EditPage } from '../../components/EditPage';
import { Image } from '../../components/UI/Image';
import NoFoto from '../../assets/img/noFoto.jpg';
import styles from './CarEditPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownIcon } from '../../assets/icon';
import { fetchCarAsync, fetchCategoryAsync } from '../../store/slices/tableSlice';

const CarEditPage = () => {
  const { Text } = Typography;
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const { percent } = useSelector(({ percentFillFields }) => percentFillFields);

  const {
    category: { categories },
    car: { cars },
  } = useSelector(({ table }) => table);
  const optionsCar = cars;
  const optionsCategory = categories;
  const [initialValues, setInitialValues] = useState({
    name: null,
    categoryId: null,
    colors: [],
    priceMin: null,
    priceMax: null,
    description: null,
    thumbnail: null,
  });

  const [id, setId] = useState(null);
  const [isCreateCar, setIsCreateCar] = useState(false);
  const [nameNewCar, setNameNewCar] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [file, setFile] = useState(null);
  const [value, setValue] = useState(null);
  const initialOptionsColors = [
    { label: 'Красный', value: 'Красный' },
    { label: 'Белый', value: 'Белый' },
    { label: 'Черный', value: 'Черный' },
  ];
  const [optionsColors, setOptionsColors] = useState(initialOptionsColors);
  let formData = new FormData();
  const [categoryCar, setCategoryCar] = useState(null);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const propsUpload = {
    action: 'http://localhost:3000',
    onRemove: (file) => {
      setFileList((prev) => {
        const index = prev.indexOf(file);
        const newFileList = prev.slice();
        newFileList.splice(index, 1);
        setFile(null);
        return newFileList;
      });
    },
    beforeUpload: (file) => {
      const isIMG = file.type.includes('image');
      if (!isIMG) {
        message.error(`${file.name} не img-файл.`);
      }
      return isIMG || Upload.LIST_IGNORE;
    },
    onChange: async (info) => {
      if (info.file.status !== 'uploading') {
      }
      if (info.file.status === 'done') {
        if (!info.file.url && !info.file.preview) {
          info.file.preview = await getBase64(info.file.originFileObj);
        }
        setFile(info.file);
        message.success(`${info.file.name} файл успешно загружен.`);
      } else if (info.file.status === 'error') {
        message.error(`При загрузке файла ${info.file.name} произошла ошибка.`);
      }
      let fileList = [...info.fileList];
      fileList = fileList.slice(-1);
      fileList = fileList.map((file) => {
        if (file.response) {
          file.url = file.response.url;
        }
        return file;
      });

      setFileList(fileList);

      fileList.forEach((file) => {
        formData.append('file', file);
      });
    },
    fileList,
  };

  const onSelectModel = (LabeledValue, option) => {
    // console.log(
    //   'obj:',
    //   cars.find((item) => item.id === option.key),
    // );
    const car = cars.find((item) => item.id === option.key);
    setId(car?.id);
    setOptionsColors(car?.colors);
    setCategoryCar(car?.categoryId?.name);
    setFile({
      preview: car?.thumbnail?.path,
      size: car?.thumbnail?.size,
      name: car?.thumbnail?.originalname,
      type: car?.thumbnail?.mimetype,
    });
    setInitialValues(() => {
      return {
        name: car?.name,
        categoryId: car?.categoryId?.id,
        colors: car?.colors,
        priceMin: car?.priceMin,
        priceMax: car?.priceMax,
        description: car?.description,
        thumbnail: car?.thumbnail?.originalname,
      };
    });
  };

  const onClear = () => {
    setId(null);
    setOptionsColors(initialOptionsColors);
    setCategoryCar(null);
    setFile(null);
    setNameNewCar(null);
    setInitialValues({
      name: null,
      categoryId: null,
      colors: [],
      priceMin: null,
      priceMax: null,
      description: null,
      thumbnail: null,
    });
  };

  useEffect(() => {
    dispatch(fetchCategoryAsync());
    dispatch(fetchCarAsync());
  }, []);

  return (
    <EditPage
      title={`Карточка автомобиля`}
      initialValues={initialValues}
      file={file}
      id={id}
      categories={categories}
      cardInfo={{
        header: (
          <Result
            icon={
              <div className={styles.carImage}>
                <Image src={file?.preview} alt={file?.name} fallback={NoFoto} loading="lazy" />
              </div>
            }
            title={initialValues.name || nameNewCar ? initialValues.name || nameNewCar : null}
            subTitle={categoryCar}
            extra={
              <Form.Item
                name="thumbnail"
                rules={[
                  {
                    required: true,
                    message: 'Загрузите изображение!',
                  },
                ]}
                className={styles.formItem}
              >
                <div className={styles.wrapperUpload}>
                  {fileList.length === 0 && <p className={styles.placeholder}>Выберите файл...</p>}
                  <Upload className={styles.upload} {...propsUpload}>
                    <Button className={styles.uploadBtn}>Обзор</Button>
                  </Upload>
                </div>
              </Form.Item>
            }
            className={styles.cardInfoResult}
          />
        ),
        body: (
          <Progress
            percent={percent}
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
                  required: true,
                  message: 'Введите описание!',
                },
              ]}
              className={styles.formItem}
            >
              <TextArea
                name="description"
                className={styles.cardInfoDescription}
                bordered={false}
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
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Введите модель!',
                    },
                  ]}
                  className={styles.formItem}
                >
                  {isCreateCar ? (
                    <Input
                      className={styles.input}
                      value={nameNewCar}
                      onChange={(e) => setNameNewCar(e.target.value)}
                    />
                  ) : (
                    <Select
                      showSearch
                      placeholder="Введите модель"
                      optionFilterProp="children"
                      filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                      }
                      suffixIcon={<DropdownIcon />}
                      className={styles.select}
                      onSelect={onSelectModel}
                      onClear={onClear}
                      allowClear
                    >
                      {optionsCar?.length > 0 &&
                        optionsCar.map((option) => (
                          <Select.Option value={option?.name} key={option?.id}>
                            {option?.name}
                          </Select.Option>
                        ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Тип автомобиля"
                  name="categoryId"
                  rules={[
                    {
                      required: true,
                      message: 'Введите тип!',
                    },
                  ]}
                  className={styles.formItem}
                >
                  <Select
                    showSearch
                    placeholder="Введите тип"
                    optionFilterProp="children"
                    filterSort={(optionA, optionB) =>
                      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }
                    suffixIcon={<DropdownIcon />}
                    className={styles.select}
                    allowClear
                    onSelect={(LabeledValue, option) => {
                      setCategoryCar(option?.children);
                    }}
                  >
                    {optionsCategory?.length > 0 &&
                      optionsCategory.map((option) => (
                        <Select.Option value={option?.id} key={option?.id}>
                          {option?.name}
                        </Select.Option>
                      ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Доступные цвета">
                  <Input.Group className={styles.inputGroup}>
                    <Row gutter={8}>
                      <Col flex="auto">
                        <Input
                          className={styles.input}
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                        />
                      </Col>
                      <Col flex="30px">
                        <Button
                          icon={<PlusOutlined />}
                          className={styles.plusBtn}
                          onClick={() => setOptionsColors([...optionsColors, value])}
                        />
                      </Col>
                    </Row>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col xs={0} sm={12}></Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="colors"
                  rules={[
                    {
                      required: true,
                      message: 'Выберите цвет!',
                    },
                  ]}
                  className={styles.formItem}
                >
                  <Checkbox.Group options={optionsColors} className={styles.checkboxGroup} />
                </Form.Item>
              </Col>
              <Col xs={0} sm={12}></Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="priceMin"
                  label="Мин. цена"
                  rules={[
                    {
                      required: true,
                      message: 'Введите мин.цену!',
                    },
                  ]}
                  className={styles.formItem}
                >
                  <InputNumber className={styles.inputNumber} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="priceMax"
                  label="Макс. цена"
                  rules={[
                    {
                      required: true,
                      message: 'Введите макс.цену!',
                    },
                  ]}
                  className={styles.formItem}
                >
                  <InputNumber className={styles.inputNumber} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Новая машина" className={styles.formItem}>
                  <Checkbox
                    className={styles.checkbox}
                    onChange={(e) => setIsCreateCar(e.target.checked)}
                  >
                    {' '}
                    Да{' '}
                  </Checkbox>
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
