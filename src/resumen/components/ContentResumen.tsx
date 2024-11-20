import { Link } from "react-router-dom";
import { IPlan, IUser } from "../../store/types";

export const ContentResumen = () => {
	const user = JSON.parse(localStorage.getItem("user")!) as IUser;
	const plan = JSON.parse(localStorage.getItem("plan")!) as IPlan;
	// console.log(ageCurrent);
	// useEffect(() => {
	// 	if (!user) {
	// 		return navigate("/");
	// 	}
	// }, []);

	return (
		<>
			<div className="back">
				<Link to="/your-plan">
					<img src="/assets/icon-back.svg" alt="icon-back" />{" "}
					<span>Volver</span>
				</Link>
			</div>
			<div className="wrapper-content-resumen">
				<section className="text-content-resumen">
					<h2>Resumen del seguro </h2>
					<div className="resumen">
						{user && (
							<div className="resumen-head">
								<div className="resumen-head-label">
									Precios calculados para:
								</div>
								<div className="resumen-head-person">
									<figure>
										<img src="./assets/icon-family.svg" alt="icon-family" />
									</figure>
									<span>
										{user.name} {user.lastName}
									</span>
								</div>
							</div>
						)}
						<div className="resumen-body">
							{user && (
								<div className="resumen-group">
									<div className="resumen-body-label">Responsable de pago</div>
									<p>DNI: {user.documentNumber}</p>
									<p>Celular: {user.phone}</p>
								</div>
							)}
							{plan && (
								<div className="resumen-group">
									<div className="resumen-body-label">Plan elegido</div>
									<p>{plan.name}</p>
									<p>Costo del Plan: ${plan.price} al mes</p>
								</div>
							)}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
