/* eslint-disable @typescript-eslint/no-explicit-any */
export const Fetch = async (url: string) => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err: any) {
		throw new Error(err);
	}
};
