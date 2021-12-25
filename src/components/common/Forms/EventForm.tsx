import { FC } from "react";

// Redux
import { useTypedSelector } from "../../../hooks/redux";

// Libs
import { Form, Input, Button, DatePicker, Row, Select } from "antd";
import moment from "moment";

// Utils
import { formRules } from "../../../utils/formRules";

// Interface
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

interface EventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void;
}

export const EventForm: FC<EventFormProps> = (props) => {
    // **Props
    const { guests, submit } = props;

    // **State
    const { user } = useTypedSelector((state) => state.auth);

    const submitHandler = (values: Omit<IEvent, "author">) => {
        if (user?.username) {
            submit({
                author: user.username,
                description: values.description,
                guest: values.guest,
                date: moment(values.date).format("YYYY.MM.DD"),
            });
        }
    };

    return (
        <Form name="event" layout="vertical" onFinish={submitHandler}>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[formRules.required("")]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[
                    formRules.required(""),
                    formRules.isDateAfter("Нельзя создать событие в прошлом"),
                ]}
                style={{ width: "100%" }}
            >
                <DatePicker
                    disabledDate={(current) => {
                        return (
                            moment().add(-1, "days") >= current
                        );
                    }}
                />
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"
                rules={[formRules.required("")]}
                style={{ width: "100%" }}
            >
                <Select>
                    {guests.map((guest) => (
                        <Select.Option
                            key={guest.username}
                            value={guest.username}
                        >
                            {guest.username}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Row justify="center">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};
