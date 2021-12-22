import { createSlice } from "@reduxjs/toolkit";

// Interface
import { AuthState } from "./AuthReducerTypes";

const initialState: AuthState = {
    isAuth: false,
};

const AuthReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {},
});

export default AuthReducer.reducer;
