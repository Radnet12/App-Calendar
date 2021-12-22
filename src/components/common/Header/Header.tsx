import { FC } from "react";

// Redux
import { useTypedSelector } from "../../../hooks/redux";

// Libs
import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";

// Routes
import { RouteNames } from "../../../routes/RouteNames";

const { Header } = Layout;

export const AppHeader: FC = () => {
    // **Props
    const navigate = useNavigate();

    // **State
    const { isAuth } = useTypedSelector((state) => state.auth);

    return (
        <Header>
            <Row justify="end">
                {isAuth ? (
                    <>
                        <div style={{ color: "#fff", marginRight: 15 }}>
                            Radnet12
                        </div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item key="1">Logout</Menu.Item>
                        </Menu>
                    </>
                ) : (
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item key="1" onClick={() => navigate(RouteNames.LOGIN)}>Login</Menu.Item>
                    </Menu>
                )}
            </Row>
        </Header>
    );
};
