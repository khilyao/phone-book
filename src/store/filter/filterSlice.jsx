import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter(state, { payload }) {
            console.log(payload);
            state.filter.filter = payload.text;
        },
    },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
