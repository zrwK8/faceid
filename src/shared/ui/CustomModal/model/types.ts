import {IconType} from "@/shared/ui/Icon/icons/IconType";

export type CustomModalProps = {
    open?: boolean
    children?: any
    iconName: IconType
    title: string
    onCancel: () => void;
}