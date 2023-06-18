import {ReactNode, HTMLProps} from "react";
import {SizeType} from "antd/lib/config-provider/SizeContext";
import {ButtonShape} from "antd/lib/button";

export type ButtonTypes = "primary" | "ghost" | "dashed" | "link" | "text" | "default" | undefined

export interface IMainProps {
  danger?: boolean
  block?: boolean
  type?: ButtonTypes
  textAlign?: "center" | "left" | "right"
  className?: string
  onClick?: Function
  disabled?: boolean
  style?: React.CSSProperties
  size?: SizeType
  shape?: ButtonShape
  loading?: boolean | { delay: number }
  htmlType?: "button" | "submit" | "reset"
  icon?: React.ReactElement
  fullWidth?: boolean
  wide?: boolean
  tag?: any
  nativeProps?: HTMLProps<HTMLButtonElement>
  children?: ReactNode
  href?: string
}