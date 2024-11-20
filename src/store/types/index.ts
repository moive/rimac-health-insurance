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

export interface PlansState {
	list?: IPlan[];
}
export interface IPlan {
	name: string;
	price: number;
	description: [string];
	age: number;
}
