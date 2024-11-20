export const getAge = (dateString: string) => {
	const today = new Date();
	const birthDate = new Date(dateString);
	let age = today.getUTCFullYear() - birthDate.getUTCFullYear();
	const month = today.getUTCMonth() - birthDate.getUTCMonth();
	if (
		month < 0 ||
		(month === 0 && today.getUTCDate() < birthDate.getUTCDate())
	) {
		age--;
	}
	return age;
};
