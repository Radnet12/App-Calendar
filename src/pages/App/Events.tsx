import { FC, useEffect, useState } from "react";

// Redux
import { useDispatchedAction } from "../../hooks/useDispatchedAction";
import { useTypedSelector } from "../../hooks/redux";

// Libs
import { Button, Row, Modal, Layout } from "antd";

// Components
import { EventCalendar } from "../../components/common/EventCalendar/EventCalendar";
import { EventForm } from "../../components/common/Forms/EventForm";

// Interface
import { IEvent } from "../../models/IEvent";

export const Events: FC = () => {
    // Dispatch
    const { getGuests, createEvent, fetchEvents } = useDispatchedAction();

    // **State
    const [modelVisible, setModalVisible] = useState(false);
    const { guests, events } = useTypedSelector((state) => state.event);
    const { user } = useTypedSelector((state) => state.auth);

    const addNewEvent = (event: IEvent) => {
        createEvent(event);
        setModalVisible(false);
    };

    useEffect(() => {
        getGuests();
        fetchEvents(user?.username);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout style={{paddingBottom: 50, backgroundColor: "white"}}>
            <EventCalendar events={events} />
            <Row justify="center" style={{ backgroundColor: "white" }}>
                <Button type="primary" onClick={() => setModalVisible(true)}>
                    Добавить событие
                </Button>
            </Row>
            <Modal
                title="Добавить событие"
                visible={modelVisible}
                centered={true}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm guests={guests} submit={addNewEvent} />
            </Modal>
        </Layout>
    );
};
