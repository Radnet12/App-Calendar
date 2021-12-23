import { FC } from "react";

// Redux
import { useTypedSelector } from "../../../hooks/redux";

// Libs
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import { AppLayout } from "../../../layout/Layout";

// Routes
import { AppRoutes } from "../../../routes/AppRoutes";
import { AuthRoutes } from "../../../routes/AuthRoutes";
import { RouteNames } from "../../../routes/RouteNames";

export const Router: FC = () => {
    // **State
    const { isAuth } = useTypedSelector((state) => state.auth);

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


    return (
        <Routes>
            <Route element={<AppLayout />}>{renderRoutes()}</Route>
        </Routes>
    );
};
