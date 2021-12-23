// Libs
import { Card, Row } from "antd";

// Components
import { LoginForm } from "../../components/common/Forms/LoginForm";

export const Login = () => {
    return (
        <Row
            align="middle"
            justify="center"
            style={{ height: "calc(100vh - 64px)" }}
        >
            <Card hoverable={true} style={{ maxWidth: 400, width: "100%" }}>
                <LoginForm />
            </Card>
        </Row>
    );
};
