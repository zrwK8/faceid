import React from "react"
import ReactDOM from "react-dom/client"
import {Provider} from "@/app/providers";
import App from "@/app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
		{/*<Provider />*/}
	</React.StrictMode>,
)
