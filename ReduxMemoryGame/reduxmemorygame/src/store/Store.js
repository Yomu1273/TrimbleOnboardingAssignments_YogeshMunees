import {configureStore} from '@reduxjs/toolkit';
import memorySliceReducer from '../slice/memorySlice';

export const store = configureStore({
    reducer:{
        memory:memorySliceReducer,
    }
});