export type CheckboxTypes = "reverse" | undefined

export type CustomCheckboxProps = Readonly<{
  autoFocus?: boolean
  type?: CheckboxTypes
  value?: boolean
  defaultChecked?: boolean
  className?: string
  onChange?: Function
  disabled?: boolean
  children?: any
  style?: React.CSSProperties
}>