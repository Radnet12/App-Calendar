import { createAsyncThunk } from "@reduxjs/toolkit";

// Interface
import { IUser } from "../../../models/IUser";

// API
import ApiService from "../../../services/ApiService";

export const login = createAsyncThunk(
    "user/fetchUsers",
    async ({ username, password }: IUser, { rejectWithValue }) => {
        try {
            const response = await ApiService.getUsers();

            if (response?.data) {
                const user = response.data.find(
                    (user) =>
                        user.username === username && user.password === password
                );

                if (user) {
                    localStorage.setItem("auth", "true");
                    localStorage.setItem("username", user.username);

                    return user;
                } else {
                    throw new Error("Некоректный логин или пароль!");
                }
            }
        } catch (e: any) {
            return rejectWithValue(e.message || "Произошла ошибка при логине!");
        }
    }
);
