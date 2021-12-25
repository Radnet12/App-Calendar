import { createAsyncThunk } from "@reduxjs/toolkit";

// Interface
import { IEvent } from "../../../models/IEvent";

// API
import ApiService from "../../../services/ApiService";

export const getGuests = createAsyncThunk(
    "event/fetchGuests",
    async (_, { rejectWithValue }) => {
        try {
            const response = await ApiService.getUsers();

            if (response?.data) {
                return response.data;
            } else {
                throw new Error("Произошла ошибка при получении гостей!");
            }
        } catch (e: any) {
            return rejectWithValue(
                e.message || "Произошла ошибка при получении гостей!"
            );
        }
    }
);

export const createEvent = createAsyncThunk(
    "event/createEvent",
    (event: IEvent, { rejectWithValue }) => {
        try {
            const events = localStorage.getItem("events") || "[]";
            const json = JSON.parse(events) as IEvent[];

            json.push(event);
            localStorage.setItem("events", JSON.stringify(json));

            return json;
        } catch (e: any) {
            return rejectWithValue(
                e.message || "Произошла ошибка при создании события!"
            );
        }
    }
);

export const fetchEvents = createAsyncThunk(
    "event/fetchEvents",
    (username: string | undefined, { rejectWithValue }) => {
        try {
            const events = localStorage.getItem("events") || "[]";
            const json = JSON.parse(events) as IEvent[];

            const currentUserEvents = json.filter(
                (event) => event.author === username || event.guest === username
            );

            return currentUserEvents;
        } catch (e: any) {
            return rejectWithValue(
                e.message || "Произошла ошибка при получении событий!"
            );
        }
    }
);
