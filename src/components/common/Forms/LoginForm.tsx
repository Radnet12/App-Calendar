import { FC, useEffect } from "react";

// Redux
import { useTypedSelector } from "../../../hooks/redux";
import { useDispatchedAction } from "../../../hooks/useDispatchedAction";

// Libs
import { Button, Form, Input, message } from "antd";

// Utils
import { formRules } from "../../../utils/formRules";

// Interface
import { IUser } from "../../../models/IUser";

export const LoginForm: FC = () => {
    // Dispatch
    const { login } = useDispatchedAction();

    // **State
    const { isLoginLoading, loginError } = useTypedSelector(
        (state) => state.auth
    );

    const submitHandler = ({ username, password }: IUser) => {
        login({ username, password });
    };

    // Checking for errors
    useEffect(() => {
        if (loginError) {
            message.error({
                content: loginError,
                key: 1,
            });
        }
    }, [loginError]);

    return (
        <Form name="login" layout="vertical" onFinish={submitHandler}>
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[formRules.required("Введите имя")]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[formRules.required("Введите пароль")]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={isLoginLoading}
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};
