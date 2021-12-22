import { FC } from "react";

// Libs
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

// Components
import { AppHeader } from "../components/common/Header/Header";

const { Content } = Layout;

export const AppLayout: FC = () => {
    return (
        <Layout>
            <AppHeader />
            <Content>
                <Outlet />
            </Content>
        </Layout>
    );
};
