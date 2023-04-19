import { createSlice } from "@reduxjs/toolkit";

const tempDataSlice = createSlice({
    name: 'tempData',
    initialState: {
        currentSection: '',
    },
    reducers: {
        saveCurrentSection: (state, action) => {
            state.currentSection = action.payload;
        },
    },
});

export const { saveCurrentSection } = tempDataSlice.actions;

export default tempDataSlice.reducer;
