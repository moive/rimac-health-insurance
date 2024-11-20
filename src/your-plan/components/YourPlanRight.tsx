/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { ItemCoveragePlan } from "./ItemCoveragePlan";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../store/userSlice";

export const YourPlanRight = () => {
	const [amountTotal, setAmountTotal] = useState<number>(14300);
	const [theft, setTheft] = useState(false);
	const [crash, setCrash] = useState(false);
	const [accidentRoad, setAccidentRoad] = useState(false);

	const [planBasic, setPlanBasic] = useState<number>(20);

	const valTheft = 15;
	const valCrash = 20;
	const valAccidentRoad = 50;

	const decrement = () => {
		setAmountTotal((amountTotal) => amountTotal - 100);
	};

	const increment = () => {
		setAmountTotal(amountTotal + 100);
	};

	const fnTheft = () => {
		if (!theft) {
			setPlanBasic(planBasic + valTheft);
		} else {
			setPlanBasic(planBasic - valTheft);
		}
		setTheft((theft) => !theft);
	};

	const fnCrash = () => {
		if (!crash) {
			setPlanBasic(planBasic + valCrash);
		} else {
			setPlanBasic(planBasic - valCrash);
		}
		setCrash((crash) => !crash);
	};
	const fnAccidentRoad = () => {
		if (!accidentRoad) {
			setPlanBasic(planBasic + valAccidentRoad);
		} else {
			setPlanBasic(planBasic - valAccidentRoad);
		}
		setAccidentRoad((accidentRoad) => !accidentRoad);
	};

	useEffect(() => {
		if (amountTotal > 16000 && crash) {
			setCrash(false);
			setPlanBasic(planBasic - valCrash);
		}
	}, [amountTotal]);

	const state = useAppSelector((state) => state);
	const { user } = state.user;
	const dispatch = useAppDispatch();
	const us = JSON.parse(localStorage.getItem("user") as string);
	useEffect(() => {
		if (!user && us) {
			dispatch(addUser(us));
		}
	}, []);

	const navigate = useNavigate();
	const welcome = () => {
		navigate("/welcome");
	};

	return (
		<div className="insurance-plan-right">
			<div className="breadcrumb">
				<a href="/">
					<img src="/assets/icon-back.svg" alt="icon-back" />{" "}
					<span>VOLVER</span>
				</a>
			</div>
			<div className="steps-mobile">
				<span>
					<img src="/assets/icon-back-mobile.svg" alt="icon-back" />{" "}
					<span>Paso 2 de 2</span>
				</span>
				<div className="slash"></div>
			</div>
			<div>
				<div className="text-large see-the-coverage">
					Mira las coberturas
				</div>
				<div className="text-large text-hide-mobile">
					<span>Hola </span>
					<span className="text-red">{user?.username}!</span>
				</div>
				<p>Conoce las coberturas para tu plan</p>
			</div>
			<div className="content-info-plan">
				<div className="content-info-plan-left">
					<div className="info-car">
						<div className="info-car-number">
							<span>Placa: </span>{" "}
							<span className="upper">{user?.car.plate}</span>
						</div>
						<div className="info-car-model">
							{/* Wolkswagen 2019 Golf */}
							{user?.car.mark} {user?.car.year} {user?.car.model}
						</div>
						<figure className="advisor">
							<img src="/assets/advisor.svg" alt="advisor" />
						</figure>
					</div>
					<div className="group-total-insurence">
						<div className="group-total-insurence-info">
							<div className="group-total-insurence-description">
								Indica la suma asegurada
							</div>
							<div className="group-total-insurence-min-max">
								<span>MIN $12,500</span>
								<span>|</span>
								<span>MAX $16,500</span>
							</div>
						</div>
						<div className="group-total-insurence-minusplus-total">
							<button onClick={decrement}>
								<img src="/assets/icon-minus.svg" alt="" />
							</button>
							<span>$ {amountTotal}</span>
							<button onClick={increment}>
								<img src="/assets/icon-plus.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="custom-plan">
						<div className="custom-plan-title">
							Agrega o quita coberturas
						</div>
						<ul className="navbar-coverage">
							<li className="navbar-coverage-item active">
								<span>Protege a tu auto</span>
							</li>
							<li className="navbar-coverage-item">
								<span>Protege a los que te rodean</span>
							</li>
							<li className="navbar-coverage-item">
								<span>Mejora tu plan</span>
							</li>
						</ul>
						<div className="protect-your-car">
							<ItemCoveragePlan
								fn={fnTheft}
								isActive={theft}
								title="Llanta robada"
								iconImage="icon-theft"
								description="He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
							/>
							{amountTotal <= 16000 ? (
								<ItemCoveragePlan
									fn={fnCrash}
									isActive={crash}
									title="Choque y/o pasarte la luz roja"
									iconImage="icon-crash"
									description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aspernatur."
								/>
							) : (
								""
							)}

							<ItemCoveragePlan
								fn={fnAccidentRoad}
								isActive={accidentRoad}
								title="Atropello en la vía Evitamiento"
								iconImage="icon-perdidatotal"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit ab in, numquam voluptate beatae inventore eos aliquam dolor esse porro eum corporis eligendi odio cumque ipsa placeat omnis totam."
							/>
						</div>
					</div>
				</div>
				<div className="content-info-plan-right">
					<div className="total-plan">
						<div className="total-plan-title">Monto</div>
						<div className="total-plan-amount">
							${planBasic.toFixed(2)}
						</div>
						<div className="total-plan-mounth">mensuales</div>
					</div>
					<div className="monto-total-mobile">
						<div className="group-des-monto">
							<div className="total-plan-amount">
								${planBasic.toFixed(2)}
							</div>
							<div className="total-plan-mounth">mensual</div>
						</div>
						<div className="grp-mobile-btn">
							<button className="btn middle" onClick={welcome}>
								Lo quiero
							</button>
						</div>
					</div>
					<div className="description-plan-final">
						<p>El precio incluye:</p>
						<ul className="description-plan-final-list">
							<li>
								<img
									src="/assets/icon-check.svg"
									alt="icon-check"
								/>{" "}
								Llanta de respuesto
							</li>
							<li>
								<img
									src="/assets/icon-check.svg"
									alt="icon-check"
								/>{" "}
								Analisis de motor
							</li>
							<li>
								<img
									src="/assets/icon-check.svg"
									alt="icon-check"
								/>{" "}
								Aros gratis
							</li>
						</ul>
						<div className="group-btn">
							<button className="btn middle" onClick={welcome}>
								Lo quiero
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
