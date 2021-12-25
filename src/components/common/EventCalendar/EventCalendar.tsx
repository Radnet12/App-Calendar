import { FC } from "react";

// Libs
import { Badge, Calendar } from "antd";

// Interface
import { IEvent } from "../../../models/IEvent";
import moment, { Moment } from "moment";

interface EventCalendarProps {
    events: IEvent[];
}

export const EventCalendar: FC<EventCalendarProps> = (props) => {
    const { events } = props;

    const dateCellRender = (value: Moment) => {
        const formatedDate = moment(value).format("YYYY.MM.DD");

        const currentDayEvents = events.filter(
            (event) => event.date === formatedDate
        );

        return (
            <ul className="events">
                {currentDayEvents.map((event, index) => (
                    <li key={index}>
                        <Badge status="success" text={event.description} />
                    </li>
                ))}
            </ul>
        );
    };

    return <Calendar dateCellRender={dateCellRender} />;
};
