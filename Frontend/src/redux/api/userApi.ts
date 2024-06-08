import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../types";

export const userApi = createApi({
	reducerPath: "userApi",

	baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7259/api/" }),

	tagTypes: ["User"],

	endpoints: (builder) => ({
		createUser: builder.mutation<User, User>({
			query: (user) => ({
				url: "user",
				method: "POST",
				body: {
					name: user.name,
					email: user.email,
				},
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			}),
			invalidatesTags: ["User"],
		}), 
	}),
});

export const {
	useCreateUserMutation,
} = userApi;
