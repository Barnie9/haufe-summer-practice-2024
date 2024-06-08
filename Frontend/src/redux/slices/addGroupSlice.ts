import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Group } from "../../types";

interface SliceProps {
	isOpen: boolean;
    group: Group;
}

const initialState: SliceProps = {
	isOpen: false,
    group: {
        name: "",
        userEmails: [],
    },
};

export const addGroupSlice = createSlice({
	name: "addGroupSlice",
	initialState,
	reducers: {
		setIsAddGroupOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
        setGroup: (state, action: PayloadAction<Group>) => {
            state.group = action.payload;
        },
        removeGroup: (state) => {
            state.group = initialState.group;
        },
	},
});

export const { setIsAddGroupOpen, setGroup, removeGroup } = addGroupSlice.actions;

export const selectIsAddGroupOpen = (state: RootState) => state.addGroupSlice.isOpen;
export const selectGroup = (state: RootState) => state.addGroupSlice.group;

export default addGroupSlice.reducer;
