import { createContext } from "react";
import type { AuthResponse, IUser } from "@/api/models/IUser";

interface AuthContextType {
  user: IUser | null;
  isAuthenticated: boolean;
  login: (authData: AuthResponse) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);