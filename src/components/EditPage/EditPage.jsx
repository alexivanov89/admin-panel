import { Button, Card, Col, Divider, Form, message, Row, Space, Typography } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { tableService } from '../../services/tableService';
import { setPercent } from '../../store/slices/percentFillFields';
import { fetchCarAsync } from '../../store/slices/tableSlice';
import styles from './EditPage.module.scss';

const EditPage = (props) => {
  const { title, cardInfo, cardSettings, initialValues, file, categories, id } = props;
  const { Title } = Typography;
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const onFinish = () => {
    form
      .validateFields()
      .then((values) => {
        if (Object.keys(values).includes('thumbnail')) {
          const prepareValues = {
            priceMin: form.getFieldValue('priceMin'),
            priceMax: form.getFieldValue('priceMax'),
            name: form.getFieldValue('name'),
            description: form.getFieldValue('description'),
            colors: form.getFieldValue('colors'),
            categoryId: categories.find((item) => item.id === form.getFieldValue('categoryId')),
            thumbnail: {
              path: file?.preview,
              size: file?.size,
              originalname: file?.name,
              mimetype: file?.type,
            },
          };
          // console.log('prepareValues:', prepareValues);
          // console.log('id:', id);
          tableService
            .putCarById(id, prepareValues)
            .then(() => {
              form.resetFields();
            })
            .then(() => {
              message.success(`Машина успешно сохранена.`);
              dispatch(fetchCarAsync());
            })
            .catch(() => message.error(`При сохранении машины  произошла ошибка.`));
        } else {
        }
      })

      .catch((info) => {});
  };

  const onCancel = () => {
    form.resetFields();
  };

  const onDelete = () => {
    form
      .validateFields()
      .then((values) => {
        tableService
          .deleteCarById(id)
          .then(() => {
            form.resetFields();
          })
          .then(() => {
            message.success(`Машина успешно удалена.`);
            dispatch(fetchCarAsync());
          })
          .catch(() => message.error(`При удалении машины  произошла ошибка.`));
      })
      .catch((info) => {});
  };

  const onCreate = () => {
    form
      .validateFields()
      .then((values) => {
        if (Object.keys(values).includes('thumbnail')) {
          const prepareValues = {
            priceMin: form.getFieldValue('priceMin'),
            priceMax: form.getFieldValue('priceMax'),
            name: form.getFieldValue('name'),
            description: form.getFieldValue('description'),
            colors: form.getFieldValue('colors'),
            categoryId: categories.find((item) => item.id === form.getFieldValue('categoryId')),
            thumbnail: {
              path: file?.preview,
              size: file?.size,
              originalname: file?.name,
              mimetype: file?.type,
            },
          };

          tableService
            .postCar(prepareValues)
            .then(() => {
              form.resetFields();
            })
            .then(() => {
              message.success(`Машина успешно создана.`);
              dispatch(fetchCarAsync());
            })
            .catch(() => message.error(`При создании машины  произошла ошибка.`));
        } else {
        }
      })
      .catch((info) => {});
  };

  const onFieldsChange = (changedFields, allFields) => {
    const percentFillFields = (fields) => {
      const amountFields = fields.length;
      const amountFillFields = fields.filter(({ value }) => {
        if (Array.isArray(value)) {
          return value.length > 0 ? true : false;
        } else {
          return Boolean(value);
        }
      }).length;

      return Math.round((amountFillFields * 100) / amountFields);
    };
    dispatch(setPercent(percentFillFields(allFields)));
  };

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [initialValues]);

  return (
    <>
      <Form
        name="form"
        layout="vertical"
        initialValues={initialValues}
        autoComplete="off"
        requiredMark={false}
        className={styles.form}
        form={form}
        onFinish={onFinish}
        onFieldsChange={onFieldsChange}
      >
        <Title className={styles.title}>{title}</Title>
        <div className={styles.container}>
          <Card bordered={false} className={styles.cardInfo}>
            <Card.Grid hoverable={false} className={styles.cardInfoHeader}>
              {cardInfo.header}
            </Card.Grid>
            <Divider className={styles.divider} />
            <Card.Grid hoverable={false} className={styles.cardInfoBody}>
              {cardInfo.body}
            </Card.Grid>
            <Divider className={styles.divider} />
            <Card.Grid hoverable={false} className={styles.cardInfoFooter}>
              {cardInfo.footer}
            </Card.Grid>
          </Card>
          <Card bordered={false} className={styles.cardSettings} bodyStyle={bodyStyle}>
            <Card.Grid hoverable={false} className={styles.cardSettingsHeader}>
              {cardSettings.header}
            </Card.Grid>
            <Card.Grid hoverable={false} className={styles.cardSettingsBody}>
              {cardSettings.body}
              <Row>
                <Col span={12}>
                  <Form.Item>
                    <Space size={12.5} wrap>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className={styles.saveBtn}
                        disabled={!id}
                      >
                        Сохранить
                      </Button>
                      <Button className={styles.cancelBtn} onClick={onCancel}>
                        Отменить
                      </Button>
                    </Space>
                  </Form.Item>
                </Col>
                <Col span={12} className={styles.groupBtnRight}>
                  <Space size={12.5} wrap>
                    <Button className={styles.createBtn} onClick={onCreate}>
                      Создать
                    </Button>
                    <Form.Item>
                      <Button className={styles.deleteBtn} onClick={onDelete} disabled={!id}>
                        Удалить
                      </Button>
                    </Form.Item>
                  </Space>
                </Col>
              </Row>
            </Card.Grid>
          </Card>
        </div>
      </Form>
    </>
  );
};

export default EditPage;
