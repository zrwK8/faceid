import {FC, useState} from 'react';
import {PassportDataProps} from "@/features/Registration/passport-data/model/types";
import Icon from "@/shared/ui/Icon";
import CustomButton from "@/shared/ui/CustomButton";
import CustomInput from "@/shared/ui/CustomInput";
import styles from './index.module.scss'

const PassportData: FC<PassportDataProps> = (props) => {
    const {} = props
    const [isScanned, setIsScanned] = useState<boolean>(true)
    const [formValue, setFormValue] = useState({
        firstName: '',
        lastName: '',
        patronymic: '',
        birthDay: ''
    })

    return (
        <div className={styles.container}>
            <div className={styles.wrapperHeader}>
                <div className={styles.passportScan}>
                    {!isScanned
                        ? <div>
                            <Icon name="passport"/>
                            <p>Шаг 1: Отсканируйте паспорт</p>
                        </div>
                        : <div>
                            <Icon name={"passport-active"}/>
                            <p>Шаг 1: Готово!</p>
                        </div>
                    }
                    {
                        !isScanned
                            ? <CustomButton type="primary" size="small">Сканировать</CustomButton>
                            : <div>
                                <CustomButton type="primary" size="small">Назад</CustomButton>
                                <CustomButton onClick={() => alert(4)} type="link" size="small">Далее</CustomButton>
                            </div>
                    }
                </div>
                {!isScanned
                    ? <p>Приложите паспорт к сканеру и нажмите “Сканировать”, чтобы заполнить данные ниже:</p>
                    : <p>Если данные введены неправильно, вы можете их отредактировать. Если же все
                        верно, нажмите “Далее”
                    </p>
                }
            </div>

            <div className={styles.wrapperForm}>
                <CustomInput value={formValue.lastName} onChange={(e: any) => setFormValue({...formValue, lastName: e.target.value})} placeholder="Фамилия"/>
                <CustomInput value={formValue.firstName} onChange={(e: any) => setFormValue({...formValue, firstName: e.target.value})} placeholder="Имя"/>
                <CustomInput value={formValue.patronymic} onChange={(e: any) => setFormValue({...formValue, patronymic: e.target.value})} placeholder="Отчество"/>
                <CustomInput value={formValue.birthDay} onChange={(e: any) => setFormValue({...formValue, birthDay: e.target.value})} placeholder="Дата рождения"/>
            </div>
        </div>
    );
};

export default PassportData