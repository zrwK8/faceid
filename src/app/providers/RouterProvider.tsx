import React, { ReactNode, lazy, ElementType, Suspense } from "react"
import { useRoutes } from "react-router-dom"

const Loadable = (Component: ElementType) =>
	function fn(props: any) {
		return (
			<Suspense fallback={<p>ss</p>}>
				<Component {...props} />
			</Suspense>
		)
	}

const MainPage = Loadable(lazy(() => import("@/pages/Main")))
const InformationPage = Loadable(lazy(() => import("@/pages/Information")))
const TermsAndConditionsPage = Loadable(lazy(() => import("@/pages/TermsAndConditions")))

export function Router() {
	return useRoutes([
		{
			children: [
				{
					path: "/",
					element: <MainPage />,
				},
				{
					path: "information",
					element: <InformationPage />,
				},
				{
					path: "terms",
					element: <TermsAndConditionsPage />,
				},
			],
		},
	])
}
