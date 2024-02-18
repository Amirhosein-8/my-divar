import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	Items: [],
};

const SliceItemc = createSlice({
	name: 'show-items',
	initialState,
	reducers: {
		AddItems: (state, actions) => {
			state.Items = actions.payload;
		},
	},
});

export default SliceItemc.reducer;
export const { AddItems } = SliceItemc.actions;
