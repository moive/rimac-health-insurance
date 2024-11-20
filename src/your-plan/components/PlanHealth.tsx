import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { IPlan } from "../../store/types";

type Props = {
	plan: IPlan;
};
export const PlanHealth = ({ plan }: Props) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	return (
		<article className="plan">
			<div className="plan-header">
				{plan.name.includes("Clínica") ? (
					<div className="plan-recommended">Plan recomendado</div>
				) : null}

				<div className="plan-group-top">
					<h3 className="plan-header-title">{plan.name}</h3>
					<div className="plan-header-label">Costo del plan</div>
					<div className="plan-header-price">${plan.price} al mes</div>
				</div>
				<figure className="plan-icon">
					{plan.name.includes("Clínica") ? (
						<img src="./assets/icon-hospital.svg" alt="home" />
					) : (
						<img src="./assets/icon-home.svg" alt="home" />
					)}
				</figure>
			</div>
			<div className="plan-description">
				<ul>
					{plan.description.map((item, id) => (
						<li className="plan-description-item" key={id}>
							{item}
						</li>
					))}
				</ul>
			</div>
			<div className="plan-action">
				<button className="btn" disabled={isLoading}>
					{isLoading ? (
						<CircularProgress className="loading" color="inherit" />
					) : (
						<span>Cotiza aquí</span>
					)}
				</button>
			</div>
		</article>
	);
};
