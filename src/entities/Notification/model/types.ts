import {IconType} from "@/shared/ui/Icon/icons/IconType";

export type NotificationProps = {
  title: string
  iconName: IconType
  alerts: Array<string>
  onClick?: any
}