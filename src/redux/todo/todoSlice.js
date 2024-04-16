import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
	name: "todo",
	initialState: {
		// initialize an empty array
		value: [],
	},

	// todo structure: {text: "todo text", done: false}

	reducers: {
		// adds a todo object to the array
		addElems: (state, elem) => {
			state.value.push({
				text: elem.payload,
				done: false,
			});
		},
		// slices out the tod based on the index of the clicked todo
		// by taking the array before and after the item to be deleted and and conactinning them together
		removeElems: (state, index) => {
			state.value = state.value
				.slice(0, index.payload)
				.concat(state.value.slice(index.payload + 1));
		},


		// toggle the done field of the todo object
		toggleElem: (state, index) => {
			state.value[index.payload].done = !state.value[index.payload].done;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addElems, removeElems, toggleElem } = todoSlice.actions;
export default todoSlice.reducer;
