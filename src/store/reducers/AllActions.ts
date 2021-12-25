// Actions
import { AuthReducerActions } from "./AuthReducer/AuthReducer";
import { EventReducerActions } from "./EventReducer/EventReducer";

export const AllActions = {
    ...AuthReducerActions,
    ...EventReducerActions,
};
