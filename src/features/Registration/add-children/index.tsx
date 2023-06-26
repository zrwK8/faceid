import {FC, useState} from 'react'
import styles from './index.module.scss'
import Icon from "@/shared/ui/Icon";
import CustomButton from "@/shared/ui/CustomButton";
import CustomInput from "@/shared/ui/CustomInput";

type Props = {};
const AddChildren: FC<Props> = (props) => {
  const [childrens, setChildrens] = useState([{

  }])

  return (
      <div className={styles.container}>
        <div className={styles.wrapperHeader}>
          <div className={styles.passportScan}>
            <div>
              <Icon name={"child"}/>
              <p>Шаг 3: Добавьте данные ребенка (НЕ ОБЯЗАТЕЛЬНО)</p>
            </div>
            <div>
              <CustomButton type="primary" size="small">Назад</CustomButton>
              <CustomButton type="link" size="small">Добавить</CustomButton>
            </div>

          </div>
          <p>Этот шаг необходим, если с вами есть несовершеннолетний ребенок. Данные вводятся вручную. Чтобы добавить
            фото, нажмите на иконку фотоаппарата.</p>
        </div>

        <div className={styles.wrapperForm}>
          <CustomInput value="Иванов" placeholder="Фамилия"/>
          <CustomInput value="Иван" placeholder="Имя"/>
          <CustomInput value="Иванович" placeholder="Отчество"/>
          <CustomInput value="06.07.2000" placeholder="Дата рождения"/>
        </div>
        <div className={styles.wrapperPhoto}>
          <img className={styles.parentPhoto} src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="photo"/>
        </div>
        <div className={styles.wrapperChildrens}>
          {childrens.map((children) => <div>POST</div>)}
        </div>
      </div>
  );
};

export default AddChildren