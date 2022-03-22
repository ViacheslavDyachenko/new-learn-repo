import { configureStore } from "@reduxjs/toolkit";
import counterReducer from 'store/counter/counter'

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

export default store;