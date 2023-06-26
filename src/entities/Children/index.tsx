import React, { FC, useState, ChangeEvent } from "react"
import Icon from "@/shared/ui/Icon"
import styles from "./index.module.scss"
import CustomButton from "@/shared/ui/CustomButton"
import CustomInput from "@/shared/ui/CustomInput"

type Props = {
	imageUrl?: string
}
const ChildrenItem: FC<Props> = (props) => {
	const { imageUrl = "" } = props
	const [data, setData] = useState({
		lastName: "",
		firstName: "",
		patronymic: "",
	})
	return (
		<div className={styles.container}>
			<div className={styles.headerWrapper}>
				<div className={styles.header}>
					<p>Данные о ребенке</p>
					<hr />
				</div>
				<Icon className={styles.icon} name="remove" />
			</div>
			<div className={styles.wrapperInfo}>
				<CustomInput
					placeholder="Фамилия"
					value={data.lastName}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setData({ ...data, lastName: e.target.value })}
				/>
				<CustomInput
					placeholder="Имя"
					value={data.firstName}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setData({ ...data, firstName: e.target.value })}
				/>
				<CustomInput
					placeholder="Отчество"
					value={data.patronymic}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setData({ ...data, patronymic: e.target.value })}
				/>
			</div>
			<div className={styles.wrapperPhoto}>
				{/*<img className={styles.photoChildren} src="https://cdn-icons-png.flaticon.com/512/1088/1088537.png" alt=""/>*/}
				<div className={styles.photoChildren__empty}>
					<Icon name="add-photo" />
				</div>
			</div>
		</div>
	)
}

export default ChildrenItem
