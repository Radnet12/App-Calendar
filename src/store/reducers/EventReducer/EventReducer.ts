import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface
import { EventState } from "./EventReducerTypes";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

// Thunk
import { getGuests, createEvent, fetchEvents } from "./EventReducerThunk";

const initialState: EventState = {
    guests: [],
    events: [],
    isGetGuestsLoading: false,
    guestsError: null,
};

const EventReducer = createSlice({
    name: "event",
    initialState,
    reducers: {
        setGuests: (state, action: PayloadAction<IUser[]>) => {
            state.guests = action.payload;
        },
        setEvents: (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload;
        },
    },
    extraReducers: {
        [getGuests.pending.type]: (state) => {
            state.isGetGuestsLoading = true;
        },
        [getGuests.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isGetGuestsLoading = false;
            state.guestsError = null;
            state.guests = action.payload;
        },
        [getGuests.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isGetGuestsLoading = false;
            state.guestsError = action.payload;
        },
        [createEvent.fulfilled.type]: (
            state,
            action: PayloadAction<IEvent[]>
        ) => {
            state.events = action.payload;
        },
        [fetchEvents.fulfilled.type]: (
            state,
            action: PayloadAction<IEvent[]>
        ) => {
            state.events = action.payload;
        },
    },
});

export const EventReducerActions = {
    ...EventReducer.actions,
    getGuests,
    createEvent,
    fetchEvents,
};
export default EventReducer.reducer;
