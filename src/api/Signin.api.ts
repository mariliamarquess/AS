import { $axios } from "@/helpers/$axios";
import type { AuthResponse } from "./models/IUser";

export class SignInApi {
    public static async create(body: { email: string; password: string }): Promise<AuthResponse> {
        const response = await $axios.post<AuthResponse>("/entrar", body);
        
        return response.data;
    }
}