import {combineReducers, configureStore} from "@reduxjs/toolkit";
import bonuses from "./slice";


const rootReducer = combineReducers({
    toolkit: bonuses
});

export const store = configureStore({
    reducer: rootReducer,
})