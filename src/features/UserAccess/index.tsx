import {FC} from 'react'
import CustomButton from '@/shared/ui/CustomButton'
import styles from './index.module.scss'

type Props = {};
const UserAccess: FC<Props> = (props) => {
  return (
      <div className={styles.access}>
        <p className={styles.title}>Добро пожаловать в ресторан
          АО “ОЭЗ ППТ “Алабуга”</p>
        <CustomButton className={styles.button} type="default">Запросить доступ</CustomButton>
      </div>
  );
};

export default UserAccess