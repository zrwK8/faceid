import {FC} from 'react'
import c from 'classnames'
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {Checkbox} from "antd";
import {CustomCheckboxProps} from "@/shared/ui/CustomCheckbox/model/types";
import './index.scss'

const CustomCheckbox: FC<CustomCheckboxProps> = (props) => {
  const {
    value,
    defaultChecked,
    type,
    className = "",
    onChange,
    disabled = false,
    style,
    autoFocus,
    children
  } = props

  const handleChange = (e: CheckboxChangeEvent) => (onChange ? onChange(e) : "")

  return (
      <Checkbox
          className={c("custom-checkbox", className, {
            unchecked: !value,
          })}
          style={
            type === "reverse" ? {flexDirection: "row-reverse", justifyContent: "space-between", width: "100%"} : {}
          }
          checked={value}
          disabled={disabled}
          onChange={handleChange}
          defaultChecked={defaultChecked}
          autoFocus={autoFocus}
      >
        {children}
      </Checkbox>
  )
};

export default CustomCheckbox