import React, { FC } from "react"
import styles from "./index.module.scss"
import Header from "@/shared/ui/Header"
import UserAccess from "@/features/UserAccess"

type Props = {}
const Main: FC<Props> = (props) => {
	return (
		<div className={styles.main}>
			<Header isMain={true} />
			<UserAccess />
		</div>
	)
}

export default Main
