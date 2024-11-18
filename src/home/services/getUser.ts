import { Fetch } from "../../shared/utils/Fetch";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getUser = async () => {
	const url = "https://rimac-front-end-challenge.netlify.app/api/user.json";
	const user = await Fetch(url);
	return user;
};
