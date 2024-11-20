import "../sass/resumen.scss";
import { Breadcrumbs } from "../../shared/components/Breadcrumbs";
import { ContentResumen } from "./ContentResumen";

export const ContainerResumen = () => {
	return (
		<>
			<Breadcrumbs id="resumen" />
			<main className="main-container">
				<ContentResumen />
			</main>
		</>
	);
};
