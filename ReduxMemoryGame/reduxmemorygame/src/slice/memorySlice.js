import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    seq:" ",
    pos:0
};

export const memorySlice = createSlice({
    name:'memory',
    initialState,
    reducers:{
        setSeq: (state,action)=>{
            state.seq = action.payload;
        },
        nextPos: (state)=>{
            state.pos+=1;
        },
        resetPos: (state)=>{
            state.pos=0;
        }
    }
});

export const {setSeq,nextPos,resetPos} = memorySlice.actions;
export default memorySlice.reducer;