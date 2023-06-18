import {FC} from 'react'
import {NotificationProps} from "@/entities/Notification/model/types";
import Icon from "@/shared/ui/Icon";
import styles from './index.module.scss'
import CustomButton from "@/shared/ui/CustomButton";

const Notification: FC<NotificationProps> = (props) => {
  const {iconName, title, alerts, onClick} = props
  return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.notification}>
            <Icon name={iconName}/>
            <div className={styles.content}>
              <p>{title}</p>
              <ul>
                {alerts.map((alert) => <li>{alert}</li>)}
              </ul>
            </div>
          </div>
          <CustomButton size="small" className={styles.button} onClick={onClick} type="primary">Подробнее</CustomButton>
        </div>
      </div>
  );
};

export default Notification