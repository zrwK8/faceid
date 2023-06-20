import "./styles/index.scss"
import Main from '@/pages/Main'
import CustomModal from "@/shared/ui/CustomModal";
import Icon from "@/shared/ui/Icon";
import Information from "@/pages/Information";
import TermsAndConditions from "@/pages/TermsAndConditions";
import PassportData from "@/features/Registration/passport-data";

function App() {
    return (
        <>
            {/*<Main/>*/}
            {/*<Information/>*/}
            {/*<TermsAndConditions />*/}
            <PassportData/>
        </>
    )
}

export default App
