import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Recommendation } from "../../types";

interface SliceProps {
	isOpen: boolean;
    recommendation: Recommendation;
}

const initialState: SliceProps = {
	isOpen: false,
    recommendation: {
        title: "",
        link: "",
        description: "",
        location: "",
        rating: 0,
    },
};

export const addRecommendationSlice = createSlice({
	name: "addRecommendationSlice",
	initialState,
	reducers: {
		setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
        setRecommendation: (state, action: PayloadAction<Recommendation>) => {
            state.recommendation = action.payload;

            if (state.recommendation.rating < 0) {
                state.recommendation.rating = 0;
            } else if (state.recommendation.rating > 10) {
                state.recommendation.rating = 10;
            }
        },
        removeRecommendation: (state) => {
            state.recommendation = initialState.recommendation;
        },
	},
});

export const { setIsOpen, setRecommendation, removeRecommendation } = addRecommendationSlice.actions;

export const selectIsOpen = (state: RootState) => state.addRecommendationSlice.isOpen;
export const selectRecommendation = (state: RootState) => state.addRecommendationSlice.recommendation;

export default addRecommendationSlice.reducer;
