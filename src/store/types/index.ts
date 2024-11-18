export interface UserState {
	user?: IUser;
}

export interface IUser {
	id?: number | string;
	name: string;
	lastName: string;
	birthDay: string;
	phone: string;
	documentNumber: string;
	acceptPrivacy: boolean;
	acceptTermCommercial: boolean;
}
