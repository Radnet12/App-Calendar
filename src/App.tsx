// Core
import { FC, useEffect } from "react";

// Redux
import { useDispatchedAction } from "./hooks/useDispatchedAction";

// Components
import { Router } from "./components/common/Router/Router";

// Interface
import { IUser } from "./models/IUser";

export const App: FC = () => {
    // Dispatch
    const { setAuth, setUser } = useDispatchedAction();

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setAuth(true);
            setUser({
                username: localStorage.getItem("username"),
            } as IUser);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Router />;
};
