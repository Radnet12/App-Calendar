import { FC } from "react";

// Redux
import { useTypedSelector } from "../../../hooks/redux";
import { useDispatchedAction } from "../../../hooks/useDispatchedAction";

// Libs
import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";

// Routes
import { RouteNames } from "../../../routes/RouteNames";

const { Header } = Layout;

export const AppHeader: FC = () => {
    // **Props
    const navigate = useNavigate();

    // Dispatch
    const { logout } = useDispatchedAction();

    // **State
    const { isAuth, user } = useTypedSelector((state) => state.auth);

    return (
        <Header>
            <Row justify="end">
                {isAuth ? (
                    <>
                        <div style={{ color: "#fff", marginRight: 15 }}>
                            {user?.username}
                        </div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item key="1" onClick={() => logout()}>
                                Logout
                            </Menu.Item>
                        </Menu>
                    </>
                ) : (
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectable={false}
                        style={{ width: "100%", justifyContent: "flex-end" }}
                    >
                        <Menu.Item
                            key="1"
                            onClick={() => navigate(RouteNames.LOGIN)}
                        >
                            Login
                        </Menu.Item>
                    </Menu>
                )}
            </Row>
        </Header>
    );
};
