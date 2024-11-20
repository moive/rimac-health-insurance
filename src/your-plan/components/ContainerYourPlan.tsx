import "../sass/your-plan.scss";
import { Breadcrumbs } from "../../shared/components/Breadcrumbs";
import { ContentPlan } from "./ContentPlan";

export const ContainerYourPlan = () => {
	return (
		<>
			<Breadcrumbs id="planes" />
			<main className="main-container">
				<ContentPlan />
			</main>
		</>
	);
};
