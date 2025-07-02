import { $axios } from "@/helpers/$axios";
import type { IUser } from "./models/IUser";

export class SignupApi {
    public static async create(user: { email: string, senha: string }): Promise<IUser> {
        const data = await $axios.post("/cadastrar", user) satisfies IUser;

        return data;
    }
}