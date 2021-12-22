// Interfaces, Enums
import { IRoute } from "../models/IRoute";
import { RouteNames } from "./RouteNames";

// Components
import { Events } from "../pages/App/Events";

export const AppRoutes: IRoute[] = [
    {
        path: RouteNames.EVENT,
        component: Events,
    },
];
