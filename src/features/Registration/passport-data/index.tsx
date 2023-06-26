import React, { FC, useRef, useState } from "react"
import { PassportDataProps } from "@/features/Registration/passport-data/model/types"
import Icon from "@/shared/ui/Icon"
import CustomButton from "@/shared/ui/CustomButton"
import CustomInput from "@/shared/ui/CustomInput"
import CustomModal from "@/shared/ui/CustomModal"
import styles from "./index.module.scss"

const PassportData: FC<PassportDataProps> = () => {
	const [isScanned, setIsScanned] = useState<boolean>(false)
	const [openModal, setOpenModal] = useState<boolean>(false)
	const [formValue, setFormValue] = useState({
		firstName: "",
		lastName: "",
		patronymic: "",
		birthDay: "",
	})
	const videoRef = useRef<HTMLVideoElement>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [imageUrl, setImageUrl] = useState<string>("")
	const [counterdown, setCounterdown] = useState<number>(3)

	const takePhoto = () => {
		if (canvasRef.current) {
			canvasRef.current
				.getContext("2d")
				?.drawImage(videoRef.current!, 0, 0, canvasRef.current.width, canvasRef.current.height)
			const image_data_url = canvasRef.current.toDataURL("image/jpeg")

			setImageUrl(image_data_url)
		}
	}

	const getScanPassport = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
			if (videoRef.current) {
				videoRef.current.srcObject = stream
				let i = 3
				const countdownInterval = setInterval(() => {
					if (i === 0) {
						clearInterval(countdownInterval)
						takePhoto()
						setCounterdown(i)
						const tracks = stream.getTracks()
						tracks.forEach((track) => track.stop())
						return
					}
					setCounterdown(i)
					i--
				}, 1000)
			}
		} catch (err) {
			console.error("Ошибка получения потока видео: ", err)
		}
	}
	const resetPhoto = async () => {
		setImageUrl("")
		if (canvasRef.current) {
			canvasRef.current.getContext("2d")?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
		}
		await getScanPassport()
		setIsScanned(false)
	}

	const getScan = async () => {
		setOpenModal(true)
		await getScanPassport()
	}

	const sendScan = () => {
		setOpenModal(false)
		setIsScanned(true)
		if (videoRef?.current?.srcObject) {
			videoRef.current.srcObject = null
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.wrapperHeader}>
				<div className={styles.passportScan}>
					{!isScanned ? (
						<div>
							<Icon name="passport" />
							<p>Шаг 1: Отсканируйте паспорт</p>
						</div>
					) : (
						<div>
							<Icon name={"passport-active"} />
							<p>Шаг 1: Готово!</p>
						</div>
					)}
					{!isScanned ? (
						<CustomButton type="primary" size="small" onClick={getScan}>
							Сканировать
						</CustomButton>
					) : (
						<div>
							<CustomButton
								onClick={() => {
									setIsScanned(false)
									setImageUrl("")
								}}
								type="primary"
								size="small"
							>
								Назад
							</CustomButton>
							<CustomButton onClick={sendScan} type="link" size="small">
								Далее
							</CustomButton>
						</div>
					)}
				</div>
				{!isScanned ? (
					<p>Приложите паспорт к сканеру и нажмите “Сканировать”, чтобы заполнить данные ниже:</p>
				) : (
					<p>Если данные введены неправильно, вы можете их отредактировать. Если же все верно, нажмите “Далее”</p>
				)}
			</div>

			<CustomModal
				onCancel={() => setOpenModal(false)}
				iconName={imageUrl ? "passport-active" : "passport"}
				title="Скан паспорта"
				open={openModal}
			>
				<div className={styles.videoContainer}>
					{imageUrl ? (
						<img className={styles.video} src={imageUrl} alt="asd" />
					) : (
						<video className={styles.video} ref={videoRef} autoPlay></video>
					)}
					{counterdown > 0 && (
						<div className={styles.counterdown}>
							<span>{counterdown}</span>
						</div>
					)}
					<canvas
						style={{ display: "none" }}
						className={styles.video}
						ref={canvasRef}
						height={782}
						width={1040}
					></canvas>
				</div>
				{imageUrl && (
					<div className={styles.controlPanel}>
						<CustomButton onClick={resetPhoto} size="middle" type="primary">
							Попробывать ещё раз
						</CustomButton>
						<CustomButton onClick={sendScan} size="middle" type="link">
							Готово
						</CustomButton>
					</div>
				)}
			</CustomModal>

			<div className={styles.wrapperForm}>
				<CustomInput
					value={formValue.lastName}
					onChange={(e: any) => setFormValue({ ...formValue, lastName: e.target.value })}
					placeholder="Фамилия"
				/>
				<CustomInput
					value={formValue.firstName}
					onChange={(e: any) => setFormValue({ ...formValue, firstName: e.target.value })}
					placeholder="Имя"
				/>
				<CustomInput
					value={formValue.patronymic}
					onChange={(e: any) => setFormValue({ ...formValue, patronymic: e.target.value })}
					placeholder="Отчество"
				/>
				<CustomInput
					value={formValue.birthDay}
					onChange={(e: any) => setFormValue({ ...formValue, birthDay: e.target.value })}
					placeholder="Дата рождения"
				/>
			</div>
			<div className={styles.wrapperPhoto}>
				{isScanned && <img onClick={getScan} className={styles.parentPhoto} src={imageUrl} alt="photo" />}
			</div>
		</div>
	)
}

export default PassportData
