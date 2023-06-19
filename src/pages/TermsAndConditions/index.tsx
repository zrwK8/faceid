import {FC, useState} from 'react'
import {TermsAndConditionsProps} from "@/pages/TermsAndConditions/model/types";
import Rules from "@/features/Rules";
import Navigation from "@/features/Navigation";
import Header from "@/shared/ui/Header";
import styles from './index.module.scss'

const TermsAndConditions: FC<TermsAndConditionsProps> = (props) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    return (
        <div className={styles.container}>
            <Header/>
            <Rules setIsDisabled={setIsDisabled} />
            <Navigation back="Назад" forward="Начать регистрацию" isDisabled={isDisabled}/>
        </div>
    );
};

export default TermsAndConditions