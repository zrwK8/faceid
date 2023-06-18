import {FC} from 'react'
import {NotificationsProps} from "@/features/Notifications/model/types";
import Notification from "@/entities/Notification";
import styles from './index.module.scss'

const Notifications: FC<NotificationsProps> = (props) => {
  return (
      <div className={styles.notifications}>
        <Notification title="Уведомление о видеонаблюдении:" iconName="notification-video"
                      alerts={['1 пункт уведомления', '2 пункт', '3 пункт']}/>
        <Notification title="Пропуск только по системе распознавания лиц:" iconName="notification-pass"
                      alerts={['1 пункт уведомления', '2 пункт', '3 пункт']}/>
        <Notification title="Уведомление о доступе в ресторан:" iconName="notification-access"
                      alerts={['1 пункт уведомления', '2 пункт', '3 пункт']}/>
        <Notification title="Уведомление о времени прохода в ресторан:" iconName="notification-video"
                      alerts={['1 пункт уведомления', '2 пункт', '3 пункт']}/>
      </div>
  );
};

export default Notifications