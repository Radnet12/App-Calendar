// Core
import { FC } from "react";

// Libs
import { Routes, Route, Navigate } from "react-router-dom";

// Conponents
import { Layout } from "./layout/Layout";

// Routes
import { AppRoutes } from "./routes/AppRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";
import { RouteNames } from "./routes/RouteNames";

export const App: FC = () => {
    const isAuth = true;

    const renderAuthRoutes = (): any => {
        return AuthRoutes.map((route) => (
            <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
            />
        ));
    };

    const renderAppRoutes = (): any => {
        return AppRoutes.map((route) => (
            <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
            />
        ));
    };

    // Rendering all Routes according to authorization, last route is for no match component
    const renderRoutes = (): any[] => {
        if (isAuth) {
            return [
                ...renderAppRoutes(),
                <Route
                    key="no-match"
                    path="*"
                    element={<Navigate to={RouteNames.EVENT} />}
                />,
            ];
        } else {
            return [
                ...renderAuthRoutes(),
                <Route
                    key="no-match"
                    path="*"
                    element={<Navigate to={RouteNames.LOGIN} />}
                />,
            ];
        }
    };

    console.log(renderRoutes());

    return (
        <Routes>
            <Route element={<Layout />}>{renderRoutes()}</Route>
        </Routes>
    );
};
