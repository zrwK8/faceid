import {FC, CSSProperties} from "react";
import icons, {IconType} from './icons/IconType'

type IconProps = {
  name: IconType
  className?: string
  height?: number
  width?: number
  title?: string
  parentStyle?: CSSProperties
  iconStyle?: CSSProperties
  onClick?: any
}

const Icon: FC<IconProps> = (props) => {
  const {
    name,
    className,
    parentStyle = {},
    iconStyle = {},
    height,
    width,
    title,
    onClick
  } = props
  const Component = icons[name]

  return (
      <span
          className={className ? `icon ${className}` : "icon"}
          style={parentStyle}
          onClick={onClick}
          title={title}
      >
            {Component && <Component style={iconStyle} height={height} width={width}/>}
        </span>
  );
};

export default Icon