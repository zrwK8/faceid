import {FC} from 'react';
import {NavigationProps} from "@/features/Navigation/model/types";
import styles from "./index.module.scss";
import CustomButton from "@/shared/ui/CustomButton";

const Navigation: FC<NavigationProps> = (props) => {
    const {isDisabled, back, forward} = props
    return (
        <div className={styles.navigation}>
            <CustomButton type="ghost">{back}</CustomButton>
            <CustomButton disabled={isDisabled} type="link">{forward}</CustomButton>
        </div>
    );
};

export default Navigation