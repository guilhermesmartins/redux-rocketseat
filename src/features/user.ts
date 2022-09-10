import { createSlice } from "@reduxjs/toolkit";

export interface ReduxData {
    user: {
        value: ReduxData
    };
}

export interface UserData {
    name: string;
    age: number;
    email: string;
}

const initialStateValue = {
    name: '', 
    age: 0, 
    email: ''
} as UserData;

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: initialStateValue,
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value =  initialStateValue;
        }
    }
}); 

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;