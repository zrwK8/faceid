import {FC} from 'react';
import {Input} from "antd";
import {CustomInputProps} from "@/shared/ui/CustomInput/model/types";
import './index.scss'

const CustomInput: FC<CustomInputProps> = (props) => {
    const {placeholder, value, onChange} = props
    return (
        <Input value={value} onChange={onChange} className="custom-input" placeholder={placeholder} />
    );
};

export default CustomInput