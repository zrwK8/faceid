import {FC, useState} from 'react'
import {RulesProps} from "@/features/Rules/model/types";
import Rule from "@/entities/Rule";
import styles from './index.module.scss'
import CustomButton from "@/shared/ui/CustomButton";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import CustomCheckbox from "@/shared/ui/CustomCheckbox";

const Rules: FC<RulesProps> = (props) => {
  const [checked, setChecked] = useState(false)

  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(!checked)
  }

  return (
      <div className={styles.rules}>
        <Rule title="Инструкции" iconName="rule-folder"/>
        <Rule title="Правила" iconName="rule-file"/>
        <Rule title="Соглашение на обработку персональных данных" iconName="rule-person"/>
        <CustomButton onClick={onChange} size="middle" type="primary">
          Согласен(-на)
          <CustomCheckbox value={checked} onChange={onChange}></CustomCheckbox>
        </CustomButton>
      </div>
  );
};

export default Rules