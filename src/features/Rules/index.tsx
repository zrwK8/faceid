import {FC, useState} from 'react'
import {RulesProps} from "@/features/Rules/model/types";
import Rule from "@/entities/Rule";
import styles from './index.module.scss'
import CustomButton from "@/shared/ui/CustomButton";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import CustomCheckbox from "@/shared/ui/CustomCheckbox";

const Rules: FC<RulesProps> = (props) => {
    const {setIsDisabled} = props
    const [checked, setChecked] = useState(false)
    const buttonActive = checked ? 'button-active' : ''

    const onChange = (e: CheckboxChangeEvent) => {
        setChecked(!checked)
        setIsDisabled(checked)
    }

    return (
        <div className={styles.rules}>
            <Rule title="Инструкции" iconName="rule-folder"/>
            <Rule title="Правила" iconName="rule-file"/>
            <Rule title="Соглашение на обработку персональных данных" iconName="rule-person"/>
            <CustomButton className={buttonActive} onClick={onChange} size="middle" type="primary">
                Согласен(-на)
                <CustomCheckbox value={checked} onChange={onChange}></CustomCheckbox>
            </CustomButton>
        </div>
    );
};

export default Rules