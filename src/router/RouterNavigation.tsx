import { createBrowserRouter } from "react-router-dom";
import { Home } from "../home/views/Home";
import { YourPlan } from "../your-plan/views/YourPlan";
import { Resumen } from "../resumen/views/Resumen";

const fixFutureConfig = {
	v7_relativeSplatPath: true,
	v7_fetcherPersist: true,
	v7_normalizeFormMethod: true,
	v7_partialHydration: true,
	v7_skipActionErrorRevalidation: true,
};

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/your-plan",
			element: <YourPlan />,
		},
		{
			path: "/resumen",
			element: <Resumen />,
		},
	],
	{
		future: fixFutureConfig,
	}
);
