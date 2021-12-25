import { Moment } from "moment";

export interface IEvent {
    author: string;
    guest: string;
    date: string | Moment;
    description: string;
}
