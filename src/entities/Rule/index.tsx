import React, { FC } from "react"
import { RuleProps } from "@/entities/Rule/model/types"
import Icon from "@/shared/ui/Icon"
import CustomButton from "@/shared/ui/CustomButton"
import styles from "./index.module.scss"

const Rule: FC<RuleProps> = (props) => {
	const { iconName, title, onClick } = props
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<Icon name={iconName} />
					<p>{title}</p>
				</div>
				<CustomButton onClick={onClick} className={styles.button} size="small" type="primary">
					Подробнее
				</CustomButton>
			</div>
		</div>
	)
}

export default Rule
