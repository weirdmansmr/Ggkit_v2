import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
};

export const sideBarSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		setSideBar: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer;
