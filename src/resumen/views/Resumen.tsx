import { ScrollRestoration } from "react-router-dom";
import Header from "../../shared/components/Header";
import { ContainerResumen } from "../components/ContainerResumen";

export const Resumen = () => {
	return (
		<>
			<Header />
			<ContainerResumen />
			<ScrollRestoration />
			{/* <Footer /> */}
		</>
	);
};
