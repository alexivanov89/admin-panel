import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Col,
  ConfigProvider,
  DatePicker,
  Form,
  Grid,
  InputNumber,
  message,
  Progress,
  Radio,
  Result,
  Row,
  Select,
  Space,
  Typography,
} from 'antd';
import moment from 'moment';
import 'moment/locale/ru';
import locale from 'antd/lib/locale/ru_RU';
import { EditPage } from '../../components/EditPage';
import { Image } from '../../components/UI/Image';
import NoFoto from '../../assets/img/noFoto.jpg';
import { ApplyIcon, CloseIcon, DropdownIcon } from '../../assets/icon';
import { tableService } from '../../services/tableService';
import { fetchPointAsync, fetchRateAsync } from '../../store/slices/tableSlice';
import styles from './OrderEditPage.module.scss';

const { useBreakpoint } = Grid;

const OrderEditPage = () => {
  const { Text } = Typography;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const {
    city: { cities },
    point: { points },
    rate: { rates },
    car: { cars },
    orderStatus: { values },
  } = useSelector(({ table }) => table);
  const location = useLocation();
  const history = useHistory();

  const order = location.state?.order;
  const [percentFillFields, setPercentFillFields] = useState(100);

  const initialValuesForm = {
    orderStatusId: order?.orderStatusId?.id,
    carId: order?.carId?.id,
    pointId: order?.pointId?.id,
    rateId: order?.rateId?.id,
    cityId: order?.cityId?.id,
    color: order?.color,
    price: order?.price,
    isFullTank: order?.isFullTank,
    isNeedChildChair: order?.isNeedChildChair,
    isRightWheel: order?.isRightWheel,
    dateFrom: moment(order?.dateFrom),
    dateTo: moment(order?.dateTo),
  };

  const [checkedIsFullTank, setCheckedIsFullTank] = useState(initialValuesForm?.isFullTank);
  const [checkedIsNeedChildChair, setCheckedIsNeedChildChair] = useState(
    initialValuesForm?.isNeedChildChair,
  );
  const [checkedIsRightWheel, setCheckedIsRightWheel] = useState(initialValuesForm?.isRightWheel);

  const initialImgCar = {
    path: order?.carId?.thumbnail?.path,
    name: order?.carId?.thumbnail?.originalname,
  };
  const [imgCar, setImgCar] = useState(initialImgCar);
  const initialModelCar = order?.carId?.name;
  const [modelCar, setModelCar] = useState(initialModelCar);
  const initialCategoryCar = order?.carId?.categoryId?.name;
  const [categoryCar, setCategoryCar] = useState(initialCategoryCar);
  const initialDescriptionCar = order?.carId?.description;
  const [descriptionCar, setDescriptionCar] = useState(initialDescriptionCar);

  const initialOptionsColors = order?.carId?.colors;
  const [optionsColors, setOptionsColors] = useState(initialOptionsColors);
  const optionsOrderStatus = values;
  const optionsCar = cars;
  const optionsCities = cities;
  const [optionsPoints, setOptionsPoints] = useState(
    points.filter((point) => point?.cityId?.id === order?.cityId?.id),
  );
  const optionsRates = rates;

  const screens = useBreakpoint();

  const messageCreate = (type, messageText) => {
    const config = {
      content: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <span>{messageText}</span>
          <CloseIcon
            className={styles.closeIcon}
            onClick={() => {
              message.destroy(messageText);
            }}
          />
        </div>
      ),
      duration: 3,
      key: messageText,
      onClick: () => message.destroy(messageText),
      style: {
        marginTop: '59.5px',
        position: 'relative',
        width: screens.xl ? 'calc(100% - 285px)' : '100%',
        left: screens.xl ? '285px' : '0',
      },
      icon: <ApplyIcon className={styles.messageIcon} />,
    };
    switch (type) {
      case 'success':
        message.success({ ...config, className: styles.messageSuccess });
        break;
      case 'error':
        message.error({ ...config, className: styles.messageError });
        break;

      default:
        message.success({ ...config, className: styles.messageSuccess });
        break;
    }
  };

  const onFinish = () => {
    form
      .validateFields()
      .then((fieldsValue) => {
        const prepareFieldsValue = {
          ...fieldsValue,
          orderStatusId: { id: form.getFieldValue('orderStatusId') },
          carId: { id: form.getFieldValue('carId') },
          cityId: { id: form.getFieldValue('cityId') },
          pointId: { id: form.getFieldValue('pointId') },
          rateId: { id: form.getFieldValue('rateId') },
          dateFrom: form.getFieldValue('dateFrom')?.valueOf(),
          dateTo: form.getFieldValue('dateTo')?.valueOf(),
        };

        tableService
          .putOrderById(order?.id, prepareFieldsValue)
          .then(() => {
            messageCreate('success', '??????????! ?????????? ??????????????');
          })
          .then(() => {
            history.goBack();
          })
          .catch(() => {
            messageCreate('error', '?????? ?????????????????? ???????????? ?????????????????? ????????????');
          });
      })

      .catch(() => {});
  };

  const onDelete = () => {
    form
      .validateFields()
      .then(() => {
        tableService
          .deleteOrderById(order?.id)
          .then(() => {
            messageCreate('success', '??????????! ?????????? ????????????');
          })
          .then(() => {
            history.goBack();
          })
          .catch(() => {
            messageCreate('error', '?????? ???????????????? ???????????? ?????????????????? ????????????');
          });
      })
      .catch(() => {});
  };

  const onCreate = () => {
    form
      .validateFields()
      .then((fieldsValue) => {
        const prepareFieldsValue = {
          ...fieldsValue,
          orderStatusId: { id: form.getFieldValue('orderStatusId') },
          carId: { id: form.getFieldValue('carId') },
          cityId: { id: form.getFieldValue('cityId') },
          pointId: { id: form.getFieldValue('pointId') },
          rateId: { id: form.getFieldValue('rateId') },
          dateFrom: form.getFieldValue('dateFrom')?.valueOf(),
          dateTo: form.getFieldValue('dateTo')?.valueOf(),
        };

        tableService
          .postOrder(prepareFieldsValue)
          .then(() => {
            messageCreate('success', '??????????! ?????????? ????????????');
          })
          .then(() => {
            history.goBack();
          })
          .catch(() => {
            messageCreate('error', '?????? ???????????????? ???????????? ?????????????????? ????????????');
          });
      })
      .catch(() => {});
  };

  const onFieldsChange = (changedFields, allFields) => {
    const getPercentFillFields = (fields) => {
      const requiredFields = fields.filter(
        ({ name }) => !['isFullTank', 'isNeedChildChair', 'isRightWheel'].includes(name[0]),
      );
      const amountFields = requiredFields.length;
      const amountFillFields = requiredFields.filter(({ value }) => {
        if (Array.isArray(value)) {
          return value.length > 0 ? true : false;
        } else {
          return Boolean(value);
        }
      }).length;
      return Math.round((amountFillFields * 100) / amountFields);
    };
    setPercentFillFields(getPercentFillFields(allFields));
  };

  useEffect(() => {
    dispatch(fetchRateAsync());
    dispatch(fetchPointAsync());
  }, []);

  const buttons = (
    <Row
      style={{
        paddingTop: 16,
      }}
    >
      <Col span={12}>
        <Form.Item>
          <Space size={12.5} wrap>
            <Button type="primary" htmlType="submit" className={styles.saveBtn}>
              ??????????????????
            </Button>
            <Button
              className={styles.cancelBtn}
              onClick={() => {
                form.resetFields();
                setCheckedIsFullTank(initialValuesForm?.isFullTank);
                setCheckedIsNeedChildChair(initialValuesForm?.isNeedChildChair);
                setCheckedIsRightWheel(initialValuesForm?.isRightWheel);
                setImgCar(initialImgCar);
                setModelCar(initialModelCar);
                setCategoryCar(initialCategoryCar);
                setDescriptionCar(initialDescriptionCar);
                setOptionsColors(initialOptionsColors);
                setPercentFillFields(100);
              }}
            >
              ????????????????
            </Button>
          </Space>
        </Form.Item>
      </Col>
      <Col span={12} className={styles.groupBtnRight}>
        <Space size={12.5} wrap>
          <Button className={styles.createBtn} onClick={onCreate}>
            ??????????????
          </Button>
          <Form.Item>
            <Button className={styles.deleteBtn} onClick={onDelete}>
              ??????????????
            </Button>
          </Form.Item>
        </Space>
      </Col>
    </Row>
  );

  return (
    <ConfigProvider locale={locale}>
      <Form
        name="form"
        layout="vertical"
        initialValues={initialValuesForm}
        autoComplete="off"
        requiredMark={false}
        className={styles.form}
        form={form}
        onFinish={onFinish}
        onFieldsChange={onFieldsChange}
      >
        <EditPage
          title={`???????????????? ????????????`}
          buttons={buttons}
          cardInfo={{
            header: (
              <Result
                icon={
                  <div className={styles.carImage}>
                    <Image src={imgCar?.path} alt={imgCar?.name} fallback={NoFoto} loading="lazy" />
                  </div>
                }
                title={modelCar}
                subTitle={categoryCar}
                extra={null}
                className={styles.cardInfoResult}
              />
            ),
            body: (
              <Progress
                percent={percentFillFields}
                format={(percent) => (
                  <>
                    <p className={styles.progressTitle}>??????????????????</p>
                    <p className={styles.progressValue}>{percent}%</p>
                  </>
                )}
                className={styles.cardInfoProgress}
              />
            ),
            footer: (
              <Space direction="vertical" size={13.5} className={styles.cardInfoSpace}>
                <Text className={styles.cardInfoTitle}>????????????????</Text>
                <Text className={styles.cardInfoDescription}>{descriptionCar}</Text>
              </Space>
            ),
          }}
          cardSettings={{
            header: (
              <h2 className={styles.cardSettingsHeader}>{`?????????????????? ????????????: id ${order?.id}`}</h2>
            ),
            body: (
              <>
                <Row gutter={[21, 8]}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="???????????? ????????????"
                      name="orderStatusId"
                      rules={[
                        {
                          required: true,
                          message: '???????????????? ???????????? ????????????!',
                        },
                      ]}
                      className={styles.formItem}
                    >
                      <Select
                        showSearch
                        placeholder="???????????????? ???????????? ????????????"
                        optionFilterProp="children"
                        filterSort={(optionA, optionB) =>
                          optionA.children
                            .toLowerCase()
                            .localeCompare(optionB.children.toLowerCase())
                        }
                        suffixIcon={<DropdownIcon />}
                        className={styles.select}
                        allowClear
                      >
                        {optionsOrderStatus?.length > 0 &&
                          optionsOrderStatus.map((option) => (
                            <Select.Option value={option?.id} key={option?.id}>
                              {option?.name}
                            </Select.Option>
                          ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="???????????? ????????????????????"
                      name="carId"
                      rules={[
                        {
                          required: true,
                          message: '???????????????? ????????????!',
                        },
                      ]}
                      className={styles.formItem}
                    >
                      <Select
                        showSearch
                        placeholder="???????????????? ????????????"
                        optionFilterProp="children"
                        filterSort={(optionA, optionB) =>
                          optionA.children
                            .toLowerCase()
                            .localeCompare(optionB.children.toLowerCase())
                        }
                        suffixIcon={<DropdownIcon />}
                        className={styles.select}
                        onSelect={(LabeledValue, option) => {
                          const id = option?.value;
                          const getCar = (id) => {
                            return cars.find((car) => car?.id === id);
                          };
                          const car = getCar(id);

                          setImgCar({
                            path: car?.thumbnail?.path,
                            name: car?.thumbnail?.originalname,
                          });
                          setModelCar(car?.name);
                          setCategoryCar(car?.categoryId?.name);
                          setDescriptionCar(car?.categoryId?.description);
                          setOptionsColors(car?.colors);
                        }}
                        onClear={() => {
                          setImgCar({
                            path: null,
                            name: null,
                          });
                          setModelCar(null);
                          setCategoryCar(null);
                          setDescriptionCar(null);
                        }}
                        allowClear
                      >
                        {optionsCar?.length > 0 &&
                          optionsCar.map((option) => (
                            <Select.Option value={option?.id} key={option?.id}>
                              {option?.name}
                            </Select.Option>
                          ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="??????????"
                      name="cityId"
                      rules={[
                        {
                          required: true,
                          message: '???????????????? ??????????!',
                        },
                      ]}
                      className={styles.formItem}
                    >
                      <Select
                        showSearch
                        placeholder="???????????????? ??????????"
                        optionFilterProp="children"
                        filterSort={(optionA, optionB) =>
                          optionA.children
                            .toLowerCase()
                            .localeCompare(optionB.children.toLowerCase())
                        }
                        suffixIcon={<DropdownIcon />}
                        className={styles.select}
                        onSelect={(LabeledValue, option) => {
                          const filteredPoints = points.filter(
                            (point) => point?.cityId?.id === option.value,
                          );
                          setOptionsPoints(filteredPoints);

                          const values = form.getFieldsValue(true);
                          form.setFieldsValue({ ...values, pointId: null });
                        }}
                        onClear={() => {
                          const values = form.getFieldsValue(true);
                          form.setFieldsValue({ ...values, pointId: null });
                          setOptionsPoints([]);
                        }}
                        allowClear
                      >
                        {optionsCities?.length > 0 &&
                          optionsCities.map((option) => (
                            <Select.Option value={option?.id} key={option?.id}>
                              {option?.name}
                            </Select.Option>
                          ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="??????????"
                      name="pointId"
                      rules={[
                        {
                          required: true,
                          message: '???????????????? ??????????!',
                        },
                      ]}
                      className={styles.formItem}
                    >
                      <Select
                        showSearch
                        placeholder="???????????????? ??????????"
                        optionFilterProp="children"
                        filterSort={(optionA, optionB) =>
                          optionA.children
                            .toLowerCase()
                            .localeCompare(optionB.children.toLowerCase())
                        }
                        suffixIcon={<DropdownIcon />}
                        className={styles.select}
                        allowClear
                      >
                        {optionsPoints?.length > 0 &&
                          optionsPoints.map((option) => (
                            <Select.Option value={option?.id} key={option?.id}>
                              {option?.name}
                            </Select.Option>
                          ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="??????????"
                      name="rateId"
                      rules={[
                        {
                          required: true,
                          message: '???????????????? ??????????!',
                        },
                      ]}
                      className={styles.formItem}
                    >
                      <Select
                        showSearch
                        placeholder="???????????????? ??????????"
                        optionFilterProp="children"
                        suffixIcon={<DropdownIcon />}
                        className={styles.select}
                        allowClear
                      >
                        {optionsRates?.length > 0 &&
                          optionsRates.map((option) => (
                            <Select.Option value={option?.id} key={option?.id}>
                              {option?.rateTypeId?.name}
                            </Select.Option>
                          ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="price"
                      label="????????"
                      rules={[
                        {
                          required: true,
                          message: '?????????????? ????????!',
                        },
                      ]}
                      className={styles.formItem}
                    >
                      <InputNumber min={1} className={styles.inputNumber} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="???????? ????????????"
                      name="color"
                      rules={[
                        {
                          required: true,
                          message: '???????????????? ????????!',
                        },
                      ]}
                      className={styles.formItem}
                    >
                      <Radio.Group options={optionsColors} className={styles.radioGroup} />
                    </Form.Item>
                  </Col>
                  <Col xs={0} sm={12}></Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="isFullTank"
                      rules={[
                        {
                          required: false,
                        },
                      ]}
                      className={styles.formItem}
                    >
                      <Checkbox
                        checked={checkedIsFullTank}
                        onChange={(e) => {
                          setCheckedIsFullTank(e.target.checked);
                          const values = form.getFieldsValue(true);
                          form.setFieldsValue({
                            ...values,
                            isFullTank: !form.getFieldValue('isFullTank'),
                          });
                        }}
                        className={styles.checkbox}
                      >
                        ???????????? ??????
                      </Checkbox>
                    </Form.Item>
                    <Form.Item
                      name="isNeedChildChair"
                      rules={[
                        {
                          required: false,
                        },
                      ]}
                      className={styles.formItem}
                    >
                      <Checkbox
                        checked={checkedIsNeedChildChair}
                        onChange={(e) => {
                          setCheckedIsNeedChildChair(e.target.checked);
                          const values = form.getFieldsValue(true);
                          form.setFieldsValue({
                            ...values,
                            isNeedChildChair: !form.getFieldValue('isNeedChildChair'),
                          });
                        }}
                        className={styles.checkbox}
                      >
                        ?????????????? ??????????????
                      </Checkbox>
                    </Form.Item>
                    <Form.Item
                      name="isRightWheel"
                      rules={[
                        {
                          required: false,
                        },
                      ]}
                      className={styles.formItem}
                    >
                      <Checkbox
                        checked={checkedIsRightWheel}
                        onChange={(e) => {
                          setCheckedIsRightWheel(e.target.checked);
                          const values = form.getFieldsValue(true);
                          form.setFieldsValue({
                            ...values,
                            isRightWheel: !form.getFieldValue('isRightWheel'),
                          });
                        }}
                        className={styles.checkbox}
                      >
                        ???????????? ????????
                      </Checkbox>
                    </Form.Item>
                  </Col>
                  <Col xs={0} sm={12}></Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="dateFrom"
                      label="???????? ???????????? ?? "
                      rules={[
                        {
                          type: 'object',
                          required: true,
                          message: '?????????????? ????????!',
                        },
                      ]}
                      className={styles.formItem}
                    >
                      <DatePicker showTime />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="dateTo"
                      label="???????? ???????????? ???? "
                      rules={[
                        {
                          type: 'object',
                          required: true,
                          message: '?????????????? ????????!',
                        },
                      ]}
                      className={styles.formItem}
                    >
                      <DatePicker showTime />
                    </Form.Item>
                  </Col>
                </Row>
              </>
            ),
          }}
        />
      </Form>
    </ConfigProvider>
  );
};

export default OrderEditPage;
