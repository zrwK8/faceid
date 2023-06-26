import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./RouterProvider"

export function Provider() {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	)
}
