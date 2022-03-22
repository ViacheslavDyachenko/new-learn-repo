import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counterSlise = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {

            state.value += 1;
        },
        decrement: (state) => {

            state.value -= 1;
        }
    }
});

export const {increment, decrement} = counterSlise.actions;

export const selectValue = (state: any) => state.counter.value;

export default counterSlise.reducer;