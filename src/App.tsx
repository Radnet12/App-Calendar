// Core
import { FC } from "react";

// Libs
import { Routes, Route } from "react-router-dom";

// Conponents
import { Layout } from "./layout/Layout";

export const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* <Route index element={}/> */}
                {/* <Route path="about" element={}/> */}
            </Route>
        </Routes>
    );
};
