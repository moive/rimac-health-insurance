import { useAppSelector } from "../../hooks/redux";
import { CheckCircle } from "@mui/icons-material";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlanHealth } from "./PlanHealth";
import { IPlan, IUser } from "../../store/types";
import { getAge } from "../../shared/utils/getAge";

const itemsPlanSelector = [
	{
		id: 1,
		title: "Para mi",
		icon: "./assets/icon-protection.svg",
		name: "my",
		description:
			"Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
	},
	{
		id: 2,
		title: "Para alguien más",
		icon: "./assets/icon-addUser.svg",
		name: "someone",
		description:
			"Realiza una cotización para uno de tus familiares o cualquier persona.",
	},
];

export const ContentPlan = () => {
	// const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem("user") as string);
	const state = useAppSelector((state) => state);
	const { list } = state.plans;
	const [plans, setPlans] = useState<IPlan[]>([]);
	const [valueSelected, setValueSelected] = useState("");

	const data = JSON.parse(localStorage.getItem("user")!) as IUser;
	const ageUserCurrent = getAge(data.birthDay);
	// console.log(ageCurrent);
	// useEffect(() => {
	// 	if (!user) {
	// 		return navigate("/");
	// 	}
	// }, []);

	useEffect(() => {
		const value = valueSelected;
		let data = list!.filter((item) => item.age > ageUserCurrent);
		if (value === "my") {
			setPlans(data);
		} else if (value === "someone") {
			data = data.map((item) => ({ ...item, price: item.price * 0.95 }));
			setPlans(data);
		}
	}, [valueSelected]);

	return (
		<>
			<div className="back">
				<a href="/">
					<img src="/assets/icon-back.svg" alt="icon-back" />{" "}
					<span>Volver</span>
				</a>
			</div>
			<div className="wrapper-content-plan">
				<section className="text-content-plan">
					<h2>{user?.name} ¿Para quién deseas cotizar?</h2>
					<p>Selecciona la opción que se ajuste más a tus necesidades.</p>
				</section>
				<div className="wrapper-plan-selected">
					<RadioGroup
						name="radio-buttons-group"
						onChange={(e, val) => setValueSelected(val)}
					>
						{itemsPlanSelector.map((item) => (
							<FormControlLabel
								key={item.id}
								value={item.name}
								control={
									<Radio
										checkedIcon={<CheckCircle />}
										color="success"
										sx={{
											"& .MuiSvgIcon-root": {
												fontSize: 28,
											},
										}}
									/>
								}
								label={
									<div className="plan-select" key={item.id}>
										<img src={item.icon} alt={item.name} />
										<div className="plan-select-title">{item.title}</div>
										<p>{item.description}</p>
									</div>
								}
							/>
						))}
					</RadioGroup>
				</div>
				{plans.length > 0 && (
					<div className="wrapper-plans">
						{plans?.map((plan) => (
							<PlanHealth plan={plan} key={plan.name} />
						))}
					</div>
				)}
			</div>
		</>
	);
};
