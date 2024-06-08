import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Recommendation, User } from "../../types";

export const recommendationApi = createApi({
	reducerPath: "recommendationApi",

	baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7259/api/" }),

	tagTypes: ["Recommendation"],

	endpoints: (builder) => ({
		getRecommendations: builder.query<Recommendation[], User>({
            query: (user) => ({
                url: `Recommendation`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            }),
            providesTags: ["Recommendation"],
        }),
        addRecommendation: builder.mutation<Recommendation, { recommendation: Recommendation, user: User }>({
            query: ({ recommendation, user }) => ({
                url: `Recommendation`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
                body: recommendation,
            }),
            invalidatesTags: ["Recommendation"],
        }),
	}),
});

export const {
	useGetRecommendationsQuery,
    useAddRecommendationMutation,
} = recommendationApi;
