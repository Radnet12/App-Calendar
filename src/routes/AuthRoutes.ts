// Interface, Enums
import { IRoute } from "../models/IRoute";
import { RouteNames } from "./RouteNames";

// Components
import { Login } from "./../pages/Auth/Login";

export const AuthRoutes: IRoute[] = [
    {
        path: RouteNames.LOGIN,
        component: Login,
    },
];
