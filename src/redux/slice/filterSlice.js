import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        appliedFilters: [],
        brandName: '',
    },
    reducers: {
        clearFilters: (state) => {
            state.appliedFilters = [];
        },
        saveBrandFilter: (state, action) => {
            state.brandName = action.payload;
            if (!(state.appliedFilters.includes(action.payload))) {
                state.appliedFilters.push(action.payload);
            }
        },
    },
});

export const { saveBrandFilter, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;
