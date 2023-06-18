import {FC} from 'react'
import {Button} from 'antd'
import c from 'classnames'
import {ButtonTypes, IMainProps} from "@/pages/Main/model/MainProps.interface";
import './index.scss'

const CustomButton: FC<IMainProps> = ({
                                        danger = false,
                                        block = false,
                                        type = "default",
                                        textAlign,
                                        className = "",
                                        onClick,
                                        disabled = false,
                                        style,
                                        size,
                                        shape,
                                        loading = false,
                                        htmlType = "button",
                                        icon,
                                        fullWidth = false,
                                        wide = false,
                                        tag,
                                        children,
                                        href,
                                        ...props
                                      }) => {


  const isTypeValid = ["primary", "ghost", "dashed", "link", "text", "default"].includes(type)

  const handleClick = (e: any) => {
    if (disabled) return
    if (onClick) onClick(e)
  }
  const getButtonType = (): ButtonTypes => {
    if (isTypeValid) {
      return type
    } else {
      return "text"
    }
  }
  return (
      <Button
          icon={icon}
          className={c("custom-button", className, {
            [`align-${textAlign}`]: textAlign,
            [`type-${type}`]: getButtonType() === "text",
            wide: wide,
            fullWidth: fullWidth,
            danger: danger,
          })}
          danger={danger}
          block={block}
          type={getButtonType()}
          disabled={disabled}
          style={style}
          size={size}
          shape={shape}
          loading={loading}
          htmlType={htmlType}
          onClick={handleClick}
      >
        <span className={"schild"}>{children}</span>
        {tag && <div className="tag">{tag}</div>}
      </Button>
  );
};

export default CustomButton