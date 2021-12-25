import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface
import { AuthState } from "./AuthReducerTypes";
import { IUser } from "../../../models/IUser";

// Thunk
import { login } from "./AuthReducerThunk";

const initialState: AuthState = {
    isAuth: false,
    user: null,
    isLoginLoading: false,
    loginError: null,
};

const AuthReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("auth");
            localStorage.removeItem("username");
            state.isAuth = false;
            state.user = null;
        },
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
    },
    extraReducers: {
        [login.pending.type]: (state) => {
            state.isLoginLoading = true;
        },
        [login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoginLoading = false;
            state.loginError = null;
            state.user = action.payload;
            state.isAuth = true;
        },
        [login.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoginLoading = false;
            state.loginError = action.payload;
        },
    },
});

export const AuthReducerActions = { ...AuthReducer.actions, login };
export default AuthReducer.reducer;
