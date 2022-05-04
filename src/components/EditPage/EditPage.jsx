import { Card, Divider, Typography } from 'antd';
import styles from './EditPage.module.scss';

const EditPage = (props) => {
  const { title, cardInfo, cardSettings, buttons } = props;
  const { Title } = Typography;

  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  return (
    <>
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
            {buttons}
          </Card.Grid>
        </Card>
      </div>
    </>
  );
};

export default EditPage;
