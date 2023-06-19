import {FC, useState} from 'react';
import {PassportDataProps} from "@/features/Registration/passport-data/model/types";
import Icon from "@/shared/ui/Icon";
import CustomButton from "@/shared/ui/CustomButton";
import styles from './index.module.scss'

const PassportData: FC<PassportDataProps> = (props) => {
    const {} = props
    const [isScanned, setIsScanned] = useState<boolean>(true)
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.passportScan}>
                        {!isScanned
                            ? <div>
                                <Icon name="notification-access"/>
                                <p>Шаг 1: Отсканируйте паспорт</p>
                            </div>
                            : <div>
                                <Icon name={"notification-pass"}/>
                                <p>Шаг 1: Готово!</p>
                            </div>
                        }
                        {
                            !isScanned
                                ? <CustomButton type="primary" size="small">Сканировать</CustomButton>
                                : <div>
                                    <CustomButton type="primary" size="small">Назад</CustomButton>
                                    <CustomButton type="link" size="small">Далее</CustomButton>
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
            </div>
        </>
    );
};

export default PassportData