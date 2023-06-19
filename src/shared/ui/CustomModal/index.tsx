import {FC} from 'react';
import {Modal} from "antd";
import {CustomModalProps} from "@/shared/ui/CustomModal/model/types";
import Icon from "@/shared/ui/Icon";
import './index.scss'

const CustomModal: FC<CustomModalProps> = (props) => {
    const {
        open,
        title,
        iconName,
        onCancel
    } = props
    return (
        <Modal
            title={
                <div className='modal-header'>
                    <Icon className="ant-modal-icon" name={iconName}/>
                    <span className="ant-modal-title">{title}</span>
                </div>
            }
            onCancel={onCancel}
            open={open}
            width={1080}
            footer={null}
        >
            {props.children}
        </Modal>
    );
};

export default CustomModal