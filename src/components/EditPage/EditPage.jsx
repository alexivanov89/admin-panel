import { Card, Divider, Form, Typography } from 'antd';
import styles from './EditPage.module.scss';

const EditPage = (props) => {
  const { title, cardInfo, cardSettings } = props;
  const { Title } = Typography;

  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  return (
    <>
      <Form
        name="form"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        requiredMark={false}
        className={styles.form}
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
            </Card.Grid>
          </Card>
        </div>
      </Form>
    </>
  );
};

export default EditPage;
