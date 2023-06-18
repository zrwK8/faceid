import {FC} from 'react'
import {AlertProps} from "@/pages/Alert/model/types";
import Header from "@/shared/ui/Header";
import Notifications from "@/features/Notifications";
import styles from './index.module.scss'
import CustomButton from "@/shared/ui/CustomButton";

const Alert: FC<AlertProps> = (props) => {
  return (
      <div className={styles.container}>
        <Header/>
        <Notifications/>
        <div className={styles.navigation}>
          <CustomButton type="ghost">Назад</CustomButton>
          <CustomButton type="link">Далее</CustomButton>
        </div>
      </div>
  );
};

export default Alert