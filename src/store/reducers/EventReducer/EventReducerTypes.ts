// Interface
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

export interface EventState {
    guests: IUser[];
    events: IEvent[];
    isGetGuestsLoading: boolean;
    guestsError: string | null;
}
