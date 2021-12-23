// Interface
import { IUser } from "../../../models/IUser";

export interface AuthState {
    isAuth: boolean;
    user: IUser | null;
    isLoginLoading: boolean;
    loginError: string | null;
}
