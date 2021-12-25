// Libs
import axios, { AxiosResponse } from "axios";

// Interface
import { IUser } from "../models/IUser";

export default class ApiService {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>("./users.json");
    }
}
