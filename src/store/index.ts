import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import plansSlice from "./plansSlice";

const store = configureStore({
	reducer: {
		user: userSlice,
		plans: plansSlice,
	},
});

// store.subscribe(() => console.log(store));

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
