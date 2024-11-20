import { Fetch } from "../../shared/utils/Fetch";

export const getPlans = async () => {
	const url = "https://rimac-front-end-challenge.netlify.app/api/plans.json";
	const plans = await Fetch(url);
	return plans;
};
