import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Group, User } from "../../types";

export const groupApi = createApi({
	reducerPath: "groupApi",

	baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7259/api/" }),

	tagTypes: ["Group"],

	endpoints: (builder) => ({
		createGroup: builder.mutation<Group, {group: Group, user: User}>({
			query: ({group, user}) => ({
				url: "Group",
				method: "POST",
				body: group,
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			}),
			invalidatesTags: ["Group"],
		}),
		getAllGroupNames: builder.query<string[], User>({
			query: (user) => ({
				url: "User/groups",
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			}),
			providesTags: ["Group"],
		}),
	}),
});

export const {
	useCreateGroupMutation,
	useGetAllGroupNamesQuery,
} = groupApi;
