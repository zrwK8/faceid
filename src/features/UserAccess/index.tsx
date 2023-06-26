import React, { FC } from "react"
import CustomButton from "@/shared/ui/CustomButton"
import styles from "./index.module.scss"
import { useNavigate } from 'react-router-dom';

type Props = {}
const UserAccess: FC<Props> = (props) => {
  const navigate = useNavigate()
	return (
		<div className={styles.access}>
			<p className={styles.title}>Добро пожаловать в ресторан АО “ОЭЗ ППТ “Алабуга”</p>
			<CustomButton onClick={() => navigate('/information')} className={styles.button} type="default">
				Запросить доступ
			</CustomButton>
		</div>
	)
}

export default UserAccess
