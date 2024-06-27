import {configureStore} from "@reduxjs/toolkit";
import counterDancer from "../slices/CounterSlice";

export const store = configureStore({
    reducer:{
        counter: counterDancer,
    }
});