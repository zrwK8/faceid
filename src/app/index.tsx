import "./styles/index.scss"
import React from "react"
import {Provider} from "@/app/providers"
import Main from "@/pages/Main"
import CustomModal from "@/shared/ui/CustomModal"
import Icon from "@/shared/ui/Icon"
import Information from "@/pages/Information"
import TermsAndConditions from "@/pages/TermsAndConditions"
import PassportData from "@/features/Registration/passport-data"
import ScanPhoto from "@/features/Registration/scan-photo"
import AddChildren from "@/features/Registration/add-children"
import ChildrenItem from "@/entities/Children"
import {Router} from "@/app/providers/RouterProvider";

function App() {
	return (
		<>
			{/*<Main/>*/}
			{/*<Information/>*/}
			{/*<TermsAndConditions />*/}
			{/*<PassportData/>*/}
			{/*<ScanPhoto />*/}
			{/*<AddChildren />*/}
			<ChildrenItem />
			{/*<ChildrenItem />*/}
			{/*<ChildrenItem />*/}
		</>
	)
}

export default App

const parent = {
	name: 'Ivan',
	surname: 'Ivanov',
	patronymic: 'Petrovich',
	photo: 'path'
}
