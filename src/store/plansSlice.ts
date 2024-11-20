import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlan, PlansState } from "./types";

const initialState: PlansState = { list: [] };

export const plansSlice = createSlice({
	name: "plans",
	initialState,
	reducers: {
		addPlans: (state, action: PayloadAction<IPlan[]>) => {
			state.list = action.payload;
		},

		clearPlans: (state) => {
			state.list = initialState.list;
		},
	},
});

export const { addPlans, clearPlans } = plansSlice.actions;

export default plansSlice.reducer;
