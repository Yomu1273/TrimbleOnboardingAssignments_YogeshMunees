import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentLogger: false,
    userData:[
        {
            username:"xyz",
            password:"xyz"
        },
        {
            username:"abc",
            password:"abc"
        },
        {
            username:"pqr",
            password:"pqr"
        }
    ]
}

export const LoginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        isAuthenticated: (state,action) => {
            console.log({username: action.payload.username, password:action.payload.password});
            state.userData.push({username: action.payload.username, password:action.payload.password});
        },
        setCurrentLogger: (state) => {
            state.currentLogger = true;
        },
        resetCurrentLogger: (state) => {
            state.currentLogger = false;
        }
    }
});

export const {isAuthenticated,setCurrentLogger,resetCurrentLogger} = LoginSlice.actions;
export default LoginSlice.reducer; 