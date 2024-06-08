import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import userSlice from "./slices/userSlice";

export const store = configureStore({
	reducer: {
		userSlice: userSlice,
		[userApi.reducerPath]: userApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
