import {FC} from 'react'
import {TermsProps} from "@/pages/Terms/model/types";
import Header from "@/shared/ui/Header";
import Rules from "@/features/Rules";
import CustomButton from "@/shared/ui/CustomButton";
import styles from './index.module.scss'

const Terms: FC<TermsProps> = (props) => {
  return (
      <div className={styles.container}>
        <Header/>
        <Rules/>
        <div className={styles.navigation}>
          <CustomButton type="ghost">Назад</CustomButton>
          <CustomButton type="link">Далее</CustomButton>
        </div>
      </div>
  );
};

export default Terms