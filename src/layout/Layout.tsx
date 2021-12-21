import { FC } from "react";

// Libs
import { Outlet } from "react-router-dom";

// Components
import { Header } from "../components/common/Header/Header";
import { Footer } from "../components/common/Footer/Footer";

export const Layout: FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
