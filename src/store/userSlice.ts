/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, UserState } from "./types";

const initialState: UserState = {};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload;
			localStorage.setItem("user", JSON.stringify(state.user));
		},

		clearUser: (state) => {
			state.user = initialState.user;
		},
	},
});

export const { addUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
