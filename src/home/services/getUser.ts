import { Fetch } from "../../shared/utils/Fetch";

export const getUser = async () => {
	const url = "https://rimac-front-end-challenge.netlify.app/api/user.json";
	const user = await Fetch(url);
	return user;
};
