import {FC} from 'react'
import {InformationProps} from "@/pages/Information/model/types";
import Navigation from "@/features/Navigation";
import Notifications from "@/features/Notifications";
import Header from "@/shared/ui/Header";
import styles from './index.module.scss'

const Information: FC<InformationProps> = (props) => {
    return (
        <div className={styles.container}>
            <Header/>
            <Notifications/>
            <Navigation back="Назад" forward="Далее"/>
        </div>
    );
};

export default Information