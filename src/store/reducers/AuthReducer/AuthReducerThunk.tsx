import { createAsyncThunk } from "@reduxjs/toolkit";

// Libs
import axios from "axios";

// Interface
import { IUser } from "../../../models/IUser";

export const login = createAsyncThunk(
    "user/fetchUsers",
    async ({ username, password }: IUser, { rejectWithValue }) => {
        try {
            const response = await axios.get<IUser[]>("users.json");

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
