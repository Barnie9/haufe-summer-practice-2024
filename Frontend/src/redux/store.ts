import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import userSlice from "./slices/userSlice";
import { recommendationApi } from "./api/recommendationApi";
import addRecommendationSlice from "./slices/addRecommendationSlice";
import { groupApi } from "./api/groupApi";
import addGroupSlice from "./slices/addGroupSlice";

export const store = configureStore({
	reducer: {
		userSlice: userSlice,
		addRecommendationSlice: addRecommendationSlice,
		addGroupSlice: addGroupSlice,

		[userApi.reducerPath]: userApi.reducer,
		[recommendationApi.reducerPath]: recommendationApi.reducer,
		[groupApi.reducerPath]: groupApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(userApi.middleware)
			.concat(recommendationApi.middleware)
			.concat(groupApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
